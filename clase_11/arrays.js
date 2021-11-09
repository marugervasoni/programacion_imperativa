//array de peliculas---------------------------------------------------------------
let peliculas = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"];
console.log("---tengo mi array de peliculas-------------------------------------");
console.log(peliculas);

let peliculas2 = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"]
console.log("---tengo mi otro array de pelis-----------------------------------");
console.log(peliculas2);

//pasar elementos a mayusculas utilizando bucles-----------------------------------
function convertirAMayusculas(array) {
    
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i].toUpperCase();
    console.log(array); 
    }
}
console.log("---paso elementos a mayusculas utilizando bucles-------------------");
convertirAMayusculas(peliculas);

//modificar funcion pasaje de elementos (agregando contenidos del array de pelis animadas alde pelis original)
function pasajeElementos1(array1, array2) {

    array1.push(array2.pop().toUpperCase())
    array1.push(array2.pop().toUpperCase())
    array1.push(array2.pop().toUpperCase())
    array1.push(array2.pop().toUpperCase())
    array1.push(array2.pop().toUpperCase())
    return array1;
}
console.log("---anterior funcion sin bucle de pasaje de elementos-------------");
console.log(pasajeElementos1(peliculas, peliculas2));


// function pasajeDeElementosDos(array1) {

//     let pasaje = pasajeElementos1(); 
//         for (i = 0; i < array1.length; i++) {
//         console.log(pasaje);
//     }
// }
// console.log("---modifico funcion pasajeDeElementos utilizando bucles------------");
// console.log(pasajeDeElementosDos(peliculas));


// debemos modificar nuestra función comparadora de puntajes para
// las películas como venimos haciendo hasta ahora.
const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];
console.log("---arrays de puntos a comparar---------------------------");
console.log(asiaScores, euroScores);

function compararCalif(asia, europa) {

    let comparaciones = [];
    for (let i in asia) {
        comparaciones[i] = asia[i] === europa[i] ? "iguales" : "diferentes";
    }
    return comparaciones;
}
console.log("---probando comparacion con bucle-----------------------");
console.table(compararCalif(asiaScores, euroScores));
