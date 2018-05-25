import * as express from 'express';
import * as escape from 'escape-html';
import { ValidationError } from 'class-validator';

export function sendBadRequest(err: Error, req: express.Request, res: express.Response) {
  const message = `Bad Request: ${req.originalUrl} => ${err.message}`;
  res.status(400).send(escape(message));
  console.info(message);
}

export function sendValidationError(
  err: ValidationError[],
  req: express.Request,
  res: express.Response) {

  res.status(422).send(err);
}
