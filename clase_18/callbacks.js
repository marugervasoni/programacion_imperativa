// a partir del siguiente array de nombres, crear una función que reciba 
// un parámetro string,  para realizar la búsqueda de elementos que coincidan 
// con dicho parámetro, y retorna un mensaje en caso de encontrarlo .
const nombres = ['Martin','Homero','Cosme','Steven','Adam'];
function buscarNombre(string){

    for (let i = 0; i < nombres.length; i++) {
        const nombrebuscado = nombres[i];
        if (string === nombres[i]) {
            return nombrebuscado; //debe ir una frase en realidad.
        }
    }
}
console.log(buscarNombre('Cosme'));