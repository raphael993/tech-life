const express = require('express');
const app = express();
const db = require('./src/config/dbConnect');

const UsersController = require('./src/controllers/users.controller.js');
const ProductsController = require('./src/controllers/products.controller.js');

db.on('error', console.log.bind(console, 'Connection Error'));
db.once('open', () => {
    console.log('db connection succesful!')
})

app.use(express.json());

// USERS ROUTES

app.post('/users', UsersController.createUser);

app.get('/users', UsersController.getUsers);

app.get('/users/:id', UsersController.getUser);

app.put('/users/:id', UsersController.updateUser);

// PRODUCTS ROUTES

app.delete('/products/:id', ProductsController.deleteProduct);

app.post('/products', ProductsController.createProduct);

app.get('/products', ProductsController.getProducts);

app.get('/products/:id', ProductsController.getProduct);

app.put('/products/:id', ProductsController.updateProduct);

app.delete('/products/:id', ProductsController.deleteProduct);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
