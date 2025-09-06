const mangoose = require('mongoose');

const session = new mangoose.Schema({
    username: {
        type: String,
        required: true,
    },
    token: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user',
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: '30s'
    },
});

const sessionData = mangoose.model('Session', session);

module.exports = {sessionData};