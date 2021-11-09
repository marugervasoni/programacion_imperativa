// Concurso de clavados
// Un cliente nos pide que hagamos una aplicación que pueda determinar a los
// ganadores de un concurso de clavados que se realizó el fin de semana.
// Para ello vamos a necesitar seguir las siguientes instrucciones e información para
// poder desarrollar nuestra app.

// Cada participante cuenta con 5 clavados, de los cuales se formarán sus puntajes
// individuales. Los participantes con sus respectivos puntajes son los siguientes:

// ● Participante A: 5, 8, 4, 9, 5.
// ● Participante B: 8, 7, 8, 6, 8.
// ● Participante C: 7, 5, 10, 8, 3.
// La competencia consta de 2 modalidades de selección para un ganador:
// ● Mejor promedio (el mayor puntaje promedio entre los competidores).
// ● Mayor puntaje (el mayor puntaje de entre los 5 clavados de cada participante).
// Con esta información, nuestro tech leader nos pide lo siguiente:

// 1. Determinar cuál sería la forma ideal de representar a cada participante con sus
// puntajes.
let participanteA = [5, 8, 4, 9, 5];
let participanteB = [8, 7, 8, 6, 8];
let participanteC = [7, 5, 10, 8, 3];

// 2. Crear una función puntajePromedio la cual recibe un participante por parámetro
// y deberá calcular —y retornar— el puntaje promedio del mismo.
function puntajePromedio(participante) {
    
    let suma; //= participante[0] + participante[1] +  participante[2] +  participante[3] +  participante[4]; 

    for (let i = 0; i < participante.length; i++) {
        const puntaje = participante[i];
        // return +extraerPuntos
        console.log(puntaje);
    }
    // let promedio = + puntaje / participante.length;
    // return promedio;
}
console.log(puntajePromedio(participanteA));

// 3. Crear una función puntajeNayor la cual recibe un participante por parámetro y
// deberá buscar —y retornar— el mayor puntaje que tenga el participante.

// 4. Luego, nuestro tech leader nos solicita que —creadas estas dos funciones—
// generemos una nueva funcionalidad llamada competencia la cual recibirá a los 3
// participantes por parámetros y ejecutará las dos funciones creadas
// previamente para calcular los promedios y puntajes mayores de cada uno.
// Además, esta deberá anunciar (mostrar por la consola) al ganador de cada
// modalidad de puntaje.