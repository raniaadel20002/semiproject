const mangoose = require('mongoose');


const note = new mangoose.Schema({
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

const noteData = mangoose.model('Note', note);

module.exports = {noteData};