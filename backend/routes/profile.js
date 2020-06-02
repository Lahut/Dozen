const express = require('express');
const router = express.Router();
const Profile = require('../models/profile.model');
const auth = require('../../middleware/auth');

const { check, validationResult} = require('express-validator');



router.get('/me',auth, async (req, res) => {
    try{
        const profile = await (await Profile.findOne({ user: req.user.id }));

        if(!profile){
            return res.status(400).json({ msg: 'There is no profile for this user'});
        }

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

    return res.send("Save!");
})

module.exports = router;





