const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema(
    {
        id: { type: String },
        name: { type: String, required: true },
        age: { type: String, required: true }
    }
)

const users = mongoose.model('users', usersSchema)

module.exports = users;