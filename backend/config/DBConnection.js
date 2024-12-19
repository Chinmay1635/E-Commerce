const mongoose = require('mongoose');

mongoose.connect(process.env.DB_CONNECTION);

const db = mongoose.connection;
db.on('error', (error) => console.error(error));

db.on('open', () => console.log('Connected to Database'));

module.exports = db;