import * as chai from 'chai'
import * as request from 'supertest';

import { app } from '../index';

const { expect } = chai;

describe('DishController', () => {
  describe('POST /dishes', () => {
    it('responds correctly', () => {
      const data = {
        name: 'name',
        description: 'description',
        recipe: 'recipe',
      };

      request(app)
        .post('/api/v1/dishes')
        .send(data)
        .expect(200)
        .then(({ body }) => {
          expect(body).to.include(data);
        });
    });
  });
});
