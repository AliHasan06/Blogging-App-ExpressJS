const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  age: Number,
  post: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "post",  
    }
  ],
});

module.exports = mongoose.model("User", userSchema); 