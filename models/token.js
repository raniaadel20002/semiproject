const moongoose = require('mongoose');

const tokenSchema = new moongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    token: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = moongoose.model('Token', tokenSchema);