import * as express from 'express';
import { Author } from '../../orm/entity/author';
import { transformAndValidate } from 'class-transformer-validator';
import { plainToClass } from 'class-transformer';
import { getRepository } from 'typeorm';

const router = express.Router();

export default router;

router.get('/', async (req, res, next) => {
  try {
    const authors = await getRepository(Author).find();

    res.send(authors);

  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const author: Author = await transformAndValidate(Author, <Object>req.body, {
      validator: {
        validationError: { target: false },
      },
    });

    await getRepository(Author).save(author);

    res.send(author);

  } catch (err) {
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const id: string = req.params.id;

    const author = await getRepository(Author).findOneOrFail(id, {
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
    await getRepository(Author).remove(author);

    res.send(author);

  } catch (err) {
    next(err);
  }
});
