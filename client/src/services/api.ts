import axios from 'axios';

import { pathPrefix } from 'src/constants/api';

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_API_PATH}${pathPrefix}`,
  timeout: 1000,
});

export const get = instance.get;
