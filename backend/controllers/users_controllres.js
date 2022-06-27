const debug = require('debug')('app');// Avoid console.log printing
const bcrypt = require("bcrypt"); // Password encryption
const jwt= require('jsonwebtoken');//token
const config= require("config");//Information storage - hidden
const _ = require('lodash'); //Return some of the information the customer sent back to it, i.e. filter information
const httpStatus = require('http-status');
//import from project
const {User,schemavalidation} = require("../modals/User");
const HttpError = require("../modals/http-error");
const { CreateToken } = require('./auto.controller');
const Response = require('../handlers/response');




const loginpost =async (req,res,next) =>{

    const {email,password} = req.body; //Distraction parametr of user

    //Lets Validate 
    const {error} = schemavalidation(req.body)
    if (error) return res
    .status(httpStatus.BAD_REQUEST)//400
    .send(error.details[0].message);

    // Cheking if the user is already in the db
    let user = await User.findOne({ email });
    // let user= await User.find(item = item.email === email) //Add Option
    if (!user) throw new HttpError("Could not identify user, credentials seem to be wrong", 401);
    //check if password find in db return true/false
    const validPassword = await bcrypt.compare(password, user.password); 
    if (!validPassword) return res.status(httpStatus.BAD_REQUEST).send("Invalid email or password, could not log you in.");
    if(validPassword){
      //two Options to get token
      //expiration time
      const iat = Math.floor(Date.now() / 1000) - 30;
      const ttl = +(config.get('JWT_EXPIRATION_SECONDS')); // time to live in seconds
        const token = jwt.sign({ //get token
            id: user._id,
            email: user.email,
        },
        config.get("jwtKeyToken"),
        {
            // expiresIn: "1H" //Corrected time
            expiresIn: iat + ttl //Corrected time
        });
      // const token = CreateToken({id: user._id, email: user.email});
      // const response = new Response({ success: true, token });
        return res.status(httpStatus.OK).json({ //200
            message: 'Auth successful',
            token
        })
    }
    res.status(httpStatus.UNAUTHORIZED).json({ //401
        message: 'Auth failed'
    });

}

// הרשמה
const registerPost =async (req,res,next) =>{

    const {email,password} = req.body; //Distraction parametr of user

    //Lets Validate 
    const {error} = schemavalidation(req.body)
    if (error) return res
    .status(400)
    .send(error.details[0].message);

    // Cheking if the user is already in the db
    let userfind = await User.findOne({email});
    if (userfind) //OR  usercheck.length >= 1
    return res
        .status(httpStatus.CONFLICT)//409
        .send("User with this email already exists, try again");
        // const error = new HttpError(
        //     'User exists already, please login instead.',
        //     422
        //   );
        //   return next(error);

      //Hash password
      const salt = await bcrypt.genSalt(10);
      const secretPassword= await bcrypt.hash(password, salt)
       
    // creacte a new logins
      const userNew= new User({
        email,
        password: secretPassword,
      })

      try{
        const save_user= await userNew.save();
        // const response = new Response({ success: true, save_user });
        res.status(httpStatus.CREATED).json(_.pick(save_user,["email", "date", "_id"]))//Select keys to send from the object to the user //201
        // .json(response);
      }
      catch(err) {
          res
          .status(httpStatus.BAD_REQUEST).send(err)
          .json({mes:err})
        //   const error = new HttpError(
        //     'Signing up failed, please try again later.',
        //     500
        //   );
        //   return next(error);
      }
}


exports.loginpost = loginpost;
exports.registerPost = registerPost;