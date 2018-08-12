import { get, post } from 'src/services/api';

export const makeGetDishesRequest = () => get('/dishes');

export const makePostDishRequest = ({
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
}) => post('/dishes', {
  calories,
  carbohydrates,
  fats,
  name,
  proteins,
});
