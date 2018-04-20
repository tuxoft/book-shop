import * as express from 'express';
import { getAll, getBooksBestsellers, getBooksLatests, getByIds } from '../../dao';
import { sendData } from '../../utils/response.util';

const what = 'books';

const router = express.Router();

export default router;

router.get('/', (req, res) => {
  sendData(req, res, getAll(what));
});

router.get('/bestsellers', (req, res) => {
  sendData(req, res, getBooksBestsellers());
});

router.get('/latests', (req, res) => {
  sendData(req, res, getBooksLatests());
});

router.get('/:ids', (req, res) => {
  const ids: string[] = req.params.ids.split(',');
  sendData(req, res, getByIds(what, ids));
});
