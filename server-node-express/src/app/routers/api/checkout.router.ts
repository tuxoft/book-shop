import * as express from 'express';
import * as yandexCheckout from 'yandex-checkout';
import { getRepository } from 'typeorm';
import { Payment } from '../../orm/entity/payment';
import * as moment from 'moment';
import { Order } from '../../orm/entity/order';
import * as uuid from 'uuid/v4';

const shopId = '1';
const secretKey = '2';

const yandex = yandexCheckout({
  shopId,
  secretKey,
  timeout: 20000,
  base_host: 'http://localhost:3000',
});

const router = express.Router();

export default router;

router.post('/', async (req, res, next) => {
  try {
    debugger;
    const idempotenceKey = uuid();
    const order: Order = await getRepository(Order).findOneOrFail(req.body.id);
    const result: any = await yandex.createPayment(
      {
        amount: {
          value: order.total,
          currency: 'RUB',
        },
        payment_method_data: {
          type: 'bank_card',
        },
        confirmation: {
          type: 'redirect',
          return_url: 'http://localhost:4200/order/payment-success',
        },
        test: true,
      },
      idempotenceKey);

    if (result && result.id) {
      const payment: Payment = {
        id: result.id,
        createdDate: moment(result.created_at, 'YYYY-MM-DDTHH:mm:ssZ').toDate(),
        status: result.status,
        paid: result.paid,
        order: req.body.id,
        total: result.amount ? result.amount.value : 0,
      };
      await getRepository(Payment).save(payment);
    }

    res.send('Checkout OK');

  } catch (err) {
    console.error(err);
    res.send('Checkout error:' + err);
    next(err);
  }
});
