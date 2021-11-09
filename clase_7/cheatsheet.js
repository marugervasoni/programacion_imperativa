
/* ==========================
DE ASIGNACIÓN
========================== */

// El operador "=" sirve para asignar el valor 40 a una variable llamada "edad"

let edad = 40

/* ==========================
ARITMÉTICOS
========================== */

// Nos permiten hacer operaciones matemáticas

10 + 15 //---> Suma
10 - 15 //---> Resta
10 * 15 //---> Multiplicación
10 / 15 //---> División
15++    //---> Incremento de uno en uno: 15 + 1
15--    //---> Decremento de uno en uno: 15 - 1
15 % 5  //---> Módulo. El resto obtenido de dividir 15 entre 5: 0
15 % 2  //---> Módulo. El resto obtenido de dividir 15 entre 2: 1

/* ==========================
DE COMPARACIÓN SIMPLE
========================== */

//comparan 2 valores, devuelven verdadero (true) o falso (false)

20 == 15 //---> Igualdad (false)
20 != 15 //---> Desigualdad (true)

/* ==========================
DE COMPARACIÓN ESTRICTA
========================== */

//comparan el valor y el tipo de dato también

20 === "20" //---> Igualdad estricta (false)
20 === 20 //---> Igualdad estricta (true)
20 !== 15 //---> Desigualdad estricta (true)
20 !== 20 //---> Desigualdad estricta (false)

/* ==========================
OPERADORES RELACIONALES
========================== */

//comparan 2 valores, devuelven verdadero o falso

20 > 20 //---> mayor que --> false
20 >= 20 //---> mayor o igual que --> true
20 < 20 //---> menor que --> false
20 <= 20 //---> menor o igual que --> true

/* ==========================
LÓGICOS
========================== */

// Permiten combinar valores booleanos y su resultado a la vez también es un booleano

// and && - todos los valores deben evaluar como true para que el resultado sea true
(10 > 15) && (10 != 20) //false (el primero es false y el segundo true)
(12 % 4 == 0) && (12 != 24) //true (ambos son true)

// or || - al menos un valor debe evaluar como true para que el resultado sea true
(10 > 15) || (10 != 20) //true (el primero es false y el segundo es true)
(12 % 5 == 0) || (12 != 12) //false (ambos son falsos)

// not ! - niega la condicion. si era true, seraa false y viceversa
!false //true
! 20 > 15 //false

//===============================================================