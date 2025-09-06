const { userData} = require('../models/users');
const bcrypt = require('bcrypt');
const {otpData} = require('../models/otp');

const forgetpassword = async (req, res) => {
    const { email } = req.body;
    try {
        const user = await userData.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        const otp = await otpData.findOne({ email });
        if (!otp) {
            return res.status(400).json({ message: 'OTP not found' });
        }
        const tokenData = new token({ username: user.username, token });
        await tokenData.save();
        res.status(200).json({ message: 'OTP sent successfully' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = { forgetpassword };
