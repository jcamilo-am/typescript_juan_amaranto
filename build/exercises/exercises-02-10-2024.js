const auxNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];
auxNumber.push(10, 12, 15, 16, 17);
console.log(auxNumber, 'auxNumber\n');
auxNumber.pop();
console.log(auxNumber, 'pop\n');
const indexOf1 = auxNumber.indexOf(1);
const indexOf4 = auxNumber.indexOf(4);
const indexOf7 = auxNumber.indexOf(7);
console.log(indexOf1, 'indexOf1');
console.log(indexOf4, 'indexOf4');
console.log(indexOf7, 'indexOf7\n');
const arrayOfSlice = auxNumber.slice(2, 9);
console.log(arrayOfSlice, 'arrayOfSlice\n');
const allAbovenSeven = auxNumber.every((value) => value >= 7);
console.log(allAbovenSeven, 'allAbovenSeven\n');
const someAbovenSeven = auxNumber.some((value) => value >= 7);
console.log(someAbovenSeven, 'someAbovenSeven\n');
const auxString = ['1', '2', '3', '4', '5', '6', '7'];
auxString.push('10', '11', '12', '13', '14');
console.log(auxString, 'auxString\n');
const indexOf10 = auxString.indexOf('10');
const indexOf11 = auxString.indexOf('11');
const indexOf14 = auxString.indexOf('14');
console.log(indexOf10, 'indexOf10');
console.log(indexOf11, 'indexOf11');
console.log(indexOf14, 'indexOf14\n');
const message = 'Bienvenido al Itp';
const messageToArray = message.split(' ');
console.log(messageToArray, 'messageToArray\n');
const messageJoined = messageToArray.join(',');
console.log(messageJoined, 'messageJoined\n');
const names = 'Michael,Anderson,Yadir,Kevin,Emerson';
const nameToArray = names.split(',');
console.log(nameToArray, 'nameToArray\n');
const nameJoined = nameToArray.join(' ');
console.log(nameJoined, 'nameJoined\n');
const arrayProducts = [
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
const pricesAboveNineHundred = arrayProducts.filter((item) => item.price > 900);
console.log(pricesAboveNineHundred, 'pricesAboveNineHundred\n');
const pricesAboveNineHundred2 = [];
for (let i = 0; i < arrayProducts.length; i++) {
    if (arrayProducts[i].price > 900) {
        pricesAboveNineHundred2.push(arrayProducts[i]);
    }
}
console.log(pricesAboveNineHundred2, 'pricesAboveNineHundred2\n');
const priceDescountAboveFiveHundred = arrayProducts.find(item => item.priceDescount > 500);
console.log(priceDescountAboveFiveHundred, 'priceDescountAboveFiveHundred\n');
const priceAboveOneThousand = arrayProducts.findIndex(item => item.price > 1000);
console.log(priceAboveOneThousand, 'priceAboveOneThousand\n');
arrayProducts.push({ id: 3, name: 'Pasta', price: 1500, priceDescount: 1000 }, { id: 4, name: 'Salsa', price: 2000, priceDescount: 1800 }, { id: 5, name: 'Mayonesa', price: 3000, priceDescount: 2000 });
console.log(arrayProducts, 'arrayProducts\n');
const array01 = [1, 2, 3, 4];
const array02 = [6, 7, 8, 9];
const arrayConcat = array01.concat(array02);
console.log(arrayConcat, 'arrayConcat\n');
const array01EndArray02 = [];
array01EndArray02.push(...array01, ...array02);
console.log(array01EndArray02, 'array01EndArray02');
const arrayConcatSort = arrayConcat.sort((a, b) => a - b);
console.log(arrayConcatSort, 'arrayConcatSort\n');
const arraySortReverse = arrayConcatSort.reverse();
console.log(arraySortReverse, 'arraySortReverse\n');
//# sourceMappingURL=exercises-02-10-2024.js.map