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

export function getUserGivenName(req: express.Request) {
  return getUserContent(req)['given_name'];
}

export function getUserFamilyName(req: express.Request) {
  return getUserContent(req)['family_name'];
}

export function getUserPrefferedUsername(req: express.Request) {
  return getUserContent(req)['preferred_username'];
}

export function getUserEmail(req: express.Request) {
  return getUserContent(req)['email'];
}
