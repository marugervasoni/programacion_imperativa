
const personas = [
    {nombre: "Martin",edad: 42},
    {nombre: "martin",edad: 15},
    {nombre: "Zack",edad: 10},
    {nombre: "Mei",edad: 22},
]

//****************************************************************/
//map --> aplica cambio al elemento y retorna nuevo array

function incrementarEdad(edad){
    return personas.map(persona => persona.edad = persona.edad + edad)
}                    //(persona => persona.edad += edad)    ----> es lo mismo

// console.log(incrementarEdad(1));


//***************************************************************/
//forEachh --> tener en cuenta que en forEach no va return, porque no retorna ese
//metodo avanzado de array.

function incrementarEdad2(edad){
    personas.forEach(persona => persona.edad += edad); //--> no hay return
}                   

// incrementarEdad2(1)

// console.log(personas); //--> imprimimos el array con los objetos directamente 


//*****************************************************************/
//sort -->ejemplo para ordenar alfabeticamente

const ordenado = personas.sort(function (personaA, personaB) { //siempre solo 2 personas, 2 cosas/parametros,
    if (personaA.nombre > personaB.nombre) { //hago esto con el signo mayor porque como es un array no me dice tan facil si truthy
        return 1
    }
    if (personaA.nombre < personaB.nombre) {
        return -1
    }
    return 0
})

console.log(personas);


const nombres = ["Martin","martin","Zack","Mei"]; //--> es otra forma de hacer lo mismo

console.log(nombres.sort());