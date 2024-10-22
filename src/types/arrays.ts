// arrays
const numeros: Array<number> = [1, 2, 3, 4, 5];

// push: agregar un número al final
numeros.push(6);

// pop: eliminar el último número
numeros.pop();

// shift: eliminar el primer número
numeros.shift();

// unshift: agregar un número al principio
numeros.unshift(0);

// splice: eliminar un elemento en la posición 2
numeros.splice(2, 1);

// slice: copiar un rango de elementos
const slicedArray: number[] = numeros.slice(1, 3);
console.log(slicedArray, 'slicedArray');

// indexOf: obtener la posición del número 2
const indexOfTwo: number = numeros.indexOf(2);
console.log(indexOfTwo, 'indexOfTwo');

// map: transformar cada elemento del array
const mappedArray: number[] = numeros.map((num: number) => num * 2);
console.log(mappedArray, 'mappedArray');

// filter: filtrar elementos mayores a 2
const filteredArray: number[] = numeros.filter((num: number) => num > 2);
console.log(filteredArray, 'filteredArray');

// reduce: reducir a un solo valor
const reducedArray: number = numeros.reduce((acc: number, num: number) => acc + num, 0);
console.log(reducedArray, 'reducedArray');

// split: separar un texto en un array
const text: string = 'Juan, Camilo, Perez';
const splittedText: string[] = text.split(',');
console.log(splittedText, 'splittedText');

// join: unir un array en un texto
const numbers: number[] = [1, 2, 3, 4, 5];
const joinedNumbers: string = numbers.join(', ');
console.log(joinedNumbers, 'joinedNumbers');

// find: encontrar un número en el array
const foundNumber: number | undefined = numbers.find((num: number) => num === 3);
console.log(foundNumber, 'foundNumber');

// findIndex: encontrar la posición del número 3
const foundIndex: number = numbers.findIndex((num: number) => num === 3);
console.log(foundIndex, 'foundIndex');

// every: verificar si todos los elementos son mayores a 0
const everyNumber: boolean = numbers.every((num: number) => num > 0);
console.log(everyNumber, 'everyNumber');

// some: verificar si hay algún número mayor a 3
const someNumber: boolean = numbers.some((num: number) => num > 3);
console.log(someNumber, 'someNumber');

// concat: concatenar dos arrays en uno nuevo
const array2: number[] = [6, 7, 8];
const concatenatedArray: number[] = numbers.concat(array2);
console.log(concatenatedArray, 'concatenatedArray');

// sort: ordenar un array
const unsortedArray: number[] = [5, 3, 1, 4, 2];
const sortedArray: number[] = unsortedArray.sort((a, b) => a - b);
console.log(sortedArray, 'sortedArray');

// reverse: invertir un array
const sortedArray2: number[] = [1, 2, 3, 4, 5];
const reversedArray: number[] = sortedArray2.reverse();
console.log(reversedArray, 'reversedArray');

// includes: verificar si un elemento está en el array
const numbers1: number[] = [1, 2, 3, 4, 5];
const includedNumber: boolean = numbers1.includes(3);
console.log(includedNumber, 'includedNumber');
