// Database ---
require("../database");
const Song = require("../models/Song");

let songsFromDB = [];
Song.find()
  .then(data => {
    songsFromDB = data;
  })
  .catch(error => console.log(error.message));

// Controllers ---
getAllSongs = (req, res) => {
  const songsData = {
    status: "success",
    results: songsFromDB.length,
    data: {
      songs: songsFromDB,
    },
  };
  return res.json(songsData);
};

createSong = (req, res) => {
  const {name, author, book, language, stanzas} = req.body;
  const newSong = new Song({
    name,
    author,
    book,
    language,
    stanzas,
  });
  newSong
    .save()
    .then(doc => {
      console.log(doc);
      res.status(200).json(doc);
    })
    .catch(err => console.error(err));
};

getSong = () => {};
updateSong = () => {};
deleteSong = () => {};

module.exports = {
  getAllSongs,
  createSong,
  getSong,
  updateSong,
  deleteSong,
};
