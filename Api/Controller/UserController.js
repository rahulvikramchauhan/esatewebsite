const User = require("../Model/UserModel");
const { createPassword } = require("../Utility/Functionality");

exports.getUsers = async function (req, res) {
    try {
        const user = await User.find({});
        res.status(200).send({
            status: "succesfull",
            data: user

        })
    } catch (error) {
        res.status(400).send({ message: "cannot get user" })
    }


}
exports.getUser = async function (req, res) {
    try {
        const { id } = req.params;
        // console.log(id);
        const user = await User.findById({
            _id: id
        })
        const { password, ...restInfo } = user.toObject();

        res.status(200).send({
            status: "succesfull",
            data: restInfo
        })

    } catch (error) {
        res.status(403).json({
            message: "Cannot Get user"
        })
    }
}
exports.updateUser = async function (req, res) {
    const { id } = req.params;
    console.log(req.body)
    try {
        if (id !== req.userId) {
            console.log(id, req.userId)
            return res.status(401).send({
                message: "Cannot Update Requested User"
            })
        }
        const { password, avatar, ...restInfo } = req.body;
        if (password) {
            let prevPassword = "";
            let userPassword = await User.findById({ _id: id });
            prevPassword = userPassword.password;
            console.log(prevPassword)
        }
        const user = await User.findByIdAndUpdate({//updateOne give number of documents updated, not update document 
            _id: id,

        }, {
            $set: {
                ...restInfo,
                ...(password && { password: await createPassword(password) }),
                ...(avatar && { avatar })
            }
        }, { new: true, runValidators: true })//new attribute to give updated data as result, runValidator for Schema validation
        const { password: updatedPassord, ...restUpdatedData } = user.toObject();

        res.status(200).json({
            message: "succesfull",
            data: restUpdatedData
        })
    } catch (error) {
        console.log(error)
        res.status(403).json({
            message: "Cannot update user"
        })
    }
}
exports.deleteUser = async function (req, res) {
    try {

    } catch (error) {
        res.status(403).json({
            message: "Cannot Get users"
        })
    }
}