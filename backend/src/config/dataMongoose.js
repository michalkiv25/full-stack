const mongoose = require("mongoose");//Library mongoose // More option mongosClient
// let URL_ATLAS="mongodb+srv://fullstack:P%40ssw0rd%231@cluster0.njv2z.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

//Conect for db
const URL= "mongodb://127.0.0.1:27017/project";
mongoose.connect(URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true, 
  })
// mongoose.connection.on('connected', ()=>{
//     console.log('connected MongoDB')
// })
.then(() => console.log("Connected to MongoDB "))
.catch((error) => console.log("Could not connect to MongoDB....", error));


module.exports={
    mongoose
};