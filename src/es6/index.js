// Establecer valores por defecto
// ES5
function newFunction(name, age, country) {
  var name = name || 'oscar';
  var age = age || 32;
  var country = country || 'ES';
  console.log(name, age, country);
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
