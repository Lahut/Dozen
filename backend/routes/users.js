const router = require('express').Router();
let User = require('../models/user.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');

require('dotenv').config();


router.route('/add',[
    check('username',"Username is required").isEmpty(),
    check('email',"Email is required").isEmpty(),
    check('password',"Please enter a password with 6 or more characters").isLength({ min: 6})
]).post(async (req,res) => {  // handle http post requests
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({errors: errors.array()});
    }

    const username =  req.body.username;
    const password =  req.body.password.toString();
    const email =  req.body.email;

    try{
        let user = await User.findOne({username});
        if(user){
            return res.status(400).json("User already exist.");
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

module.exports = router;

