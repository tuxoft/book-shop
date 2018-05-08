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

router.get('/', async (req, res) => {
  const cartRepository = getCartRepository();

  let cart = await cartRepository.findOne(req.cookies[cookieCartName]);

  if (!cart) {
    cart = cartRepository.create();
    await cartRepository.save(cart);
    res.cookie(cookieCartName, cart.id, { maxAge: cookieMaxAge });
  }

  res.send(cart);
});

router.post('/item', async (req, res) => {
  const item = await getCartItemRepository().save(req.body);

  sendData(req, res, getCartItemRepository().findOne(item.id));
});

router.delete('/item', async (req, res) => {
  sendData(req, res, getCartItemRepository().remove(req.body));
});
