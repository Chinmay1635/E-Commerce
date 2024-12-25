const mongoose = require('mongoose');
const userModel = require('../models/user');
const bcrypt = require('bcrypt');

const TokenGenerator = require('../utils/TokenGenerator');

module.exports.registerUser = async (req, res) => {

    let { username, password, name, email, address, phone } = req.body;

    try {
        if(!username || !password || !name || !email || !address || !phone){
            return res.status(400).json({
                status: 'fail',
                message: 'All fields are required'
            });
        }

        let user = await userModel.findOne({email:email});
        if(user){
            return res.status(400).json({
                status: 'fail',
                message: 'User already exists'
            });
        }

        
        let salt = await bcrypt.genSalt();
        let hashedPassword = await bcrypt.hash(password, salt);

         user = await userModel.create({
            username,
            password: hashedPassword,
            name,
            email,
            address,
            phone
        });

        const token = TokenGenerator(user);
        res.cookie('token', token, {httpOnly:true, maxAge: 30*24*60*60*1000});

        res.status(201).json({
            status: 'success',
            user
        });

    } catch (error) {
        res.status(400).json({
            status: 'fail',
            error: error.message
        });
    }
}

module.exports.loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        if(!email || !password){
            return res.status(400).json({
                status: 'fail',
                message: 'All fields are required'
            });
        }

        const user = await userModel.findOne({email:email});
        if(!user){
            return res.status(400).json({
                status: 'fail',
                message: 'User does not exist'
            });
        }

        const validPassword = await bcrypt.compare(password, user.password);
        if(!validPassword){
            return res.status(400).json({
                status: 'fail',
                message: 'Invalid password'
            });
        }

        const token = TokenGenerator(user);
        res.cookie('token', token, {httpOnly:true, maxAge: 30*24*60*60*1000, sameSite: 'none', secure: true});

        res.status(200).json({
            status: 'success',
            user,
            token
        });

    } catch (error) {
        res.status(400).json({
            status: 'fail',
            error: error.message
        });
    }
}

module.exports.getAllUsers = async (req, res) => {
    try {
        const users = await userModel.find();
        res.status(200).json({
            status: 'success',
            users
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            error: error.message
        });
    }
}