const mongoose = require("mongoose");
const PostDetailSchema = new mongoose.Schema({
    Description: {
        type: String
    },
    utilities: {
        type: String
    },
    pet: {
        type: String
    },
    income: {
        type: String
    },
    size: {
        type: String
    },
    school: {
        type: String
    },
    bus: {
        type: String
    },
    restaurant: {
        type: String
    },
    postId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post"
    }
})

const PostDetail = mongoose.model("PostDetail", PostDetailSchema);
module.exports = PostDetail;