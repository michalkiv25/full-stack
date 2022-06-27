// import from project
const { mongoose } = require("../src/config/dataMongoose"); //import db
// const HttpError= require("../modals/http-error");
const app = require('./config/express');



// listen to requests
const port= process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`Listening to port ${port}, click http://localhost:${port}`)
})
