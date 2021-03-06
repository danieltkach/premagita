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

createSong = async (req, res) => {
  try {
    const newSong = await Song.create(req.body);
    return res.status(200).json({
      status: "success",
      data: {
        song: newSong,
      },
    });
  } catch (error) {
    return res.status(400).json({
      status: "error",
      message: error,
    });
  }

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
      return res.status(200).json(doc);
    })
    .catch(error => {
      console.error(error);
      return res.status(400).json({error});
    });
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
