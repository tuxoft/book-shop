import * as express from 'express';
import { getConnection } from 'typeorm';
import { Author } from '../../orm/entity/author';

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
