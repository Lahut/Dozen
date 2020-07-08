const mongoose = require('mongoose');
const KycSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    firstName : {
        type: String,
        required: true
    },
    lastName : {
        type: String,
        required: true
    },
    birthDay : {
        type: Date,
        required: true
    },
    sex : {
        type: String,
        default: 'Not specified'
    },
    status : {
        type: String,
        required: true
    },
    KYCstatus : {
        type: String,
        required: true,
        default: 'Not approve'
    },
    tel : {
        type: String,
        required: true
    },
    address : {
        type: String,
        required: true
    },
    imgPassportID : {
        data: Buffer, ContentType: String
    },
    imgSelfie :{
        data: Buffer, ContentType: String
    }
});

const KycProfile = mongoose.model('KycProfile',KycSchema);
module.exports = KycProfile;