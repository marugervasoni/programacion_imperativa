//---------------------------------
//operadores logicos.           //
//-------------------------------
// ¿Qué devuelve cada Expresión? Pt1-------------------------------------------------
// Observen estos ejemplos y piensen qué devuelve cada uno:

// 1. !true --> false

// 2. !false --> true

// 3. !!false --> false

// 4. !!true --> true

// 5. !1 --> false

// 6. !!1 --> true

// 7. !0 --> true

// 8. !!0 --> false

// 9. !!"" --> false

// 10.  let x = 5 ;
//      let y = 9;
//      a. x < 10 && x!==5     --> (t && f = false)
//      b. x>9 || x===5        --> (f || t = true)
//      c. !(x===y)            --> (!(false) = true)


// ¿Qué devuelve cada Expresión? Pt2 -------------------------------------------
// Sin probar en la consola, piensen qué devolverá cada una de estas expresiones, ¿son
// true o false?

// 1.   let x=10            
//      let y ="a"
//      y==="b" || x >= 10      --> f || t = true

// 2.   let x=3
//      let y=8
//      !(x == "3" || x === y) && !(y !== 8 && x <= y)      --> (!(t || f) && !(f)) --> f && t = false.

// 3.   let str = ""                -->falsy
//      let msj = "jaja!"           -->truthy
//      let esGracioso = "false"    -->truthy
//      !((str || msj) && esGracioso)   --> !((t)&&(t)) --> !(t) --> false.


// Code ------------------------------------------------------------------
// Crear el código JS que exprese los siguientes enunciados:
// 1. Para subir a una montaña rusa la edad debe ser mayor a 12 años y la altura
// debe ser mayor a 1,30 m.
let subirMontañaRusa = (edad > 12) && (altura > 1.30)

// 2. Si no hay suficiente luz o el objeto se mueve rápidamente, la cámara de fotos
// debe usar el flash.
let suficienteLuz = false;
let movimientoRapido = true;
let usarFlash = suficienteLuz || movimientoRapido;

// 3. Un estudiante pasa de nivel si su nota es mayor a 7 en sus dos evaluaciones
// parciales, o si obtiene un 4 en el examen final.
let pasarDeNivel = ((parcial1 >= 7) && (parcial1 >= 7) || examenFinal >= 4);

// 4. Dejamos ver la TV a nuestro hijo si realizó la tarea pero además, si tocó sus
// prácticas de piano y lo hizo de memoria.
let tareaHecha = true;
let practicoPiano = true;
let practicoDeMemoria = false;
let permisoParaVerTv = (tareaHecha && (practicoPiano && practicoDeMemoria));
