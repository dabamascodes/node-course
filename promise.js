// const { readFile } = require('fs');

// const getText = (pathFile) => {
//     return new Promise(function (resolve, reject) {
//         readFile(pathFile, 'utf-8', (err, data) => {
//             if (err) {
//                 reject(err);
//             };
//             resolve(data);
//         });
//     });
// };

// // getText('./data/fourth.txt')
// // .then((result) => console.log(result))
// // .then(() => getText('./data/first.txt'))
// // .then((result) => console.log(result))
// // .catch(error => console.log(error));

// async function read() {
//     try {
//         const result = await getText('./data/first.txt');
//         console.log(result);
//         const result2 = await getText('./data/second.txt');
//         console.log(result2);
//         throw new Error("Esto es un Error creado para testear el Try Catch");
//         const result3 = await getText('./data/third.txt');
//         console.log(result3);
//         const result4 = await getText('./data/fourth.txt');
//         console.log(result4);
//     } catch (error) {
//         console.log(error);
//     };
// };

// read();

/////////////////////////////////////////////////////////////////////////
// // Promisify

// // `util.promisify()` in Node.js converts callback-based methods to promise-based, aiding in managing asynchronous code more cleanly. This alleviates callback nesting issues, enhancing code readability, and simplifying asynchronous operations through promise chaining.
// const { readFile } = require('fs');
// const { promisify } = require('util');

// // const getText = (pathFile) => {
// //     return new Promise(function (resolve, reject) {
// //         readFile(pathFile, 'utf-8', (err, data) => {
// //             if (err) {
// //                 reject(err);
// //             };
// //             resolve(data);
// //         });
// //     });
// // };
// // Promisify -----> getText

// const getText = promisify(readFile);

// async function read() {
//     try {
//         const result = await getText('./data/first.txt', 'utf-8');
//         console.log(result);
//         const result2 = await getText('./data/second.txt', 'utf-8');
//         console.log(result2);
//         const result3 = await getText('./data/third.txt', 'utf-8');
//         console.log(result3);
//         const result4 = await getText('./data/fourth.txt', 'utf-8');
//         console.log(result4);
//     } catch (error) {
//         console.log(error);
//     };
// };

// read();

/////////////////////////////////////////////////////////////////////////
// Fn Promises
// fs/promises ----> es una funcion tipo Promesa para ReadFiles
const { readFile } = require('fs/promises');

async function read() {
    try {
        const result = await readFile('./data/first.txt', 'utf-8');
        console.log(result);
        const result2 = await readFile('./data/second.txt', 'utf-8');
        console.log(result2);
        const result3 = await readFile('./data/third.txt', 'utf-8');
        console.log(result3);
        const result4 = await readFile('./data/fourth.txt', 'utf-8');
        console.log(result4);
    } catch (error) {
        console.log(error);
    };
};

read();
