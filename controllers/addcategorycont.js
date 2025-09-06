const {userData} = require('../models/users');
const {categoryData} = require('../models/Category');


const addCategory = async (req, res) => {
    try {
        const user = userData.find();
        const { username, email, password } = req.body;
        if (!username || !email || !password) {
            res.status(400).json({ message: 'All fields are required' });
        } else if (user || password !== userData) {
            res.json({ message: 'User or password not found' });
        } else if (user) {
            const category = await categoryData.create(req.body);
            res.status(201).json({ category });
        } else if (!category) {
            return res.status(404).json({ message: 'note not found' });
        }
    } catch (error) {
        console.log(error);
    }
};

module.exports = { addCategory };