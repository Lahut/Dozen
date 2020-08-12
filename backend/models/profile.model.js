const mongoose = require('mongoose');
const ProfileSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    KYCstatus:{
        type: String, default: 'Not approve'
    },
    tp:{
        type: Number , default: 0
    },
    firstName:{
        type: String
    },
    lastName: {
        type: String
    },
    facebook : {
        type: String
    },
    line : {
        type : String
    },
    instagram : {
        type : String
    },
    twitter : {
        type : String
    }

});

const Profile = mongoose.model('Profile',ProfileSchema);
module.exports = Profile;