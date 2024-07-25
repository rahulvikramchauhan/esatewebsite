const Post = require("../Model/PostModel")
const PostDetail = require("../Model/PostDetailSchema");
const User = require("../Model/UserModel");

exports.getPosts = async function (req, res) {
    try {
        const post = await Post.find().populate("user", "name avatar").populate("postdetail");
        res.status(200).send({
            message: "success",
            data: post
        })
    } catch (error) {
        console.log(error);
        res.status(400).send({
            message: "Failed to Get Post"
        })
    }
}
exports.getPost = async function (req, res) {
    const { id } = req.params;
    console.log(id)
    try {
        const post = await Post.find({ _id: id }).populate("user", "name avatar").populate("postdetail");
        res.status(200).send({
            message: "success",
            data: post
        })
    } catch (error) {
        console.log(error);
        res.status(400).send({
            message: "Failed to Get Post"
        })
    }
}
exports.getProfilePost = async function (req, res) {
    const { id } = req.params;
    console.log(id)
    try {
        const post = await Post.find({ user: id }).populate("user", "name avatar").populate("postdetail");
        res.status(200).send({
            message: "success",
            data: post
        })
    } catch (error) {
        console.log(error);
        res.status(400).send({
            message: "Failed to Get Post"
        })
    }
}
exports.createPost = async function (req, res) {
    const { id } = req.params;
    try {
        // saving PostDetail DATA
        const postDetail = await PostDetail.create({
            ...req.body.postDetail,

        })
        console.log(postDetail)
        const post = await Post.create({
            ...req.body.post,
            user: req.userId,
            postdetail: postDetail._id
        });
        res.status(201).send({
            message: "Post Created",
            data: post
        })

    } catch (error) {
        console.log(error);
        res.status(400).send({
            message: "Failed to Create Post"
        })
    }
}
exports.updatePost = async function (req, res) {
    try {

    } catch (error) {
        console.log(error);
        res.status(400).send({
            message: "Failed to Update Post"
        })
    }
}
exports.deletePost = async function (req, res) {
    try {

    } catch (error) {
        console.log(error);
        res.status(400).send({
            message: "Failed to Delete Post"
        })
    }
}
