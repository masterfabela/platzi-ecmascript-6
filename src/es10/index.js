// Aplanar arrays
let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];
console.log(array.flat(2));
array = [1, 2, 3, 4, 5];
console.log(array.flatMap((value) => [value, value * 2]));

// Eliminar espacios en blanco
let hello = '            hello world';
console.log(hello);
console.log(hello.trimStart());
hello = 'hello world         ';
console.log(hello);
console.log(hello.trimEnd());

// Error disponible en catch
try {
} catch {
  error;
}

// Transformar clave valor en objeto
let entries = [
  ['name', 'oscar'],
  ['age', 32],
];
console.log(Object.fromEntries(entries));

// Simbolo permite acceder a descripcion
let mySymbol = `My Symbol`;
let symbol = Symbol(mySymbol);
console.log(symbol.description);
