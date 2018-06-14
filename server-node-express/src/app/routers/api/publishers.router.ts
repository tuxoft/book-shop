import * as express from 'express';
import { Publisher } from '../../orm/entity/publisher';
import { transformAndValidate } from 'class-transformer-validator';
import { plainToClass } from 'class-transformer';
import { getRepository } from 'typeorm';

const router = express.Router();

export default router;

router.get('/', async (req, res, next) => {
  try {
    const publishers = await getRepository(Publisher).find();

    res.send(publishers);

  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const publisher: Publisher = await transformAndValidate(Publisher, <Object>req.body, {
      validator: {
        validationError: { target: false },
      },
    });

    await getRepository(Publisher).save(publisher);

    res.send(publisher);

  } catch (err) {
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const id: string = req.params.id;

    const publisher = await getRepository(Publisher).findOneOrFail(id, {
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
    await getRepository(Publisher).remove(publisher);

    res.send(publisher);

  } catch (err) {
    next(err);
  }
});
