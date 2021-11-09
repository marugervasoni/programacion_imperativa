//que devuelve cada codigo:
//1------------------------------------------------------------------------------
// let numbers = [22, 33, 54, 66, 72];
// console.log([numbers.length]);     
 //-->4?  --devuelve 5. -cantidad de datos no el n° indice.

//2-----------------------------------------------------------------------------
// let grupoDeAmigos = [ ["Harry", "Ron", "Hermione"], ["Spiderman", "Hulk",
// "Ironman"], ["Penélope Glamour", "Pierre Nodoyuna","Patán"] ]
// console.log(grupoDeAmigos[1][0])   
// -->Spiderman, el indice 1 es el 2do array dentro del array, y el indice 0 es
// el primer dato de ese 2do array.

//3----------------------------------------------------------------------------
// let str ="un string cualquiera";
// let grupoDeAmigos = [ [45, 89, 0], ["Digital", "House", true], ["string",
// "123","false", 54, true, str] ];
// console.log(grupoDeAmigos[2][grupoDeAmigos[2].length - 1])

// --> NO ENTIENDO, SALE ERROR.    ¿QUE ES .LENGTH -1?
//      EXPLICACION---> grupoDeAmigos[2].length -es el tamaño del array en el indice 2 (= 6)
//a ese resultado le resta 1  (-1) porque ladimension del array son 6 elementos pero
//el ultimo indice son 5 (porque los arrays arrancan en 0, y ahi toca a str (la variable de arriba):) 
//-----------------------------------------------------------------------------

// Colecciones de películas (y más…)-----------------------------------------------------
// El tech leader del equipo necesita conocer la estructura de datos del nuevo proyecto.
// Para esto, deberás:
// 1. Crear la estructura adecuada para guardar las siguientes películas:
// "star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"
// Importante: verificá que todo funciona correctamente accediendo a alguna de
// las películas una vez creada la estructura correspondiente.
let peliculas = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"]
console.log("--1) pruebo array--------------------------");
console.log(peliculas[0]);

// Más tarde, de producción dieron el aviso de que las películas deberían estar
// todas en mayúsculas. Para esto solicitan que crees una función que reciba por
// parámetro un array y convierta el contenido de cada elemento a mayúsculas.
// Pista: revisá qué hace el método de strings .toUpperCase().
function pasarAMayus(array) {

    i=0;
    let nuevoArray = [];
    do {
        nuevoArray.push(array[i].toUpperCase());                    //hago un ciclo para que recorra
        i++;                                                        //todo el array.
    } while (i <= (array.length -1));
    return nuevoArray;                                              //le digo que recien ahi me lo imprima
}                                                                   //(cuando termina de funcionar el ciclo)
console.log("--2) pruebo funcion pasarAMayus-------------");
console.log(pasarAMayus(peliculas));

// 3. Mientras trabajabas en el feature anterior, se dio el aviso de que también hay
// que crear otra estructura similar a la primera, pero con las siguientes películas
// animadas:
// "toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"
// Por lo tanto, te piden crear una función que reciba dos arrays como
// parámetros, para poder agregar los elementos contenidos en el segundo array
// dentro del primero, y así retornar un solo array con todas las películas como
// sus elementos.
// Importante: las películas animadas también deberían convertirse a
// mayúsculas.
let peliculas2 = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"]
console.log("--3) pruebo 2do array-------------------------");
console.log(peliculas2[3]);
//4------------------------------------------------------------
let sacarJuegoDelArray = peliculas2.pop();
console.log("-----------4) probando sacar frotnite de array2--------");
console.log(sacarJuegoDelArray);
// fin 4--------------------------------------------------------


let peliculas2AMayus = pasarAMayus(peliculas2);
console.log("--3) pruebo pasar a mayus el array2----------");
console.log(pasarAMayus(peliculas2));

function  unirDosArrays(array1, array2) {               //unimos los arrays una vez creados ambos
                                                        //luego los pasamos a mayusculas,
    let unir = array1.concat(array2);                   //con la funcion pasar a Mayus, ingresando
    return pasarAMayus(unir);                           //como parametro la variable que contiene los arrays unidos.
    
}

console.log("--3) probando funcion unirDosArrays----------");
console.log(unirDosArrays(peliculas, peliculas2));

// 4. Durante el proceso, uno de los desarrolladores advierte que el último elemento
// del array de películas animadas es un videojuego. Ahora tenés que editar el
// código y modificarlo de manera que puedas eliminar ese último elemento
// antes de migrar el contenido al array que contenga todas las películas.
// PD: por precaución, guardá el elemento que vas a eliminar en una variable.
//-------------->hecho en codigo punto 3.


// 5. Finalmente, te envían dos arrays con calificaciones que hacen distintos usuarios
// del mundo sobre las películas con el siguiente formato:
// const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
// const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];
// Te piden crear una función que compare las calificaciones e indique si son
// iguales o diferentes. Te confirman que están en el orden adecuado y que solo
// traen valores numéricos del 1 al 10.
// PD: los elementos de los scores tanto de Asia como de Europa corresponden
// en orden al del array resultante de combinar películas con películas animadas.
// Es decir, el primer elemento del array de películas general corresponde al
// primer elemento de asiaScores y al primer elemento de euroScores, y así
// sucesivamente.
// Para verificar que hasta acá viene todo bien, te recomendamos probar cada una de
// las funciones y testear su correcto funcionamiento.
// Si llegaste hasta este punto y está todo bien, el tech leader del equipo debe estar
// extremadamente alegre con tu trabajo y desempeño. ¡Buen trabajo!
const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];
console.log("----5) probamos arrays----------------");
console.log(asiaScores, euroScores);

function compararCalificaciones(array1, array2) {

    let calif1 = asiaScores[0] === euroScores[0] ? "iguales" : "diferentes";
    let calif2 = asiaScores[1] === euroScores[1] ? "iguales" : "diferentes";
    let calif3 = asiaScores[2] === euroScores[2] ? "iguales" : "diferentes";
    let calif4 = asiaScores[3] === euroScores[3] ? "iguales" : "diferentes";
    let calif5 = asiaScores[4] === euroScores[4] ? "iguales" : "diferentes";
    let calif6 = asiaScores[5] === euroScores[5] ? "iguales" : "diferentes";
    let calif7 = asiaScores[6] === euroScores[6] ? "iguales" : "diferentes";
    let calif8 = asiaScores[7] === euroScores[7] ? "iguales" : "diferentes";
    let calif9 = asiaScores[8] === euroScores[8] ? "iguales" : "diferentes";

    let calificaciones = [calif1, calif2, calif3, calif4, calif5, calif6, calif7, calif8, calif9 ];

    return calificaciones;
}
console.log("--- 5) prueba funcion compararCalificaciones------------------------");
console.table(compararCalificaciones(asiaScores, euroScores));