const express = require("express");
const AuthRouter = express.Router();
const { registerUser, login, logout } = require("../Controller/AuthController")
AuthRouter.post("/register", registerUser);
AuthRouter.post("/login", login);
AuthRouter.post("/logout", logout);
module.exports = AuthRouter;