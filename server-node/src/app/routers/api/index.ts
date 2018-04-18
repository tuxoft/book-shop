import * as express from 'express';
import booksRouter from './books.router';

const router = express.Router();

export default router;

[
  { path: '/books', router: booksRouter },

].forEach(e => router.use(e.path, e.router));
