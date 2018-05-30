import * as express from 'express';
import {
  getBookRepository,
  getCategoryRepository,
  getCategoryTreeRepository,
} from '../../orm/repository/index';

const router = express.Router();

export default router;

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
    const roots = await getCategoryRepository().find({
      select: ['id', 'name', 'route'],
      where: { parent: null },
    });

    res.send(roots);

  } catch (err) {
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const node = await getCategoryRepository().findOneOrFail(req.params.id);
    const subTree = await getCategoryTreeRepository().findDescendantsTree(node);

    res.send(subTree);

  } catch (err) {
    next(err);
  }
});

router.get('/:id/ancestors', async (req, res, next) => {
  try {
    const node = await getCategoryRepository().findOneOrFail(req.params.id);
    const ancestors = await getCategoryTreeRepository().findAncestors(node);

    res.send(ancestors);

  } catch (err) {
    next(err);
  }
});

router.get('/:id/books', async (req, res, next) => {
  try {
    const parent = await getCategoryRepository().findOneOrFail(req.params.id);

    const descendants = await getCategoryTreeRepository().findDescendants(parent);

    const ids = descendants.map(e => e.id);

    const books = await getBookRepository().createQueryBuilder('book')
      .leftJoinAndSelect('book.authors', 'author')
      .leftJoin('book.categories', 'category')
      .where('category.id IN (:...ids)', { ids })
      .getMany();

    res.send(books);

  } catch (err) {
    next(err);
  }
});
