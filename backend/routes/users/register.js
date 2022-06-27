const express= require('express');
const router= express.Router();
const { registerValidation } = require('../../validations/validation');
const { validate } = require('express-validation');// Validate Option



// import from to project
const registerControllres = require("../../controllers/users_controllres");

router
    .route("/add")
    .post(
        validate(registerValidation),
        registerControllres.registerPost)
    

module.exports = router;