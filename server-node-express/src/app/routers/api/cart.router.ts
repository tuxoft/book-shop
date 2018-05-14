import * as express from 'express';
import { sendData } from '../../utils/response.util';
import { getConnection } from 'typeorm';
import { CartEntity } from '../../orm/entity/cart';
import { CartItemEntity } from '../../orm/entity/cartItem';
import { setupCoverUrlLQ } from './books.router';

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

    cart.items.forEach(item => setupCoverUrlLQ(item.book));

    res.send(cart);

  } catch (err) {
    next(err);
  }
});

router.post('/item', async (req, res, next) => {
  try {
    const cartItemRepository = getCartItemRepository();

    let entity = await cartItemRepository.save(req.body);
    entity = await cartItemRepository.findOne(entity.id);

    setupCoverUrlLQ(entity.book);

    res.send(entity);

  } catch (err) {
    next(err);
  }
});

router.delete('/item', (req, res, next) => {
  sendData(req, res, next, getCartItemRepository().remove(req.body));
});
