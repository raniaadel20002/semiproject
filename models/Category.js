const mangoose = require('mongoose');

const categorySchema = new mangoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    ownerUsername: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mangoose.model('Category', categorySchema);