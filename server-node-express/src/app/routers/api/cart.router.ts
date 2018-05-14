import * as express from 'express';
import { getConnection } from 'typeorm';
import { CartEntity } from '../../orm/entity/cart';
import { CartItemEntity } from '../../orm/entity/cartItem';

const router = express.Router();

export default router;

const getCartRepository = () => getConnection().getRepository(CartEntity);
const getCartItemRepository = () => getConnection().getRepository(CartItemEntity);

const cookieCartName = 'cart';
const cookieMaxAge = 2147483647000;

router.get('/', async (req, res, next) => {
  try {
    const cartRepository = getCartRepository();

    let cart = await cartRepository.findOne({ id: req.cookies[cookieCartName] });

    if (!cart) {
      cart = cartRepository.create();
      cart = await cartRepository.save(cart);
      cart = await cartRepository.findOne(cart);
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
    const deletedItems = getCartItemRepository().remove(req.body);

    res.send(deletedItems);

  } catch (err) {
    next(err);
  }
});
