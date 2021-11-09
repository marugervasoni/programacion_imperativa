// primero tenemos algunas funciones
function entregarNombre(nombre) {
    return nombre
}

function saludar() {
    return "Hola "+ entregarNombre("Leandro")+ ". Cómo estas?"
}
console.log(saludar()); // Hola Leandro. Cómo estás?
//vemos que la función saludar() ejecuta a entregarNombre pero solo funciona con el nombre Leandro.
// podemos modificar eso.

//**********************************************************/
const sumar = (num1, num2) => num1 + num2;
const restar = (num1, num2) => num1 - num2;
const multiplicar = (num1, num2) => num1 * num2;
const dividir = (num1, num2) => num1 / num2;

const calculadora = (num1, num2, operacion) => operacion(num1, num2);
console.log(calculadora(2,3,multiplicar));

//***********************************************************/
// function crearURL(palabra) {
//   return "http://www." + palabra + ".com";
// }
// function largoString(palabra) {
//   return palabra.length
// }

// function procesar(arr, cb) {
//   let res = []
//   for (const e of arr) {
//     res.push(cb(e))
//   }
//   return res
// }

// const urlCompletas = procesar(["google", "yahoo"], () => "http://www." + palabra + ".com")
// console.log(urlCompletas); // imprime [ 'http://www.google.com', 'http://www.yahoo.com' ]

// const largoDeElmentos = procesar(["google", "yahoo"], largoString)
// console.log(largoDeElmentos); // imprime [ 6, 5 ]
//**********************************************************/
function portugues(param) {
    console.log("o resultado é : " + param);
  }
  //portugues(4);
  
  const español = function (param) {
    console.log("el resultado es: " + param);
  };
  //español(4);
  
  const ingles = (param) => console.log("the result is: " + param);
  //ingles(4);
  
  function sumadora(num1, num2, cb) {
    let sum = num1 + num2;
    cb(sum);
  }
  
  sumadora(5, 5, portugues);
  sumadora(5, 5, español);
  sumadora(5, 5, function (param) {
    console.log("the result is: " + param);
  });
  sumadora(5, 5, param => console.log("the result is: " + param));
  