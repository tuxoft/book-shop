import * as express from 'express';
import { getConnection } from 'typeorm';
import { Book } from '../../orm/entity/book';

const router = express.Router();

export default router;

const getBookRepository = () => getConnection().getRepository(Book);

const setupCoverUrlToHighResolution = (book: Book) => {
  if (book && book.coverUrl) {
    book.coverUrl = book.coverUrl.replace('low-resolution', 'high-resolution');
  }
};

router.get('/', async (req, res, next) => {
  try {
    const books = await getBookRepository().find();

    res.send(books);

  } catch (err) {
    next(err);
  }
});

router.get('/bestsellers', async (req, res, next) => {
  try {
    const books = await getBookRepository().findByIds([11, 12, 21, 13, 14, 10, 9, 8, 7, 6]);

    res.send(books);

  } catch (err) {
    next(err);
  }
});

router.get('/latests', async (req, res, next) => {
  try {
    const books = await getBookRepository().findByIds([9, 3, 7, 17, 24, 1, 2, 4, 5, 22]);

    res.send(books);

  } catch (err) {
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const id: string = req.params.id;

    const book = await getBookRepository().findOneOrFail(id, {
      select: [
        'id', 'title', 'price', 'authors', 'coverUrl', 'articul', 'inStock', 'bookSeries',
        'publisher', 'publicationYear', 'pageCount', 'isbn', 'udc', 'bbk', 'circulation',
        'dimensions', 'weight', 'coverType', 'ageLimit', 'description',
      ],
      relations: ['categories'],
    });

    setupCoverUrlToHighResolution(book);

    res.send(book);

  } catch (err) {
    next(err);
  }
});
