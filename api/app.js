const express = require("express");
const app = express();
const PORT = 3001;
const DB = require("./database");

app.get("/api", (req, res) => {
  res.status(200).json({id: "1", message: "Premagita API response."});
});

app.get("/test", async (req, res) => {
  res.status(200).json("/test");
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
