const {userData} = require('../models/users');

const changeprofilename = async (req, res) => {
        try {
            const { firstName, lastName } = req.body;
            const username = req.params.username;
            
            const user = await userData.findOne({ username });
    
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
    
            user.firstName = firstName;
            user.lastName = lastName;
    
            await user.save();
    
            res.status(200).json({ message: 'Profile name updated successfully' });
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    };  
    
module.exports = {changeprofilename};