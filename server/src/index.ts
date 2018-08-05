import 'reflect-metadata';

import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as express from 'express';
import * as swaggerUI from 'swagger-ui-express';
import { useExpressServer } from 'routing-controllers';
import { createConnection } from 'typeorm';

import { APP_PORT } from '../config';
import { DishController } from './controllers/DishController';

const swaggerConfig = require('../swagger.json');

export const app = express();
export const dbConnection = createConnection()
  .then(() => console.log(`Database connection established`))
  .catch(error => console.error('TypeORM connection error: ', error));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ type: ['application/json', 'application/vnd.api+json'] }));
app.use(cors());
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerConfig));

useExpressServer(app, {
  routePrefix: '/api/v1',
  cors: {
    origin: '*',
  },
  controllers: [
    DishController,
  ],
});

app.listen(APP_PORT, () => console.log(`Example app listen on port ${APP_PORT}`));
