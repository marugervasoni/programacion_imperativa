//****************************************/
//escritura de json

const FS = require('fs');           //mi const es mayuscula porque es una verdadera const
                                            //File system (FS) es un objeto que nos permite interactuar con archivos de nuestraa pc.
const arrayProfs = require("./model17")             //voy a requerir al array


// const jsonProfesionales = JSON.stringify(arrayProfs, null, 2);                   //p que el array (Profs) me lo convierta en string (null y 2 es para que me formatee el string)
// FS.writeFileSync("./profesionales.json", jsonProfesionales)             //quiero crear este archivo a partir de un array

//                 //ejecuto por consola el archivo jsonHelper... y automaticamnte me crea un archivo stringify de profesionales.json.


// //****************************************/
// //para que jsonHelper pueda leerlo
// const jsonLeido = FS.readFileSync("./profesionales.json", "utf-8")          //que lo lea y acorde al estandard utf8. lo guardo en una variable paratenerlo en la memoria 
// console.log(jsonLeido);

// const arrayLeido = JSON.parse(jsonLeido);           //convertir el json leido a un array.
// console.log(arrayLeido);




//***************************************/
//como lo convierto en funcion

//funcion escribir
function escribirJson(array) {

    const jsonProfesionales = JSON.stringify(array, null, 2);                  
    FS.writeFileSync("./profesionales.json", jsonProfesionales);
}
// escribirJson(arrayProfs);

//funcion leer
function leerJson(string) {
    
    const jsonLeido = FS.readFileSync("./profesionales.json", "utf-8");
    const arrayLeido = JSON.parse(jsonLeido);          
    return arrayLeido
}
const arrayLeido = leerJson()
console.log(arrayLeido);




//*************************************/
//como esas funciones las convierto en metodos dentro de un objeto.
const jsonHelper = {
    
    escribirJson: function (array) {

        const jsonProfesionales = JSON.stringify(array, null, 2);                  
        FS.writeFileSync("./profesionales.json", jsonProfesionales);
        escribirJson(arrayProfs);
    },
    leerJson: function (nombreArchivo) {
        
        const jsonLeido = FS.readFileSync("./profesionales.json", "utf-8");
        const arrayLeido = JSON.parse(jsonLeido);          
        return arrayLeido 
    },
};
jsonHelper.escribirJson(arrayProfs);

//**********************************************************************************/
//para poder usar este json helper, deberiamos exportarlo. (module esxport).
//si fuera que en el parcial no teengo ese array ahi,debo importar esta maquina jsonHelper al archivo del parcial

    //const jsonHelper = require("./jsonHelper17")
    //departamentos: jsonHelper.leerJson("model") --> este sera una propiedad del objeto departamentos.