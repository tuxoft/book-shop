import * as express from 'express';
import { findById, getAll } from '../../dao';
import { sendData } from '../../utils/response.util';

const what = 'books';

const router = express.Router();

export default router;

router.get('/', (req, res) => {
  sendData(req, res, getAll(what));
});

router.get('/:id', (req, res) => {
  sendData(req, res, findById(what, req.params.id));
});
