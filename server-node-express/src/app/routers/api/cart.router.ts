import * as express from 'express';
import { sendData } from '../../utils/response.util';
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
      await cartRepository.save(cart);
      res.cookie(cookieCartName, cart.id, { maxAge: cookieMaxAge });
    }

    res.send(cart);

  } catch (err) {
    next(err);
  }
});

router.post('/item', async (req, res, next) => {
  try {
    const cartItemRepository = getCartItemRepository();

    const item = await cartItemRepository.save(req.body);
    sendData(req, res, next, cartItemRepository.findOne(item.id));

  } catch (err) {
    next(err);
  }
});

router.delete('/item', (req, res, next) => {
  sendData(req, res, next, getCartItemRepository().remove(req.body));
});
