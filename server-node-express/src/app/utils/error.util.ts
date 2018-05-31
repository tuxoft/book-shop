import { sendBadRequest, sendForbidden, sendValidationError } from './response.util';
import { EntityNotFoundError } from 'typeorm/error/EntityNotFoundError';
import { validator } from './validation.util';
import { ValidationError } from 'class-validator';
import { UnauthorizedAccessError } from '../errors/UnauthorizedAccessError';

export function errorHandler(err, req, res, next) {

  if (validator.isInstance(err, EntityNotFoundError)) {

    sendBadRequest(err, req, res);

  } else if (validator.isArray(err) && validator.isInstance(err[0], ValidationError)) {

    sendValidationError(err, req, res);

  } else if (validator.isInstance(err, UnauthorizedAccessError)) {

    sendForbidden(err, req, res);

  } else {

    next(err);

  }
}
