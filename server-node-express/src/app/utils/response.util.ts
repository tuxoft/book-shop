import * as express from 'express';
import * as escape from 'escape-html';

export function sendBadRequest(err: Error, req: express.Request, res: express.Response) {
  const message = `Bad Request: ${req.originalUrl} => ${err.message}`;
  res.status(400).send(escape(message));
  console.info(message);
}

export function sendError(err: Error, req: express.Request, res: express.Response) {
  const message = `Server Internal Error: ${req.originalUrl} => ${err.stack}`;
  res.status(500).send(escape(message));
  console.error(message);
}
