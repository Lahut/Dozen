const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userScheam =  new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    }
},{
    timestamps: true,
});

const user = mongoose.model('User', userScheam);

module.exports = user;