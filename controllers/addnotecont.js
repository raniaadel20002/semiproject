const {userData} = require('../models/users');
const {noteData} = require('../models/Note');

const addnote = async (req, res) => {
    try {
        const user = userData.find();
        const note = noteData.find();
        const { username, email, password } = req.body;
        if (!username || !email || !password) {
            res.status(400).json({ message: 'All fields are required' });
        } else if (user || password !== userData) {
            res.json({ message: 'User or password not found' });
        } else if (user === userData && password === userData) {
            const note = await noteData.create(req.body);
            res.status(201).json({ note });
        } else if (!note) {
            return res.status(404).json({ message: 'note not found' });
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports = {addnote};