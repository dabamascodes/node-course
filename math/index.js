// function add(x, y) {
//     return x + y;
// };

// function substract(x, y) {
//     return x - y;
// };

// function multiply(x, y) {
//     return x * y;
// };

// function divide(x, y) {
//     return x / y;
// };

// module.exports = {
//     add,
//     substract,
//     multiply,
//     divide
// };

// Export individual en Ecmascript ----> es con export antes de la funci'on
export function add(x, y) {
    return x + y;
};

export function substract(x, y) {
    return x - y;
};

export function multiply(x, y) {
    return x * y;
};

export function divide(x, y) {
    return x / y;
};

// module.exports = {
//     add,
//     substract,
//     multiply,
//     divide
// };

// En Ecmascript ---> module.exports es export default
export default {
    add,
    substract,
    multiply,
    divide 
};