//HACERS
// Array inverso--------------------------------------------------------------------
// En este ejercicio deberás crear una función que devuelva un array con sus elementos
// invertidos, sin modificarlo. Luego, deberás hacer una función que lo modifique e
// invierta el orden de sus elementos.

// 1. Creá la función imprimirInverso que tome un array como argumento y que
// imprima en la consola cada elemento en orden inverso (no tenés que invertir el
// array).
let nombres = ["Adrian","Giselle","Lucia","Maria","Valeria"]

function imprimirInverso(array) {
    
    for (let i = -3; i <= array.length; i++) {
        console.log(array.pop());
    }
}

// imprimirInverso(nombres);


// 2. Creá la función inversor que tome un arreglo como argumento y devuelva uno
// nuevo invertido.
function inversor(array) {
    
    let miArray = imprimirInverso(array);
    let nuevoArray = nuevoArray.unshift(miArray); 
    console.log(nuevoArray);
    
}
// inversor(nombres);


// sumaArray()------------------------------------------------------------------------
// En este ejercicio, deberás crear una función sumaArray() que acepte un arreglo de
// números (3 elementos) y devuelva la suma de todos ellos.
// Ejemplo:
// ● sumArray([1,2,3]) // 6
// ● sumArray([10, 3, 10]) // 23
// ● sumArray([-5,100, 19]) // 114
let numeros = [20,30,40]

function sumarArray(array) {
    
    let resultado = array[0] + array[1] + array[2];
    return resultado
}
// console.log(sumarArray(numeros));


// Simulación Array.join()-----------------------------------------------------------
// En este ejercicio deberás crear una función llamada join() que reciba un arreglo de
// strings de 4 elementos y simule el comportamiento del método Array.join().
// Importante: no podés usar el método Array.join() original.
// Ejemplo:
// ● join(["h","o","l","a"]) debe retornar el string "hola".
// ● join(["c","h","a,"u"]) debe retornar el string "chau".
let strings = ["hola","mundo","un","besito"]

function join(array) {
    
    let extraerString;
    for (let i = -2; i <= array.length; i++) {
        extraerString = array.shift();
        console.log([extraerString])        //falta unirlo sin usar join
    }
}

join(strings);