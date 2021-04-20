const config = require("./config/index");
const Song = require("./models/song");

const DB = require("mongoose");
const {connectionString: dbString, options: dbOptions} = config.database;
DB.connect(dbString, dbOptions)
  .then(() => {
    console.log("Database connection successful.");
  })
  .catch(error => console.log(error.message));

const testLyric = new Song({
  name: "Test Song",
  author: "The Author",
  book: "The Book",
  language: "The Language",
  stanzas: "Some Lyrics here...",
});
testLyric
  .save()
  .then(doc => {
    console.log(doc);
  })
  .catch(err => console.error(err));

module.exports = DB;

// const connection = DB.connection;
//   connection.on("error", console.error.bind(console, "connection error:"));
//   connection.once("open", function () {
//     connection.db.collection("songs", function (err, collection) {
//       collection.find({}).toArray(function (err, data) {
//         console.log(data);
//         res.status(200).json(data);
//       });
//     });
//   });
