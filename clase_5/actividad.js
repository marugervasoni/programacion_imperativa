//Micro desafio 1: 30
//Micro desafío 2: 20

//Funciones Simples
// 1) funcion que convierta pulgadas a cm.
function pulgadasACm(pulgadas) {
    let centimetros = 2.54;
    return pulgadas * centimetros;
}
console.log(pulgadasACm(10));

// 2. Crear una función que recibe un string y lo convierte en una URL.
// ej: “pepito” es devuelto como “http://www.pepito.com”
function convertirAUrl(string) {
    return "http://www."+string+".com";
}
console.log(convertirAUrl("McDowells"));

// 3. Crear una función que recibe un string y devuelve la misma frase pero con
// admiración.
function stringConAdmiracion(string) {
    return string+"!";
}
console.log(stringConAdmiracion("esto es una exclamación"));

// 4. Crear una función que calcule la edad de los perros, considerando que 1 año
// para nosotros son 7 de ellos.
function calcularEdadAPerros(edadPerro) {
    return edadPerro * 7; 
}
console.log(calcularEdadAPerros(5));

// 5. Crear una función que calcule el valor de tu hora de trabajo, introduciendo tu
// sueldo mensual como parámetro.
// *considera que tu mes de trabajo tiene 40 horas.
function valorHoraTrabajo (sueldoMensual) {
    let mesDeTrabajo = 40;
    return sueldoMensual / mesDeTrabajo;
}
console.log(valorHoraTrabajo(25000));

// 5. Crear la función calculadorIMC() que reciba la altura en metros y el peso en
// kilogramos y calcule el imc de una persona. Luego, ejecutar la función
// probando diferentes valores.
function calculadoraIMC(altura, peso) {
    return peso / (altura * altura);
}
console.log(calculadoraIMC(1.64, 63.2));

// //----------------------------------------------------------------------
// 6. Crear una función que recibe un string en minúscula, lo convierta a mayúsculas
// y lo retorne.
// Investiga que hace el método de strings .toUpperCase()
function stringAMayus(string) {
    return string.toUpperCase();
}
console.log(stringAMayus("estaba escrito en minuscula"));

// 7. Crear una función que recibe un parámetro y devuelve qué tipo de dato es ese
// parámetro.
// pista: te servirá revisar que hace la palabra reservada typeof.
function tipoDeDato (parametro) {
    return typeof parametro;         //---> tipeof es una palabra reservada que devuelve el tipo de dato
}
console.log(tipoDeDato("soy un string"));

// 8. Crear una función que le pasamos el radio de un círculo y nos devuelve la
// circunferencia.
// Pista: Investiga si el objeto Math tiene entre sus propiedades el número Pi
function radioACircunferencia(radio) {
    return Math.PI * radio;
}
console.log(radioACircunferencia(3));      //  diferencia de los demás objetos globales, el objeto Math no se puede editar. Todas las propiedades y métodos de Math son estáticos. Usted se puede referir a la constante pi como Math.PI y puede llamar a la función seno como Math.sin(x), donde x es el argumento del método. Las constantes se definen con la precisión completa de los números reales en JavaScript.