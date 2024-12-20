const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL);

const db = mongoose.connection;
db.on('error', (error) => console.error(error));

db.on('open', () => console.log('Connected to Database'));

module.exports = db;