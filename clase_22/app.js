const archivos = require("./lecturaEscritura");
let arrayAutos = archivos.leerJson("autos");




const carrera = {
//A
    autos: arrayAutos,
//B
    autosPorTanda: 6,
//c --> hacer un filter
    autosHabilitados: function () {

        return this.autos.filter(auto => auto.sancionado === false); 
    },




}


console.log(carrera.autosHabilitados());