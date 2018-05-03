import * as express from 'express';

export function send404(req: express.Request, res: express.Response) {
  res.sendStatus(404);
  console.error(`resource not found: ${req.originalUrl}`);
}

export function sendError(err: any, res: express.Response) {
  res.status(500).send(err);
}

export function sendData(req: express.Request, res: express.Response, data: Promise<any>) {
  data
    .then(e => e.length ? res.send(e) : send404(req, res))
    .catch(e => sendError(e, res));
}
