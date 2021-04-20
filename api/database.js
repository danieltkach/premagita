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
  },
  jwt: {},
};

const MongoClient = require("mongodb").MongoClient;
const {user, password, host, name} = config.database;
console.log(user, password, host, name);
const uri = `mongodb+srv://${user}:${password}@${host}/${name}?retryWrites=true&w=majority;`;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

client.connect(err => {
  const collection = client.db(name).collection("songs");
  console.log(collection.find());
  client.close();
});
