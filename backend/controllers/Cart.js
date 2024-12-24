const userModel = require('../models/user');

module.exports.addToCart = async (req, res) => {
    try{
        const {productId, email} = req.body;
        const user = await userModel.findOne({email: req.user.email});

        let cart = user.cart;
        cart[productId].value += 1;

        user.markModified('cart');
        await user.save();

        res.status(200).json({
            status: 'success',
            message: 'Product added to cart successfully',
            cart
        });
    }catch(error){
        res.status(400).json({
            status: 'fail',
            error: error.message
        });
    }
}

module.exports.removeFromCart = async (req, res) => {
    try{
        const {productId, email} = req.body;
        const user = await userModel.findOne({email: req.user.email});

        let cart = user.cart;
        if(cart[productId].value > 0){
            cart[productId].value -= 1;
        }

        user.markModified('cart');
        await user.save();

        res.status(200).json({
            status: 'success',
            message: 'Product removed from cart successfully',
            cart
        });
    }catch(error){
        res.status(400).json({
            status: 'fail',
            error: error.message
        });
    }
}

module.exports.getCart = async (req, res) => {
    try{
        const user = await userModel.findOne({email: req.user.email});
        const cart = user.cart;
        let totalCount = 0;
        cart.forEach((product)=>{
            totalCount += product.value;
        })
        res.status(200).json({
            status: 'success',
            cart
        });
    }catch(error){
        res.status(400).json({
            status: 'fail',
            error: error.message
        });
    }
}