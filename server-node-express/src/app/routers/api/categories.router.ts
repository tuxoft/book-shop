import * as express from 'express';
import { sendData } from '../../utils/response.util';
import { getConnection } from 'typeorm';
import { CategoryEntity } from '../../orm/entity/category';

const router = express.Router();

export default router;

const getCategoryRepository = () => getConnection().getTreeRepository(CategoryEntity);

router.get('/', (req, res, next) => {
  sendData(req, res, next, getCategoryRepository().findTrees());
});
