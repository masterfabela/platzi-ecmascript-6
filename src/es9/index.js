// Operador de reposo
const obj = {
  name: 'oscar',
  age: 32,
  country: 'ES',
};
let { name, ...all } = obj;
console.log(name, all);
console.log(all);

// Union de objetos
const obj1 = {
  ...obj,
  country: 'FR',
};
console.log(obj1);

// Finalizacion de promesa
const helloWorld = () => {
  return new Promise((resolve, reject) => {
    true ? resolve('Hello world') : reject(new Error('Test error'));
  });
};
helloWorld()
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => 'Finalizo');

// Mejoras en regex
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec('2018-04-20');
const year = match[1];
const month = match[2];
const day = match[3];
console.log(year, month, day);
