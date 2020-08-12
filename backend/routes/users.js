const express = require('express');
const router = express.Router();
let User = require('../models/user.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');
require('dotenv').config();


router.post('/add',[
    check('username',"Username is required").not().isEmpty(),
    check('email',"Email is required").not().isEmpty(),
    check('password',"Please enter a password with 6 or more characters").isLength({ min: 6})
],async (req,res) => {  // handle http post requests
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    const username =  req.body.username;
    const password =  req.body.password.toString();
    const email =  req.body.email;

    try{
        let user = await User.findOne({username});
        const error_msg = "User already exist."
        if(user){
            return res.status(400).json({error_msg});
        }


        const newUser = new User({username,password,email});

        //encrypt
        const  salt = await bcrypt.genSalt(10);
        newUser.password = await bcrypt.hash(password,salt);

        newUser.save();  //save to database


        const payload = {
            user:{
                id: newUser.id
            }
        }
        jwt.sign(
            payload,
            process.env.jwtSecret,
            { expiresIn: 360000 },
            (err,token) => {
                if(err) throw err;
                return res.json({token}); // send token back to client
            }
            );
    }catch(err){
        console.log(err.message);
        return res.status(500).send('Server error: '+err);
    }

    




    

    


});




var storage = multer.memoryStorage()
const upload = multer({storage : storage  ,  limits: { fields: 2, fileSize: 6000000, files: 2, parts: 2 }});
require('dotenv').config();



router.post('/kyc/upload',auth,[
  check('firstName',"Username is required").not().isEmpty(),
  check('lastName',"Email is required").not().isEmpty(),
  check('Bday',"Birth Day is required").not().isEmpty(),
  check('tel',"Phonenumber is required").not().isEmpty(),
  check('passportID',"Passport ID photo is required").not().isEmpty(),
  check('Selfie',"Selfie photo with passport ID is required").not().isEmpty(),
],upload.array('file',2), async (req,res) => {
    var bucket = new mongodb.GridFSBucket(db,{bucketName:'KycUsers'});
    const Allfile = req.files;
    Allfile.map(type => {
      var type = type.mimetype;
      if( type !== "image/jpeg" && type !== "image/png"){  // always true T_T มันเป็น jpeg แต่ไม่ใช่ png
        return res.json({message: 'Please select image file.'});
      }
    })

    
    
    let KycProfile = req.body;
    KycProfile.user = req.body.user;

    try{

      const readablePhotoStream1 = new Readable();
      const readablePhotoStream2 = new Readable();
      
      readablePhotoStream1.push(req.files[0].buffer)  // buffer from multer storage
      readablePhotoStream1.push(null);

      readablePhotoStream2.push(req.files[1].buffer)  // buffer from multer storage
      readablePhotoStream2.push(null);
      
      

      let uploadStream1 = bucket.openUploadStream(randomstring.generate(),{metadata:{User:KycProfile}});
      readablePhotoStream1.pipe(uploadStream1);
      //readablePhotoStream2.pipe(uploadStream);
      let uploadStream2 = bucket.openUploadStream(randomstring.generate(),{metadata:{User:KycProfile}});
      readablePhotoStream2.pipe(uploadStream2);



      
      uploadStream1 && uploadStream2 .on('error', () => {
          return res.status(500).json({ message: "Error uploading file" });
        });
    
      uploadStream1 && uploadStream2 .on('finish', () => {
          return res.json({files: req.files});
        }); 


    }catch{
      console.log(err.message);
      return res.status(500).send('Server error: '+err);
    }
})



module.exports = router;

