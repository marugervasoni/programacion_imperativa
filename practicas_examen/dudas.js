//1 calcular el promedio de edades (sumatoria / cantidad)
const arrayEdades1 = [10, 52, 55, 10, 20]; //num = 29.4
const arrayEdades2 = [15, 2, 54, 10, 20];
const arrayNotas =[10, 10, 8, 10, 5];
//i = i + 1 -> i++

function prom(array) {
    let suma = 0;
    for (let i = 0; i < array.lenght; i++) {
        const edad = array[i];
        suma = suma + edad;
    }
    return suma / array.length;     //--> el return lo pongo cada vez que me indica que debe retornar
}                                   //--> si me dice imprimir --> console.log.
console.log(prom(arrayEdades1));
console.log(prom(arrayEdades2));
console.log(prom(arrayNotas));
