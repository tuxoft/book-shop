import * as express from 'express';
import * as path from 'path';
import api from './routers/api';

const app = express();

export default app;

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', api);

app.route('/hello').get((req, res) => {
  res.end('Hello Express!!!');
});
