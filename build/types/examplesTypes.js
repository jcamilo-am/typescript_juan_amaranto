let username = 'Juan Camilo';
console.log(username, 'username');
let age = 20;
console.log(age, 'age');
let isStudent = true;
console.log(isStudent, 'isStudent');
let dateOfBirth = new Date('2003-10-10');
console.log(dateOfBirth, 'dateOfBirth');
let data = 'data';
console.log(data, 'data');
let myArray = [1, 2, 3, 4, 5];
console.log(myArray, 'myArray');
const peoples = [
    { nombre: 'Juan', age: 30 },
    { nombre: 'Ana', age: 25 },
    { nombre: 'Pedro', age: 35 }
];
let myTuple = ['John', 30, true];
console.log(myTuple, 'myTuple');
var Estado;
(function (Estado) {
    Estado[Estado["Activo"] = 0] = "Activo";
    Estado[Estado["Inactivo"] = 1] = "Inactivo";
    Estado[Estado["Pendiente"] = 2] = "Pendiente";
})(Estado || (Estado = {}));
let estadoActual = Estado.Activo;
console.log(estadoActual, 'estadoActual');
function saludar(nombre) {
    return `Hola, ${nombre}!`;
}
const mensaje = saludar('Juan');
console.log(mensaje);
const sumar = function (a, b) {
    console.log(a + b);
};
let car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2020,
};
//# sourceMappingURL=examplesTypes.js.map