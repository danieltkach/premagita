const DB = require("mongoose");

const userSchema = new DB.Schema({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  email: {type: String, required: true},
});

module.exports = DB.model("User", userSchema);
