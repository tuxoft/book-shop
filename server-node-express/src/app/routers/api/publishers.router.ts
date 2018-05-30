import * as express from 'express';
import { Publisher } from '../../orm/entity/publisher';
import { transformAndValidate } from 'class-transformer-validator';
import { getPublisherRepository } from '../../orm/repository/index';
import { plainToClass } from 'class-transformer';

const router = express.Router();

export default router;

router.get('/', async (req, res, next) => {
  try {
    const publishers = await getPublisherRepository().find();

    res.send(publishers);

  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const publishers = await transformAndValidate(Publisher, req.body, {
      validator: {
        validationError: { target: false },
      },
    });

    const savedBooks = await getPublisherRepository().save(publishers);

    res.send(savedBooks);

  } catch (err) {
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const id: string = req.params.id;

    const publisher = await getPublisherRepository().findOneOrFail(id, {
      relations: ['books', 'bookSeries'],
    });

    res.send(publisher);

  } catch (err) {
    next(err);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const publisher = plainToClass(Publisher, { id: req.params.id });
    const removed = await getPublisherRepository().remove(publisher);

    res.send(removed);

  } catch (err) {
    next(err);
  }
});
