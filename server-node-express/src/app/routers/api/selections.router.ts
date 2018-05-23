import * as express from 'express';
import { getConnection } from 'typeorm';
import { Selection } from '../../orm/entity/selection';
import { transformAndValidate } from 'class-transformer-validator';

const router = express.Router();

export default router;

const getSelectionRepository = () => getConnection().getRepository(Selection);

router.get('/', async (req, res, next) => {
  try {
    const selection = await getSelectionRepository().find();

    res.send(selection);

  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const selections = await transformAndValidate(Selection, req.body, {
      validator: {
        validationError: { target: false },
      },
    });

    const savedSelections = await getSelectionRepository().save(selections);

    res.send(savedSelections);

  } catch (err) {
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const id: string = req.params.id;

    const author = await getSelectionRepository().findOneOrFail(id);

    res.send(author);

  } catch (err) {
    next(err);
  }
});
