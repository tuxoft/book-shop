import * as express from 'express';

export function getUserContent(req: express.Request) {
  try {
    return req.kauth.grant.access_token.content;
  } catch (err) {
    return;
  }
}

export function getUserUUID(req: express.Request) {
  try {
    return getUserContent(req).sub;
  } catch (err) {
    return;
  }
}

export function getUserPrefferedName(req: express.Request) {
  try {
    return getUserContent(req).preferred_username;
  } catch (err) {
    return;
  }
}
