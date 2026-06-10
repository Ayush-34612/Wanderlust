const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const User = require('../models/user.js');
const wrapAsync = require('../utils/wrapAsync');
const passport = require('passport');
const { saveRedirectTo } = require('../middleware.js');

const userController = require('../controllers/users.js');

//Register and Login Routes
router.route("/signup").get(userController.renderSignupForm)
    .post(wrapAsync(userController.signup));

//Login Route    
router.route("/login").get(userController.renderLoginForm)
    .post(saveRedirectTo, passport.authenticate("local", {
        failureRedirect: "/users/login",
        failureFlash: true
    }), userController.login);

//Logout Route
router.get("/logout", userController.logout);

module.exports = router;