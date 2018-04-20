import * as express from 'express';

export function send404(req: express.Request, res: express.Response) {
  res.sendStatus(404);
  throw new Error(`resource not found: ${req.originalUrl}`);
}

export function sendData(req: express.Request, res: express.Response, data: any) {
  if (!data) send404(req, res);
  res.send(data);
}
