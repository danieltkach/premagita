const express = require("express");
const app = express();
const PORT = 3001;
require("./database");
const Song = require("./models/Song");

let songsFromDB = [];
Song.find()
  .then(data => {
    songsFromDB = data;
  })
  .catch(error => console.log(error.message));

const getAllSongs = (req, res) => {
  const songsData = {
    status: "success",
    results: songsFromDB.length,
    data: {
      songs: songsFromDB,
    },
  };
  return res.json(songsData);
};

const modifySong = () => {};
const createSong = () => {};
const deleteSong = () => {};

app
  .route("/api/songs")
  .get(getAllSongs)
  .post(createSong)
  .patch(modifySong)
  .delete(deleteSong);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
