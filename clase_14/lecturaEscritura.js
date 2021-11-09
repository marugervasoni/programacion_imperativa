// 1------------------------------------------------------------
// requerí el módulo nativo File System parapoder trabajar con sus funcionalidades.

// const fs = require('fs');


//2-------------------------------------------------------------
// establecerás el módulo de lectura y escritura.

// const leerJson = function (nombreArchivo){
//     JSON.parse(
//         fs.readFileSync(__dirname + "/" + nombreArchivo + ".json",
//         "UTF-8")
//     );
// };
// console.log(leerJson(auto));


//3-------------------------------------------------------------
//harás lo propio con la función de escritura.
// Creá una función que reciba como parámetros el nombre del archivo y los datos a
// convertir en JSON.

// const escribirJson = function (nombreArchivo, datos) {
//     return fs.writeFileSync(
//         __dirname + nombreArchivo + ".json",
//         JSON.stringify(datos, null,2)
//         );
// }
// console.log(escribirJson(auto));


//4--------------------------------------------------------------
// funciones, necesitamos poder exportarlas para utilizar
// en otro u otros archivos que necesitemos. María te dejo un ejemplo de cómo
// podrías modificar tu código para que sea más práctico a la hora de modularizar:

const fs = require("fs");

const jsonHelper = {
  leerJson: function (nombreArchivo) {
    return JSON.parse(
      fs.readFileSync(__dirname + "/" + nombreArchivo + ".json", "UTF-8")
    );
  },
  escribirJson: function (nombreArchivo, datos) {
    return fs.writeFileSync(
      __dirname + "/" + nombreArchivo + ".json",
      JSON.stringify(datos,null,2)
    );
  },
};

module.exports = jsonHelper;