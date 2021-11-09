const v = "\x1b[32m%s\x1b[0m"; // NO TOCAR
const o = "*".repeat(80) + "\n"; // NO TOCAR
const oo = "*".repeat(25); // NO TOCAR
// Te proveemos la siguiente plantilla que tiene dos partes:
// - Desarrollo de las consignas, donde escribirás el código que responda a los enunciados
// - Ejecución de las consignas, donde ejecutarás los métodos correspondientes mostrando por consola sus resultados
const nombre = "Maria Rosa Gervasoni";
const tema = "TEMA 1";

const helper = require('./jsonHelper')
const arrayRecetas = helper.leerJson('recetas') 



/*******************************/
/* Desarrollo de las consignas */
/*******************************/

// A
const restaurante = {

    // B
    recetas: arrayRecetas,
    // C
    listarRecetas: function (array = arrayRecetas) {
        
        array.forEach(receta => {
            console.log("Receta: "+receta.nombre+
            ", tiempo de espera: "+receta.tiempo+" minutos,"+
            " precio: $ "+receta.precio+
            ", dificultad: "+receta.dificultad+
            ", menú del dia: "+(receta.menuDelDia ? "Si" : "No.")
            );
        });
    },       
    // D
    buscarPorNombre: function (nombre) {
        
        return this.recetas.find(receta => receta.nombre === nombre)
    
    },
    // E
    menuDelDia: function () {
        
        return this.recetas.filter((receta => receta.menuDelDia === true))
    
    },
    // F
    filtrarPorTiempo: function (tiempo) {
        
        return this.recetas.filter((receta => receta.tiempo <= tiempo));
    },
    // G
    ordenarPorDificultad: function () {
        
        const ordenados = this.recetas.sort((recetaA,recetaB) => recetaA.dificultad - recetaB.dificultad);
        return ordenados;

    },
    // H
    duracionTotal: function () {
        
        const tiempoTotal = this.recetas.reduce((acc,receta) => acc + receta.tiempo, 0);
        console.log("La duración de todas las recetas sumadas es de "+tiempoTotal+ " minutos.");
    
    },
    // I
    incrementarPrecio: function name(params) {
        
    }
};


    /******************************/
    /* Ejecución de las consignas */
    /******************************/
console.table([{ alumno: nombre, tema: tema }]); // NO MODIFICAR NADA DE ESTA LINEA

// console.log(v, "\n" + oo + " .C. Listar");
// // Ejecución aquí
// restaurante.listarRecetas();
// console.log(o);

// console.log(v, oo + " .D. Buscar");
// // Ejecución aquí
// console.log(restaurante.buscarPorNombre("Pastel de remolacha salado"));
// console.log(o);

// console.log(v, oo + " .E. Filtrar 1");
// // Ejecución aquí
// restaurante.listarRecetas(restaurante.menuDelDia());
// console.log(o);

// console.log(v, oo + " .F. Filtrar 2");
// // Ejecución aquí
// restaurante.listarRecetas(restaurante.filtrarPorTiempo(50));
// console.log(o);

// console.log(v, oo + " .G. Ordenar");
// // Ejecución aquí
// restaurante.listarRecetas(restaurante.ordenarPorDificultad());
// console.log(o);

// console.log(v, oo + " .H. Duracion");
// // Ejecución aquí
// restaurante.duracionTotal();
// console.log(o);

// console.log(v, oo + " .I. Modificar Propiedad");
// // Ejecución aquí
// console.log(o);
