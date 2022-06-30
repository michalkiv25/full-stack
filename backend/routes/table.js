const express = require("express");
const router = express.Router();
// import from to project-
const tableControllres = require("../controllers/table_controllres.js");
const auth = require("../middleware/auth");
const fileUpload= require("../middleware/file-upload");

router.get("/table",tableControllres.getAllTable);

// router.use(auth); //Middlever for all the routs below Either write or in the middle

router
    .route("/table/:id")
    .get(tableControllres.getOneRowTable)
router.post("/table",fileUpload.single('image'),tableControllres.tablePost); //.single- Upload a single file by image key
router.delete("/table/:tableId",tableControllres.deletePost );
router.put("/table/:tableId",fileUpload.single('image'), tableControllres.updateRowTable );

module.exports = router;