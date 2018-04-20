import * as express from 'express';
import booksRouter from './books.router';

const router = express.Router();

export default router;

// В этот массив добавляем новые API-ресурсы
[
  { path: '/books', router: booksRouter },

].forEach(e => router.use(e.path, e.router));

// Для всех API-ресурсов устанавливаем
// Content-Type: application/json
router.use((req, res, next) => {
  res.type('json');
  next();
});
