const {userData}= require('../models/users');

const start = async(req, res) => {
    try {
        const user = userData.find();
        const { username, email, password } = req.body;
        if (!username || !email || !password) {
            res.status(400).json({ message: 'All fields are required' });
        }
        else if (user) {
            res.status(200).json({user});
        }else{
            res.status(404).json({message: "Not Found"});
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports = {start};