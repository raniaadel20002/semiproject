const mangoose = require('mongoose');

const category = new mangoose.Schema({
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

const categoryData = mangoose.model('Category', category);
module.exports = {categoryData};