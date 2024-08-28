const users = require('../models/users.model.js');

class UsersController {
    static createUser = async (req, res) => {
        const user = req.body;
    
        try {
            await users.insertMany([user]);
            res.status(201).send('user added!')
        } catch(err) {
            console.log(err)
            res.status(500);
        }
    }

    static getUsers = async (req, res) => {
        console.log('getUsers')
        
        try {
            const result = await users.find({});
            res.status(200).json(result);
        } catch(err) {
            console.log(err);
            res.status(500);
        }
    }
    static getUser = async (req, res) => {
        const _id = req.params.id;
        
        try {
            const result = await users.find({ _id });
            res.status(200).json(result);
        } catch(err) {
            console.log(err)
            res.status(500);
        }
    }

    static updateUser = async (req, res) => {
        const _id = req.params.id;
        const body = req.body;
    
        try {
            const result = await users.updateOne({ _id }, { $set: body });
            res.status(200).json(result);
        } catch(err) {
            console.log(err)
            res.status(500);
        }
    }

    static deleteUser = async (req, res) => {
        const _id = req.params.id;
        try {
            await users.deleteOne({ _id });
            res.status(200).send('contact deleted')
        } catch(err) {
            console.log(err)
            res.status(500);
        }
    }
}

module.exports = UsersController;