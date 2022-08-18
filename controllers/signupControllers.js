//const { post } = require("../routes/signupRoutes");

const Signup = require('../models/signup')

exports.getAllSignups = async (req, res, next) => {
    try {
        const signups = await Signup.findAll();

    } catch (error) {

    }

}

exports.createNewSignup = async (req, res, next) => {
    let {email, city, phoneNumber, userName, password} = req.body;
    let signup = new Signup(email, city, phoneNumber, userName, password);
    signup = await signup.save();
    console.log(signup)
    res.send("Create New Signup");
}

exports.getSignupById = async (req, res, next) => {
    res.send("get Signup By Id");
}