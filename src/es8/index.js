const data = {
  frontend: 'Oscar',
  backed: 'Isabel',
  design: 'Ana', // Trailing comma
};

// Extraer proiedades y valores de objetos
const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

// Extrae valores de objeto como array
const values = Object.values(data);
console.log(values);
console.log(values.length);

// Añadir letras a string hasta completar el numero deseado de longitud
const string = 'hello';
console.log(string.padStart(7, 'hi'));
console.log(string.padEnd(12, '-----'));
console.log('food'.padEnd(12, '-'));

//Asinc await
const helloWorld = () => {
  return new Promise((resolve, reject) => {
    false
      ? setTimeout(() => resolve('Hello World'), 3000)
      : reject(new Error('Es error'));
  });
};
const helloAsync = async () => {
  const hello = await helloWorld();
  console.log(hello);
};
helloAsync();
const anotherFunction = async () => {
  try {
    const hello = await helloWorld();
    console.log(hello);
  } catch (error) {
    console.log(error);
  }
};
anotherFunction();
