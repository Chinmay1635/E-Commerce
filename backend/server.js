const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const cookieParser = require('cookie-parser');
require('dotenv').config();


const db = require('./config/DBConnection');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
const productRouter = require('./routes/productRoutes');

const corsOptions = {
    origin: 'https://e-commerce-nu-ecru.vercel.app', 
    credentials: true, 
};

app.use(cors(corsOptions));


app.get('/', function(req,res){
    res.send('Welcome to E-Commerce API');
});


app.use('/images', express.static('uploads/images'));

app.use('/api/product/', productRouter);

app.use('/api/users/', require('./routes/userRoutes'));

app.use('/api/cart/', require('./routes/cartRoutes'));

app.listen(process.env.PORT || 3000);