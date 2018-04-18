import * as express from 'express';
import catsRouter from './cats.router';
import dogsRouter from './dogs.router';
import birdsRouter from './birds.router';

const router = express.Router();

export default router;

[
  { path: '/cats', router: catsRouter },
  { path: '/dogs', router: dogsRouter },
  { path: '/birds', router: birdsRouter },

].forEach(e => router.use(e.path, e.router));
