const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    roles: {
        type: String,
        enum: ['customer', 'admin'],
        default: 'customer'
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;