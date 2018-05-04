import * as express from 'express';
import { sendData } from '../../utils/response.util';
import { getConnection } from 'typeorm';
import { BookEntity } from '../../orm/entity/book';

const router = express.Router();

export default router;

const getBookRepository = () => getConnection().getRepository(BookEntity);

router.get('/', (req, res) => {
  sendData(req, res, getBookRepository().find());
});

router.get('/bestsellers', (req, res) => {
  sendData(req, res, getBookRepository().findByIds([11, 12, 21, 13, 14]));
});

router.get('/latests', (req, res) => {
  sendData(req, res, getBookRepository().findByIds([9, 3, 7, 17, 24]));
});

router.get('/:ids', (req, res) => {
  const ids: string[] = req.params.ids.split(',');
  sendData(req, res, getBookRepository().findByIds(ids));
});
