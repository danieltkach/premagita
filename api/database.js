const config = require("./config/index");

const DB = require("mongoose");
const {connectionString: dbString, options: dbOptions} = config.database;
DB.connect(dbString, dbOptions)
  .then(() => {
    console.log("Database connection successful.");
  })
  .catch(error => console.log(error.message));

// TEST SAVE -----------------------
// const testLyric = new Song({
//   name: "Another Test Song",
//   author: "The Author",
//   book: "The Book",
//   stanzas: "Some Lyrics here...",
// });
// testLyric
//   .save()
//   .then(doc => {
//     console.log(doc);
//   })
//   .catch(err => console.error(err));

module.exports = DB;
