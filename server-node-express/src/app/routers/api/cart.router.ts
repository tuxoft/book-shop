import * as express from 'express';
import { getConnection } from 'typeorm';
import { CartEntity } from '../../orm/entity/cart';

const router = express.Router();

export default router;

const getCartRepository = () => getConnection().getRepository(CartEntity);

const cookieCartName = 'cart';
const cookieMaxAge = 2147483647000;

router.get('/', async (req, res) => {
  const cartRepository = getCartRepository();

  let cart = await cartRepository.findOne(req.cookies[cookieCartName]);

  if (!cart) {
    cart = cartRepository.create();
    await cartRepository.save(cart);
    res.cookie(cookieCartName, cart.id, {maxAge: cookieMaxAge});
  }

  res.send(cart);
});
