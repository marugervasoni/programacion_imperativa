//funcion tradicional
// function saludo (nombre) {
//     return "hola"+ nombre;
// }
// console.log(saludo("maru"));

//pasarla a expresada

//funcion expresada
// const buscar = function(departamento) {
//     return departamento.id === id;
// }
// (?)
//arrow function
// const saludo = nombre => "hola" + nombre;
// console.log(saludo("Maru"));


const saludar = (nombre, saludo) =>saludo + " " + nombre;
console.log(saludar("Maru","hola"));
//no usar arrow functions en metodos.