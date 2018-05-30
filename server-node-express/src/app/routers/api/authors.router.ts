import * as express from 'express';
import { getConnection } from 'typeorm';
import { Author } from '../../orm/entity/author';
import { transformAndValidate } from 'class-transformer-validator';
import { plainToClass } from 'class-transformer';

const router = express.Router();

export default router;

const getAuthorRepository = () => getConnection().getRepository(Author);

router.get('/', async (req, res, next) => {
  try {
    const authors = await getAuthorRepository().find();

    res.send(authors);

  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const authors = await transformAndValidate(Author, req.body, {
      validator: {
        validationError: { target: false },
      },
    });

    const savedAuthors = await getAuthorRepository().save(authors);

    res.send(savedAuthors);

  } catch (err) {
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const id: string = req.params.id;

    const author = await getAuthorRepository().findOneOrFail(id, {
      relations: ['books'],
    });

    res.send(author);

  } catch (err) {
    next(err);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const author = plainToClass(Author, { id: req.params.id });
    const removed = await getAuthorRepository().remove(author);

    res.send(removed);

  } catch (err) {
    next(err);
  }
});
