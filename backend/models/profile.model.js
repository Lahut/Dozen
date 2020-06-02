const mongoose = require('mongoose');
const ProfileSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
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
    }

});

const Profile = mongoose.model('Profile',ProfileSchema);
module.exports = Profile;