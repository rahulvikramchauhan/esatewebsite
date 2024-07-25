const express = require("express");
const { getPost, getPosts, createPost, updatePost, deletePost, getProfilePost } = require("../Controller/PostController");
const verifyToken = require("../Middleware/verifyToken")
const postRouter = express.Router();
postRouter.get("/", getPosts);
postRouter.get("/:id", getPost);
postRouter.put("/profile/:id",verifyToken, getProfilePost);

postRouter.put("/", verifyToken, createPost);
postRouter.patch("/;id", verifyToken, updatePost);
postRouter.delete("/:id", verifyToken, deletePost);

module.exports = postRouter;
