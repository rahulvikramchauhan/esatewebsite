const express = require("express")
const User = require("./Model/UserModel")
const app = express();
const cors = require("cors");
const cookie = require("cookie-parser");
const UserRouter = require("./Router/UserRouter");
const AuthRouter = require("./Router/AuthRouter");
const postRouter = require("./Router/PostRouter");
app.use(cors({ origin: "http://localhost:3000", credentials: true, optionsSuccessStatus: 200 }))

app.use(cookie());
app.use(express.json());



app.use("/api/auth", AuthRouter)
app.use("/api/users", UserRouter);

app.use("/api/post", postRouter)

module.exports = app;