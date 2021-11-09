// ¿Cual es el número secreto?
// Creemos una función que reciba un parámetro numérico, y verifique si el mismo es el
// número secreto. El número secreto deberá ser seleccionado de manera random de
// entre 1 y 10 (investiga que hace la función Math.random()), en caso de ser correcto
// retorna un mensaje felicitando al usuario, y en caso de que no acierte, retorna un
// mensaje de aliento junto con el número ingresado y el secreto.
function numeroSecreto(number) {

    let numSecreto = Math.random();
    if (number === numSecreto){
        console.log("Es correcto, felicitaciones!");
    } else {
        console.log("el numero ingresado ("+number+") es incorrecto, pero tranquilo, el número secreto es: "+numSecreto);
    }

}
console.log("----¿Cuál es el número secreto?---------------------------------");
numeroSecreto(0.5);

// abrirParacaidas() -----------------------------------------
// Crea una función llamada abrirParacaidas(), la cual recibe dos parámetros: velocidad y
// altura. La función deberá decirnos si el paracaídas debe abrirse teniendo en cuenta lo
// siguiente:
// ● La velocidad debe ser menor a 1000 km/h
// ● La altura debe ser mayor o igual a 2000m y menor a 3000m
function abrirParacaidas(veloc, alt) {

    if ((veloc < 1000) && (alt >= 2000 && alt < 3000)) {
        console.log("El paracaidas PUEDE abrirse");    
    }   else {
        console.log("El paracaidas NO PUEDE abrirse");
    }

}
console.log("----Abrir paracaídas-------------------------------------------");
abrirParacaidas (900, 3999);

// Traductor Condicional
// Usando la estructura switch, crea un programa en el que, si un usuario ingresa "casa",
// "perro", "pelota", "árbol" o "genio", nos devuelva la misma palabra traducida al idioma
// inglés.
// En caso de que la palabra sea distinta a la esperada, mostrarle un mensaje que le
// informe que la palabra ingresada es incorrecta.
let perro = "dog";
let casa = "house";
let pelota = "ball";
let arbol = "tree";
let genio = "genius";

function traductor(palabra) {

    switch (palabra) {
        case "perro":
            console.log(perro);
            break;
        case "casa":
            console.log(casa);
            break;
        case "pelota":
            console.log(pelota);
            break;
        case "genio":
            console.log(genio);
            break;
        case "arbol":
            console.log(arbol);
            break;
        default:
            return console.log("La palabra ingresada es incorrecta");
    } 
}
console.log("----Traductor condicional---------------------------------------");
console.log("Tu palabra en ingles es: ");
traductor("pelo");

// Valoración de Películas----------------------------------------------------------------
// Usando la estructura switch, pedile al usuario que valore la película que acaba de ver
// en:
// ● Muy Mala.
// ● Mala.
// ● Mediocre.
// ● Buena.
// ● Muy buena.
// Acompaña cada valoración con un mensaje que indique si te lamentas o te alegras
// por su valoración.
// Por ejemplo, "Calificaste la película como Muy Mala. Lo lamentamos mucho.".
// En caso de que ingresara un valor distinto, mostrale el mensaje: "Ingresaste un valor
// inválido".
// Cuando el usuario haya valorado la película, agradecele su visita.
function AgradecerValoración(valorPeli) {

    switch (valorPeli) {
        case "Muy mala":
            console.log("Calificaste la pelicula como Muy mala, lo lamentamos mucho mucho :(" );
            break;
        case "Mala":
            console.log("Calificaste la pelicula como Mala, lo lamentamos mucho :(");
            break;
        case "Mediocre":
            console.log("Calificaste la pelicula como Mediocre. Mediocre eres tú :P ");
            break;
        case "Buena":
            console.log("Calificaste la pelicula como Buena, sabía que iba a gustarte ;) ");
            break;
        case "Muy buena":
            console.log("Calificaste la pelicula como Muy Buena. Gracias, vuelva prontos! ");
            break;
        default:
            return console.log("Ingresaste un valor inválido");
    } 
    return console.log("Gracias por tu visita"); 
}
console.log("----Valoración de películas-------------------------------------");
AgradecerValoración("Mala");