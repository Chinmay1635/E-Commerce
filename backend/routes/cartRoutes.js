const express = require('express');
const router = express.Router();
const {isLoggedIn} = require('../middlewares/isLoggedIn');

const {addToCart, removeFromCart, getCart} = require('../controllers/Cart');

router.put('/add',isLoggedIn, addToCart);
router.put('/remove',isLoggedIn, removeFromCart);
router.get('/get', isLoggedIn, getCart);

module.exports = router;