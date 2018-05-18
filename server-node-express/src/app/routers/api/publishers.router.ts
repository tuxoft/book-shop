import * as express from 'express';
import { getConnection } from 'typeorm';
import { Publisher } from '../../orm/entity/publisher';

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
