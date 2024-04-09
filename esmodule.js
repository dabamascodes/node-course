//                                    math es el export default
//    { add, substract, multiply, divide } son los exports individuales
import math, { add, substract, multiply, divide } from './math/index.js';

// Desde export individual
console.log(add(10,20));
console.log(substract(10,20));
console.log(multiply(10,20));
console.log(divide(10,20));

// Desde export default
console.log('Resultado desde export default: ' + math.add(10,20));
console.log('Resultado desde export default: ' + math.substract(10,20));
console.log('Resultado desde export default: ' + math.multiply(10,20));
console.log('Resultado desde export default: ' + math.divide(10,20));
