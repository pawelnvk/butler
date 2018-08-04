import 'reflect-metadata';

import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as express from 'express';
import { useExpressServer } from 'routing-controllers';
import { createConnection } from 'typeorm';

import { APP_PORT } from '../config';

export const app = express();
export const dbConnection = createConnection()
  .then(() => console.log(`Database connection established`))
  .catch(error => console.error('TypeORM connection error: ', error));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ type: ['application/json', 'application/vnd.api+json'] }));
app.use(cors());

useExpressServer(app, {
  routePrefix: '/v1',
  cors: {
    origin: '*',
  },
});

app.listen(APP_PORT, () => console.log(`Example app listen on port ${APP_PORT}`));
