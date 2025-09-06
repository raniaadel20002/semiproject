const {userData}= require('../models/users'); 
const bcrypt = require('bcrypt');
const {otpData} = require('../models/otp');
const {tokenData} = require('../models/token');


const register = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const userExists = await userData.findOne({ username });
        const emailExists = await userData.findOne({ email });
        if (!username || !email || !password) {
            res.status(400).json({ message: 'All fields are required' });
        }
        else if (userExists) {
            res.status(400).json({ message: 'Username already exists' });
        } else if (emailExists) {
            res.status(400).json({ message: 'Email already exists' });
        } else {
            const newUser = new user({ username, email, password: hashedPassword });
            await newUser.save();
            res.status(200).json({ message: 'User registered successfully' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = { register };