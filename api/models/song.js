const DB = require("mongoose");

const songSchema = new DB.Schema({
  name: {type: String, unique: true},
  author: String,
  book: String,
  language: {type: String, default: "Sanskrit"},
  stanzas: String,
});

module.exports = DB.model("Song", songSchema);
