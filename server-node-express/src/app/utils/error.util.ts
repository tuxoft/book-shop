import {
  sendBadRequest,
  sendBusinessLogicError,
  sendForbidden,
  sendValidationError,
} from './response.util';
import { EntityNotFoundError } from 'typeorm/error/EntityNotFoundError';
import { validator } from './validation.util';
import { ValidationError } from 'class-validator';
import { SecurityError } from '../errors/security.errors';
import { ClientError } from '../errors/client.errors';
import { BusinessLogicError } from '../errors/businesslogic.errors';

export function errorHandler(err, req, res, next) {

  if (validator.isInstance(err, SecurityError)) {

    sendForbidden(err, req, res);

  } else if (validator.isInstance(err, EntityNotFoundError)) {

    sendBadRequest(err, req, res);

  } else if (validator.isInstance(err, ClientError)) {

    sendBadRequest(err, req, res);

  } else if (validator.isArray(err) && validator.isInstance(err[0], ValidationError)) {

    sendValidationError(err, req, res);

  } else if (validator.isInstance(err, BusinessLogicError)) {

    sendBusinessLogicError(err, req, res);

  } else {

    next(err);

  }
}

export function error2BusinessLogicError(err, req, res, next) {
  let businessLogicError;

  if (err.code === 'LIMIT_FILE_SIZE') {
    console.log(err);
    businessLogicError = new BusinessLogicError('Слишком большой файл');
  }

  next(businessLogicError ? businessLogicError : err);
}
