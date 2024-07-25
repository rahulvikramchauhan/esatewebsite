const app = require("./App")
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const User = require("./Model/UserModel")


mongoose.connect(process.env.MongoDb_CONNECTION_String + "Estate")
    .then(function () {
        console.log("connected to database")
        app.listen(8000, function () {
            console.log("Server is Listening");
        })
    })
    .catch(function (err) {
        console.log(err)
    });
