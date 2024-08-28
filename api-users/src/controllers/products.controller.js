const products = require('../models/products.model.js');

class ProductsController {
    static createProduct = async (req, res) => {
        const product = req.body;
    
        try {
            await products.insertMany([product]);
            res.status(201).send('product added!')
        } catch(err) {
            console.log(err)
            res.status(500);
        }
    }

    static getProducts = async (req, res) => {
        try {
            const result = await product.find({});
            res.status(200).json(result);
        } catch(err) {
            console.log(err);
            res.status(500);
        }
    }
    static getProduct = async (req, res) => {
        const _id = req.params.id;
        
        try {
            const result = await products.find({ _id });
            res.status(200).json(result);
        } catch(err) {
            console.log(err)
            res.status(500);
        }
    }

    static updateProduct = async (req, res) => {
        const _id = req.params.id;
        const body = req.body;
    
        try {
            const result = await products.updateOne({ _id }, { $set: body });
            res.status(200).json(result);
        } catch(err) {
            console.log(err)
            res.status(500);
        }
    }

    static deleteProduct = async (req, res) => {
        const _id = req.params.id;
        try {
            await products.deleteOne({ _id });
            res.status(200).send('product deleted')
        } catch(err) {
            console.log(err)
            res.status(500);
        }
    }
}

module.exports = ProductsController;