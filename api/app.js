const express = require("express");
const app = express();
const PORT = 3001;

app.get("/api", (req, res) => {
  res.send("Premagita API response.");
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
