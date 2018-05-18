import * as express from 'express';
import { getConnection } from 'typeorm';
import { Book } from '../../orm/entity/book';
import { EntityNotFoundError } from 'typeorm/error/EntityNotFoundError';

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

router.post('/', async (req, res, next) => {
  try {
    const savedBooks = await getBookRepository().save(req.body);

    res.send(savedBooks);

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

    const book = await getBookRepository().createQueryBuilder('b')
      .select([
        'b.id', 'b.title', 'b.price', 'b.coverUrl', 'b.articul', 'b.inStock', 'b.bookSeries',
        'b.publisher', 'b.publicationYear', 'b.pageCount', 'b.isbn', 'b.udc', 'b.bbk',
        'b.circulation', 'b.dimensions', 'b.weight', 'b.coverType', 'b.ageLimit', 'b.description',
      ])
      .leftJoinAndSelect("b.authors", "author")
      .leftJoinAndSelect("b.categories", "category")
      .where('b.id = :id', { id }).getOne();

    if (!book) {
      next(new EntityNotFoundError(Book, id));
      return;
    }

    setupCoverUrlToHighResolution(book);

    res.send(book);

  } catch (err) {
    next(err);
  }
});
