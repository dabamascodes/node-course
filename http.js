// Vamos a crear un web server

// const http = require('http');

// // http.createServer(function (request, response) {
// //     response.write('Hello world');
// //     response.end();
// // }).listen(3000);

// http.createServer((request, response) => {
//     response.write('Hello world');
//     response.end();
// }).listen(3000);

// console.log('Servidor escuchando en el puerto 3000');

const http = require("http");

const server = http.createServer((request, response) => {
  console.log(request.url);

  if (request.url === "/") {
    response.write("Welcome to the server");
    return response.end();
  }

  if (request.url === "/about") {
    response.write("acerca de");
    return response.end();
  }

  response.write(`
    <h1>Not Found</h1>
    <p>esta pagina no se encontro<p>
    <a href="/">Volver a la pagina principal</a>
    `);
  response.end();
});

server.listen(3000);
console.log("Servidor escuchando en el puerto 3000");
