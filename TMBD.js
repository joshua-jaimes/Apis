import axios from 'axios';


let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'http://www.omdbapi.com/?i=tt3896198&apikey=db97f27d',
  headers: {}
};

axios.request(config)
  .then((response) => {
    let pelicula = response.data;
    let titulo = pelicula.Title;
    let anio = pelicula.Year;
    let director = pelicula.Director;
    console.log(`Título: ${titulo}`);
    console.log(`Año: ${anio}`);
    console.log(`Director: ${director}`);
console.log('--- Información completa de la película ---' 
);
console.log(
  `1. Nombre: ${titulo}\n` +
  `2. Año: ${anio}\n` +
  `3. Director: ${director}`
);

 console.log(pelicula);

  })
  .catch((error) => {
    console.log(error);
  });
