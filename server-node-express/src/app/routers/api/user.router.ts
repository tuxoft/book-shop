import * as express from 'express';
import { keycloak } from '../../secure/index';
import { getUser } from '../../utils/authentication.util';

const router = express.Router();

export default router;

router.get('/', keycloak.protect(), async (req, res, next) => {
  try {
    res.send(getUser(req));
  } catch (err) {
    next(err);
  }
});
