const moongoose = require('mongoose');

const otp = new moongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    otp: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 300
    },
});

const otpData = moongoose.model('Otp', otp);

module.exports = {otpData};