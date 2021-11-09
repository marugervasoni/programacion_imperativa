//5--------------------------------------------------------------------------------
//requerí estas funcionalidades en un nuevo archivo de JavaScript, y
// revisá que todo funcione correctamente.
const helper = require("./lecturaEscritura");
let arrayAutos = helper.leerJson("autos");

console.log(arrayAutos); //pruebo que lea el array

// 6.------------------------------------------------------------------------------- 
// creá el objeto literal concesionaria. Luego agregá
// la propiedad autos, la cual deberá tener la lista de vehículos del archivo JSON
// (previamente parseada). Verificá que puedas visualizar esta propiedad
// correctamente.
const concesionaria = {
    autos: arrayAutos,  // autos: helper.leerJson("autos"), --> es otra forma
    
// 7.------------------------------------------------------------------------------- 
// creá un método llamado agregarAuto, parámetros: una marca, un modelo, el año del vehículo, el precio, y la
// patente. El método deberá agregar el nuevo auto a la propiedad autos, y se debe
// guardar en la base de datos (rescribir el JSON) la lista actualizada.
// PD: todos los vehículos nuevos tienen su propiedad “vendido” como “false” por
// defecto.
    agregarAuto: function (marca, modelo, año, precio, patente) {
        const auto = {      //como la propiedad se llama igual que el parametro puedo abreviarlo solo poniendo el nombre de la
            marca,                // propiedad en vez de marca: marca
            modelo,
            año,
            precio,
            patente,
            vendido: false  //la PD.
        }
        this.autos.push(auto);
        helper.escribirJson("autos", this.autos);
        console.log("se ha agregado el auto correctamente");
    },

// 8.---------------------------------------------------------------------------------
//Por último, creá el método venderAuto el cual deberá recibir una patente por
// parámetro, luego recorrerá la lista de autos de concesionaria y, cuando
// encuentre al auto indicado, deberá modificar su propiedad “vendido” a “true”.
// Luego, se debe actualizar la base de datos con la lista actualizada como en el
// punto anterior.
    venderAuto: function (patente) {
        for (let i = 0; i < this.autos.length; i++) {
            
            if (this.autos[i].patente === patente) {
                let autoEncontrado = this.autos[i];
                autoEncontrado.vendido = true; //cambio el estado vendido false a true
                console.log("el vehiculo "+autoEncontrado.marca+" "+autoEncontrado.patente+" Ha sido vendido");
            
                helper.escribirJson('autos', this.autos);
            }
        } 
    },

    // En caso de que te haya sobrado tiempo o quieras seguir avanzando más tarde, te
    // proponemos algunos métodos extra que podrías crear para abarcar más funcionalidades.
    // 1. Crear un método llamado totalDeVentas que recorra la lista de autos y vaya
    // sumando todos los precios de vehículos que hayan sido vendidos, y que retorne el
    // precio total.
    // 2. Crear un método llamado eliminarAuto el cual deberá recibir una patente por
    // parámetro y eliminar el vehículo indicado. Investigá cómo podés hacer para
    // eliminar un elemento específico de un array. Luego deberás actualizar la base de
    // datos como en puntos anteriores.


};

//invocaciones------------------------->
// console.log(concesionaria.autos);
// concesionaria.agregarAuto("pruebaNueva", "Altima", 2020, 1000000, "444444Z");
concesionaria.venderAuto("WAU329");