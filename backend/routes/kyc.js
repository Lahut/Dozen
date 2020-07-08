const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
let kyc = require('../models/kyc.model');
const multer = require('multer');
var storage = multer.memoryStorage()
const upload = multer({storage : storage  ,  limits: { fields: 2, fileSize: 6000000, files: 2, parts: 2 }});

router.post('/kyc/upload',upload.array('file',2), (req,res) => {
    var bucket = new mongodb.GridFSBucket(db,{bucketName:'PhotosTest'});
    const Allfile = req.files;
    Allfile.map(type => {
      var type = type.mimetype;
      if( type !== "image/jpeg" && type !== "image/png"){  // always true T_T มันเป็น jpeg แต่ไม่ใช่ png
        return res.json({message: 'Please select image file.'});
      }
    })



    
    const readablePhotoStream1 = new Readable();
    const readablePhotoStream2 = new Readable();
    
    readablePhotoStream1.push(req.files[0].buffer)  // buffer from multer storage
    readablePhotoStream1.push(null);

    readablePhotoStream2.push(req.files[1].buffer)  // buffer from multer storage
    readablePhotoStream2.push(null);
    
    

    let uploadStream1 = bucket.openUploadStream(randomstring.generate());
    readablePhotoStream1.pipe(uploadStream1);
    //readablePhotoStream2.pipe(uploadStream);
    let uploadStream2 = bucket.openUploadStream(randomstring.generate());
    readablePhotoStream2.pipe(uploadStream2);



    
    uploadStream1 && uploadStream2 .on('error', () => {
        return res.status(500).json({ message: "Error uploading file" });
      });
  
    uploadStream1 && uploadStream2 .on('finish', () => {
        return res.json({files: req.files});
      }); 
})




module.exports = router;
