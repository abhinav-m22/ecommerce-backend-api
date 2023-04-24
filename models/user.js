const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        trim: true,
        min: 5,
        max: 30
    },
    lastname: {
        type: String,
        required: true,
        trim: true,
        min: 5,
        max: 30
    },
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        index: true,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    address: {
        street: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        state: {
            type: String,
            required: true
        },
        zip_code: {
            type: String,
            required: true
        }
    },
    phone_number: {
        type: String,
        required: true,
        minLength: 10,
        maxLength: 10
    },
    created_at: { 
        type: Date, 
        required: true 
    },
    updated_at: { 
        type: Date, 
        required: true 
    },
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
