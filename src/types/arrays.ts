// arrays

// declaracion
let numeros: number[] = [1, 2, 3, 4, 5];
console.log(numeros, 'numeros');
let nombres: Array<number> = [1, 2, 3, 4, 5];
console.log(nombres, 'nombres');
const nombresArray: Array<string> = ['Juan', 'John'];
console.log(nombresArray, 'nombresArray');

// any
let mixedArray: any[] = [1, 'two', 3, true, { name: 'John' }];
console.log(mixedArray, 'mixedArray');

// metodos

// push
numeros.push(6); // agreagar al final

// pop
numeros.pop(); // eliminar el ultimo

// shift
numeros.shift(); // eliminar el primero

// unshift
numeros.unshift(0); // agregar al principio

// splice
numeros.splice(2, 1); // eliminar un elemento en la posicion 2

// slice
let slicedArray = numeros.slice(1, 3); // copiar un rango de elementos
console.log(slicedArray, 'slicedArray');

// indexOf
let indexOfTwo = numeros.indexOf(2); // obtener la posicion de un elemento
console.log(indexOfTwo, 'indexOfTwo');

// map
let mappedArray = numeros.map((num) => num * 2); // map lo que hace es recorrer el array y por cada elemento ejecutar una funcion
console.log(mappedArray, 'mappedArray');

// filter
let filteredArray = numeros.filter((num) => num > 2); // filtrar los elementos que cumplan con la condicion
console.log(filteredArray, 'filteredArray');

// reduce
let reducedArray = numeros.reduce((acc, num) => acc + num, 0); // sumar todos los elementos del array
console.log(reducedArray, 'reducedArray');

// split
let text: string = 'Juan, Camilo, Perez';
let splittedText = text.split(','); // separar un texto en un array
console.log(splittedText, 'splittedText');

// join
let numbers: number[] = [1, 2, 3, 4, 5];
let joinedNumbers = numbers.join(', '); // unir un array en un texto
console.log(joinedNumbers, 'joinedNumbers');

// find
let foundNumber = numbers.find((num) => num === 3); // encontrar un elemento en el array
console.log(foundNumber, 'foundNumber');

// findIndex
let foundIndex = numbers.findIndex((num) => num === 3); // encontrar la posicion de un elemento en el array
console.log(foundIndex, 'foundIndex');

// every
let everyNumber = numbers.every((num) => num > 0); // si todos los elementos cumplen con la condicion vota true
console.log(everyNumber, 'everyNumber');

// some
let someNumber = numbers.some((num) => num > 3); // si alguno de los elementos cumple con la condicion vota true
console.log(someNumber, 'someNumber');

// concat
let array2: number[] = [6, 7, 8];
let concatenatedArray = numbers.concat(array2); // concatenar dos arrays en uno nuevo
console.log(concatenatedArray, 'concatenatedArray');

// sort
let unsortedArray: number[] = [5, 3, 1, 4, 2];
let sortedArray = unsortedArray.sort(); // ordenar un array
console.log(sortedArray, 'sortedArray');

// reverse
let sortedArray2: number[] = [1, 2, 3, 4, 5];
let reversedArray = sortedArray2.reverse(); // invertir un array
console.log(reversedArray, 'reversedArray');

// includes
let numbers1: number[] = [1, 2, 3, 4, 5];
let includedNumber = numbers1.includes(3); // si un elemento esta en el array vota true
console.log(includedNumber, 'includedNumber');