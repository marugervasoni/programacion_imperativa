//ingresos a una discoteca
let edadMinima = 18;
let capacidadMaxima = 1000;

edadMinima = 21;
capacidadMaxima = 800

// console.log(edadMinima , capacidadMaxima);

// Variables numericas -----------------------------------------
// 1. Declará una variable llamada uno y asignale un número cualquiera.
// 2. Declará una variable llamada dos y asignale como valor la variable uno.
// 3. Cambiá el valor de la variable uno.
// Pensá antes de ver el resultado: ¿cuál es el valor de la variable dos?
let uno = 4;
let dos = uno;

console.log(dos);

//Mensaje con variables-------------------------------------------------
// 4. Declará las siguientes variables y asignales un valor:
// a. 'nombre'
// b. 'edad'
// c. 'cumpleaños'
// d. 'ciudad'
// e. 'ocupacion'
// f. 'hobbie'
// 5. Usá console.log para escribir un párrafo que combine strings con la
// información guardada en las variables.
// 6. Desafío Bonus: creá múltiples variables en una única línea de código.
let nombre = "Maria";
let edad = 25;
let cumpleaños = "3 de abril";
let ciudad = "San Isidro";
let ocupacion = "estudiante";
let hobbie = "entrenar";

console.log("Mi nombre es "+nombre+", tengo "+edad+" años,"+" los cumplo el día "+cumpleaños+", vivo en la ciudad de "+ciudad+", actualmente soy "+ocupacion+", y mi hobbie es "+hobbie+".");

// Calculadora de edad------------------------------------------------------
// 1. Crea distintas variables con edades de usuarios.
// 2. Calculá la cantidad de días que tienen esos años.
// 3. Mostrá la respuesta en la consola
let edadUsuario1 = 18;
let edadUsuario2 = 21;

let calculadora1 = (edadUsuario1 * 365)  //hacer el calculo sin usar funciones
let calculadora2 = (edadUsuario2 * 365)

console.log(calculadora1);
console.log(calculadora2);


function calculadoraEdad(x) {          //usando funciones
    return x * 365;
}
console.log(calculadoraEdad (18));
console.log(calculadoraEdad (21));

// Suma de valores---------------------------------------------------------------
// 4. Creá tres variables: num1, num2, resultado.
// 5. Asignale un valor a num1 y num2.
// 6. Asignale a resultado el valor de la suma entre num1 y num2.
// 7. Mostrá por consola el valor de resultado.
let num1 = 15;
let num2 = 21;
let resultado = num1 + num2;

console.log(resultado);

// Calculador de abastecimiento de por vida--------------------------------------------------------
//----------------
// Ejercicio 1:  //
//---------------
// ¿Cuántos snacks vas a comer por el resto de tu vida? ¡Averigualo!
// 1. Almacená tu edad en una variable.
// 2. Guardá tu edad máxima en otra variable.
// 3. Declará una variable con el nombre de tu snack favorito.
// 4. Estimá cuántos snacks vas a comer por día y guardalo como un
// número en una variable.
// 5. Calculá cuántos snacks te quedan por comer en el resto de tu vida.
// 6. Mostrá en la consola el resultado: "Vas a necesitar NN snacks para
// que te alcancen hasta los XX años.".
// 7. Agregale un precio por unidad y descubrí cuánto vas a gastar en
// snacks el resto de tu vida.
let edadActual = 25;
let edadMaxima = 85;
let snakFavorito = "3D";
let snaksPorDia = 20;

let snaksPorComer = (edadMaxima - edadActual) * snaksPorDia;
console.log("voy a necesitar "+snaksPorComer+" snaks para que me alcancen hasta los "+edadMaxima+" años.");
let precioPorUnidad = 1;
let gastar = snaksPorComer * snaksPorDia;
console.log("voy a gastar en snaks el resto de mi vida "+"$ "+gastar+".");

//-----------------
// Ejercicio 2: //
//----------------
// Estás organizando tus vacaciones y tenés que calcular cuánto dinero vas a
// necesitar para la comida.
// 1. Almacená la cantidad de días que vas a estar de viaje en una
// variable.
// 2. Estimá tu presupuesto máximo por todo el viaje y guardalo en una
// variable.
// 3. Declará la variable comida
// 4. Estima cuántas comidas vas a tener en todo tu viaje. Guardá este
// valor en una variable.
// 5. Teniendo en cuenta tu presupuesto máximo, calculá cuánto podés
// gastar en cada comida.
// 6. Mostrá la consola el resultado: "Podés gastar XX en cada comida
// para que te alcance la plata durante los XX días de viaje".
let cantDias = 7;
let presupuestoMax = 7000;
let comidasTotal = 28;
let cuantoPuedoGastarXComida = presupuestoMax / comidasTotal;

console.log("Podés gastar "+"$ "+cuantoPuedoGastarXComida+" en cada comida para que te alcance la plata durante los "+cantDias+" días de viaje.");

// Calculador de IMC----------------------------------------------------------------------------------
// Te proponemos calcular los índices de masa corporal de los clientes de un
// nutricionista. El nutricionista envía la siguiente tabla:
let name = "Nicolas Lopez";
let edadd = 27;
let peso = 83.5;
let altura = 1.70;
let prepaga = true;
const IMC = peso / (altura * altura);
console.log(name+" tiene "+edadd+" años y su índice de masa corporal es de "+IMC+".");
