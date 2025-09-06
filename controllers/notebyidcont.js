const {userData} = require('../models/users');
const {noteData} = require('../models/Note');

const notebyid = async (req, res) => {
    try {
        const user = userData.find();
        const note = noteData.find();
        const { id } = req.body;
        if (!id) {
            res.status(400).json({ message: 'id is required' });
        }else if (id!==userData) {
            res.json ({ message: 'id not found' });         
        }else if (id) {           
               res.status(200).json({note});
        }else if (!note) {
                return res.status(404).json({ message: 'note not found' });
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports = {notebyid};