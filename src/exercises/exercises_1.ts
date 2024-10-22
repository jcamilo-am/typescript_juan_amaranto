// 1.
const auxNumber: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// a.
auxNumber.push(10, 12, 15, 16, 17);
console.log(auxNumber, 'auxNumber\n');

// b.
auxNumber.pop();
console.log(auxNumber, 'pop\n');

// c.
const indexOf1: number = auxNumber.indexOf(1);
const indexOf4: number = auxNumber.indexOf(4);
const indexOf7: number = auxNumber.indexOf(7);
console.log(indexOf1, 'indexOf1');
console.log(indexOf4, 'indexOf4');
console.log(indexOf7, 'indexOf7\n');

// d.
const arrayOfSlice: number[] = auxNumber.slice(2, 9);
console.log(arrayOfSlice, 'arrayOfSlice\n');

// e.
const allAbovenSeven: boolean = auxNumber.every((value) => value >= 7);
console.log(allAbovenSeven, 'allAbovenSeven\n');

// f.
const someAbovenSeven: boolean = auxNumber.some((value) => value >= 7);
console.log(someAbovenSeven, 'someAbovenSeven\n');

// 2.
const auxString: string[] = ['1', '2', '3', '4', '5', '6', '7'];

// a.
auxString.push('10', '11', '12', '13', '14');
console.log(auxString, 'auxString\n');

// b.
const indexOf10: number = auxString.indexOf('10');
const indexOf11: number = auxString.indexOf('11');
const indexOf14: number = auxString.indexOf('14');
console.log(indexOf10, 'indexOf10');
console.log(indexOf11, 'indexOf11');
console.log(indexOf14, 'indexOf14\n');

// 3.
const message: string = 'Bienvenido al Itp';

// a.
const messageToArray: string[] = message.split(' ');
console.log(messageToArray, 'messageToArray\n');

// b.
const messageJoined: string = messageToArray.join(',');
console.log(messageJoined, 'messageJoined\n');

// 4.
const names: string = 'Michael,Anderson,Yadir,Kevin,Emerson';

// a.
const nameToArray: string[] = names.split(',');
console.log(nameToArray, 'nameToArray\n');

// b.
const nameJoined: string = nameToArray.join(' ');
console.log(nameJoined, 'nameJoined\n');

// 5.
const arrayProducts: any[] = [
    {
        id: 1,
        name: 'Arroz',
        price: 1000,
        priceDescount: 700,
    },
    {
        id: 2,
        name: 'Atun',
        price: 2500,
        priceDescount: 1500,
    },
];

// a.
const pricesAboveNineHundred: any[] = arrayProducts.filter((item) => item.price > 900);
console.log(pricesAboveNineHundred, 'pricesAboveNineHundred\n');
const pricesAboveNineHundred2: any[] = [];
let i: number = 0;
for (i = 0; i < arrayProducts.length; i + 1) {
    if (arrayProducts[i].price > 900) {
        pricesAboveNineHundred2.push(arrayProducts[i]);
    }
}
console.log(pricesAboveNineHundred2, 'pricesAboveNineHundred2\n');

// b.
const priceDescountAboveFiveHundred: any = arrayProducts.find((item) => item.priceDescount > 500);
console.log(priceDescountAboveFiveHundred, 'priceDescountAboveFiveHundred\n');

// c.
const priceAboveOneThousand: number = arrayProducts.findIndex((item) => item.price > 1000);
console.log(priceAboveOneThousand, 'priceAboveOneThousand\n');

// d.
arrayProducts.push(
    {
        id: 3,
        name: 'Pasta',
        price: 1500,
        priceDescount: 1000,
    },
    {
        id: 4,
        name: 'Salsa',
        price: 2000,
        priceDescount: 1800,
    },
    {
        id: 5,
        name: 'Mayonesa',
        price: 3000,
        priceDescount: 2000,
    },
);
console.log(arrayProducts, 'arrayProducts\n');

// 6.
const array01: number[] = [1, 2, 3, 4];
const array02: number[] = [6, 7, 8, 9];

// a.
const arrayConcat: number[] = array01.concat(array02);
console.log(arrayConcat, 'arrayConcat\n');
const array01EndArray02: number[] = [];
array01EndArray02.push(...array01, ...array02);
console.log(array01EndArray02, 'array01EndArray02');

// b.
const arrayConcatSort: number[] = arrayConcat.sort((a, b) => a - b);
console.log(arrayConcatSort, 'arrayConcatSort\n');

// c.
const arraySortReverse: number[] = arrayConcatSort.reverse();
console.log(arraySortReverse, 'arraySortReverse\n');
