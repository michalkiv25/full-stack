const jsonWebToken = require('jsonwebtoken');
const config= require("config");


exports.CreateToken = (data) => {
  const iat = Math.floor(Date.now() / 1000) - 30; // 30 sec
  const ttl = +(config.get('JWT_EXPIRATION_SECONDS')); // time to live in seconds
  const payload = {
    exp: iat + ttl, // expiration time 1 hour
    nbf: iat, // valid from
    iat, // created at
    data, //_id number + email
  };
  
  return jsonWebToken.sign(payload, config.get('jwtKeyToken')); //token
};
