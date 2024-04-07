// console.log(module);

// No est'a enlazado con el module.exports, por lo tanto NO SE EXPORTA
let mySecretVariable = 'djkfhg123';

const myWebAddress = "faztweb.com";
const myNumber = 30;
const myArray = [ 10, 20 , 30];
const user = {
    name: 'ryan',
    lastname: 'ray'
};


// Export by group
// const group = {
//     myWebAddress: myWebAddress,
//     myNumber: myNumber,
//     myArray: myArray,
//     user: user
// };

// const group = {
//     myWebAddress,
//     myNumber,
//     myArray,
//     user
// };

// module.exports = group;

// Export directly
// module.exports = {
//     myWebAddress,
//     myNumber,
//     myArray,
//     user
// };

// Exports individuals
module.exports.user = user;
module.exports.myNumber = myNumber;
module.exports.myArray = myArray;
module.exports.myWebAddress = myWebAddress;

// console.log(module);
