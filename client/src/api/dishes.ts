import { get, post } from 'src/services/api';

export const makeGetDishesRequest = () => get('/dishes');

export const makeGetDishRequest = (id: string) => get(`/dishes/${id}`);

export const makePostDishRequest = ({
  description,
  ingredients,
  name,
  recipe,
}: {
  description: string,
  ingredients: any[],
  name: string,
  recipe: string,
}) => post('/dishes', {
  description,
  ingredients,
  name,
  recipe,
});
