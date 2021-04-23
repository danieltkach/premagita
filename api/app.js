const express = require("express");
const app = express();
const morgan = require("morgan");
app.use(morgan("dev"));
app.use(express.json());
app.use((req, res, next) => {
  console.log("Hello from the global middleware!");
  next();
});

const songRouter = require("./routes/songRoutes");
app.use("/api/songs", songRouter);

const userRouter = require("./routes/userRoutes");
app.use("/api/users", userRouter);

module.exports = app;
