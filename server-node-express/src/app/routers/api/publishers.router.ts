import * as express from 'express';
import { getConnection } from 'typeorm';
import { Publisher } from '../../orm/entity/publisher';
import { transformAndValidate } from 'class-transformer-validator';
import { plainToClass } from 'class-transformer';

const router = express.Router();

export default router;

const getPublishersRepository = () => getConnection().getRepository(Publisher);

router.get('/', async (req, res, next) => {
  try {
    const publishers = await getPublishersRepository().find();

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

    const savedBooks = await getPublishersRepository().save(publishers);

    res.send(savedBooks);

  } catch (err) {
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const id: string = req.params.id;

    const publisher = await getPublishersRepository().findOneOrFail(id, {
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
    const removed = await getAuthorRepository().remove(publisher);

    res.send(removed);

  } catch (err) {
    next(err);
  }
});
