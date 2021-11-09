//Debés crear una función llamada arregloDeObjetos que reciba un número
// como parámetro y devuelva un arreglo de objetos que tengan una propiedad 
// llamada `valor` que contenga el valor del número y sus anteriores.
function arregloDeObjetos(numero) {
    const nuevoArray = []                       //-->como propiedades ni var, ni let ni const sino dentro de corchetes.
    for (let i = 1; i <= numero; i ++) {        //-->le pasamos el valor 1 a i y cambiamos a <= numero para que llegue a 5.
        const objeto = {valor : i}              //muchos objetos con la misma propiedad y distinto valor.    
        nuevoArray.push(objeto)                 //la consigna pide devuelva un array.
    }
    return nuevoArray                           //--> como necesitamos repetir una accion varias veces usamos FOR.    
}                                                                                                  
// console.table(arregloDeObjetos(5));          //-->cuando le tiras un Array, table elige como columnas distintas propiedades
// console.log(arregloDeObjetos(3));


//Debés crear una función llamada arregloDeObjetosDos que reciba un número y una palabra como parámetro y devuelva un arreglo de objetos que tenga: una propiedad llamada como la palabra pasada por parámetro y el valor del número y sus anteriores.
function arregloDeObjetosDos(numero, palabra) {
    const nuevoArray = []               
    for (let i = 1; i <= numero; i ++) { 
        const objeto = {[palabra] : i}          //--> corchetes para crear propiedades en tiempo de ejecucion --> es lo mismo que dot notation.
        nuevoArray.push(objeto)                 //tanto en array como en objetos debemos usar corchetes, y señalar el nombre para que lo busque.
    }
    return nuevoArray                      
}                                                                                                  
console.table(arregloDeObjetosDos(6, "hola")); //-->cuando le tiras un Array, table elige como columnas distintas propiedades
console.log(arregloDeObjetosDos(4, "hola_papucho"));


