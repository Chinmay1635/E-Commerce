const express = require('express');
const router = express.Router();
const {registerUser, loginUser, getAllUsers} = require('../controllers/User');


router.post('/login', loginUser);

router.post('/signup', registerUser);

router.get('/getAllUsers', getAllUsers);

module.exports = router;