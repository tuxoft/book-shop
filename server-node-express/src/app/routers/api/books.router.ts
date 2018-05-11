import * as express from 'express';
import { sendData } from '../../utils/response.util';
import { getConnection } from 'typeorm';
import { BookEntity } from '../../orm/entity/book';

const router = express.Router();

export default router;

const getBookRepository = () => getConnection().getRepository(BookEntity);

router.get('/', async (req, res, next) => {
  try {
    const data = await getBookRepository().find({
      select: ['id', 'title', 'price', 'authors', 'coverUrl'],
    });

    data.forEach(e => e.coverUrl = 'public/images/covers/preview' + e.coverUrl.substring(20));

    res.send(data);
  } catch (err) {
    next(err);
  }
});

router.get('/bestsellers', (req, res, next) => {
  sendData(req, res, next, getBookRepository().findByIds([11, 12, 21, 13, 14]));
});

router.get('/latests', (req, res, next) => {
  sendData(req, res, next, getBookRepository().findByIds([9, 3, 7, 17, 24]));
});

router.get('/:ids', (req, res, next) => {
  const ids: string[] = req.params.ids.split(',');
  sendData(req, res, next, getBookRepository().findByIds(ids));
});
