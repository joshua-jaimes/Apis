
import axios from "axios";

async function obtenerBitcoin() {
    try {
       
        const response = await axios.get('https://data-api.coindesk.com/asset/v1/top/list?page=1&page_size=10&sort_by=CIRCULATING_MKT_CAP_USD&sort_direction=DESC&groups=ID,BASIC,SUPPLY,PRICE,MKT_CAP,VOLUME,CHANGE,TOPLIST_RANK&toplist_quote_asset=USD');
        const precio = response.data.Data.LIST[0].PRICE_USD;
        console.log(`\n[Bitcoin] El precio actual es: $${precio} USD`);
    } catch (error) {
        console.error("No se pudo obtener el precio de Bitcoin", error.message);
    }
}

obtenerBitcoin();   