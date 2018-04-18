import * as express from 'express';
import { findById, getAll } from '../../dao';

const what = 'cats';

const router = express.Router();

export default router;

router.get('/', (req, res) => {
  res.send(getAll(what));
});

router.get('/:id', (req, res) => {
  res.send(findById(what, req.params.id));
});
