import * as express from 'express';
import { Book } from '../../orm/entity/book';
import { EntityNotFoundError } from 'typeorm/error/EntityNotFoundError';
import { transformAndValidate } from 'class-transformer-validator';
import { getBookRepository } from '../../orm/repository/index';
import { plainToClass } from 'class-transformer';

const router = express.Router();

export default router;

const setupCoverUrlToHighResolution = (book: Book) => {
  book.coverUrl = book.cover ? `files/covers/high-resolution/${book.cover}` : undefined;
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
    const book: Book = await transformAndValidate(Book, <Object>req.body, {
      validator: {
        validationError: { target: false },
      },
    });

    await getBookRepository().save(book);

    res.send(book);

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
        'b.id', 'b.title', 'b.price', 'b.cover', 'b.articul', 'b.inStock',
        'b.publicationYear', 'b.pageCount', 'b.isbn', 'b.udc', 'b.bbk',
        'b.circulation', 'b.dimensions', 'b.weight', 'b.coverType', 'b.ageLimit', 'b.description',
      ])
      .leftJoinAndSelect('b.authors', 'author')
      .leftJoinAndSelect('b.categories', 'category')
      .leftJoinAndSelect('b.publisher', 'publisher')
      .leftJoinAndSelect('b.bookSeries', 'bookSeries')
      .where('b.id = :id', { id })
      .getOne();

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

router.delete('/:id', async (req, res, next) => {
  try {
    const book = plainToClass(Book, { id: req.params.id });
    await getBookRepository().remove(book);

    res.send(book);

  } catch (err) {
    next(err);
  }
});
