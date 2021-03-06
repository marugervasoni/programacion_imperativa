const v = "\x1b[32m%s\x1b[0m"; // NO TOCAR
const o = "*".repeat(80) + "\n"; // NO TOCAR
const oo = "*".repeat(25); // NO TOCAR

const { appendFileSync } = require('fs');
/*******************************/
/* Desarrollo de las consignas */
/*******************************/
const helper = require('./jsonHelper')
const arrayBicicletas = helper.leerJson('bicicletas') 

// A
const appCarrera = {

// B
    bicicletas: arrayBicicletas, // bicicletas: helper.leerJson('bicicletas'),

// C
    bicicletasPorTanda: 4,
// D
    listarBicicletas: function (array) {
        array.forEach(bici => console.log(
                "Ciclista: "+bici.ciclista+
                ", marca: "+bici.marca+
                ", rodado: "+bici.rodado+
                ", peso: "+bici.peso+" kg"+
                ", largo: "+bici.largo+" cm"+
                ", estado: "+(bici.dopaje ? "Inhabilitado." : "Habilitado.")
                )
            );
    },
// E
    ciclistasHabilitados: function () {
                                        //bici => bici.dopaje === false
        return this.bicicletas.filter(bici => !bici.dopaje); //arrow function c negacion y filter.  
    
    },
// F
    buscarPorId: function (numeroId) {
        
        return this.bicicletas.find(bici => bici.id === numeroId);
        
    },
// G
    filtrarPorPeso: function (peso) {
        
        return this.ciclistasHabilitados().filter(bici => (bici.peso <= peso)); 
        //     
        // let filtrados = [];
        // this.ciclistasHabilitados().filter(bici => {
        //     bici.peso <= peso;
        //     return filtrados.push(bici);
        // })
    },
// H
    ordenarPorRodado: function () {
        
        return this.bicicletas.sort((biciA, biciB) => biciA.rodado - biciB.rodado); //signo menos en vez de menor
    },
// I
    largoPromedio: function () {
        
        return "el largo promedio es: "+((this.bicicletas.reduce((acc,bici) => 
        acc + bici.largo, 0)))+ "cms.";
        
    },
// J
    aumentarPeso: function (kgs, id) {
        
        const buscado = this.buscarPorId(id);
        if (buscado !== undefined) {
            buscado.peso += kgs;
            helper.escribirJson("bicicletas",this.bicicletas);
            console.log("se ha escrito el JSON agregado "+kgs+" kgs, al id: "+id);
        }   else {
            console.log("El id no existe");
        }
    },
// K
    generarTanda: function (rodado, peso) {
        return this.ciclistasHabilitados()
            .filter(bicicleta => bicicleta.rodado <= rodado)
            .filter(bicicleta => bicicleta.peso >= peso)
            .slice(0, this.bicicletaPorTanda);
    },
// L
    calcularPodio: function (arrayCiclistas) {
        
        const ordenados = arrayCiclistas.sort((biciA, biciB) => 
        biciA.puntaje - biciB.puntaje);

        console.log(
        "El ganador es: "+ordenados[0].ciclista+
        ", con puntaje de "+ordenados[0].puntaje+
        ". El segundo puesto es para: "+ordenados[1].ciclista+
        ", con puntaje de "+ordenados[1].puntaje+
        ". El tercer puesto es para: "+ordenados[2].ciclista+
        ", con puntaje de "+ordenados[2].puntaje+"." 
        );
    },
};

/******************************/
/* Ejecuci??n de las consignas */
/******************************/

console.log(v, "\n" + oo + " .D. ");
// Ejecuci??n aqu??
const bici = arrayBicicletas
appCarrera.listarBicicletas(bici);
console.log(o);

console.log(v, oo + " .E.");
// Ejecuci??n aqu??
appCarrera.listarBicicletas(appCarrera.ciclistasHabilitados())
console.log(o);

console.log(v, oo + " .F.");
// Ejecuci??n aqu??
appCarrera.listarBicicletas([appCarrera.buscarPorId(7)])
// console.log(appCarrera.buscarPorId(7))                   
            //no listar con array bicicletas o sino poner corchetes
console.log(o);

console.log(v, oo + " .G.");
// Ejecuci??n aqu??
appCarrera.listarBicicletas(appCarrera.filtrarPorPeso(8));
// console.log(appCarrera.filtrarPorPeso(8));
console.log(o);

console.log(v, oo + " .H.");
// Ejecuci??n aqu??
appCarrera.listarBicicletas(appCarrera.ordenarPorRodado());
console.log(o);

console.log(v, oo + " .I.");
// Ejecuci??n aqu??
// appCarrera.listarBicicletas([appCarrera.largoPromedio()]); //no va con listar bicicletas
console.log(appCarrera.largoPromedio());
console.log(o);

console.log(v, oo + " .J. ");
// Ejecuci??n aqu??
appCarrera.aumentarPeso(2,7); //ya tiene console log en la funcion
console.log(o);

console.log(v, oo + " .K. ");
// Ejecuci??n aqu??
appCarrera.listarBicicletas(appCarrera.generarTanda(24,6));
console.log(o);

console.log(v, oo + " .L. ");
// Ejecuci??n aqu??
appCarrera.calcularPodio(appCarrera.generarTanda(24,6)); //ya tiene console, no consologuear ni listar
console.log(o);