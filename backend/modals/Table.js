const mongoose = require('mongoose');
const Joi = require("joi"); //Validation

const userSchema = new mongoose.Schema({
    firstName: {
        type:String,
        require:true,
        minlength: 2,
        maxlength: 255,
        trim:true
    },
    LastName:{
        type:String,
        require:true,
        minlength: 2,
        maxlength: 255, 
    },
    email:{
        type:String,
        require:true,
        unique:true,
        minlength: 6,
        maxlength: 255,
    },
    gender:{
        type: String,
        require:true,   
    },
    status:{
        type:String,
        require:true,
    },
    image:{
        type:String,
        // require:true,
    },
    nameCreate:{ type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Users' },
})

//validation
const schemavalidation = data => {
    const schemaValid = Joi.object({
        firstName:  Joi.string().min(2).max(255).required(),
        LastName: Joi.string().min(2).max(255).required(),
        email:Joi.string().min(6).max(255).email().required(),
        gender:Joi.string(),
        status:Joi.string(),
        nameCreate: Joi.string().min(2)
    })
    return schemaValid.validate(data)
}  

const Table = mongoose.model('Tables', userSchema);

exports.Table = Table;
exports.schemavalidation = schemavalidation;