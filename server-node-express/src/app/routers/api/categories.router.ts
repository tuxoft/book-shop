import * as express from 'express';
import { getConnection } from 'typeorm';
import { CategoryEntity } from '../../orm/entity/category';

const router = express.Router();

export default router;

const getCategoryRepository = () => getConnection().getRepository(CategoryEntity);
const getCategoryTreeRepository = () => getConnection().getTreeRepository(CategoryEntity);

router.get('/', async (req, res, next) => {
  try {
    const trees = await getCategoryTreeRepository().findTrees();

    res.send(trees);

  } catch (err) {
    next(err);
  }
});

router.get('/roots', async (req, res, next) => {
  try {
    const roots = await getCategoryTreeRepository().findRoots();

    res.send(roots);

  } catch (err) {
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const node = await getCategoryRepository().findOne(req.params.id);
    const subTree = await getCategoryTreeRepository().findDescendantsTree(node);

    res.send(subTree);

  } catch (err) {
    next(err);
  }
});

router.get('/:id/books', async (req, res, next) => {
  try {
    const node = await getCategoryRepository().findOneOrFail(req.params.id, {
      relations: ['books'],
    });

    res.send(node.books);

  } catch (err) {
    next(err);
  }
});
