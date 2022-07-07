const fs = require('fs');

// import from to project
const {Table , schemavalidation} = require("../modals/Table");
const HttpError = require("../modals/http-error");
const User= require("../modals/User")


exports.getAllTable= async (req,res,next)=>{  //get all row table
    try{
        const allTable= await Table.find().populate('nameCreate')
        // if (allTable.length === 0) {
        //     return next(
        //       new HttpError('Could not find row in table.', 404)
        //     );
        // }
        res.status(200).json({allTable})
        // res.json({
        //      allNameCreate: allTable.nameCreate.map(row =>
        //       row.toObject({ getters: true })
        //     )
        // });
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
    const {firstName, LastName, email, gender, status, nameCreate} = req.body; //Distraction parametrs of table user

    //Lets Validate 
    const {error} = schemavalidation(req.body)
    if (error) return res
    .status(400)
    .send(error.details[0].message);

    // let ff= await User.findById(nameCreate);
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
        image: req.file.path, //add from from-data, not body
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
        const rowFromTableDelete = await Table.findOneAndDelete( tableIdUser).populate('nameCreate');// find && delete
        if (!rowFromTableDelete) {
            // return res.status(404).send('The row with the given ID was not found.');
            throw new new HttpError("Could not find row for the provided",404)
        }

        if (rowFromTableDelete.nameCreate.id !== req.userData.userId) {//nameCreate at row == nameCreate from token
            const error = new HttpError(
            'You are not allowed to delete this row.',
            401
            );
            return next(error);
        }

        const imagePath = rowFromTableDelete.image; //delete from backend
        fs.unlink(imagePath, err => {
            console.log(err);
        });

        res.send({delete:imagePath , message:'Deleted place.'}); // send the user the card before the deletion
 
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

    if (foundRow.nameCreate.toString() !== req.userData.userId) { //nameCreate at row == nameCreate from token
        const error = new HttpError('You are not allowed to edit this row.', 401);
        return next(error);
    }

    try{
        const updateRowFromUser= await Table.updateOne({ _id: tableIdUser }, req.body);
        if(!updateRowFromUser) return res.status(404).send('The row with the given ID was not found.');
        // foundRow.firstName= req.body.firstName
        //  await foundRow.save();
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