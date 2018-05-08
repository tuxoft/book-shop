import { sendError } from './response.util';

export default function errorHandler (err, req, res, next) {
  if (res.headersSent) {
    return next(err)
  }

  sendError(err, res);
}
