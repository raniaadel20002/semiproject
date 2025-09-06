const {userData} = require('../models/users');

const profileenapleotp = (req, res) => {
    try {
        const user = userData.find();
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ message: 'OTP is enabled' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = { profileenapleotp };