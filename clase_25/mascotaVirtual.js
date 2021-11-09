const mascota = {
    
    nombre: "Rafa",
    salud: 70,
    edad: 0,
    hambre: 50,
    suenio: 25,

    estado : function () {
        console.log(
        "Nombre: "+this.nombre+
        ", salud: "+this.salud+
        ", edad: "+this.edad+
        ", hambre: "+this.hambre+
        ", sueño: "+this.suenio
        );
    },
    crecimiento: function () {
        this.edad+=1;
        this.salud -= 30;
        this.hambre +=15;
        this.suenio += 30;
    },
    sigueConVida: function () {
        return this.salud > 0 && this.salud <= 100 && this.hambre >=0 && this.hambre <= 80
        && this.suenio > 0;
    },
    comer: function () {
        this.hambre -= 15;
        this.salud += 6;
    },
    descanso: function () {
        this.salud += 5;
        this.suenio -= 20; 
    },
    saludar: function () {
        console.log(
            "───▄▀▀▀▄▄▄▄▄▄▄▀▀▀▄───" + "\n" +
            "───█▒▒░░░░░░░░░▒▒█───" + "\n" +
            "────█░░█░░░░░█░░█────" + "\n" +
            "─▄▄──█░░░▀█▀░░░█──▄▄─" + "\n" +
            "█░░█─▀▄░░░░░░░▄▀─█░░█" + "\n" +
            "█▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█" + "\n" +
            "█   Hola soy " + this.nombre+"    █" + "\n" +
            "█   tengo " + this.edad+" años    █" + "\n" +
            "█  salud: " + this.salud+"         █" + "\n" +
            "█ tengo " +this.hambre+" de hambre █" + "\n" +
            "█ tengo " +this.suenio+" de sueño  █" + "\n" +
            "█▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄█"
            + "\n" 

            
            )
    },
    entrenar: function () {
        this.salud += 7;
        this.hambre += 13;
        this.suenio -= 5;
    },
    estresarse: function () {
        this.salud -= 10;
    },
    terapia: function () {
        this.salud += 2;
    },
    jugar: function () {
        this.hambre += 4;
    },


}

while (mascota.sigueConVida()) {
    mascota.saludar()
    // mascota.estado()
    mascota.crecimiento()
    mascota.comer()
    mascota.descanso()
    mascota.entrenar()
    mascota.comer()
    mascota.estresarse()
    mascota.terapia()
    mascota.comer()
    mascota.entrenar()
    mascota.jugar()
    if (mascota.edad === 65 ) {
        console.log("Rafa se ha jubilado");
    }
}


mascota.estado()
console.log("***Rafa ya no se encuentra entre nosotros :'(****");
