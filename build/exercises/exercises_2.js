const username = 'Juan Camilo';
console.log(username, 'username');
const age = 30;
console.log(age, 'age');
const esEstudent = true;
console.log(esEstudent, 'esEstudent');
let data = 'data';
data = 10;
console.log(data, 'data');
const symbol = Symbol('mySymbol');
console.log(symbol, 'symbol');
function calculateArea(b, h) {
    return b * h;
}
const b = 10;
const h = 10;
console.log(calculateArea(b, h), 'calculateArea(b, h)');
const myCar = {
    make: 'cheverolet',
    model: 'camaro',
    printCar() {
        console.log(this.make, 'make\n', this.model, 'model');
    },
};
myCar.printCar();
class Rectangle {
    constructor(b, h) {
        this.b = b;
        this.h = h;
    }
    calculateArea() {
        return this.b * this.h;
    }
}
const myRectangle = new Rectangle(10, 10);
console.log(myRectangle.calculateArea(), 'myRectangle.calculateArea()');
const myArray = [
    {
        title: 'El señor de los anillos',
        author: 'Juan Perez',
    },
    {
        title: 'Harry Potter',
        author: 'Brayan Almeida',
    },
    {
        title: 'Pedro el Escamoso',
        author: 'Juan Perez',
    },
];
const myFilteredArray = myArray.filter((book) => book.author === 'Juan Perez');
console.log(myFilteredArray, 'myFilteredArray');
class Library {
    constructor() {
        this.books = [];
    }
    addBook(title, author, year) {
        this.books.push({ title, author, year });
    }
    findBooksByAuthor(author) {
        return this.books.filter((book) => book.author.toUpperCase() === author.toUpperCase());
    }
}
const myLibrary = new Library();
myLibrary.addBook('Harry Potter', 'Juan Perez', new Date('2003-12-03'));
myLibrary.addBook('El señor de los anillos', 'Carlos Antonio', new Date('2005-08-13'));
myLibrary.addBook('Pedro el escamoso', 'Juan Perez', new Date('2009-11-08'));
console.log(myLibrary.findBooksByAuthor('Juan Perez'), 'myLibrary.findBooksByAuthor(Juan Perez)');
function evenNumbers() {
    let evenCounter = 0;
    for (let i = 1; i <= 100; i += 1) {
        if (i % 2 === 0) {
            evenCounter += 1;
        }
    }
    console.log(evenCounter, 'everCounter');
    let i = 1;
    let oddCounter = 0;
    while (i <= 30) {
        if (i % 2 === 0) {
            oddCounter += 1;
        }
        i += 1;
    }
    console.log(oddCounter, 'oddCounter');
}
function isPrime(n) {
    if (n <= 1)
        return false;
    if (n <= 3)
        return true;
    if (n % 2 === 0)
        return false;
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        if (n % i === 0)
            return false;
    }
    return true;
}
evenNumbers();
console.log(isPrime(78), 'isPrime(78)');
//# sourceMappingURL=exercises_2.js.map