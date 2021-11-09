const v = "\x1b[32m%s\x1b[0m";
const o = "*".repeat(80) + "\n";
const oo = "*".repeat(25);
// Te proveemos la siguiente plantilla que tiene tre partes:
// - Array de objetos que está colapsado aquí debajo.
// - Desarrollo de las consignas, donde escribirás el código que responda a los enunciados
// - Ejecución de las consignas, donde ejecutarás los métodos correspondientes mostrando por consola sus resultados
const nombre = "tu nombre aquí";
const tema = "el tema que te tocó";

const departamentos = [
  {
    id: 1,
    propietarios: "Dueño: Luis Perez",
    cantidadHabitacion: 2,
    disponible: true,
    aceptaMascotas: true,
    cantidadPersonas: 2,
    precioAlquiler: 2395.8
  },
  {
    id: 2,
    propietarios: "Dueños: Luis Perez y María Martinez",
    cantidadHabitacion: 1,
    disponible: false,
    aceptaMascotas: true,
    cantidadPersonas: 2,
    precioAlquiler: 1597.2
  },
  {
    id: 3,
    propietarios: "Dueña: Laura García",
    cantidadHabitacion: 2,
    disponible: false,
    aceptaMascotas: false,
    cantidadPersonas: 4,
    precioAlquiler: 3993
  },
  {
    id: 4,
    propietarios: "Dueña: Julieta Tols",
    cantidadHabitacion: 1,
    disponible: true,
    aceptaMascotas: true,
    cantidadPersonas: 1,
    precioAlquiler: 1996.5
  },
  {
    id: 5,
    propietarios: "Dueños: Julieta Tols y Pablo Groming",
    cantidadHabitacion: 1,
    disponible: false,
    aceptaMascotas: false,
    cantidadPersonas: 1,
    precioAlquiler: 11979
  },
  {
    id: 6,
    propietarios: "Dueño: Pablo Groming",
    cantidadHabitacion: 2,
    disponible: false,
    aceptaMascotas: true,
    cantidadPersonas: 3,
    precioAlquiler: 4658.5
  },
  {
    id: 7,
    propietarios: "Dueño: Luis Perez",
    cantidadHabitacion: 2,
    disponible: true,
    aceptaMascotas: true,
    cantidadPersonas: 3,
    precioAlquiler: 3327.5
  },
  {
    id: 8,
    propietarios: "Dueña: Julieta Tols",
    cantidadHabitacion: 3,
    disponible: false,
    aceptaMascotas: true,
    cantidadPersonas: 4,
    precioAlquiler: 7986
  },
  {
    id: 9,
    propietarios: "Dueñas: Julieta Tols y Laura García",
    cantidadHabitacion: 3,
    disponible: true,
    aceptaMascotas: true,
    cantidadPersonas: 4,
    precioAlquiler: 7986
  },
  {
    id: 10,
    propietarios: "Dueñas: Julieta Tols y Laura García",
    cantidadHabitacion: 3,
    disponible: false,
    aceptaMascotas: true,
    cantidadPersonas: 4,
    precioAlquiler: 7986
  },
  {
    id: 11,
    propietarios: "Dueño: Luis Perez",
    cantidadHabitacion: 3,
    disponible: true,
    aceptaMascotas: true,
    cantidadPersonas: 4,
    precioAlquiler: 7986
  },
  {
    id: 12,
    propietarios: "Dueño: Juan Pablo Martinez",
    cantidadHabitacion: 3,
    disponible: false,
    aceptaMascotas: true,
    cantidadPersonas: 4,
    precioAlquiler: 7986
  },
  {
    id: 13,
    propietarios: "Dueño: Juan Pablo Martinez",
    cantidadHabitacion: 2,
    disponible: true,
    aceptaMascotas: true,
    cantidadPersonas: 2,
    precioAlquiler: 4059.55
  },
  {
    id: 14,
    propietarios: "Dueño: Juan Pablo Martinez",
    cantidadHabitacion: 1,
    disponible: true,
    aceptaMascotas: true,
    cantidadPersonas: 2,
    precioAlquiler: 3993
  },
  {
    id: 15,
    propietarios: "Dueños: Martín Gutierrez y José Torres",
    cantidadHabitacion: 0,
    disponible: false,
    aceptaMascotas: true,
    cantidadPersonas: 1,
    precioAlquiler: 798.6
  },
  {
    id: 16,
    propietarios: "Dueños: Martín Gutierrez y José Torres",
    cantidadHabitacion: 0,
    disponible: false,
    aceptaMascotas: true,
    cantidadPersonas: 1,
    precioAlquiler: 798.6
  },
  {
    id: 17,
    propietarios: "Dueños: Martín Gutierrez y José Torres",
    cantidadHabitacion: 0,
    disponible: true,
    aceptaMascotas: true,
    cantidadPersonas: 1,
    precioAlquiler: 665.5
  }
]


/*******************************/
/* Desarrollo de las consignas */
/*******************************/
const inmobiliaria = {
    // A
    departamentos: departamentos,
    // B
    listarDepartamentos: function (array) {
        for (let i = 0; i < array.length; i++) {
            const depto = array[i];
            const disponible = depto.disponible ? "disponible" : "alquilado";
            const mascotas = depto.aceptaMascotas ? "acepta mascotas" : "no mascotas";
            console.log("id:"+depto.id+", precio $ "+depto.precioAlquiler+", está "+disponible+","+depto.cantidadHabitacion+" ambientes, maximo "+depto.cantidadPersonas+
            " personas,"+mascotas+", propietarios: "+depto.propietarios);     //"\n -->genera salto de linea"
        }  
    },
    // C
    departamentosDisponibles : function () {
        const disponibles = [];
        for (let i = 0; i < departamentos.length; i++) {
            const depto = this.departamentos[i];
            if (depto.disponible ) {    //no preguntamos si true porque dentro ya trae el valor (pero se puede poner eso === true)
                disponibles.push(depto) //le tiro el depto disponible
            }
        }
        return disponibles;
    },
    // D
    buscarPorId : function (id) {
        for (let i = 0; i < this.departamentos.length; i++) {
            const depto = this.departamentos[i];
            if (depto.id === id) {
                return depto;             //busco  un solo id, si lo encontre ya esta
            }                             //no retorno el id sino el departamento.
        }  
    },
    // E
    buscarPorPrecio : function (precio) {
      const deptosDisp = this.departamentosDisponibles();                       //lo traigo para usarlo.
      const deptosFiltrados = [];                                               //genero un array vacio para meterle datos dentro
      for (let i = 0; i < deptosDisp.length; i++) {                             //recorro departamentos disponibles nada mas
        const dpto = deptosDisp[i];                                             //la constante a recorre es otra, entonce le cambio el nombre para no tocar las otras funciones
        if (dpto.precioAlquiler <= precio ) {
          deptosFiltrados.push(dpto);                                           //inserto el dpto dentro de deptosDisp que es menor o igual al precio parametro.
        } 
      }
      return deptosFiltrados;                   //return fuera del if y del for.                        //faltan datoss, solo filtra una vez.
    },
    // F
    precioConImpuesto : function (porcentaje) {
      const preciosNuevos = []; //tengo que devolver array con precios modificados por eso creo uno nuevo
      for (let i = 0; i < this.departamentos.length; i++) { //recorro array departamentos
        this.departamentos[i].precioAlquiler += ((porcentaje * this.departamentos[i].precioAlquiler) / 100); //al indice del array departamentos en su propiedad precioAlquiler le sumo el porcentaje nuevo multiplicado al indice corresp y lo divido por cien
        preciosNuevos.push(this.departamentos[i]); //al array nuevo le agrego los datos de los deptos actualizado
      }
      return preciosNuevos; //retorno el nuevo array
    }, //indico que en el indice x, su precio alquiler se multiplique por el porcentaje de aumento.
    // G
    //hacer un .slice que quite, primero buscar el indice del : (6) por ejemplo, y usarlo para hacer .slice .
    simplificarPropietarios : function (reemplazo) {
        const cambiar = [];
        for (let i = 0; i < this.departamentos.length; i++) {
            const depto = this.departamentos[i]; ////aca quedamos.
            depto.propietarios = depto.propietarios.replace("Dueños", reemplazo);
            depto.propietarios = depto.propietarios.replace("Dueña", reemplazo);
            depto.propietarios = depto.propietarios.replace("Dueño", reemplazo);
            cambiar.push(depto)
        }
        return cambiar;
    }    
}

/******************************/
/* Ejecución de las consignas */
/******************************/
console.table([{ alumno: nombre, tema: tema }]);


console.log(v, "\n" + oo + "   B. listarDepartamentos");
// Ejecución aquí
inmobiliaria.listarDepartamentos(departamentos);
console.log(o);

//**********************************************************************
//siempre guardar en una variable el array de mi metodo y utilizar mi metodo listar deptos.
//*********************************************************************/

console.log(v, oo + "   C. departamentosDisponibles");
// Ejecución aquí
const disponibles = inmobiliaria.departamentosDisponibles(); //lo guardo en variable
inmobiliaria.listarDepartamentos(disponibles); //uso otro metodo anterior y le paso el array nuevo, para poder ver lo especifico ya filtrado y prolijo.
console.log(o);


console.log(v, oo + " D. buscarPorId");
// Ejecución aquí
const deptoId = inmobiliaria.buscarPorId(1);
inmobiliaria.listarDepartamentos([deptoId]); //no me lo reconoce porque no es un array. (pero lo puse entre [])
console.log(deptoId); //aca si podria invocarlo por console, porque es solo un elemento.
console.log(o);


console.log(v, oo + "  E. buscarPorPrecio");
// Ejecución aquí
const deptoPrecio = inmobiliaria.buscarPorPrecio(7000); 
inmobiliaria.listarDepartamentos(deptoPrecio);
// console.log(o);


console.log(v, oo + " F. precioConImpuesto");
// Ejecución aquí
// inmobiliaria.listarDepartamentos(departamentos);
inmobiliaria.precioConImpuesto(50); //se agrega un porcentaje. por eso la cuenta arriba.
inmobiliaria.listarDepartamentos(departamentos); //se consologuea doble para ver el incremento.
console.log(o);


console.log(v, oo + " G. simplificarPropietarios");
// Ejecución aquí
const simplificar = inmobiliaria.simplificarPropietarios("Prop");
inmobiliaria.listarDepartamentos(simplificar);
console.log(o);