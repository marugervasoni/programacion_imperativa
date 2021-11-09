//digital house
//*crea la funcion DH(), 
//*que recibira 2 num como params. 
// //*debe imprimir nums del 1 al 100 teniendo en cuenta:
// ● Si el número a imprimir es múltiplo del primer parámetro que se ingresó, deberá mostrar el string “Digital” en lugar del número. 
// ● Si el número a imprimir es múltiplo del segundo parámetro ingresado, deberá mostrar el string “House” en su lugar. 
// ● Si el número a imprimir es múltiplo de ambos parámetros, deberá mostrar el string “Digital House” en lugar del número. 
function digitalHouse(num1, num2) {
    let numeroAimprimir = 15;
    if (numeroAimprimir % num1 === 0 && numeroAimprimir % num2 === 1) {
        console.log("Digital");
    } else if (numeroAimprimir % num1 === 1 && numeroAimprimir % num2 === 0) {
        console.log("House");
    } else if (numeroAimprimir % num1 === 0 && numeroAimprimir % num2 === 0){
        console.log("Digital House");
    }
}
console.log("---probando-------");
digitalHouse(5, 3);
//podria implementar un ciclo para el mismo. pero en principio ya funciona