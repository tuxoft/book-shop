import * as express from 'express';
import { Selection } from '../../orm/entity/selection';
import { transformAndValidate } from 'class-transformer-validator';
import { plainToClass } from 'class-transformer';
import { getRepository } from 'typeorm';

const router = express.Router();

export default router;

router.get('/', async (req, res, next) => {
  try {
    const selection = await getRepository(Selection).find();

    res.send(selection);

  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const selection: Selection = await transformAndValidate(Selection, <Object>req.body, {
      validator: {
        validationError: { target: false },
      },
    });

    await getRepository(Selection).save(selection);

    res.send(selection);

  } catch (err) {
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const id: string = req.params.id;

    const selection = await getRepository(Selection).findOneOrFail(id);

    res.send(selection);

  } catch (err) {
    next(err);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const selection = plainToClass(Selection, { id: req.params.id });
    await getRepository(Selection).remove(selection);

    res.send(selection);

  } catch (err) {
    next(err);
  }
});
