import * as express from 'express';
import { UnauthorizedAccessSecurityError } from '../errors/security.errors';

export function getUserContent(req: express.Request) {
  try {
    return req['kauth']['grant']['access_token']['content'];
  } catch (err) {
    throw new UnauthorizedAccessSecurityError();
  }
}

export function getUserUUID(req: express.Request) {
  return getUserContent(req)['sub'];
}

export function getUserUUIDOrNull(req: express.Request) {
  try {
    return getUserUUID(req);
  } catch (err) {
    return null;
  }
}

export function getUserPrefferedName(req: express.Request) {
  return getUserContent(req)['preferred_username'];
}
