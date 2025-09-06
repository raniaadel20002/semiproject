const {userData} = require('../models/users');
const  bcrypt = require('bcrypt');
const {otpData} = require('../models/otp');
const {tokenData} = require('../models/token');

const verify = async (req, res) => {
    const { email, otp: userOtp } = req.body;
    try {
        const user = await userData.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        const otp = await otpData.findOne({ email });
        if (!otp) {
            return res.status(400).json({ message: 'OTP not found' });
        }
        const { otp: storedOtp } = otp;
        if (storedOtp !== userOtp) {
            return res.status(400).json({ message: 'Invalid OTP' });
        }
        const hashedPassword = user.password;
        const passwordMatch = await bcrypt.compare(userOtp, hashedPassword);
        if (!passwordMatch) {
            return res.status(400).json({ message: 'Password does not match' });
        }
        const tokenData = new token({ username: user.username, token });
        await tokenData.save();
        res.status(200).json({ message: 'OTP verified successfully' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = { verify };