const router = require('express').Router();
let User = require('../models/user.model');


router.route('/').get((req,res) => { // handle http get request 
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: '+ err));

});

router.route('/add').post((req,res) => {  // handle http post requests

    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;

    const newUser = new User({username,password,email});

    newUser.save()  //save to database
        .then(() => res.json('Register successfully!'))
        .catch(err => res.status(400).json('Error: ' + err));


});

router.route('/login').get((req,res) => {
    const username = req.body.username;
    const password = req.body.password;

    User.findOne({username: username, password: password},function(err,user){
        if(err){
            console.log(err);
            return res.status(500).json('Error: ' + err);
        }
        if(!user){
            return res.status(404).json('Error: ' + err);
        }

        return res.status(200).json('Login successfully!');
    })

});

module.exports = router;

