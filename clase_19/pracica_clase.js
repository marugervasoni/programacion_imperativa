// const pelis = [
//     {
//       id: 1,
//       titulo: "The Lord of the Rings: The Return of the King",
//       director: "Peter Jackson",
//       genero: "Aventura",
//       anio: 2003,
//       duracionEnMinutos: 401,
//       ganoOscar: true,
//       calificacionIMDB: 8.9,
//     },
//     {
//       id: 2,
//       titulo: "Doctor Strange",
//       director: "Scott Derrickson",
//       genero: "Accion",
//       anio: 2016,
//       duracionEnMinutos: 115,
//       ganoOscar: true,
//       calificacionIMDB: 7.5,
//     },
//     {
//       id: 3,
//       titulo: "The Last Lovecraft: Relic of Cthulhu",
//       director: "Henry Saine",
//       genero: "Horror",
//       anio: 2009,
//       duracionEnMinutos: 78,
//       ganoOscar: false,
//       calificacionIMDB: 5.6,
//     },
//     {
//       id: 4,
//       titulo: "The Avengers: Age of Ultron",
//       director: "Joss Whedon",
//       genero: "Accion",
//       anio: 2015,
//       duracionEnMinutos: 141,
//       ganoOscar: false,
//       calificacionIMDB: 7.3,
//     },
//    ];
    
//    const sistemaDePeliculas = {
//     peliculas: pelis,
//     buscarPorId: function (id) {
//       for (let i = 0; i < this.peliculas.length; i++) {
//         const peli = this.peliculas[i];
//         if (peli.id === id) {
//           return peli;
//         }
//       }
//     },
//     promedioDeDuracion: function () {
//       let sumatoria = 0;
//       let resultado = 0;
//       for (let i = 0; i < this.peliculas.length; i++) {
//         sumatoria += this.peliculas[i].duracionEnMinutos;
//       }
//       resultado = sumatoria / this.peliculas.length;
//       return resultado;
//     },
//     filtrarPorRating: function (ratingMinimo) {
//       let arrResultado = [];
//       for (let i = 0; i < this.peliculas.length; i++) {
//         let pelicula = this.peliculas[i];
//         if (pelicula.calificacionIMDB >= ratingMinimo) {
//           arrResultado.push(pelicula);
//         }
//       }
//       return arrResultado;
//     },
//     agregarGenero: function (generoBuscado, generoAAgregar) {
//       for (let i = 0; i < this.peliculas.length; i++) {
//         let pelicula = this.peliculas[i];
//         if (pelicula.genero === generoBuscado) {
//           pelicula.genero += ", " + generoAAgregar;
//         }
//       }
//       return this.peliculas;
//     },
//    };
//    // console.log(
//    //   `EL promedio de duracion en minutos de las peliculas en sistema es de: ${sistemaDePeliculas.promedioDeDuracion()}`
//    // );
//    // console.log(sistemaDePeliculas.filtrarPorRating(8));
//    // console.log(sistemaDePeliculas.agregarGenero("Accion", "Aventura"));
    
//    const sistemaDePeliculasConMetodosDeArrays = {
    
//     peliculas: pelis,
//     buscarPorId: function (id) {
//     this.peliculas.find(peli)=>peli.id ===id)         //busca 
    
//     },


//     promedioDeDuracion: function () {
//       let sumatoria = this.peliculas.reduce(
//         (acum, pelicula) => acum + pelicula.duracionEnMinutos,
//         0
//       );
//       return sumatoria / this.peliculas.length;
//     },
//     filtrarPorRating: function (ratingMinimo) {
//       let arrResultado = this.peliculas.filter(
//         (pelicula) => pelicula.calificacionIMDB >= ratingMinimo
//       );
//       return arrResultado;
//     },
//     agregarGenero: function (generoBuscado, generoAAgregar) {
//       let filtradas = this.peliculas.filter(
//         (pelicula) => pelicula.genero === generoBuscado
//       );
//       filtradas.map((peli) => (peli.genero += ", " + generoAAgregar));
//       return this.peliculas;
//     },
// };
    
   // console.log(
   //   `EL promedio de duracion en minutos de las peliculas en sistema es de: ${sistemaDePeliculas.promedioDeDuracion()}`
   // );
   // console.log(sistemaDePeliculas.filtrarPorRating(8));
   // console.log(sistemaDePeliculasConMetodos.agregarGenero("Accion", "Aventura"));
    
    
console.log(sistemaDePeliculas.buscarPorId(2));
