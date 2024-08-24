const express = require('express');
const app = express();
const db = require('./src/config/dbConnect');
const users = require('./src/models/users.model.js')

db.on('error', console.log.bind(console, 'Connection Error'));
db.once('open', () => {
    console.log('db connection succesful!')
})

app.use(express.json());

app.post('/users', async (req, res) => {
    const user = req.body;

    try {
        await users.insertMany([user]);
        res.status(201).send('user added!')
    } catch(err) {
        res.status(500);
    }
});

app.get('/users', async (req, res) => {
    try {
        const result = await users.find({});
        res.status(200).json(result);
    } catch(err) {
        console.log(err);
        res.status(500);
    }
});

app.get('/users/:id', async (req, res) => {
    const _id = req.params.id;
    
    try {
        const result = await users.find({ _id });
        res.status(200).json(result);
    } catch(err) {
        res.status(500);
    }
});

app.put('/users/:id', async (req, res) => {
    const _id = req.params.id;
    const body = req.body;

    try {
        await users.updateOne({ _id }, { $set: body });
        res.status(200).json(result);
    } catch(err) {
        res.status(500);
    }
});

app.delete('/users/:id', async (req, res) => {
    const _id = req.params.id;
    try {
        await users.deleteOne({ _id });
        res.status(200).send('contact deleted')
    } catch(err) {
        res.status(500);
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
