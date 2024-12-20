const express = require('express');
const router = express.Router();
const {addProductImage, upload, addProduct, removeProduct, getProducts} = require('../controllers/Product');
const multer = require('multer');

router.get('/', function(req,res){
    res.send('Welcome to E-Commerce API product add');
});



router.post('/addImage',upload, addProductImage);

router.post('/addProduct', addProduct);

router.post('/removeProduct', removeProduct);

router.get('/all', getProducts);

module.exports = router;