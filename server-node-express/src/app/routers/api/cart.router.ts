import * as express from 'express';
import { sendData } from '../../utils/response.util';
import { getConnection } from 'typeorm';
import { CartEntity } from '../../orm/entity/cart';
import { BookEntity } from '../../orm/entity/book';

const router = express.Router();

export default router;

const getCartRepository = () => getConnection().getRepository(CartEntity);
const getBookRepository = () => getConnection().getRepository(BookEntity);

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

router.post('/', async (req, res) => {
  console.log(req.body);

  const a = await getCartRepository().preload(req.body);
  console.log(a);

  const b = await getCartRepository().save(a);
  console.log(b);

  const c = await getCartRepository().findOne(b.id);
  console.log(c);

  res.send(c);
});
