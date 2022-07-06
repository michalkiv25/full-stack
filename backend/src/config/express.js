const express = require('express');
const morgan = require('morgan'); //Prints at the terminal when there are customer requests
const cors = require('cors');//Because a server side and a client do not sit on the same port
const config= require("config");//Information storage - hidden
// const fs = require('fs');
const path = require('path');
const helmet = require('helmet');
const routes = require('../../routes');


const app = express();

//Middleware
app.use(morgan('dev'));

//Transfers everything to a literal object, Persein
app.use(express.json()) 
// app.use(bodyParser.json()); //parse body params and attach them to req.body
// app.use(bodyParser.urlencoded({ extended: true }));

//If a server side and a client side are not on the same port, cross Origin Resource Sharing
app.use(cors());
// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader(
//       'Access-Control-Allow-Headers',
//       'Origin, X-Requested-With, Content-Type, Accept, Authorization'
//     );
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
//     next();
// });

//req form header,not body
app.use(express.urlencoded({extended:false}))

//The image can be seen in the browser, on the screen]
app.use("/uploads/images",express.static(path.join('uploads', 'images')))

// secure apps by setting various HTTP headers
app.use(helmet());

// routes-endpoint
app.use(`${config.get("route")}`, routes)

//Home page screen display
app.get('/',(req,res)=>{res.send(new Date().toLocaleTimeString());}); 

// 404
app.use((req, res, next) => {
    // const error = new Error('Not Found');
    // error.status = 404;
    // next(error);
    const error= new HttpError("Could not find thid route", 404)
    throw error
})
// app.get("*", (req,res) => { //404 page
//     res
//     .status(404)
//     .json({mes:"Page nit found"})
// })

// routes-endpoint- /api
app.use(`${config.get("route")}`, routes)


//error
app.use((error, req, res, next) => {
    if(req.file){ //If there is an error, the image of will be saved to my folder
        fs.unlink(req.file.path, (err) => {
            console.log(err)
        });
    }
    if(res.headerSent){
        return next(error)
    }
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
})

module.exports = app;
