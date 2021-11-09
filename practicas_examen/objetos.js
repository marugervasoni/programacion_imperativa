const nombres = ["Martin", "Nelson", "Thor"];
// console.log(nombres[0]);

const persona = {
    nombre : "Martin",                      //un objeto(persona) con propiedades(nombre, edad)
    edad : 28,
    saludar : function(momentoDia) {      //--> esto es una funcion, se vuelve a usar.
        // console.log("hola");                //metodo no se ejecuta porque no se ejecutó
        return "hola soy "+ this.nombre+", buenas "+ momentoDia;     //--> nos referimos a la propiedad de "persona", dentro de la llave de ese objeto..
    }                                                                 //this refiere al scope en que me encuentro.
}

// console.log(persona.nombre);  //--> pido exclusivamente la propiedad nombre del OL persona.

// persona.saludar();   //--> hago referencia al metodo, para ejecutarlo uso parentesis "persona.saludar()"
// console.log(persona.saludar("noches"));
// console.log(persona.saludar("tardes"));

//--------------------------------------------------------------------------------------------
// const personas = [
//     {
//         nombre : "Martin",
//         edad : 28,
//     },
//     2,
//     [1, 3, [4], { nombreMascota: "tom"} 
    
// ]
// }