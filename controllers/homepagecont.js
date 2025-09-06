const { userData } = require('../models/users');
const { noteData } = require('../models/Note');
const { categoryData } = require('../models/Category');


const homepage = async (req, res) => {
    try {
        const user = userData.find();
        const note = noteData.find();
        const category = categoryData.find();
        if (!username || !email || !password) {
            res.status(400).json({ message: 'All fields are required' });
        } else if (user || password !== userData) {
            res.json({ message: 'User or password not found' });
        } else if (user===userData && password===userData) {
            res.status(200).json({ user, note, category });
        } else if (!note || !category) {
            res.status(404).json({ message: "Not Found" });
        }
        } catch (error) {
            console.log(error);
        }
    }

module.exports = { homepage }