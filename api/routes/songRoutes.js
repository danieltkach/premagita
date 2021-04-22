const express = require("express");
const router = express.Router();
const {
  getAllSongs,
  createSong,
  getSong,
  updateSong,
  deleteSong,
} = require("../controllers/songController");

// Routes ---
router.route("/").get(getAllSongs).post(createSong);
router.route("/:id").get(getSong).patch(updateSong).delete(deleteSong);

module.exports = router;
