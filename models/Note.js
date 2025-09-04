const mangoose = require('mongoose');


const noteSchema = new mangoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    ownerUsername: {
        type: String,
        required: true,
    },
    categoryName: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mangoose.model('Note', noteSchema);