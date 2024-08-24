const express = require('express');
const app = express();

// criando rotas
app.get('/users', (req, res) => {
    res.send('Hello world!');
});

app.post('/users', (req, res) => {
    const user = req.body;
    res.status(201).send(user);
});

// Iniciando o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
