import * as express from 'express';
import booksRouter from './books.router';
import authorsRouter from './authors.router';
import cartRouter from './cart.router';
import categoriesRouter from './categories.router';

const router = express.Router();

export default router;

// В этот массив добавляем новые API-ресурсы
[
  { path: '/books', router: booksRouter },
  { path: '/authors', router: authorsRouter },
  { path: '/cart', router: cartRouter },
  { path: '/categories', router: categoriesRouter },

].forEach(e => router.use(e.path, e.router));

// Для всех API-ресурсов устанавливаем
// Content-Type: application/json
router.use((req, res, next) => {
  res.type('json');
  next();
});
