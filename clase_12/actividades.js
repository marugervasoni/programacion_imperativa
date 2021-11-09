const alicia= [23,69,32];
const bob=[12,67,43];

function encontrarGanador(a,b){
    let puntosA = 0;
    let puntosB = 0;
    let ganador;
    for (let i = 0; i < a.length; i++) {
        if (a[i]>b[i]) {
            puntosA++                   //simplifico, solo incremento
        }else if(a[i]<b[i]){
            puntosB++
        }
    }
    if (puntosA > puntosB) {
        ganador = "el primer";
    } else if (puntosA < puntosB) {
        ganador = "el segundo";
    } else {
        ganador = "el primero y el segundo"
    }
    
    return ganador;    
}
console.log("El ganador es "+encontrarGanador(alicia, bob)+" participante.");