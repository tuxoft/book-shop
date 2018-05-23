import * as express from 'express';
import { getConnection } from 'typeorm';
import { BookSeries } from '../../orm/entity/bookSeries';
import { transformAndValidate } from 'class-transformer-validator';

const router = express.Router();

export default router;

const getBookSeriesRepository = () => getConnection().getRepository(BookSeries);

router.get('/', async (req, res, next) => {
  try {
    const bookSeries = await getBookSeriesRepository().find();

    res.send(bookSeries);

  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const bookSeries = await transformAndValidate(BookSeries, req.body, {
      validator: {
        validationError: { target: false },
      },
    });

    const savedBookSeries = await getBookSeriesRepository().save(bookSeries);

    res.send(savedBookSeries);

  } catch (err) {
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const id: string = req.params.id;

    const bookSeries = await getBookSeriesRepository().findOneOrFail(id, {
      relations: ['books', 'publisher'],
    });

    res.send(bookSeries);

  } catch (err) {
    next(err);
  }
});
