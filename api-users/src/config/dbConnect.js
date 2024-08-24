const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://raphael:raphael@cluster0.y9ptd.mongodb.net/users');

const db = mongoose.connection;

module.exports = db;