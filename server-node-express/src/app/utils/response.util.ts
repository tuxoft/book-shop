import * as express from 'express';

export function send404(req: express.Request, res: express.Response) {
  res.sendStatus(404);
  console.error(`resource not found: ${req.originalUrl}`);
}

export function sendError(err: any, res: express.Response) {
  res.status(500).send(err);
}

export function sendData(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
  promise: Promise<any>): void {

  promise
    .then(data => Object.keys(data).length ? res.send(data) : send404(req, res))
    .catch(err => next(err));
}
