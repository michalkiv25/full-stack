const Joi = require('joi');

module.exports = {

  // POST /api/login/add
  loginValidation: {
    body: Joi.object({
      email: Joi.string().min(4).required(), //.alphanum()
      password: Joi.string().min(6).max(9).required(), //.alphanum()
    }),
  },

  // POST /api/register/add
  registerValidation: {
    body: Joi.object({
      email: Joi.string().min(4).required(),
      password: Joi.string().min(6).max(9).required(),
    }),
  },

};
