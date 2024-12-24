const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    age: Number,
    post: [],
});

module.exports = mongoose.model('User', userSchema);