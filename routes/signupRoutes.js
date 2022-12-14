const express = require('express');
const router = express.Router();
const signupControllers = require('../controllers/signupControllers')
// @route GET & POSt - /signups/
router
.route("/")
.get(signupControllers.getAllSignups)
.post(signupControllers.createNewSignup);

router
.route("/:id")
.get(signupControllers.getSignupById);
// const HomeController = require('../app/controllers/HomeController');
// const AuthController = require('../app/controllers/AuthController');

// router.get('/', HomeController.homePage);
// router.get('/login', AuthController.loginPage);
// router.post('/login', AuthController.login);
// router.post('/logout', AuthController.logout);
// router.get('/sign-up', AuthController.signUpPage);
// router.post('/sign-up', AuthController.signUp);
// router.get('/forgot-password', AuthController.forgotPasswordPage);
// router.post('/forgot-password', AuthController.forgotPassword);

module.exports = router;