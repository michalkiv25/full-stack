const express = require('express');
const router = express.Router();

const registerRoute = require("./users/register");
const login = require("./users/login");
const tableRoute= require("./table");


router.use("/register",registerRoute)
router.use("/login",login)
router.use("/register", tableRoute);

module.exports = router;