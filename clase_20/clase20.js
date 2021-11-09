const arrayProfesionales = [
    {
      "identificador": 0,
      "estaHabilitado": true,
      "honorarioConsulta": 2007.68,
      "edad": 29,
      "nombre": "Huber Wilkins",
      "especialidad": "Neumonologia",
      "cantidadConsultas": 2,
      "puntuacion": 0
    },
    {
      "identificador": 1,
      "estaHabilitado": true,
      "honorarioConsulta": 2325.56,
      "edad": 21,
      "nombre": "Goldie Haley",
      "especialidad": "Cardiologia",
      "cantidadConsultas": 4,
      "puntuacion": 0
    },
    {
      "identificador": 2,
      "estaHabilitado": true,
      "honorarioConsulta": 2208.17,
      "edad": 36,
      "nombre": "Pena Landry",
      "especialidad": "Dermatologia",
      "cantidadConsultas": 0,
      "puntuacion": 0
    },
    {
      "identificador": 3,
      "estaHabilitado": true,
      "honorarioConsulta": 3266.71,
      "edad": 20,
      "nombre": "Leanne Burch",
      "especialidad": "Neumonologia",
      "cantidadConsultas": 2,
      "puntuacion": 0
    },
    {
      "identificador": 4,
      "estaHabilitado": false,
      "honorarioConsulta": 2674.09,
      "edad": 31,
      "nombre": "Haynes Fuentes",
      "especialidad": "Cardiologia",
      "cantidadConsultas": 4,
      "puntuacion": 0
    },
    {
      "identificador": 5,
      "estaHabilitado": false,
      "honorarioConsulta": 1851.37,
      "edad": 27,
      "nombre": "Tamika Fuentes",
      "especialidad": "Cardiologia",
      "cantidadConsultas": 0,
      "puntuacion": 0
    },
    {
      "identificador": 6,
      "estaHabilitado": false,
      "honorarioConsulta": 2568.94,
      "edad": 34,
      "nombre": "Russo Baldwin",
      "especialidad": "Dermatologia",
      "cantidadConsultas": 0,
      "puntuacion": 0
    },
    {
      "identificador": 7,
      "estaHabilitado": true,
      "honorarioConsulta": 2601.76,
      "edad": 36,
      "nombre": "Dodson Shaffer",
      "especialidad": "Cardiologia",
      "cantidadConsultas": 10,
      "puntuacion": 0
    },
    {
      "identificador": 8,
      "estaHabilitado": false,
      "honorarioConsulta": 1949.92,
      "edad": 40,
      "nombre": "Guerra Bright",
      "especialidad": "Neumonologia",
      "cantidadConsultas": 0,
      "puntuacion": 0
    },
    {
      "identificador": 9,
      "estaHabilitado": true,
      "honorarioConsulta": 3898.11,
      "edad": 28,
      "nombre": "Dina Navarro",
      "especialidad": "Cardiologia",
      "cantidadConsultas": 15,
      "puntuacion": 0
    },
    {
      "identificador": 10,
      "estaHabilitado": true,
      "honorarioConsulta": 2745.73,
      "edad": 27,
      "nombre": "Stafford Watts",
      "especialidad": "Cardiologia",
      "cantidadConsultas": 3,
      "puntuacion": 0
    },
    {
      "identificador": 11,
      "estaHabilitado": true,
      "honorarioConsulta": 2808.98,
      "edad": 39,
      "nombre": "Joni Avery",
      "especialidad": "Neumonologia",
      "cantidadConsultas": 5,
      "puntuacion": 0
    },
    {
      "identificador": 12,
      "estaHabilitado": true,
      "honorarioConsulta": 1941.13,
      "edad": 25,
      "nombre": "Mayra Tran",
      "especialidad": "Oftamologia",
      "cantidadConsultas": 2,
      "puntuacion": 0
    },
    {
      "identificador": 13,
      "estaHabilitado": true,
      "honorarioConsulta": 3930.0344999999998,
      "edad": 23,
      "nombre": "Ward Dale",
      "especialidad": "Cardiologia",
      "cantidadConsultas": 1,
      "puntuacion": 0,
      "puntaje": 3
    },
    {
      "identificador": 14,
      "estaHabilitado": true,
      "honorarioConsulta": 8900,
      "edad": 28,
      "nombre": "Martin Smith",
      "especialidad": "Arquitecto",
      "cantidadConsultas": 8,
      "puntuacion": 100,
      "puntaje": 5
    },
    {
      "identificador": 15,
      "estaHabilitado": true,
      "honorarioConsulta": 10000,
      "edad": 28,
      "nombre": "Will Smith",
      "especialidad": "Arquitecto",
      "cantidadConsultas": 48,
      "puntuacion": 50,
      "puntaje": 4
    }
  ];

//   Consignas
// Utilizar un método de array que retorne los primeros 5 profesionales del arrayProfesionales. No debe modificar el array original. Guardar el resultado de este método en una variable primerosCincoProfesionales, luego hacer la impresión de la misma.

const cartilla = {
    profesionales: arrayProfesionales,
    
    primerosCincoProfesionales: function(){
        return this.profesionales.slice(0,5)
    },

// Utilizar un método de array que permita reemplazar el profesional con ID 14 por un nuevoProfesional. Es decir, se modificará el arrayProfesionales. Luego, imprimirlo para verificar el cambio.
reemplazarProfesional: function () {
        return this.profesionales.splice(15,1,nuevoProfesional)
    }
    
    

    
    
    // Ahora, necesitamos un método para ordenar el arrayProfesionales según la propiedad honorarioConsulta de menor a mayor. Mostrar el array ordenado.
// Utilizar un método para realizar una búsqueda sobre el arrayProfesionales del profesional con ID 15. Es decir, que retorne solo un profesional. Asignar este resultado a una variable, luego realizar la impresión de la misma.

// Extra
// Ahora, podemos crear funciones para poder reutilizar todos los métodos que desarrollamos en estas dos mesas. También, crear una función que, utilizando el módulo lecturaEscritura, logre hacer la persistencia en el archivo JSON cada vez que modifiquemos el arrayProfesionales.
}


console.log(cartilla.primerosCincoProfesionales());
   


const nuevoProfesional = {
    identificador: 250,
    estaHabilitado: true,
    honorarioConsulta: 8000,
    edad: 52,
    nombre: 'Linus Torvalds',
    especialidad: 'Junior Developer',
    cantidadConsultas: 48,
    puntuacion: 50
}