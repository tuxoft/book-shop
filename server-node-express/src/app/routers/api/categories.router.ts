import * as express from 'express';
import { Book } from '../../orm/entity/book';
import { getRepository, getTreeRepository } from 'typeorm';
import { Category } from '../../orm/entity/category';

const router = express.Router();

export default router;

router.get('/', async (req, res, next) => {
  try {
    const trees = await getTreeRepository(Category).findTrees();

    res.send(trees);

  } catch (err) {
    next(err);
  }
});

router.get('/roots', async (req, res, next) => {
  try {
    const roots = await getRepository(Category).find({
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
    const node = await getRepository(Category).findOneOrFail(req.params.id);
    const subTree = await getTreeRepository(Category).findDescendantsTree(node);

    res.send(subTree);

  } catch (err) {
    next(err);
  }
});

router.get('/:id/ancestors', async (req, res, next) => {
  try {
    const node = await getRepository(Category).findOneOrFail(req.params.id);
    const ancestors = await getTreeRepository(Category).findAncestors(node);

    res.send(ancestors);

  } catch (err) {
    next(err);
  }
});

router.get('/:id/books', async (req, res, next) => {
  try {
    const parent = await getRepository(Category).findOneOrFail(req.params.id);

    const descendants = await getTreeRepository(Category).findDescendants(parent);

    const ids = descendants.map(e => e.id);

    const books = await getRepository(Book).createQueryBuilder('book')
      .leftJoinAndSelect('book.authors', 'author')
      .leftJoin('book.categories', 'category')
      .where('category.id IN (:...ids)', { ids })
      .getMany();

    res.send(books);

  } catch (err) {
    next(err);
  }
});
