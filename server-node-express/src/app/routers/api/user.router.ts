import * as express from 'express';
import { keycloak } from '../../secure/index';
import { getUserUUID } from '../../utils/authentication.util';
import { getUserRepository } from '../../orm/repository/index';
import { EntityNotFoundError } from 'typeorm/error/EntityNotFoundError';
import { validator } from '../../utils/validation.util';
import { getCartOrCreateIfNotExists } from './cart.router';
import { User } from '../../orm/entity/user';

const router = express.Router();

export default router;

export async function getUserOrCreateIfNotExists(uuid: string): Promise<User> {
  if (validator.isUUID(uuid)) {
    const userRepository = getUserRepository();
    try {
      return await userRepository.findOneOrFail(uuid);
    } catch (err) {
      if (validator.isInstance(err, EntityNotFoundError)) {
        const newUser = userRepository.create();
        newUser.id = uuid;
        newUser.cart = await getCartOrCreateIfNotExists(uuid);
        await userRepository.save(newUser);
        return await userRepository.findOneOrFail(uuid);
      }
      throw err;
    }
  }
  throw new RangeError('Parameter uuid must be UUID');
}

router.get('/', keycloak.protect(), async (req, res, next) => {
  try {
    res.send(await getUserOrCreateIfNotExists(getUserUUID(req)));
  } catch (err) {
    next(err);
  }
});
