import { sendBadRequest, sendError } from './response.util';
import { EntityNotFoundError } from 'typeorm/error/EntityNotFoundError';

export function errorHandler(err: Error, req, res, next) {

  if (res.headersSent) {
    return next(err);
  }

  if (err instanceof EntityNotFoundError) {
    sendBadRequest(err, req, res);
  } else {
    sendError(err, req, res);
  }
}
