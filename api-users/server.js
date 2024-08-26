const express = require('express');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

let users = []; // In-memory "database" for users

// Create a user (C - Create)
app.post('/users', (req, res) => {
    const user = req.body;
    user.id = users.length + 1; // Simple ID assignment
    users.push(user);
    res.status(201).send(user);
});

// Get all users (R - Read)
app.get('/users', (req, res) => {
    res.send(users);
});

// Get a single user by ID (R - Read)
app.get('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find(u => u.id === userId);
    if (!user) {
        return res.status(404).send({ message: 'User not found' });
    }
    res.send(user);
});

// Update a user by ID (U - Update)
app.put('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const userIndex = users.findIndex(u => u.id === userId);
    if (userIndex === -1) {
        return res.status(404).send({ message: 'User not found' });
    }
    users[userIndex] = { ...users[userIndex], ...req.body };
    res.send(users[userIndex]);
});

// Delete a user by ID (D - Delete)
app.delete('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const userIndex = users.findIndex(u => u.id === userId);
    if (userIndex === -1) {
        return res.status(404).send({ message: 'User not found' });
    }
    users.splice(userIndex, 1);
    res.status(204).send(); // No content
});

app.delete('/users/admin/delete-all', (req, res) => {
    users = [];
    res.status(204).send({ message: 'All data was removed!' });
})

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
