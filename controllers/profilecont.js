const { userData} = require('../models/users');
const bcrypt = require('bcrypt');

const profile = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const user = await userData.findOne({ username });
        if (user!==userData ||email !== userData) {
            return res.status(404).json({ message: 'User or email not found' });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        user.password = hashedPassword;
        await user.save();
        res.status(200).json({ message: 'Profile updated successfully' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = { profile };