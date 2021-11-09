//la lista de clientes.
let arrayCuentas = [
    {
      nroCuenta: 5486273622,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 27771,
      titularCuenta: "Abigael Natte",
    },
    {
      nroCuenta: 1183971869,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 8675,
      titularCuenta: "Ramon Connell",
    },
    {
      nroCuenta: 9582019689,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 27363,
      titularCuenta: "Jarret Lafuente",
    },
    {
      nroCuenta: 1761924656,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 32415,
      titularCuenta: "Ansel Ardley",
    },
    {
      nroCuenta: 7401971607,
      tipoDeCuenta: "Cuenta Unica",
      saldoEnPesos: 18789,
      titularCuenta: "Jacki Shurmer",
    },
  ];
  // podes continuar tu codigo a partir de aca!
  
  let banco = {           //creo objeto literal
    clientes : arrayCuentas,    //prop clientes le ingreso el array con las cuentas
    consultarCliente : function (titular) {     //creo metodo paraconsultar clientes
      
      for (let i = 0; i < this.clientes.length; i++) { //hago un ciclo para que recorra los indices hasat encontrar el nombre buscado
        if (this.clientes[i].titularCuenta === titular) { //un if para decir que si el indice del array en que este titular cuenta coincide con el nombre buscado es igual a titular
          return this.clientes[i]                         //me lo retorne a la propiedad clientes de este objeto literal
        }
      }
    },
    deposito : function (titular, dineroADepo) {

      for (let i = 0; i < this.clientes.length; i++) { 
        if (this.clientes[i].titularCuenta === titular) { 
          
          return this.clientes[i].saldoEnPesos + dineroADepo;  
        }
      }
    },
    extraccion : function (titular, montoAExtraer) {
    
      for (let i = 0; i < this.clientes.length; i++) { 
        if (this.clientes[i].titularCuenta === titular) { 
          let resultado = this.clientes[i].saldoEnPesos - montoAExtraer;
          let respuesta = resultado < 0 ? "Fondos insuficientes" : "Extracción realizada correctamente, su nuevo saldo es: $"+ resultado;
          return respuesta;   
        }
      }   //hacer ciclo para incluir el saldo actual??
    },
}
console.log(banco.consultarCliente("Jacki Shurmer"));
console.log("Deposito realizado, su nuevo saldo es: $ "+banco.deposito("Jacki Shurmer", 1000));
console.log(banco.extraccion("Jacki Shurmer", 4000));