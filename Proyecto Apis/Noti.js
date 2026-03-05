import axios from "axios";

async function buscarNoticias(busqueda) {

    const KEY = 'efb93ae3c9a84b769d6ee95e9c8060d6';

    try {

        const respuesta = await axios.get(
            `https://newsapi.org/v2/everything?q=${busqueda}&apiKey=${KEY}`
        );

        const noticia = respuesta.data.articles[0];

        console.log(`\n[Noticia] Título: ${noticia.title} (Fuente: ${noticia.source.name})`);

    } catch (error) {

        console.log("Error al conectar con NewsAPI.");

    }
}

buscarNoticias('bitcoin');