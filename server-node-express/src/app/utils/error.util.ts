import { sendError } from './response.util';

export function errorHandler(err, req, res, next) {

  if (res.headersSent) {
    return next(err);
  }

  sendError(err.message, res);
  console.error(err.message);
}
