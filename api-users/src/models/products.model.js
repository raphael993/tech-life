const mongoose = require('mongoose');

const productsSchema = new mongoose.Schema(
    {
        id: { type: String },
        name: { type: String, required: true },
        price: { type: Number, required: true },
        description: { type: String },
    }
)

const products = mongoose.model('products', productsSchema)

module.exports = products;