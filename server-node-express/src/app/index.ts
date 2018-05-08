import * as express from 'express';
import * as compression from 'compression';
import * as cookieParser from 'cookie-parser';
import * as bodyParser from 'body-parser';
import * as path from 'path';
import api from './routers/api';
import errorHandler  from './utils/error-handler.util';

const app = express();

export default app;

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/api', api);
app.use(errorHandler);
