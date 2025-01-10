const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/miniproject");

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  age: Number,
  password: String,
  name: String,
  posts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post"}],
});

module.exports = mongoose.model("User", userSchema);
