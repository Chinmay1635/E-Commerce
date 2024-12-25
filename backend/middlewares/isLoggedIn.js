const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
module.exports.isLoggedIn = (req, res, next) => {
    try {
        const token = req.cookies.token;
        if (!token) {
            return res.status(401).json({
                status: 'fail',
                message: 'You are not logged in'
            });
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({
            status: 'fail',
            message: 'Failed to login try again'
        });
    }
}