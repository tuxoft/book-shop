import * as express from 'express';
import { bookIndexer } from '../../elasticsearch/book.indexer';

const router = express.Router();

export default router;

router.get('/', async (req, res, next) => {
  try {
    const query = req.query.q || '';
    const result = await bookIndexer.searchDocument(query);
    res.send(result);

  } catch (err) {
    next(err);
  }
});

router.get('/books', async (req, res, next) => {
  try {
    const query = req.query.q || '';
    const result = await bookIndexer.searchDocument(query);
    res.send(result.hits.hits.map(e => e._source));

  } catch (err) {
    next(err);
  }
});
