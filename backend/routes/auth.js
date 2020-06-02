const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const User = require('../models/user.model');
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();


router.get('/',auth, async (req,res) => {
    try{
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);

    } catch(err){
        console.error(err.message);
        res.status(500).send('server error');

    }
});


// POST api/auth

router.route('/',[
    check('username',"Username is required").isEmpty(),
    check('password',"Please enter a password with 6 or more characters").exists()
]).post(async (req,res) => {  // handle http post requests
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({errors: errors.array()});
    }

    const username =  req.body.username;
    const password =  req.body.password.toString();

    try{
        let user = await User.findOne({username});
        if(!user){
            return res.status(400).json({errors: [{msg: 'Invalid Credentials'}]});
        }

        const isMatch = await bcrypt.compare(password,user.password);

        if(!isMatch){
            return res.status(400).json({errors: [{msg: 'Invalid Credentials'}]});
        }

        const payload = {
            user:{
                id: user.id
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