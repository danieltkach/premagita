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
exports.getAllSongs = (req, res) => {
  const songsData = {
    status: "success",
    results: songsFromDB.length,
    data: {
      songs: songsFromDB,
    },
  };
  return res.json(songsData);
};

exports.createSong = () => {};
exports.getSong = () => {};
exports.updateSong = () => {};
exports.deleteSong = () => {};
