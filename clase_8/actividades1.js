//---------------------------------------
// condicionales                      //
//------------------------------------
//veamos como funciona:
// if (edad >= 18) {
//     console.log("puede pasar");
// } else {
//     console.log("no puede pasar");
// }

// Agregá Caminos-------------------------------------------------------------------------
// Revisá el siguiente código y asegúrate de entenderlo para poder avanzar con el
// ejercicio

// let calcularSiPar = edad % 2;
// let edadImpar = calcularSiPar = 0;


// console.log(calcularSiPar);
// console.log(edadImpar);

function puedeEntrar(edad) {
    // let edadImpar = edad % 2;
    if (edad < 18) {
        console.log("Error, edad inválida. Por favor ingrese un número válido.");
    }  else if (edad < 21) {
        console.log("puede pasar al bar pero no puede beber alcohol."); 
    } else {
        console.log("Bienvenido! felicidades por llegar a la mayoría de edad");
    }
    if (edad % 2 === 1 ) {
        console.log("¿Sabías que tu edad es impar?");  
    }
}
puedeEntrar(15);

// Sin repetirte, modificá tu código de forma tal que cumpla con estas consignas:
// ● Si la edad es negativa, que se muestre en la consola este mensaje: "Error, edad
// inválida. Por favor ingrese un número válido."
// Importante: No se deberá mostrar ningún otro mensaje.
// ● Si tiene 21 años, además de darle la bienvenida, felicitarlo por haber llegado a
// la mayoría de edad.
// ● Si su edad es impar decile en cualquiera de los mensajes: "¿Sabías que tu edad
// es impar?".


// totalAPagar() ---------------------------------------------------------------------------
// Declarar una función llamada totalAPagar() que reciba como parametros, vehiculo y
// litrosConsumidos.
// continuación, defina y realice los cálculos para obtener el total a pagar, teniendo en
// cuenta las siguientes consideraciones.
// ● Si el vehículo es “coche”, el precio por litro es de $86,
// ● Si es “moto” ha de ser $70.
// ● Si es “autobús” ha de ser $55.
// ● Si los litros consumidos están entre 0 y 25 se ha de añadir $50 al total a pagar.
// ● Si los litros consumidos es mayor a 25 se ha de añadir $25 al total a pagar.


//local de sandwiches ----------------------------------------------------------
let tuSandwich = 0;
const pollo = 150;
const carne = 200;
const vegetariano = 100;
const blanco = 50;
const negro = 60;
const sinGluten = 75;
const queso = 20;
const tomate = 15;
const lechuga = 10;
const mayonesa = 5;
const mostaza = 5;

// Nuestro trabajo es crear una función que reciba estos 8 parámetros (un string para el
//     sandwich base, uno para el pan, y los 6 booleanos de los adicionales). La función
//     deberá consultar primero que tipo de sándwich base se seleccionó, luego el tipo de
//     pan, y por último deberá verificar que adicionales se seleccionaron. Por último deberá
//     retornar el valor numérico del total a pagar del cliente.

function creaTuSandwich(sandwichBase, pan, _tomate, _lechuga, _queso) {
    switch (sandwichBase) {
        case "pollo":
            tuSandwich += pollo;
            break;
        case "carne":
            tuSandwich += carne;
            break;
        case "vegetariano":
            tuSandwich += vegetariano;
            break;
        default:
            return -1;
    }
    switch (pan) {
        case "blanco":
            tuSandwich += blanco;
            break;
        case "negro":
            tuSandwich += negro;
            break;
        case "sin gluten":
            tuSandwich += sinGluten;
            break;
        default:
            return -1;
    }
    tuSandwich += _tomate ? tomate : 0;
    tuSandwich += _lechuga ? lechuga : 0;
    tuSandwich += _queso ? queso : 0;

    return tuSandwich;
}

const totalSandwich = creaTuSandwich("vegetariano", "negro", "queso", "lechuga");
if (totalSandwich !== -1) console.log("el total de tu sandwich es $ "+totalSandwich);
