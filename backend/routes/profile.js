const express = require('express');
const router = express.Router();
const Profile = require('../models/profile.model');
const auth = require('../../middleware/auth');
const User = require('../models/user.model');

const { check, validationResult} = require('express-validator');



router.get('/me',auth, async (req, res) => {
    try{
        const profile = await (await Profile.findOne({ user: req.user.id }));

        //if(!profile){
        //   return res.status(400).json({ msg: 'There is no profile for this user'});
        //}
        
        res.json(profile);
        

    } catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

router.post('/',[
    auth,
    [
        check('firstName','Firstname is required').not().isEmpty(),
        check('lastName','Lastname is required').not().isEmpty()
] ] , async (req,res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    }

    const {
        firstName,
        lastName
    } = req.body;
    // Build profile object
    const profileFields = {};
    profileFields.user = req.user.id;  // by token
    if(firstName) profileFields.firstName = firstName;
    if(lastName) profileFields.lastName = lastName;

    try{
        let profile = Profile.findOne({ user: req.user.id}); // find from User _id

        if(profile) {
            //update
            profile = await Profile.findOneAndUpdate(
                {user: req.user.id},
                {$set: profileFields},
                {new: true}
            );
        }


        profile = new Profile(profileFields);
        
        await profile.save();
        return res.json(profile);


        


    }catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');

    }
    
    


});
    // @route GET/profile 
    // @desc  GET all profile
    //@access Public

    router.get('/', async (req,res) => {
        try{
            const allProfile =  await Profile.find().populate('user',['email','username']);
        
            res.json(allProfile);

        }catch(err){
            console.error(err.message);
            res.status(500).send('Server Error');
        }
        

    });

    //@route GET /profile/user/:user_id
    //@desc  Get profile by userID
    //@access Public

    router.get('/user/:user_id', async (req,res) => {
        try{
            const profile = await Profile.findOne({user: req.params.user_id});   
            
            if(!profile){
                return res.status(400).json({msg: 'There is no profile for this user'});
            } 

            return res.json(profile);
        }catch(err){
            console.error(err.message);
            if(err.kind == 'ObjectId'){
                return res.status(400).json({msg: 'There is no profile for this user'});
            }
            return res.status(500).send('Server Error');
        }
    });

    //@route DELETE /profile
    //@desc  Delete profile, user & posts
    //@access Private can access to token (payload)
    router.delete('/',auth, async(req,res) => {
        await Profile.findOneAndRemove({ user: req.user.id});

        await User.findOneAndRemove({_id: req.user.id});


        res.json({msg: 'User deleted'});
        

    });
module.exports = router;





