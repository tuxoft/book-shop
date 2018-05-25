import * as express from 'express';
import * as session from 'express-session';
import * as Keycloak from 'keycloak-connect';
import * as compression from 'compression';
import * as cookieParser from 'cookie-parser';
import * as bodyParser from 'body-parser';
import * as path from 'path';
import api from './routers/api';
import { errorHandler } from './utils/error.util';

const app = express();
const memoryStore = new session.MemoryStore();

const keycloak = new Keycloak({ store: memoryStore });

export default app;

app.use(session({
  secret: 'He73Gh3k$8',
  resave: false,
  saveUninitialized: true,
  store: memoryStore
}));

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(keycloak.middleware());
app.use('/api', /*keycloak.protect(), */api);
app.use(errorHandler);
