import * as express from 'express';
import { getConnection } from 'typeorm';
import { Cart } from '../../orm/entity/cart';
import { CartItem } from '../../orm/entity/cartItem';

const router = express.Router();

export default router;

const getCartRepository = () => getConnection().getRepository(Cart);
const getCartItemRepository = () => getConnection().getRepository(CartItem);

const cookieCartName = 'cart';
const cookieMaxAge = 2147483647000;

router.get('/', async (req, res, next) => {
  try {
    const cartRepository = getCartRepository();

    let cart = await cartRepository.findOne({ id: req.cookies[cookieCartName] });

    if (!cart) {
      cart = cartRepository.create();
      cart = await cartRepository.save(cart);
      cart = await cartRepository.findOneOrFail(cart);
      res.cookie(cookieCartName, cart.id, { maxAge: cookieMaxAge });
    }

    res.send(cart);

  } catch (err) {
    next(err);
  }
});

router.post('/items', async (req, res, next) => {
  try {
    const savedItems = await getCartItemRepository().save(req.body);

    res.send(savedItems);

  } catch (err) {
    next(err);
  }
});

router.delete('/items', (req, res, next) => {
  try {
    const removedItems = getCartItemRepository().remove(req.body);

    res.send(removedItems);

  } catch (err) {
    next(err);
  }
});
