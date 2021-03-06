require("dotenv").config();

const config = {
  app: {
    port: process.env.PORT,
  },
  database: {
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    host: process.env.DATABASE_HOST,
    name: process.env.DATABASE_NAME,
    connectionString: process.env.CONNECTION_STRING,
    options: {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    },
  },
  jwt: {},
};

module.exports = config;
