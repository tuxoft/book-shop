import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as morgan from 'morgan';

import { ApplicationModule } from './app.module';

const expressInstance = express();

expressInstance.use(morgan('dev'));

NestFactory.create(ApplicationModule, expressInstance, {}).then((app) => {
  app.use(bodyParser.json());
  app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix('api');
  app.listen(443, () =>
    console.log('Application is listening on port 443.'),
  );
});
