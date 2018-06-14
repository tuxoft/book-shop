import * as express from 'express';
import { keycloak } from '../../secure/index';
import { getUserUUID } from '../../utils/authentication.util';
import { transformAndValidate } from 'class-transformer-validator';
import { Order } from '../../orm/entity/order';
import { getUserOrCreateIfNotExists } from './user.router';
import { ArrayNotSupportedClientError } from '../../errors/client.errors';
import { BusinessLogicError } from '../../errors/businesslogic.errors';
import { UnauthorizedAccessSecurityError } from '../../errors/security.errors';
import { CartItem } from '../../orm/entity/cartItem';
import { getRepository } from 'typeorm';
import { OrderItem } from '../../orm/entity/orderItem';

const router = express.Router();

export default router;

router.get('/', keycloak.protect(), async (req, res, next) => {
  try {
    const userUUID = getUserUUID(req);

    const orders = await getRepository(Order).find({ where: { user: { id: userUUID } } });

    res.send(orders);

  } catch (err) {
    next(err);
  }
});

router.get('/:id', keycloak.protect(), async (req, res, next) => {
  try {
    const orderId: string = req.params.id;
    const userUUID = getUserUUID(req);

    const order = await getRepository(Order).findOneOrFail(orderId);

    if (order.userId !== userUUID) {
      next(new UnauthorizedAccessSecurityError());
      return;
    }

    res.send(order);

  } catch (err) {
    next(err);
  }
});

router.post('/', keycloak.protect(), async (req, res, next) => {
  try {
    if (Array.isArray(req.body)) {
      next(new ArrayNotSupportedClientError());
      return;
    }

    const order: Order = await transformAndValidate(Order, <Object>req.body, {
      validator: {
        validationError: { target: false },
      },
    });

    const userUUID = getUserUUID(req);
    order.user = await getUserOrCreateIfNotExists(userUUID);

    if (!order.user.cart.items.length) {
      next(new BusinessLogicError('Невозможно оформить заказ т.к. корзина пуста'));
      return;
    }

    order.total = 0;
    await getRepository(Order).save(order);
    for (let i = 0; i < order.user.cart.items.length; i += 1) {
      const cartItem = order.user.cart.items[i];
      const orderItem = getRepository(OrderItem).create();
      orderItem.order = order;
      orderItem.book = cartItem.book;
      orderItem.count = cartItem.count;
      orderItem.sum = cartItem.count * cartItem.book.price;
      order.total += orderItem.sum;
      await getRepository(OrderItem).save(orderItem);
      await getRepository(CartItem).delete(cartItem);
    }
    await getRepository(Order).save(order);

    res.send(await getRepository(Order).findOneOrFail(order.id));

  } catch (err) {
    next(err);
  }
});
