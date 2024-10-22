//  1. types of variables

//  string
const username: string = 'Juan Camilo';
console.log(username, 'username');

//  number
const age: number = 30;
console.log(age, 'age');

//  boolean
const esEstudent: boolean = true;
console.log(esEstudent, 'esEstudent');

//  any
let data: any = 'data';
data = 10;
console.log(data, 'data');

//  symbol
const symbol: symbol = Symbol('mySymbol');
console.log(symbol, 'symbol');

// 2. function that calculates the area

function calculateArea(b: number, h: number): number {
    return b * h;
}
const b: number = 10;
const h: number = 10;
console.log(calculateArea(b, h), 'calculateArea(b, h)');

// 3. Object car whit properties and methods

interface Car {
    make: string,
    model: string,
    printCar: () => void;
}
const myCar: Car = {
    make: 'cheverolet',
    model: 'camaro',
    printCar() {
        console.log(this.make, 'make\n', this.model, 'model');
    },
};
myCar.printCar();

// 4. interface shape and class extended interface

interface Shape {
    b: number;
    h: number;
    calculateArea(b: number, h: number): number;
}
class Rectangle implements Shape {
    b: number;

    h: number;

    constructor(b: number, h: number) {
        this.b = b;
        this.h = h;
    }

    calculateArea(): number {
        return this.b * this.h;
    }
}

const myRectangle: Rectangle = new Rectangle(10, 10);
console.log(myRectangle.calculateArea(), 'myRectangle.calculateArea()');

// 5. objects array

const myArray: Array<any> = [
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

const myFilteredArray: Array<any> = myArray.filter((book: any) => book.author === 'Juan Perez');
console.log(myFilteredArray, 'myFilteredArray');

// 6. program with all the concepts

interface Book {
    title: string,
    author: string,
    year: Date,
}

class Library {
    books: Array<Book>;

    constructor() {
        this.books = [];
    }

    addBook(title: string, author: string, year: Date): void {
        this.books.push({ title, author, year });
    }

    findBooksByAuthor(author: string): Array<Book> {
        return this.books.filter((book) => book.author.toUpperCase() === author.toUpperCase());
    }
}

const myLibrary: Library = new Library();

myLibrary.addBook('Harry Potter', 'Juan Perez', new Date('2003-12-03'));
myLibrary.addBook('El señor de los anillos', 'Carlos Antonio', new Date('2005-08-13'));
myLibrary.addBook('Pedro el escamoso', 'Juan Perez', new Date('2009-11-08'));

console.log(myLibrary.findBooksByAuthor('Juan Perez'), 'myLibrary.findBooksByAuthor(Juan Perez)');

// 7. use of cycles

function evenNumbers(): void {
    let evenCounter: number = 0;
    for (let i: number = 1; i <= 100; i += 1) {
        if (i % 2 === 0) {
            evenCounter += 1;
        }
    }
    console.log(evenCounter, 'everCounter');

    let i: number = 1;
    let oddCounter: number = 0;
    while (i <= 30) {
        if (i % 2 != 0) {
            oddCounter += 1;
        }
        i += 1;
    }
    console.log(oddCounter, 'oddCounter');
}

function isPrime(n: number): boolean {
    if (n <= 1) return false; // Números menores o iguales a 1 no son primos
    if (n <= 3) return true; // 2 y 3 son primos
    if (n % 2 === 0) return false; // Eliminar números pares mayores que 2

    for (let i: number = 3; i <= Math.sqrt(n); i += 2) { // Comprobar solo números impares
        if (n % i === 0) return false; // Si hay un divisor, no es primo
    }

    return true; // Si no hay divisores, es primo
}
evenNumbers();
console.log(isPrime(78), 'isPrime(78)');
