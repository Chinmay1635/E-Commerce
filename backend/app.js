const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

app.use(cors());
app.use(express.json());

app.get('/', function(req,res){
    res.send('Welcome to E-Commerce API');
});

app.listen(process.env.PORT || 3000);