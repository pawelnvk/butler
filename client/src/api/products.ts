import { get, post } from 'src/services/api';

export const makeGetProductsRequest = () => get('/products');

export const makeGetProductRequest = (id: string) => get(`/products/${id}`);

export const makePostProductRequest = ({
  calories,
  carbohydrates,
  fats,
  name,
  proteins,
}: {
  calories: string,
  carbohydrates: string,
  fats: string,
  name: string,
  proteins: string,
}) => post('/products', {
  calories,
  carbohydrates,
  fats,
  name,
  proteins,
});
