
const archivos = require("./lecturaEscritura (1)");
let arrayDepartamentos = archivos.leerJson("departamentos");

const inmobiliaria = {
//A
    departamentos: arrayDepartamentos,

//B
    listarDepartamentos: function (array = this.departamentos) { //aca lo pase por defecto y por esto es que no lo expreso en el console log, sino si lo tengo que poner en el console log.
        
        array.forEach(departamento => {
            console.log(
                "id:"+departamento.id+", precio: "+departamento.precioAlquiler+
                (departamento.disponible ? ", esta disponible," : ", alquilado,")+
                departamento.ambientes+" ambiente/s"
            );
        });       
    },
//C
    buscarPorId: function (numeroId) {
        
        return this.departamentos.find(depto => depto.id === numeroId);
        
    },
//D
    departamentosNoDisponibles: function name() {
        
        return this.departamentos.filter(depto => depto.disponible === false)
    
    },
//E
    departamentosDisponibles: function () {
    
        return this.departamentos.filter(depto => depto.disponible === true) //este true puede no llevarlo porque por default da true. o en vez de true puedo ponerle bool y tambien en parametro entre parenteiss y luego le paso a la invocacion true o false.
    
    },
//F
    filtrarPorAmbientes: function (cantidad) {
        
        return this.departamentos.filter(depto => depto.ambientes >= cantidad);
    
    },
//G
    filtrarPorPrecio: function (precio) {
        
        return this.departamentosDisponibles().filter(depto => depto.precioAlquiler <= precio);
    
    },
//H
    rebajarPrecioAlquiler: function (porcentajeRebaja) { //sale raro //usar math.ceil()/math floor *Math.toFixed(2)
        
        // const disponibles = this.buscarDisponibilidad(true);
        // const factor = 1 - (porcentajeRebaja / 100);
        // disponibles.forEach(depto => depto.precioAlquiler *= factor)

        const aRebajar = this.departamentosDisponibles(true);
        aRebajar.map(
            depto => depto.precioAlquiler -= ((depto.precioAlquiler * porcentajeRebaja)/100)
            ); 
        
        archivos.escribirJson("departamentos",this.departamentos); //usar metodo  escribirjson
        // return parseFloat((aRebajar).toFixed(2))
        return aRebajar; //*devolver array con deptos modif en precioalquiler
    },
//I
    calcularRecaudación: function () {

        const deptosNoDisp = this.departamentosNoDisponibles();
        const recaudacion = deptosNoDisp.reduce(
            (acc, depto) => acc + depto.precioAlquiler, 0
        );
        return recaudacion;
    },
//J
    ordenarPorPrecio: function () {
        
        return this.departamentos.sort((a,b) => a.precioAlquiler - b.precioAlquiler);
        // const ordenados = arrayDeptos.sort((a,b) => (a.precioAlquiler - b.precioAlquiler));
        // return ordenados;
    },
};


//*********************************************************************/
//listar departamentos:

//1
//console.log(inmobiliaria.departamentos);

//B
//console.log(inmobiliaria.listarDepartamentos(inmobiliaria.departamentos));

//C
// console.log(inmobiliaria.buscarPorId(3));
// inmobiliaria.listarDepartamentos([inmobiliaria.buscarPorId(2)])

//D
// inmobiliaria.listarDepartamentos(inmobiliaria.departamentosNoDisponibles());

//E
// inmobiliaria.listarDepartamentos(inmobiliaria.departamentosDisponibles());

//F
// inmobiliaria.listarDepartamentos(inmobiliaria.filtrarPorAmbientes(3));

//G
// inmobiliaria.listarDepartamentos(inmobiliaria.filtrarPorPrecio(50000));

//H
inmobiliaria.listarDepartamentos(inmobiliaria.rebajarPrecioAlquiler(2))

//I
// console.log(inmobiliaria.calcularRecaudación());

//J
// inmobiliaria.listarDepartamentos(inmobiliaria.ordenarPorPrecio());
