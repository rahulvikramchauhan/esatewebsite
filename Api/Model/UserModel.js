const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" })

const userSchema = new mongoose.Schema({
    name: {
        type: String,

    },
    email: {
        type: String,
        unique: true
    },
    avatar: String,
    password: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
})
const User = mongoose.model("user", userSchema);

module.exports = User;