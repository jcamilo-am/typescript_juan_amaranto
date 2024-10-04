// arrays

// declaracion
const numeros: number[] = [1, 2, 3, 4, 5];
console.log(numeros, 'numeros');
const nombres: Array<number> = [1, 2, 3, 4, 5];
console.log(nombres, 'nombres');
const nombresArray: Array<string> = ['Juan', 'John'];
console.log(nombresArray, 'nombresArray');

// any
const mixedArray: any[] = [1, 'two', 3, true, { name: 'John' }];
console.log(mixedArray, 'mixedArray');

// metodos

// push
numeros.push(6); // agregar al final

// pop
numeros.pop(); // eliminar el último

// shift
numeros.shift(); // eliminar el primero

// unshift
numeros.unshift(0); // agregar al principio

// splice
numeros.splice(2, 1); // eliminar un elemento en la posición 2

// slice
const slicedArray: number[] = numeros.slice(1, 3); // copiar un rango de elementos
console.log(slicedArray, 'slicedArray');

// indexOf
const indexOfTwo: number = numeros.indexOf(2); // obtener la posición de un elemento
console.log(indexOfTwo, 'indexOfTwo');

// map hace una transformación a cada elemento del array
const mappedArray: number[] = numeros.map((num: number) => num * 2);
console.log(mappedArray, 'mappedArray');

// filter filtra los elementos del array
const filteredArray: number[] = numeros.filter((num: number) => num > 2);
console.log(filteredArray, 'filteredArray');

// reduce reduce los elementos del array a un solo valor
const reducedArray: number = numeros.reduce((acc: number, num: number) => acc + num, 0);
console.log(reducedArray, 'reducedArray');

// split
const text: string = 'Juan, Camilo, Perez';
const splittedText: string[] = text.split(','); // separar un texto en un array
console.log(splittedText, 'splittedText');

// join
const numbers: number[] = [1, 2, 3, 4, 5];
const joinedNumbers: string = numbers.join(', '); // unir un array en un texto
console.log(joinedNumbers, 'joinedNumbers');

// find encuentra un elemento en el array
const foundNumber: number | undefined = numbers.find((num: number) => num === 3);
console.log(foundNumber, 'foundNumber');

// findIndex encuentra la posición de un elemento en el array
const foundIndex: number = numbers.findIndex((num: number) => num === 3);
console.log(foundIndex, 'foundIndex');

// every verifica si todos los elementos cumplen con una condición
const everyNumber: boolean = numbers.every((num: number) => num > 0);
console.log(everyNumber, 'everyNumber');

// some verifica si al menos un elemento cumple con una condición
const someNumber: boolean = numbers.some((num: number) => num > 3);
console.log(someNumber, 'someNumber');

// concat
const array2: number[] = [6, 7, 8];
const concatenatedArray: number[] = numbers.concat(array2); // concatenar dos arrays en uno nuevo
console.log(concatenatedArray, 'concatenatedArray');

// sort
const unsortedArray: number[] = [5, 3, 1, 4, 2];
const sortedArray: number[] = unsortedArray.sort((a, b) => a - b); // ordenar un array
console.log(sortedArray, 'sortedArray');

// reverse
const sortedArray2: number[] = [1, 2, 3, 4, 5];
const reversedArray: number[] = sortedArray2.reverse(); // invertir un array
console.log(reversedArray, 'reversedArray');

// includes
const numbers1: number[] = [1, 2, 3, 4, 5];
const includedNumber: boolean = numbers1.includes(3); // si un elemento está en el array vota true
console.log(includedNumber, 'includedNumber');
