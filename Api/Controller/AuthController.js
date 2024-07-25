const User = require("../Model/UserModel")
const { createPassword, checkPassword } = require("../Utility/Functionality")
const Jwt = require("jsonwebtoken");




exports.registerUser = async function (req, res) {
    try {
        let { password, ...rest } = req.body;
        const hashedPassword = await createPassword(password);
        // console.log(hashedPassword);

        req.body.password = hashedPassword;
        // console.log(req.body);
        const user = await User.create(req.body);

        res.status(200).send({
            message: "succesfull register",
            data: {
                rest
            }
            // user
        })
    } catch (error) {
        console.log(error);
        res.status(400).send({
            message: error.errorResponse.errmsg,
            errorCode: error.errorResponse.code
        })
    }

}
exports.login = async function (req, res) {
    try {
        const { email, password } = req.body
        // USER EXIST OR NOT

        const user = await User.findOne({
            email
        });
        if (!user) {
            return res.status(400).send({
                errorCode: 600,
                message: "User not Exist"
            })
        }


        //CHECK PASSWORD
        const validPassword = await checkPassword(password, user.password);

        if (!validPassword) {
            return res.status(400).send({
                errorCode: 600,
                message: "invalid password"
            })
        }


        //GENERATE AND SET COOKIES

        const { password: userPassword, ...restInfo } = user.toObject();

        const token = Jwt.sign({ id: user.id }, process.env.JWT_SECRET_KEY, { expiresIn: `${1000 * 2}s` });
        res.cookie("token", token, {
            httpOnly: true,
            maxAge: 1000000 * 2
        }).status(200).json({
            message: "loged in successfully",

            restInfo


        })


    } catch (error) {
        console.log(error);
        return res.status(200).send({
            message: "Unable to Login"
        })

    }


}
exports.logout = async function (req, res) {
    res.clearCookie("token").status(200).send({
        message: "Logout succesfull"
    })
}