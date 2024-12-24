const jwt = require('jsonwebtoken');
require('dotenv').config();
module.exports =  (user) => {
        return jwt.sign({
            username: user.username,
            email: user.email,
        }, process.env.JWT_SECRET, {
            expiresIn: '30d'
        });
    }
