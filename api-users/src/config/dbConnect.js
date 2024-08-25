const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGO_STR_CONNECTION);

const db = mongoose.connection;

module.exports = db;