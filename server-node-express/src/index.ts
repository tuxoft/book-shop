import { createConnection } from 'typeorm';
import app from './app';
import 'reflect-metadata';

app.listen(8000, async () => {
  console.log('Server started!');

  const connection = await createConnection();
  console.log('Database connection created!');

  await connection.runMigrations();
  console.log('Database migrations complete!');
});
