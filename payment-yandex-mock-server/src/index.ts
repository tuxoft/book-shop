import * as http from 'http';
import * as express from 'express';
import * as uuid from 'uuid/v4';

const app = express();

const server = http.createServer(app)
  .listen(3000, () => {
    console.log('server started at port 3000');
  });

const router = express.Router();

router.use((req, res, next) => {
  res.type('json');
  next();
});

app.get('/api/v3/payments', async (req, res, next) => {
  try {
    res.send({
      id: '215d8da0-000f-50be-b000-0003308c89be',
      status: 'waiting_for_capture',
      paid: true,
      amount: {
        value: '4.00',
        currency: 'RUB',
      },
      created_at: '2017-09-27T10:13:52.588Z',
      metadata: {},
      payment_method: {
        type: 'bank_card',
        id: '012b57fe-1904-493a-a2de-48cd42c4f356',
        saved: false,
        card: {
          first6: '427919',
          last4: '4448',
          expiry_month: '04',
          expiry_year: '2020',
          card_type: 'MasterCard',
        },
        title: 'Bank card *4448',
      },
    });

  } catch (err) {
    next(err);
  }
});

app.post('/api/v3/payments', async (req, res, next) => {
  try {
    debugger;
    res.send({
      id: uuid(),
      status: 'pending',
      paid: false,
      amount: req.body.amount,
      confirmation: {
        type: 'redirect',
        confirmation_url: `https://money.yandex.ru/api-pages/v2/payment-confirm/epl?orderId=21740069-000f-50be-b000-0486ffbf45b0`,
      },
      created_at: '2017-10-14T10:53:29.072Z',
      metadata: {},
    });
  } catch (err) {
    next(err);
  }
});
