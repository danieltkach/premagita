const {MongoClient} = require("mongodb");
async function main() {
  const uri =
    "mongodb+srv://dh4m13l:dh4m13l@cluster0.u92kq.mongodb.net/sample_airbnb?retryWrites=true&w=majority";
  const client = new MongoClient(uri, {useNewUrlParser: true, useUnifiedTopology: true});

  try {
    await client.connect();
    await listDatabases(client);
  } catch (e) {
    console.log(e);
  } finally {
    await client.close();
  }
}

main().catch(console.error);

async function listDatabases(client) {
  const databasesList = await client.db().admin().listDatabases();
  console.log("Databases");
  databasesList.databases.forEach(db => console.log(` - ${db.name}`));
}

// import MongoClient from "mongodb";
// const url = `mongodb://localhost:27017/premagita`;
// let db = null;

// export async function connectDB() {
//   if (db) return db;
//   let client = await MongoClient.connect(url, {userNewUrlParser: true});
//   db = client.db();
//   console.info("Got DB", db);
//   return db;
// }

// connectDB();
