const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = function(req,res,next){  //next is callback when done
    //Get token from header
    const token = req.header('x-auth-token');
    

    //Check if not token
    if(!token){
        return res.status(401).json({msg: 'No token,authorization denied'});

    }

    try{
        const decoded = jwt.verify(token,process.env.jwtSecret);

        req.user = decoded.user;
        next();


    }catch(err){
        return res.status(401).json({msg: 'Token is not valid'});

    }
    

}