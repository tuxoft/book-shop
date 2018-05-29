import { createConnection } from 'typeorm';
import * as app from './app';
import 'reflect-metadata';
import * as search from './app/search/index';

const httpServer = app.server.listen(8000, async () => {
  try {
    console.log('Server started!');

    const connection = await createConnection();
    console.log('Database connection created!');

    await connection.runMigrations();
    console.log('Database migrations complete!');

    search.init();

  } catch (err) {
    httpServer.close(() => {
      console.log('Http Server Stopped');
      console.log(err);
    });
  }
});
