const User = require('../models/user.js')

// Get all the users
exports.getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        next(error);
    }
};

// Create a new user
exports.createUser = async (req, res, next) => {

    const { firstname, lastname, username, email, password, street, city, state, zip_code, phone_number } = req.body;

    try {
        const user = new Cart({
            firstname: firstname,
            lastname: lastname,
            username: username,
            email: email,
            password: password,
            address: [{ street, city, state, zip_code }],
            phone_number: phone_number,
            created_at: new Date(),
            updated_at: new Date(),
        });

        await user.save();
        res.json(user);
    } catch (error) {

    }
};

// Get a single user
exports.getUserByEmail = async (req, res, next) => {
    const { email } = req.email;
    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(404).send('User not found');
        res.json(user);
    } catch (error) {
        next(error);
    }
};

// Update the user
exports.updateUser = async(req, res, next) => {
    const { firstname, lastname, username, email, street, city, state, zip_code, phone_number } = req.body;
    try {
        const user = await User.findOne({email});
        if (!user) return res.status(404).send('User not found');
        if(firstname) user.firstname = firstname;zip_code
        if(lastname) user.lastname = lastname;
        if(username) user.username = username;
        if(street) user.address.street = street;
        if(city) user.address.city = city;
        if(state) user.address.state = state;
        if(zip_code) user.address.zip_code = zip_code;
        if(phone_number) user.phone_number = phone_number;

        user.updated_at = new Date();

        await user.save();
        res.json(user);
    } catch (error) {
        next(err);
    }
};

// Delete the user
exports.deleteUser = async (req, res, next) => {
    const { email } = req.email;
    try {
        const user = await user.findOne({ email });
        if (!user) return res.status(404).send('user not found');
        await user.remove();
        res.send(`User deleted successfully`);
    } catch (err) {
        next(err);
    }
};