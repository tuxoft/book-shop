import * as express from 'express';
import * as cors from 'cors';
import * as compression from 'compression';
import * as cookieParser from 'cookie-parser';
import * as bodyParser from 'body-parser';
import * as path from 'path';
import api from './routers/api';
import { error2BusinessLogicError, errorHandler } from './utils/error.util';
import { keycloak, session } from './secure/index';

export const server = express();

server.use(cors());
server.use(session);
server.use(compression());
server.use(cookieParser());
server.use(bodyParser.json());
server.use('/', express.static(path.join(__dirname, '../../storage/www')));
server.use('/files', express.static(path.join(__dirname, '../../storage/files')));
server.use(keycloak.middleware());
server.use('/api', api);
server.use(error2BusinessLogicError);
server.use(errorHandler);
