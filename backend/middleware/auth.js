const jwt = require('jsonwebtoken');
const config = require("config");
const HttpError = require("../modals/http-error");

const checkAuth = (req, res, next) => {
    if (req.method === 'OPTIONS') {
        return next();
    }
    // const token = req.headers.authorization.split(' ')[1]; // Authorization: 'Bearer TOKEN'
    //     if (!token) {
    //         throw new Error('Authentication failed!');
    //     }
    const token = req.header("x-auth-token");
    if(!token)
    return res.status(401).send("Access denied. No token provided");
    try {
        const decoded = jwt.verify(token, config.get("jwtKeyToken"));
        req.userData = { userId: decoded.id }; // id of nameCreate
        console.log(req.userData.userId)
        next();
    } catch(error) {
        res.status(401).json({
            message: 'Auth failed'
        })
        // const error = new HttpError('Authentication failed!', 403);
        // return next(error);
    }
}

module.exports = checkAuth;