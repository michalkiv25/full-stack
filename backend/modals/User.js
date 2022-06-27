const mongoose = require('mongoose');
const Joi = require("joi"); //Validation

const userSchema = new mongoose.Schema({
    email: {
        type:String,
        require:true,
        unique:true,
        minlength: 6,
        maxlength: 255,
    },
    password:{
        type:String,
        require:true,
        minlength: 6,
        maxlength: 255,
        trim:true
    },
    date:{
        type: Date,
        default: Date.now
    },
})

//validation
const schemavalidation = data => {
    const schemaValid = Joi.object({
        email:  Joi.string().min(6).max(255).email().required(),
        password: Joi.string().min(6).max(255).required()
    })
    return schemaValid.validate(data)
}  

const User = mongoose.model('Users', userSchema);

exports.User = User;
exports.schemavalidation = schemavalidation;