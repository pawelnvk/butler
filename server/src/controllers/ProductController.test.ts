import * as chai from 'chai'
import * as request from 'supertest';

import { app } from '../index';

const { expect } = chai;

describe('ProductController', () => {
  describe('POST /products', () => {
    it('responds correctly', () => {
      const data = {
        calories: 340,
        carbohydrates: 20,
        fats: 20,
        name: 'name',
        proteins: 20,
      };

      return request(app)
        .post('/api/v1/products')
        .send(data)
        .expect(200)
        .then(({ body }) => {
          expect(body).to.include(data);
        });
    });
  });
});
