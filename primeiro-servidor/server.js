const http = require('http');

let users = [
    { id: 0, name: 'Raphael', age: 30 },
    { id: 1, name: 'Maria', age: 50 }
];

const requestListener = (req, res) => {
    res.setHeader('Content-Type', 'application/json');

    if (req.method === 'GET' && req.url === '/') {
        res.writeHead(200);
        res.end('Seja bem vindo a API');
    }

    if (req.method === 'GET' && req.url === '/users') {
        res.writeHead(200);
        res.end(JSON.stringify(users));
    }

    if (req.method === 'POST' && req.url === '/users') {

        let body = '';
        
       // Recebe os dados do corpo da requisição
        req.on('data', reqBody => {
            body += reqBody.toString();
        });
            
        // Quando todo o corpo da requisição for recebido
        req.on('end', () => {
            const newUser = { 
                id: users.length, // gera um id 
                ...JSON.parse(body)
            };
            
            users.push(newUser); // Adiciona o novo usuário à lista
            
            res.writeHead(201);
            res.end(JSON.stringify({ status: 'OK', message: 'Registro incluido' }));
        });
    }
}

const server = http.createServer(requestListener);

const PORT = 3000;

server.listen(PORT, function() {
    console.log(`Servidor esta rodando na porta: ${PORT}`);
});