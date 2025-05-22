import { serverConfig } from "../../../configs";

const dbConfig = {
  development: {
    username: serverConfig.DB_USER,
    password: serverConfig.DB_PASSWORD,
    database: serverConfig.DB_NAME,
    host: serverConfig.DB_HOST,
    dialect: serverConfig.DB_DIALECT,
  },
};

export default dbConfig;
