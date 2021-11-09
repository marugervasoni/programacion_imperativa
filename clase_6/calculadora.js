//seguimos con funciones-----------------------------------
//calculadora Nivel 1
// 2. Crear una función sumar, esta deberá recibir dos parámetros y retornar la
// suma de los mismos.
function sumar(x,y) {
    return x +y;
}

// 3. Crear una función restar, la cual deberá recibir dos parámetros y retornar la
// resta del primero menos el segundo.
function restar(x, y) {
    return x - y;
}

// 4. Crear una función multiplicar, la misma deberá recibir dos parámetros y
// retornar el resultado de su multiplicación
function multiplicador(x, y) {
    let resultado = x * y;
    return resultado;
}

// 5. Crear una función dividir, la cual recibirá dos parámetros y retorna el resultado
// de la división del primero sobre el segundo.
function dividir(x, y) {
    return x / y;
}


// Calculadora - Nivel II------------------------------------------------------------------------
// Superado el Nivel I, agregamos un poco más de dificultad, probaremos nuestras
// funciones.
// 1. En el archivo calculadora.js —debajo de nuestras 4 funciones hechas con
// anterioridad— creá un console.log en el cual vas a poner un string para indicar
// que debajo de él comenzarás a probar las funciones. Por ejemplo:
// console.log(“-------------- Testeo de Operaciones / Calculadora --------------”)
console.log("-------------- Testeo de Operaciones / Calculadora --------------");

// 2. Ejecutar la función que permite sumar y la función que permite restar pasando
// como argumentos dos números cualesquiera. Mostrar en consola los
// resultados.
console.log("suma ---> "+sumar(4,4));
console.log("resta ---> "+restar(25, 14));

// 3. Ejecutar la función que permite multiplicar pasando como argumentos dos
// números cualesquiera. Mostrar en consola el resultado.
console.log("multiplicacion ---> "+multiplicador(8, 9));

// 4. Ejecutar la función que permite dividir pasando como argumentos dos
// números cualesquiera. Mostrar en consola el resultado.
console.log("division---> "+dividir(45, 9));

// 5. Ejecutar la función que permite dividir pasando ahora, como uno de los dos
// argumentos, el número cero. Mostrar en consola el resultado.
console.log("division con 0---> "+dividir(45, 0));     //----> En el punto 5, se nos requiere ejecutar la función dividir, pero si pasamos el cero
// como divisor, nos arroja un error. No te preocupes.


// Calculadora - Nivel III - Funciones extras-----------------------------------------------
// 1. Crear una función que se llame cuadradoDeUnNumero, la cual recibe un número
// como parámetro y deberá retornar ese número elevado al cuadrado.
// Importante: cuadradoDeUnNumero() deberá utilizar la función multiplicar() para
// calcular el cuadrado del parámetro ingresado a potencia()
function cuadradoDeUnNumero(numero) {
    return multiplicador(numero, numero);
}
console.log("num al cuadrado---> "+cuadradoDeUnNumero(3));

// 2. Crear la función promedioDeTresNumeros, la misma deberá calcular el promedio
// de 3 números, que serán ingresados por parámetro.
// Importante: promedioDeTresNumeros() deberá utilizar algunas funciones
// previamente creadas de nuestra calculadora.
function promedioDeTresNumeros(a, b, c) {
    let resultadoSuma = sumar (a, b)+ c;      //----> adaptarse a la funcion ya definida y agregar por fuera lo que falte
    let promedio = dividir (resultadoSuma, 3)  //---->podemos poner como parametro una variable.
    return promedio; 
}
console.log("promedio ---> "+promedioDeTresNumeros(5,8,14));

// 3. Crear la función calcularPorcentaje. Esta recibirá dos parámetros: el número
// total y el porcentaje que se le quiere calcular. Deberá retornar el x% del total.
// Ejemplo: calcularPorcentaje(300, 15) debe retornar 45, ya que es el 15% de 300.
// Importante: calcularPorcentaje() deberá utilizar algunas funciones previamente
// creadas de nuestra calculadora.
function calcularPorcentaje(total, porcentaje) {
    let resultadoDivision = dividir (porcentaje, 100);
    let multiplicar = multiplicador (resultadoDivision, total);
    return multiplicar;    
}
console.log("doce % de 1000 es---> "+calcularPorcentaje(1000, 12));

// 4. Crear una función GeneradorDePorcentaje que recibe dos parámetros y deberá
// retornar el porcentaje del primero con respecto al segundo.
// Ejemplo: GeneradorDePorcentaje(2, 200) deberá retornar 1, ya que 2 es el 1% de
// // 200.
function generadorDePorcentaje(x, y) {
    let porcentajeX = multiplicador (x, 100);
    return dividir (porcentajeX, y);
}
console.log("350 es el ----> % "+generadorDePorcentaje(350, 4000)+" de 4000");
