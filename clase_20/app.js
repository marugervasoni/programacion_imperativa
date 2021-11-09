//**********************************************************/
//reduce -> sumando reduce los resultados a uno unico

//1
const numeros = [100, 50, 80, 500, 800, 90];

const suma = numeros.reduce((acc, num) => acc + num, 500)   //acc es acumulador, va sumando los elementos
//ese 500 lo ponemos como inicializador en vez de cero arranca con 500.


//2
const personas = [
    {
        nombre: "Martin",
        edad: 18
    },
    {
        nombre: "Cosme",
        edad: 28
    },
]

const sumaEdades = personas.reduce((acc, persona) => acc + persona.edad, 0);
//sale error, porque termina concatenando 2tipos de datos, debo forzar al acumulador
//que este empiece con un numero (le pongo 0). = personas.reduce((acc, persona) => acc + persona.edad, 0);


//**********************/
//invocaciones
//1
console.log(suma);
//2
console.log(sumaEdades);



//***********************************************************************/
//find -> busca


//1
const encontrado = personas.find(persona => persona.nombre === "Cosme") //retorna el objeto completo en el que se encuentra cosme [2]

//***********************/
//invocaciones
//1
console.log(encontrado);



//******************************************************************/
//sort ->capacidad para analizar de a 2 componentes y va iterando (juega con posit negat y ceros, y en base a ese calculo ordena)

//1
personas.sort((pers1, pers2) => pers2.edad - pers1.edad)

console.log(personas);


//**************************************************************/
//splice -> remueve elementos, recibe 3 parametros (inicio, cantidad(opcional), final)