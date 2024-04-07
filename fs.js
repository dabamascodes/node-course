const fs = require('fs');

const first = fs.readFileSync('./data/first.txt', 'utf-8');
const second = fs.readFileSync('./data/second.txt');

console.log(first);
console.log(second.toString());

// fs.writeFileSync('./data/third.txt', 'este es un tercer archivo');

// const title = 'este es el contenido del archivo';
// fs.writeFileSync('./data/fourth.txt', title);

const title = 'este contenido se ha anadido';
fs.writeFileSync('./data/fourth.txt', title, {
    flag: 'a'
});
