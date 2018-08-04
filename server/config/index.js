const dotenvFileName = `.env.${process.env.NODE_ENV || 'development'}`;
const dotenv = require('dotenv');

dotenv.config({ path: dotenvFileName });

const {
  APP_PORT,
  TYPEORM_AUTO_SCHEMA_SYNC,
  TYPEORM_DATABASE,
  TYPEORM_HOST,
  TYPEORM_PASSWORD,
  TYPEORM_PORT,
  TYPEORM_USERNAME,
} = process.env;

module.exports = {
  APP_PORT,
  TYPEORM_AUTO_SCHEMA_SYNC,
  TYPEORM_DATABASE,
  TYPEORM_HOST,
  TYPEORM_PASSWORD,
  TYPEORM_PORT,
  TYPEORM_USERNAME,
};
