// Express ---
const PORT = 3001;
const express = require("express");
const app = express();
const morgan = require("morgan");
app.use(morgan("dev"));
app.use(express.json());
app.use((req, res, next) => {
  console.log("Hello from the global middleware!");
  next();
});

// Routers ---
const songRouter = require("./routes/songRoutes");
app.use("/api/songs", songRouter);

const userRouter = require("./routes/userRoutes");
app.use("/api/users", userRouter);

// Server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
