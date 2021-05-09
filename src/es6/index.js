// Establecer valores por defecto
// ES5
function newFunction(name2, age, country) {
  let name = name2 || 'oscar';
  var age = age || 32;
  var country = country || 'ES';
  console.log(name2, age, country);
}
//ES6
function newFunction2(name = 'oscar', age = 32, country = 'ES') {
  console.log(name, age, country);
}
newFunction2();
newFunction2('Ricardo', 23, 'CO');

// Template literals
let hello = 'Hello';
let world = 'World';
//ES5
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);
//ES6
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

// Multilinea en strings
//ES5
let lorem = 'Quiero escribir una frase epica \n' + 'otra frase epica';
console.log(lorem);
//ES6
let lorem2 = `Quiero escribir una frase epica 
otra frase epica`;
console.log(lorem2);

// Destructuracion de elementos
let person = {
  name: 'oscar',
  age: 32,
  country: 'MX',
};
//ES5
console.log(person.name, person.age);
//ES6
let { name, age } = person;
console.log(name, age);

// Operador de propagacion
let team1 = ['Oscar', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Jessica', 'Camila'];
//ES6
let education = ['David', ...team1, ...team2];
console.log(education);

// Let para variables por scope
{
  var globalVar = 'Global var';
}

{
  let globalLet = 'Global let';
  console.log(globalLet);
}
console.log(globalVar);

// Constantes, (No se pueden reasignar)
const a = 'b';
// a = 'a';  no se puede
console.log(a);

// Asignacion de objetos mejorada
let name2;
// ES5
var obj = {
  name2: name2,
  age: age,
};
console.log(obj);
// ES6
let obj2 = {
  name2,
  age,
};
console.log(obj2);

// Funciones flecha
const names = [
  { name: 'Oscar', age: 32 },
  {
    name: 'Yesica',
    age: 27,
  },
];
// ES5
let listOfNames = names.map(function (item) {
  console.log(item.name);
});
// ES6
listOfNames = names.map((item) => {
  console.log(item.name);
});
const square = (num) => num * num;

// Promesas
const helloPromise = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve('Hey!');
    } else {
      reject('Ups!');
    }
  });
};
helloPromise
  .then((response) => console.log(response))
  .catch((error) => console.log(error));
