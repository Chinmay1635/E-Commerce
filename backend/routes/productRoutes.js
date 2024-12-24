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

router.post('/add', async (req, res) => {
    try {
        const products = req.body;
        products.forEach(product => {
            // await Product.create(product);
        });
        // await Product.insertMany(products);
        res.status(201).json({ status: 'success', message: 'Products added successfully' });
    } catch (error) {
        res.status(400).json({ status: 'fail', message: error.message });
    }
});

router.post('/addImage',upload, addProductImage);

router.post('/addProduct', addProduct);

router.delete('/removeProduct', removeProduct);

router.put('/addToCart',isLoggedIn, addToCart);

router.get('/all', getProducts);

module.exports = router;