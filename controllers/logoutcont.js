const {userData} = require('../models/users');

const logout = async (req, res) => {
    try {
        await req.session.destroy();
        res.status(200).json({ message: 'Logout successful' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = { logout };