const User = require("./UserModel")

const mongoose = require("mongoose");
const PostSchema = new mongoose.Schema({
    title: {
        type: String
    },
    price: {
        type: Number
    },
    images: {
        type: [String]
    },
    address: {
        type: String
    },
    city: {
        type: String
    },
    bedroom: {
        type: Number
    },
    bathroom: {
        type: Number
    },
    latitude: {
        type: String
    },
    longitude: {
        type: String
    },
    type: {
        type: String,
        enum: ["Buy", "Rent"]
    },
    property: {
        type: String,
        enum: ["apartment", "house", "condo", "land"]
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",

    },
    postdetail: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "PostDetail",

    },


})

const Post = mongoose.model("Post", PostSchema);
module.exports = Post;