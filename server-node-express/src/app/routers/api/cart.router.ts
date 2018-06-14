import * as express from 'express';
import { validator } from '../../utils/validation.util';
import { EntityNotFoundError } from 'typeorm/error/EntityNotFoundError';
import { getUserUUIDOrNull } from '../../utils/authentication.util';
import { UnauthorizedAccessSecurityError } from '../../errors/security.errors';
import { getRepository } from 'typeorm';
import { Cart } from '../../orm/entity/cart';
import { CartItem } from '../../orm/entity/cartItem';
import { User } from '../../orm/entity/user';

const router = express.Router();

export default router;

const cookieCartUUID = 'cartUUID';
const cookieMaxAge = 2147483647000;

export async function getCartOrCreateIfNotExists(uuid?: string) {
  const cartRepository = getRepository(Cart);
  try {
    return await cartRepository.findOneOrFail({ id: uuid });
  } catch (err) {
    if (validator.isInstance(err, EntityNotFoundError)) {
      const newCart = cartRepository.create();
      if (validator.isNotEmpty(uuid)) {
        if (!validator.isUUID(uuid)) {
          throw new RangeError('Parameter uuid must be UUID');
        }
        newCart.id = uuid;
      }
      await cartRepository.save(newCart);
      return await cartRepository.findOneOrFail({ id: newCart.id });
    }
    throw err;
  }
}

export async function getUserCart(userCartUUID: string, tempCartUUID?: string) {
  if (tempCartUUID) {
    const tempCart = await getRepository(Cart).findOne({ id: tempCartUUID });
    if (tempCart) {
      const userCart = await getCartOrCreateIfNotExists(userCartUUID);

      const cartItemRepository = getRepository(CartItem);
      for (let i = 0; i < tempCart.items.length; i += 1) {
        const tempCartItem = tempCart.items[i];
        tempCartItem.cart = userCart;
        try {
          await cartItemRepository.save(tempCartItem);
        } catch (err) {
          console.log(err);
        }
      }

      try {
        await getRepository(Cart).delete(tempCart);
      } catch (err) {
        console.log(err);
      }
    }
  }
  return await getCartOrCreateIfNotExists(userCartUUID);
}

async function getTempCart(tempCartUUID?: string) {
  const tempCart = await getCartOrCreateIfNotExists(tempCartUUID);

  // Если временная карточка на самом деле оказалась карточкой пользователя - сгенерировать ошибку,
  // т.к. это попытка несанкционированного доступа
  const user = await getRepository(User).findOne({ id: tempCart.id });
  if (user) {
    throw new UnauthorizedAccessSecurityError();
  }

  return tempCart;
}

router.get('/', async (req, res, next) => {
  const userCartUUID = getUserUUIDOrNull(req);
  const tempCartUUID = req.cookies[cookieCartUUID];

  try {
    let cart = null;

    if (userCartUUID) {
      cart = await getUserCart(userCartUUID, tempCartUUID);
      if (tempCartUUID) {
        res.clearCookie(cookieCartUUID);
      }
    } else {
      cart = await getTempCart(tempCartUUID);
      if (tempCartUUID !== cart.id) {
        res.cookie(cookieCartUUID, cart.id, { maxAge: cookieMaxAge });
      }
    }

    res.send(cart);

  } catch (err) {
    next(err);
  }
});

router.post('/items', async (req, res, next) => {
  try {
    const savedItems = await getRepository(CartItem).save(req.body);

    res.send(savedItems);

  } catch (err) {
    next(err);
  }
});

router.delete('/items', async (req, res, next) => {
  try {
    const removedItems = await getRepository(CartItem).remove(req.body);

    res.send(removedItems);

  } catch (err) {
    next(err);
  }
});
