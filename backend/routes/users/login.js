const express= require('express');
const router= express.Router();
const { validate } = require('express-validation');// Validate Option
const { loginValidation } = require('../../validations/validation');
// import from to project
const logincontrollres = require("../../controllers/users_controllres");


router
    .route("/add")
    .post(
        validate(loginValidation),
        logincontrollres.loginpost
        ); //singUp

module.exports = router;