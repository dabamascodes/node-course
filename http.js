// Vamos a crear un web server

const http = require('http');

// http.createServer(function (request, response) {
//     response.write('Hello world');
//     response.end();
// }).listen(3000);

http.createServer((request, response) => {
    response.write('Hello world');
    response.end();
}).listen(3000);

console.log('Servidor escuchando en el puerto 3000');