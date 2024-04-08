const http = require('http');

const server = http.createServer((req, res) => {
    
    
    if (req.url === '/') {
        res.write('welcome to the server');
        return res.end();
    };

    if (req.url === '/about') {
        // blocking 
        // Con este codigo, el hilo de Node tendra que esperar a que termine
        // Sol: Usar funciones asincronas
        for (let i = 0; i < 100000; i++) {
            console.log(Math.random() * i);
        };

        res.write('about page');
        return res.end();
    };

    res.end('not found');


});

server.listen(3000);