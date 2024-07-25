const argon = require("argon2");
exports.createPassword = async function (password) {
    const saltRound = 10;//use to make hasing more secure 
    //and computational
    const hasedPassword = await argon.hash(password);
    console.log(hasedPassword)
    return hasedPassword;
}
exports.checkPassword = async function (password, hasedPassword) {
    console.log(await argon.verify(password, hasedPassword));

    return await argon.verify(password, hasedPassword);
}
