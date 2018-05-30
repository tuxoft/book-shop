import * as express from 'express';
import { getCartItemRepository, getCartRepository } from '../../orm/repository/index';

const router = express.Router();

export default router;

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

router.delete('/items', async (req, res, next) => {
  try {
    const removedItems = await getCartItemRepository().remove(req.body);

    res.send(removedItems);

  } catch (err) {
    next(err);
  }
});
