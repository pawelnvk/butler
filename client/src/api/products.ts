import { get } from 'src/services/api';

export const makeGetProductsRequest = () => get('/products');
