const moongoose = require('mongoose');

const otpSchema = new moongoose.Schema({
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
    },
});

module.exports = moongoose.model('Otp', otpSchema);