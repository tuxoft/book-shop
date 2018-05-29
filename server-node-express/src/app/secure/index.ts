import * as expressSession from 'express-session';
import * as KeycloakConnect from 'keycloak-connect';

export const memoryStore = new expressSession.MemoryStore();

export const session = expressSession({
  secret: 'He73Gh3k$8',
  resave: false,
  saveUninitialized: true,
  store: memoryStore,
});

export const keycloak = new KeycloakConnect({ store: memoryStore });
