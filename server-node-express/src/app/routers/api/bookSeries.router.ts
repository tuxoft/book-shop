import * as express from 'express';
import { BookSeries } from '../../orm/entity/bookSeries';
import { transformAndValidate } from 'class-transformer-validator';
import { plainToClass } from 'class-transformer';
import { getRepository } from 'typeorm';

const router = express.Router();

export default router;

router.get('/', async (req, res, next) => {
  try {
    const bookSeries = await getRepository(BookSeries).find();

    res.send(bookSeries);

  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const bookSeries: BookSeries = await transformAndValidate(BookSeries, <Object>req.body, {
      validator: {
        validationError: { target: false },
      },
    });

    await getRepository(BookSeries).save(bookSeries);

    res.send(bookSeries);

  } catch (err) {
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const id: string = req.params.id;

    const bookSeries = await getRepository(BookSeries).findOneOrFail(id, {
      relations: ['books', 'publisher'],
    });

    res.send(bookSeries);

  } catch (err) {
    next(err);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const bookSeries = plainToClass(BookSeries, { id: req.params.id });
    await getRepository(BookSeries).remove(bookSeries);

    res.send(bookSeries);

  } catch (err) {
    next(err);
  }
});
