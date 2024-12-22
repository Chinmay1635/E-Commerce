const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    cart: {
        type: Array,
        default: []
    },
    orders: {
        type: Array,
        default: []
    },
    address: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    dateJoined: {
        type: Date,
        default: Date.now
    }

});

const userModel = mongoose.model('User', userSchema);
module.exports = userModel;