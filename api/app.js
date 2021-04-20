const util = require("util");

const config = require("./config/index");

const express = require("express");
const app = express();
const PORT = 3001;

const DB = require("mongoose");
DB.connect(config.database.connectionString, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
})
  .then(con => {
    // console.log(util.inspect(con.connections, false, null, true));
    console.log("Database connection successful.");
  })
  .catch(error => console.log(error.message));

const connection = DB.connection;
connection.on("error", console.error.bind(console, "connection error:"));
connection.once("open", function () {
  connection.db.collection("songs", function (err, collection) {
    collection.find({}).toArray(function (err, data) {
      console.log(data); // it will print your collection data
    });
  });
});

app.get("/api", (req, res) => {
  res.status(200).json({id: "1", message: "Premagita API response."});
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
