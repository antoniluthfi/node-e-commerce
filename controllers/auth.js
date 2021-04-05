const User = require('../models/user');

exports.createOrUpdateUser = async (req, res) => {
    const { name, picture, email } = req.user;

    // check if user already exist in db, we update
    // if doesn't axist, we create new one
    const user = await User.findOneAndUpdate({ email }, { name: email.split('@')[0], picture }, { new: true });

    if(user) res.json(user);
    else {
        const newUser = await new User({
            name: email.split('@')[0], 
            email,
            picture
        }).save();
        res.json(newUser);
    }
}