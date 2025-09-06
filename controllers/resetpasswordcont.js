const {userData} = require('../models/users');
const bcrypt = require('bcrypt');
const {otpData} = require('../models/otp');
const {tokenData} = require('../models/token');


const resetpassword = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await userData.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        user.password = hashedPassword;
        await user.save();
        res.status(200).json({ message: 'Password reset successfully' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = { resetpassword };