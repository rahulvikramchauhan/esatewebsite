const bcrypt = require("bcrypt");
exports.createPassword = async function (password) {
    const saltRound = 10;//use to make hasing more secure 
    //and computational
    const hasedPassword = await bcrypt.hash(password, saltRound);
    return hasedPassword;
}
exports.checkPassword = async function (password, hasedPassword) {


    return await bcrypt.compare(password, hasedPassword);
}