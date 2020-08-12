const express = require('express');
const cors  = require('cors');
const mongoose = require('mongoose');
var bodyParser = require("body-parser");

require('dotenv').config();
let db;

const app = express();
const port = process.env.PORT || 5000;


app.use( cors() );
app.use(express.json());
app.use(bodyParser.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true , useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false},(err,database ) => {
    if(err) {
        console.log('MongoDB Connection Error. Please make sure that MongoDB is running.');
        process.exit(1);
    }
    db=database;
});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection successfully");
})


const usersRouter = require('./routes/users');
const authRouter = require('./routes/auth');
const profileRouter = require('./routes/profile');


app.use('/users',usersRouter);
app.use('/auth',authRouter);
app.use('/profile',profileRouter);




app.listen(port,() => {
    console.log(`Server is running on port: ${port}`);
})