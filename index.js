/////////////////////////////////////////////////////////////////////////////////////
// Set up on Terminal --> vscode
/////////////////////////////////////////////////////////////////////////////////////
// console.log('Hello world')

/////////////////////////////////////////////////////////////////////////////////////
// Javascript
/////////////////////////////////////////////////////////////////////////////////////
/*
function hello(){
    
    //return 'Hola Mundo';
    //return 20;
    //return 20.3;
    //return true;
    //return [1,2,3];
    //return {name: 'daniel'}
    

    // Functional Programming
    // Funci'on que retorna otra funcion --> En React se usa mucho para los COMPONENTES.
    return function () {
        return 'hola mundo';
    }

}

//const result = hello();
//console.log(result);

//console.log(hello());
console.log(hello()());
*/

/////////////////////////////////////////////////////
/*
function hello(name){
    return 'Hola ' + name;
}

console.log(hello('Daniel'));
console.log(hello('Jes'));
console.log(hello('Eli'));
*/
/*
function add (x, y) {
    return x + y;
}

console.log(add(10, 20));
*/
/////////////////////////////////////////////////////
//Parametros por defecto
/*
function add (x=0, y=0) {
    return x + y;
}

console.log(add());
console.log(add(10));
console.log(add(10,20));
*/
/////////////////////////////////////////////////////
//Objetos
/*
const user = {
    name: 'ryan',
    lastname: 'perez',
    age: 30,
    address: {
        country: 'colombia',
        city: 'bogota',
        street: 'main street 123'
    },
    friends: ['brandon', 'elena'],
    active: true,
    sendMail: function () {
        return 'sending email...'
    }
}

console.log(user);
console.log(user.name);
console.log(user.address);
console.log(user.address.city);
console.log(user.friends);
console.log(user.active);
console.log(user.sendMail);
console.log(user.sendMail());
*/

/*
const user = {
    //Pares CLAVE-VALOR son PROPERTIES
    name: 'ryan',
    lastname: 'perez',
    age: 30,
    address: {
        country: 'colombia',
        city: 'bogota',
        street: 'main street 123'
    },
    friends: ['brandon', 'elena'],
    active: true,
    //Los que ejecutan funcion son METHODS
    //Otra forma de excribir el metodo
    sendMail () {
        return 'sending email...'
    }
}

console.log(user);
console.log(user.name);
console.log(user.address);
console.log(user.address.city);
console.log(user.friends);
console.log(user.active);
console.log(user.sendMail);
console.log(user.sendMail());
*/

/////////////////////////////////////////////////////
//Shorthand property names
/*
const name = 'laptop';
const price = 3000;

const newProduct = {
    name: name,
    price: price
}

console.log(newProduct);
*/
/*
const name = 'laptop';
const price = 3000;

const newProduct = {
    name,
    price
}

console.log(newProduct);
*/
/////////////////////////////////////////////////////
//Manipulacion del DOM (se esta manipulando el documento)
/*
const title = document.createElement('h1');
title.innerText = 'Hola mundo desde JS';

const button = document.createElement('button');
button.innerText = 'click';
//Escucha --> EVENT HANDLERS
button.addEventListener('click', function () {
    //console.log('Hola mundo!');
    title.innerText = 'Texto actualizado con JS';
    alert('Se realizo un click');
});

document.body.append(title);
document.body.append(button);
// Todo esto se conoce como Manipulacion de DOM (se esta manipulando el documento)
// A partir de aqui podriamos crear nuestras propias bibliotecas o funcionalidades
// Pero si ya estamos reutilizando todas estas bibliotecas o funcionalidades:
// Estariamos creando nuestro propio Framework: React, Angular, ETC.
*/

/////////////////////////////////////////////////////
//Objetos como parametros
/*
const user = {
    name: 'joe',
    age: 30
}

function printInfo(user) {
    return '<h1>Hola ' + user.name + '</h1>';
}

console.log(printInfo(user));
document.body.innerHTML = printInfo(user);
//document.body.innerHTML = '<h2>Texto anadido</h2>';
*/
/////////////////////////////////////////////////////
//Destructuring
/*
const user = {
    name: 'joe',
    age: 30
}

function printInfo(user) {
    return '<h1>Hola ' + user['age'] + '</h1>';
}

console.log(printInfo(user));
document.body.innerHTML = printInfo(user);
*/

/*
// Aplicando Destructuring --> name
const user = {
    name: 'joe',
    age: 30
}

function printInfo({ name }) {
    return '<h1>Hola ' + name + '</h1>';
}

console.log(printInfo(user));
document.body.innerHTML = printInfo(user);
*/

/*
// Aplicando Destructuring --> age
const user = {
    name: 'joe',
    age: 30
}

function printInfo({ age }) {
    return '<h1>Hola ' + age + '</h1>';
}

console.log(printInfo(user));
document.body.innerHTML = printInfo(user);
*/

// Aplicando Destructuring de otra forma
/*
const user = {
    name: 'joe',
    age: 30
}

function printInfo(user) {
    const { name, age } = user; 
    console.log(name, age);
    return '<h1>Hola ' + name + " | " + age + '</h1>';
}

console.log(printInfo(user));
document.body.innerHTML = printInfo(user);
*/
/////////////////////////////////////////////////////
//Funciones an'onimas
/*
function start () {
    return 'Starting...';
}

console.log(start());
*/

//En JS las funciones no necesariamente deben tener nombre
// ponemos la funcion dentro del console log
// y al final agregamos parentesis,
// de esta forma, estamos definiendo e invocando
// a la funci'on.
/*
console.log(function start () {
    return 'Starting...';
}());
*/

//Pero si estamos utilizando la funci'on directamente,
//podemos quitarle el nombre, lo que la vuelve una fn anonima
/*
console.log(function () {
    return 'Starting...';
}());
*/

//Ejemplo aplicado al DOM
/*
const button = document.createElement('button');
button.innerText = 'click me';

button.addEventListener('click', function () {
    alert('clicked');
});

document.body.append(button);
*/
/////////////////////////////////////////////////////
// Arrow Function

// fn normal
/*
function add(x,y) {
    return x + y;
};
*/
/*
// arrow function
const add = (x,y) => {
    return x + y;
};


//Ejemplo aplicado al DOM
const button = document.createElement('button');
button.innerText = 'click me';

button.addEventListener('click', () => {
    alert('clicked');
});

document.body.append(button);
*/

/////////////////////////////////////////////////////
//Inline arrow functions

/*
const showText = () => {
    return 'Hola mundo';
};

console.log(showText());
*/
/*
// Si no colocamos llaves {}, implicitamente es un RETURN
const showText = () => 'Hola mundo';
const showNumber = () => 22;
const showBoolean = () => true;
const showArray = () => [1,2,3];
// Para retornar un objeto --> tenemos que envolver el objeto dentro de parentesis
// porque JS, lo interpretaria como las llaves de la fn
const showObject = () => ({name:'ryan'});


console.log(showText());
console.log(showNumber());
console.log(showBoolean());
console.log(showArray());
console.log(showObject());
*/

/////////////////////////////////////////////////////
// Otra funcionalidad del return
// Detener la ejecucion del Codigo hasta donde aparece
//Ejemplo aplicado al DOM
/*
const button = document.createElement('button');
button.innerText = 'click me';

const isAuthorized = true;

button.addEventListener('click', function () {
    if (isAuthorized) {
        return alert('esta autorizado');
    }
    alert("no esta autorizado");
});

document.body.append(button);
*/

/////////////////////////////////////////////////////
// Strings literals
/*
Nos permiten concatenar o unir strings y nos permiten
interpretar valores
*/

//Ejemplo aplicado al DOM
/*
const background = 'red';
const color = 'white';
const isAuthorized = true;

const button = document.createElement('button');
button.innerText = 'click me';
button.style = 'background: #202020 ; color: white;';
button.style = `background: ${isAuthorized ? 'green' : background} ; color: ${color};`;


button.addEventListener('click', function () {
    if (isAuthorized) {
        return alert('esta autorizado');
    }
    alert("no esta autorizado");
});

document.body.append(button);
*/

/////////////////////////////////////////////////////
// Metodos de Arrays

// const names = ['ryan', 'joe', 'maria'];
// const newNamess = ['marcos', 'mario', 'john'];
//-------------------------------------------------
// for (let i = 0; i < names.length; i++) {
//     const element = names[i];
//     console.log(element);
// };
//-------------------------------------------------
// FOREACH
// names.forEach(function (name) {
//     console.log(name);
// });
//-------------------------------------------------
// MAP
// names.map(function (name) {
//     console.log(name);
// });

// const newNames = names.map(function (name) {
//     return name;
// });
// console.log(newNames);

// const newNames = names.map(function (name) {
//     return `Hola ${name}`;
// });
// console.log(names);
// console.log(newNames);
//-------------------------------------------------
// Find
// const nameFound = names.find(function (name) {
//     if (name === 'joe') {
//         return name;
//     }
// });
// console.log(nameFound);
//-------------------------------------------------
// Filter: Devuelve un arreglo
// const nameFiltered = names.filter(function (name) {
//     if (name !== 'joe') {
//         return name;
//     }
// });
// console.log(nameFiltered);
//-------------------------------------------------
// Concat
// console.log(names);
// console.log(newNamess);
// console.log(names.concat(newNamess));

/////////////////////////////////////////////////////
// Spread operator
/*
const names = ['ryan', 'joe', 'maria'];
const newNames = ['marcos', 'mario', 'john'];

console.log(names);
console.log(newNames);
console.log([...names, ...newNames]);

const user = {
    name: "ryan",
    lastname: "ray"
};

const address = {
    street: 'main street 123',
    city: 'bogota'
};

const userInfo = {
    ...user,
    ...address
};

console.log(user);
console.log(address);
console.log(userInfo);
*/

/////////////////////////////////////////////////////
// Ecmascript modules
/*
import { add, multiply, active, points, title } from './add.js';

console.log(active, points, title);
console.log(add(10, 20));
console.log(multiply(10, 20));

import addModule from "./add.js";
console.log(addModule());

// En React u otros Frameworks no se usa la extension JS
// Es solo s'intaxis, ya que no siguen el Std de JS
*/

/////////////////////////////////////////////////////
// Optional Chaining
/*
const person = {
    name: 'ryan',
    address: {
        city: 'london'
    },
    location: {}
};

console.log(person.location?.city);
*/

/////////////////////////////////////////////////////
// Async Await

// Devuelve una Promesa
// let data = fetch('https://jsonplaceholder.typicode.com/posts');
// console.log(data);

// Con esto podemos observar que se pueden ejecutar
// otras funciones de manera Asincrona, mientras esperamos
// nuestra promesa.
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(function () {
//         console.log('finalizo la carga');
//     });
// console.log('linea 2');

// Viendo la Respuesta
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(function (response) {
//         console.log(response);
//     });
// console.log('linea 2');

// Conviritiendo la Respuesta a JSON
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(function (response) {
//         // API del navegador y su respuesta ser'a asincrona
//         // por la tanto tenemos que usar otro THEN,
//         // El THEN podemos utilizarlo siempre que pensemos
//         // que una respuesta tomara tiempo.
//         return response.json();
//     }).then(function (data) {
//         console.log(data);
//     });
// console.log('linea 2');

// Mostrando el JSON
// const ul = document.createElement("ul");
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(function (response) {
//         return response.json();
//     }).then(function (data) {
//         console.log(data);
//         data.forEach(function (post) {
//             const li = document.createElement("li");
//             li.innerText = post.title;
//             ul.append(li);
//         });
//         document.body.append(ul);
//     });
// console.log('linea 2');

// JS moderno --> palabra AWAIT with ASYNC
// const ul = document.createElement("ul");
// async function loadData() {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts')
//     const data = await response.json();
//     console.log(data);
//     data.forEach(function (post) {
//         const li = document.createElement("li");
//         li.innerText = post.title;
//         ul.append(li);
//     });
//     document.body.append(ul);
// };
// loadData();
// console.log('linea 2');

// sample array of students

// const students = [
//     {
//       name: "Jill",
//       lastname: "Doe",
//       age: 23,
//       course: "Marketing",
//     },
//     {
//       name: "John",
//       lastname: "Doe",
//       age: 20,
//       course: "Web Development",
//     },
//     {
//       name: "Jack",
//       lastname: "Doe",
//       age: 22,
//       course: "Accounting",
//     },
//     {
//       name: "Ryan",
//       lastname: "Ray",
//       age: 20,
//       course: "Web Development",
//     },
//     {
//       name: "Jane",
//       lastname: "Doe",
//       age: 21,
//       course: "Financial Management",
//     },
//   ];

// Write your code here!
/////////////////////////////////////////////////////////////////////////////////////
// ForEach
/////////////////////////////////////////////////////////////////////////////////////

// for(let i = 0; i < students.length; i++) {
//   console.log(students[i])
// }

// Se le llama callback a una function que esta dentro de otra function
// students.forEach(function (student, index, students) {
//   console.log(student)
//   console.log(index)
//   console.log(students)
// })

// const fullnames = [];

// students.forEach((student) => {
//   // ForEach no devuelve valor, por eso usamos el .push
//   fullnames.push(student.name + " " + student.lastname);
// });

// console.log(fullnames);

/////////////////////////////////////////////////////////////////////////////////////
// Map
/////////////////////////////////////////////////////////////////////////////////////
// El método map al igual que el ForEach recorre un arreglo,
//   pero este sí retorna un nuevo arreglo con los elementos transformados.

// const studentNames = students.map(function (student) {
//   return {
//     fullname: `${student.name} ${student.lastname}`,
//   }
// })
// console.log(studentNames);

// const studentCourses =  students.map(function (student) {
//   return {
//     course: "Programming"
//   }
// })
// console.log(studentCourses);

// const studentNames = students.map((student) => {
//   return {
//     fullname: `${student.name} ${student.lastname}`,
//     age: student.age,
//     course: student.course,
//     title: `${student.name} - ${student.course}`
//   };
// });
// console.log(studentNames);

// const studentNames = students.map(student => {
//   return {
//     ...student,
//     title: `${student.name} - ${student.course}`
//   };
// });
// console.log(studentNames);

// const studentNames = students.map(student => {
//   return {
//     ...student,
//     course: 'Programming'
//   };
// });
// console.log(studentNames);
// Podemos constatar que el objeto original No se modifica
// console.log(students);

// Si invertimos los datos, se mantienen los cursos
// Siempre debemos primero copiar y después cambiar
// const studentNames = students.map(student => {
//   return {
//     course: 'Programming',
//     ...student
//   };
// });
// console.log(studentNames);

// Podemos eliminar el Return...
// const studentNames = students.map(student => ({
//   ...student,
//   course: 'Programming'
// }));
// console.log(students);
// console.log(studentNames);

// const doubleAges = students.map((student) => student.age).map((age) => age * 2);
// console.log(doubleAges);

// const studentsInfo = students.map((student) =>  {
//   return {
//     fullname: `${student.name} ${student.lastname}`,
//     age: student.age
//   };
// });
// const texts = studentsInfo.map((student) =>  {
//   return `${studentsInfo.fullname} is ${student.age} years old`;
// })
// console.log(texts);

// const texts = students
//   .map((student) => ({
//     fullName: `${student.name} ${student.lastname}`,
//     age: student.age,
//   }))
//   .map((student) => `${student.fullName} is ${student.age} years old`);
// console.log(texts);

// const fullnames = students.map(function (student) {
//     return student.name + ' ' + student.lastname;
// })
// console.log(fullnames);

// const doubleage = students
//   .map((student) => ({
//     ...student,
//     course: "Programming",
//   }))
//   .map((student) => ({ ...student, age: student.age * 2 }));
// console.log(doubleage);

/////////////////////////////////////////////////////////////////////////////////////
// Filter
/////////////////////////////////////////////////////////////////////////////////////
// const developers = [];

// for (let i = 0; i < students.length; i++) {
//   if (students[i].course === 'Web Development') {
//     developers.push(students[i]);
//   }
// };
// console.log(developers);

// const result = students.filter(function (student) {
//   if (student.course === 'Web Development') {
//     return true
//   }
// })
// console.log(result);

// const result = students.filter(student => student.course === 'Web Development');
// console.log(result);

// const result = students.filter((student) => student.age > 21);
// console.log(result);

/////////////////////////////////////////////////////////////////////////////////////
// Reduce
/////////////////////////////////////////////////////////////////////////////////////
// Toma valores de un objeto y las reduce a un valor

// let total = 0;
// for (let i = 0; i < points.length; i++) {
//   total += points[i];
// }

// const total = points.reduce((total, point) => {
//   return total + point;
// }, 0);

//--------------------------  ACC - ITEM ------------------- INITIAL VALUE DEL ACC
// const total = points.reduce((total, point) => total + point, 0);
// console.log(total);

// const totalAges = students.reduce((total, student) => total + student.age, 0);
// console.log(totalAges);

// const developers = [
//   {
//     id: 1,
//     name: "John",
//     skills: ["HTML", "React", "Javascript", "Java"],
//   },
//   {
//     id: 2,
//     name: "Jane",
//     skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "NodeJS"],
//   },
//   {
//     id: 3,
//     name: "Jack",
//     skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "NodeJS"],
//   },
// ];

// const result = developers.reduce(function (allSkills, student) {
//   return Array.from(new Set([...allSkills, ...student.skills]));
// }, []);
// console.log(result);

// let total = 0;
// for (let i = 0; i < students.length; i++) {
//   total += students[i].age;
// };
// console.log(total);

// const result = students.reduce((total, student) => total + student.age, 0);
// console.log(result);

/////////////////////////////////////////////////////////////////////////////////////
// Sort
/////////////////////////////////////////////////////////////////////////////////////
// const sortedStudents = students.sort(function (first, second) {
//   if (first.age > second.age) {
//     return 1;
//   } else {
//     return -1;
//   }
// });
// console.log(sortedStudents);

// const sortedStudents = students.sort((a, b) => a.age > b.age ? 1 : -1);
// console.log(sortedStudents);

// const sortedStudents = students.sort((a, b) => a.age - b.age);
// console.log(sortedStudents);

// const points = [ 100, 20, 30, 44, 55, 70, 90, 10, 30, 45, 60, 80, 100, 100,];
// const sortedPoints = points.sort();
// console.log(sortedPoints);

// const sortedPoints = points.sort((a, b) => a > b ? 1 : -1);
// console.log(sortedPoints);

// const sortedPoints = points.sort((a, b) => a - b);
// console.log(sortedPoints);

/////////////////////////////////////////////////////////////////////////////////////
// Find
/////////////////////////////////////////////////////////////////////////////////////
// const result = students.find((student) => student.name === "Ryan");
// console.log(result);

// const result = students.find((student) => student.age === 20);
// console.log(result);

/////////////////////////////////////////////////////////////////////////////////////
// Some
/////////////////////////////////////////////////////////////////////////////////////
// Retorna un valor booleano verdadero sí al menos algún elemento cumple cierta condición.

// const result = students.some((student) => student.lastname === "Doe");
// console.log(result);

// const result = students.some((student) => student.age > 22);
// console.log(result);

/////////////////////////////////////////////////////////////////////////////////////
// Every
/////////////////////////////////////////////////////////////////////////////////////
// Retorna un valor booleano verdadero sí TODOS los elementos
// cumplen con la condición establecida.

// const result = students.every((student) => student.name.includes("J"));
// console.log(result);

// const result = students.every((student) => student.age >= 20);
// console.log(result);

/////////////////////////////////////////////////////////////////////////////////////
// Combinados
/////////////////////////////////////////////////////////////////////////////////////

// const result = students
//   .map(({ name, lastname, age }) => ({
//     student: `${name} ${lastname}`,
//     age,
//   }));
// console.log(result);

// const result = students
//   .map(({ name, lastname, age }) => ({
//     student: `${name} ${lastname}`,
//     age,
//   }))
//   .filter((student) => student.age > 20);
// console.log(result);

// const result = students
//   .map(({ name, lastname, age }) => ({
//     student: `${name} ${lastname}`,
//     age,
//   }))
//   .filter((student) => student.age > 20)
//   .sort((a, b) => a.age - b.age);
// console.log(result);

// const result = students
//   .map(({ name, lastname, age }) => ({
//     student: `${name} ${lastname}`,
//     age,
//   }))
//   .filter((student) => student.age > 20)
//   .sort((a, b) => b.age - a.age)
//   .reduce((total, student) => total + student.age, 0);
// console.log(result);
