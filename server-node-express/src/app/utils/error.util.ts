import { sendBadRequest, sendServerError, sendValidationError } from './response.util';
import { EntityNotFoundError } from 'typeorm/error/EntityNotFoundError';
import { validator } from './validation.util';
import { ValidationError } from 'class-validator';

export function errorHandler(err, req, res, next) {

  if (res.headersSent) {

    next(err);

  } else if (validator.isInstance(err, EntityNotFoundError)) {

    sendBadRequest(err, req, res);

  } else if (validator.isArray(err) && validator.isInstance(err[0], ValidationError)) {

    sendValidationError(err, req, res);

  } else {

    sendServerError(err, req, res);

  }
}
