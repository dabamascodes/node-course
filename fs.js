const fs = require('fs');

// const first = fs.readFileSync('./data/first.txt', 'utf-8');
// const second = fs.readFileSync('./data/second.txt');

// console.log(first);
// console.log(second.toString());

// // fs.writeFileSync('./data/third.txt', 'este es un tercer archivo');

// // const title = 'este es el contenido del archivo';
// // fs.writeFileSync('./data/fourth.txt', title);

// const title = 'este contenido se ha anadido';
// fs.writeFileSync('./data/fourth.txt', title, {
//     flag: 'a'
// });


// Node viejo:Callback HELL hahaha ---> Node nuevo --> Promesas
// Lo importante de este codigo es que se peude ir ejecutando codigo de manera async
// sin tener que esperar a que termine una  fucnion, lo que logra optimizar el codigo
fs.readFile('./data/first.txt', 'utf-8', (error, data) => {
    if (error) {
        console.log(error);
    }

    console.log(data);

    fs.readFile('./data/second.txt', 'utf-8', (error, data) => {
        if (error) {
            console.log(error);
        }
    
        console.log(data); 

        fs.writeFile('./data/newfile.txt', 'archivo creado desde fs', (err, data) => {
            console.log(err);
            console.log(data);

            fs.writeFile('./data/newfile2.txt', 'archivo creado desde fs', (err, data) => {
                console.log(err);
                console.log(data);

                fs.writeFile('./data/newfile3.txt', 'archivo creado desde fs', (err, data) => {
                    console.log(err);
                    console.log(data);
                });
            });
        });
    });
});
