const Jwt = require("jsonwebtoken");

const verifyToken = async function (req, res, next) {
    // conform token is their in cookies or not
    const token = req.cookies.token;
    console.log(token);
    if (!token) {
        return res.status(400).send({
            message: "Not Authenticated"
        })
    }
    Jwt.verify(token, process.env.JWT_SECRET_KEY, function (err, payload) {
        if (err) {
            return res.status(403).send({ message: "Not Authorized" })
        }
        req.userId = payload.id;

    })
    next();
}
module.exports = verifyToken;
