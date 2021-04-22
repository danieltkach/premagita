const express = require("express");
const router = express.Router();

// Dabatabase ---
// letusersFromDB = [];
// Load user data here.

// Controllers ---
const getAllUsers = () => {};
const createUser = () => {};
const getUser = () => {};
const updateUser = () => {};
const deleteUser = () => {};

// Routes ---
router.route("/").get(getAllUsers).post(createUser);
router.route("/:id").get(getUser).patch(updateUser).delete(deleteUser);

module.exports = router;
