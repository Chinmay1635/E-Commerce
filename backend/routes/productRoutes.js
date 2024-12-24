const express = require('express');
const router = express.Router();
const {addProductImage, upload, addProduct, removeProduct, getProducts} = require('../controllers/Product');
const {addToCart} = require('../controllers/Cart');
const {isLoggedIn} = require('../middlewares/isLoggedIn');
const multer = require('multer');
const Product = require('../models/product');

router.get('/', function(req,res){
    res.send('Welcome to E-Commerce API product add');
});

router.post('/addImage',upload, addProductImage);

router.post('/addProduct', addProduct);

router.delete('/removeProduct', removeProduct);


router.get('/all', getProducts);

module.exports = router;