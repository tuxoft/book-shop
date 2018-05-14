import * as express from 'express';
import { getConnection } from 'typeorm';
import { BookEntity } from '../../orm/entity/book';

const router = express.Router();

export default router;

const getBookRepository = () => getConnection().getRepository(BookEntity);

const shortOption = { select: ['id', 'title', 'price', 'authors', 'coverUrl'] };

const setupCoverUrl = (prefix: string, book: BookEntity) => {
  return book.coverUrl = prefix + book.coverUrl;
};

export const setupCoverUrlHQ = (book: BookEntity) => {
  return setupCoverUrl('public/images/covers/', book);
};

export const setupCoverUrlLQ = (book: BookEntity) => {
  return setupCoverUrl('public/images/covers/preview/', book);
};

router.get('/', async (req, res, next) => {
  try {
    const data = await getBookRepository().find(shortOption);

    data.forEach(setupCoverUrlLQ);

    res.send(data);
  } catch (err) {
    next(err);
  }
});

router.get('/bestsellers', async (req, res, next) => {
  try {
    const data = await getBookRepository()
      .findByIds([11, 12, 21, 13, 14, 10, 9, 8, 7, 6], shortOption);

    data.forEach(setupCoverUrlLQ);

    res.send(data);
  } catch (err) {
    next(err);
  }
});

router.get('/latests', async (req, res, next) => {
  try {
    const data = await getBookRepository()
      .findByIds([9, 3, 7, 17, 24, 1, 2, 4, 5, 22], shortOption);

    data.forEach(setupCoverUrlLQ);

    res.send(data);
  } catch (err) {
    next(err);
  }
});

router.get('/:ids', async (req, res, next) => {
  try {
    const ids: string[] = req.params.ids.split(',');
    const data = await getBookRepository().findByIds(ids);

    data.forEach(setupCoverUrlHQ);

    res.send(data);

  } catch (err) {
    next(err);
  }
});
