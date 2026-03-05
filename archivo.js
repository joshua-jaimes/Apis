import axios from "axios";

async function buscarMercadoLibre(item) {
    try {

        const response = await axios.get(
            `https://api.mercadolibre.com/sites/MCO/search?q=${item}`,
            {
                headers: {
                    "User-Agent": "Mozilla/5.0",
                    "Accept": "application/json"
                }
            }
        );

        const productos = response.data.results.slice(0, 3);

        console.log(`\n--- Resultados de Mercado Libre para: ${item} ---`);

        productos.forEach(p => {
            console.log(`- ${p.title} | Precio: $${p.price} ${p.currency_id}`);
        });

    } catch (error) {

        console.log("Error consultando Mercado Libre:", error.response?.status);

    }
}

buscarMercadoLibre("iphone");