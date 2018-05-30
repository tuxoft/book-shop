export function getUserContent(req: express.Request) {
  try {
    return req.kauth.grant.access_token.content;
  } catch (err) {
    return null;
  }
}

export function getUserUUID(req: express.Request) {
  try {
    return getUserContent(req).sub;
  } catch (err) {
    return null;
  }
}

export function getUserPrefferedName(req: express.Request) {
  try {
    return getUserContent(req).preferred_username;
  } catch (err) {
    return null;
  }
}

export function getUser(req: express.Request) {
  try {
    return {
      uuid: getUserUUID(req),
      name: getUserPrefferedName(req),
    }
  }
  catch (err) {
    return null;
  }
}
