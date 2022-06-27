const multer = require('multer'); //External library for uploading photos

// const { v4: uuidv4 } = require('uuid');
// const MIME_TYPE_MAP = {//mine type of omg
//     'image/png': 'png',
//     'image/jpeg': 'jpeg',
//     'image/jpg': 'jpg'
// };
// // module.exports = upload;
// const fileUpload = multer({ //get object
//     limits: 1024 * 1024 * 2, //size img
//     storage: multer.diskStorage({
//       destination: (req, file, cb) => {  //path storage
//         cb(null, 'uploads/images'); //A folder we opened,For the above folder he will upload the files
//       },
//       filename: (req, file, cb) => {
//         const ext = MIME_TYPE_MAP[file.mimetype];
//         cb(null, uuid() + '.' + ext);
//       }
//     }),
//     fileFilter: (req, file, cb) => {
//       const isValid = !!MIME_TYPE_MAP[file.mimetype]; //if its true or false
//       let error = isValid ? null : new Error('Invalid mime type!');
//       cb(error, isValid);
//     }
//   });
  
//   module.exports = fileUpload;


const storage = multer.diskStorage({
    destination: (req, file, cb) => { // key of data img
        cb(null, 'uploads/images/');
    },
    filename: (req, file, cb) => {// key of data img
        cb(null, `${Date.now()}-${file.originalname}`);
    }
})

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    }
    cb(null, false)
}

const upload = multer({ //get object
    // dest: 'uploads/',
    storage,
    limits: {
        fileSize: 1024 * 1024 * 2
    },
    fileFilter
});

module.exports = upload;


