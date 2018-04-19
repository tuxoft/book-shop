import * as express from 'express';
import * as compression from 'compression';
import * as path from 'path';
import api from './routers/api';

const app = express();

export default app;

app.use(compression());
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/api', api);
