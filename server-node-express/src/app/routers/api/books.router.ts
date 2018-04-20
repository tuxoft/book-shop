import * as express from 'express';
import { findById, getAll, getBestSellers, getLatestsBooks } from '../../dao';
import { sendData } from '../../utils/response.util';

const what = 'books';

const router = express.Router();

export default router;

router.get('/', (req, res) => {
  sendData(req, res, getAll(what));
});

router.get('/best-sellers', (req, res) => {
  sendData(req, res, getBestSellers());
});

router.get('/latests', (req, res) => {
  sendData(req, res, getLatestsBooks());
});

router.get('/:id', (req, res) => {
  sendData(req, res, findById(what, req.params.id));
});
