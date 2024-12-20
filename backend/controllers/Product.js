const multer = require('multer');
const mongoose = require('mongoose');
const Product = require('../models/product');

const storage = multer.diskStorage({
    destination: './uploads/images',
    filename: function(req, file, cb){
       return cb(null, file.fieldname + '-' + Date.now() + file.originalname);
    }   
});

const upload = multer({storage: storage});

module.exports.upload = upload.single('product');

module.exports.addProductImage = (req, res) => {
    res.json({ success: true,message: 'Product added successfully', url: req.file.path });
};

module.exports.addProduct = async (req, res) => {
    const { name, image, category, new_price, old_price, available } = req.body;
    let products = await Product.find({});
    let id;
    if(products.length > 0){
        let last_product_array = products.slice(-1);
        let last_product = last_product_array[0];
        id = last_product.id + 1;
    }else{
        id = 1;
    }
    const product = new Product({
        id,
        name,
        image,
        category,
        new_price,
        old_price,
        available
    });
    product.save()
        .then(() => {
            res.json({ success: true, message: `${name} added successfully` });
        })
        .catch((err) => {
            res.json({ success: false, message: 'Product not added', error: err });
        });
};

module.exports.removeProduct = async (req,res) => {
    const { id } = req.body;
    await Product.findOneAndDelete({ id });
    res.json({ success: true, message: 'Product removed successfully' });
}

module.exports.getProducts = async (req, res) => {
    let products = await Product.find({});
    res.json({ success: true, products });
}