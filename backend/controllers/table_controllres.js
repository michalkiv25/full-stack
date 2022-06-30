// import from to project
const {Table , schemavalidation} = require("../modals/Table");
const HttpError = require("../modals/http-error");
const User= require("../modals/User")


exports.getAllTable= async (req,res,next)=>{  //get all row table
    try{
        const allTable= await Table.find().populate('nameCreate')
        res.status(200).json({allTable})
    }catch(err) {
        res.status(500).send(err).json({mes:err})
    }
}

exports.getOneRowTable=  async (req,res,next)=>{  //Get One row table
    const getOneRow= req.params.id
    try{
        const oneRowTable= await Table.find(item =>item.id == getOneRow) // Option to do also with filter  And just add that if if the length of the object from the filter is equal to 0 then return
        if(!oneRowTable)
        if(oneRowTable) return res.status(200).json({allTable})
    }catch(err) {
        res.status(500).send(err).json({mes:err})
    }
}

exports.tablePost =  async (req,res,next)=>{ 
    // const { path: image } = req.file;
    const {firstName, LastName, email, gender, status, nameCreate} = req.body; //Distraction parametrs of table user
    
    //Lets Validate 
    const {error} = schemavalidation(req.body)
    if (error) return res
    .status(400)
    .send(error.details[0].message);


    // let ff= await User.find(nameCreate);
    // if(!ff){
    //     return res.status(404).json({ // If it gets here it stops the function and it will not be saved in the database thanks to the retren
    //         message: 'Category not found'
    //     })
    // }
 
    // Cheking if the user is already in the db
    let userfind = await Table.findOne({email});
    if (userfind) //OR  usercheck.length >= 1
    return res
        .status(409)
        .send("User with this email already exists, try again");

    const tableUser= new Table({ //create new row in table
        firstName,
        LastName,
        email,
        gender,
        status,
        // image : image.replace('\\','/'), //Not to be saved with 2 slashers, usually in windows
        // image: req.file.image,
        nameCreate
    })
    try{
        const save_tableUser= await tableUser.save(); //save in db
        res.status(201).json({message: 'successful save new row in a table'})
    }
    catch(err) {
        res
        .status(400).send(err)
        .json({mes:err})
    }
}

exports.deletePost = async (req,res,next)=>{ //Delete a row that the user selects
    const tableIdUser = req.params.tableId;
    try{
        // Table= Table.filter(item => item.id !== tableIdUser)//Another option
        const rowFromTableDelete = await Table.findOneAndDelete( tableIdUser);// find && delete
        console.log(rowFromTableDelete)
        if (!rowFromTableDelete) {
            // return res.status(404).send('The row with the given ID was not found.');
            throw new new HttpError("Could not find row for the provided",404)
        }
        res.send(rowFromTableDelete); // send the user the card before the deletion
    }catch(err) {
        res
        .status(500).send(err)
        .json({mes:err})
    }    
}

exports.updateRowTable = async (req,res,next)=>{
    const tableIdUser = req.params.tableId;
    //Lets Validate 
    const {error} = schemavalidation(req.body)
    if (error) return res
    .status(400)
    .send(error.details[0].message);

    const foundRow=await Table.findById(tableIdUser) //Search for an object according to the user's choice
    //another option not need function updateOne
    // const foundRow= await {...Table.find(item => item.id === tableIdUser ) }
    // const index= Table.findIndex(item => item.id === tableIdUser)
    // foundRow.email= email;
    // foundRow.firstName= firstName;
    // Table[index]= foundRow
    if(!foundRow){
        return res.status(404).json({
            message: 'Row not found'
        })
        // return next(new HttpError("Row not found",404))
    }

    try{
        const updateRowFromUser= await Table.updateOne({ _id: tableIdUser }, req.body);
        console.log('updateRowFromUser', updateRowFromUser)
        if(!updateRowFromUser) return res.status(404).send('The row with the given ID was not found.');
        res.status(200).json({
            message: 'Row Updated'
        })
    }catch(err) {
        res
        .status(500).send(err)
        .json({mes:err})

    }  
}




// exports.getAllTable = getAllTable;
// exports.getOneRowTable = getOneRowTable;
// exports.tablePost = tablePost;
// exports.deletePost = deletePost;
// exports.updateRowTable = updateRowTable;