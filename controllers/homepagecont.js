const User = require('../models/users');
const Note = require('../models/Note');
const Category = require('../models/Category');


const gethomepage = async(req, res) => {
    try {
        
        const user = User.find();
        const note = Note.find();
        const category = Category.find();
    } catch (error) {
        console.log(error);
    }
}