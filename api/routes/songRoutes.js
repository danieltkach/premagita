const express = require("express");
const router = express.Router();

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

const createSong = () => {};
const getSong = () => {};
const updateSong = () => {};
const deleteSong = () => {};

// Routes ---
router.route("/").get(getAllSongs).post(createSong);
router.route("/:id").get(getSong).patch(updateSong).delete(deleteSong);

module.exports = router;
