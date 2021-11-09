

const archivos = requiere("./lecturaEscritura"); //traigo el array de otro lado
let arrayProfesionales = archivos.leerJson("profesionales") //lo leo

const appProfesionales = {
    profesionales: arrayProfesionales,
    primerosCincoProfesionales: function () {  //metodo para aplicar el metodo slice
        return this.profesionales.slice(0,4)   //hago el slice, devolviendolo con un return nomas --> el ultimo indice (4) no lo trae
    },
}


console.log(appProfesionales.primerosCincoProfesionales());

console.log("total de profesionales"+arrayProfesionales.length); //este solo lo uso para ver cuantos elementos tiene el objeto.