const {userData} = require('../models/users');

const changeprofilepassword = async (req, res) => {
    try {
        const user = userData.find();
        const { username, email, password } = req.body;
        if (!username || !email || !password) {
            res.status(400).json({ message: 'All fields are required' });
        }
        else if (user) {
            const hashedPassword = await bcrypt.hash(password, 10);
            user.password = hashedPassword;
            await user.save();
            res.status(200).json({ message: 'Password updated successfully' });
        }
        else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports = {changeprofilepassword};