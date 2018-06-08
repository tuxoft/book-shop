import * as express from 'express';
import booksRouter from './books.router';
import authorsRouter from './authors.router';
import cartRouter from './cart.router';
import categoriesRouter from './categories.router';
import publishersRouter from './publishers.router';
import bookSeriesRouter from './bookSeries.router';
import selectionsRouter from './selections.router';
import searchRouter from './search.router';
import userRouter from './user.router';
import ordersRouter from './orders.router';
import uploadRouter from './upload.router';
import { protect } from '../../secure/index';

const router = express.Router();

export default router;

// В этот массив добавляем новые API-ресурсы
[
  { path: '/books', router: booksRouter, protect: true },
  { path: '/authors', router: authorsRouter, protect: true },
  { path: '/cart', router: cartRouter, protect: false },
  { path: '/categories', router: categoriesRouter, protect: true },
  { path: '/publishers', router: publishersRouter, protect: true },
  { path: '/bookSeries', router: bookSeriesRouter, protect: true },
  { path: '/selections', router: selectionsRouter, protect: true },
  { path: '/search', router: searchRouter, protect: true },
  { path: '/user', router: userRouter, protect: false },
  { path: '/user/orders', router: ordersRouter, protect: false },
  { path: '/upload', router: uploadRouter, protect: true },

].forEach((e) => {
  if (e.protect) {
    router.post(e.path + '*', protect.contentManager);
    router.delete(e.path + '*', protect.contentManager);
  }

  router.use(e.path, e.router);
});

// Для всех API-ресурсов устанавливаем
// Content-Type: application/json
router.use((req, res, next) => {
  res.type('json');
  next();
});
