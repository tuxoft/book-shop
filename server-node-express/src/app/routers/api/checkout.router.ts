import * as express from 'express';
import * as yandexCheckout from 'yandex-checkout';

const userId = 1;
const secretKey = 2;

const yandex = yandexCheckout(userId, secretKey);

const router = express.Router();

export default router;

router.get('/', async (req, res, next) => {
  try {
    const idempotenceKey = '02347fc4-a1f0-49db-807e-f0d67c2ed5a5';
    yandex
    .createPayment(
      {
        amount: {
          value: '2.00',
          currency: 'RUB',
        },
        payment_method_data: {
          type: 'bank_card',
        },
        confirmation: {
          type: 'redirect',
          return_url: 'https://www.merchant-website.com/return_url',
        },
      },
      idempotenceKey)
    .then((result) => {
      console.log({ payment: result });
    })
    .catch((err) => {
      console.error(err);
    });

    res.send('Checkout OK');

  } catch (err) {
    next(err);
  }
});
