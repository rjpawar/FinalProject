const mongoose = require("mongoose");

const User = mongoose.model(
    "User",
    new mongoose.Schema({
        username: String,
        email: String,
        password: String,
        favloc: String,
        text: String,
        role: {type: String, enum: ['Traveler', 'Admin', 'Moderator']}
    },{collection: 'users'})
);

module.exports = User;
