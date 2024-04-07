const myWebAddress = "faztweb.com";
const myNumber = 30;
const myArray = [ 10, 20 , 30];
const user = {
    name: 'ryan',
    lastname: 'ray'
};

// const group = {
//     myWebAddress: myWebAddress,
//     myNumber: myNumber,
//     myArray: myArray,
//     user: user
// };

const group = {
    myWebAddress,
    myNumber,
    myArray,
    user
};

// module.exports = group;

module.exports = {
    myWebAddress,
    myNumber,
    myArray,
    user
};

console.log(module);
