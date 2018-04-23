import * as express from 'express';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/toArray';

export function send404(req: express.Request, res: express.Response) {
  res.sendStatus(404);
  console.error(`resource not found: ${req.originalUrl}`);
}

export function sendError(err: any, res: express.Response) {
  res.status(500).send(err);
}

export function sendData(req: express.Request, res: express.Response, data$: Observable<any>) {
  data$.filter(e => e).toArray().subscribe(
    data => data.length ? res.send(data) : send404(req, res),
    error => sendError(error, res),
  );
}
