

const ventas = [
 { id: 1, idarticulo: 101, cantidad: 2, fecha: '2024-08-01' },
 { id: 2, idarticulo: 102, cantidad: 1, fecha: '2024-08-01' },
 { id: 3, idarticulo: 103, cantidad: 3, fecha: '2024-08-02' },
 { id: 4, idarticulo: 101, cantidad: 4, fecha: '2024-08-02' },
 { id: 5, idarticulo: 101, cantidad: 1, fecha: '2024-08-03' },
 { id: 6, idarticulo: 104, cantidad: 1, fecha: '2024-08-03' },
 { id: 7, idarticulo: 102, cantidad: 7, fecha: '2024-08-04' },
 { id: 8, idarticulo: 101, cantidad: 1, fecha: '2024-08-04' },
 { id: 9, idarticulo: 102, cantidad: 1, fecha: '2024-08-05' },
 { id: 10, idarticulo: 103, cantidad: 2, fecha: '2024-08-05' }
];

const articulos = [
 { idarticulo: 101, nombre: 'Articulo A' },
 { idarticulo: 102, nombre: 'Articulo B' },
 { idarticulo: 103, nombre: 'Articulo C' },
 { idarticulo: 104, nombre: 'Articulo D' }
];



function obtenerArticulo(idarticulo) {
    return new Promise((resolve) => {


        setTimeout(() => {

            const articulo = articulos.find(a => a.idarticulo === idarticulo);
            resolve(articulo);

        }, 1000);

    });
}


async function procesarVentas() {

    console.log("Listado de ventas mayores a 3 unidades\n");

    try {


        const ventasFiltradas = ventas.filter(v => v.cantidad > 3);


        for (const venta of ventasFiltradas) {

       
            const articulo = await obtenerArticulo(venta.idarticulo);

            
            console.log(`${articulo.nombre} (id=${venta.idarticulo}) tuvo ${venta.cantidad} ventas`);

        }

    } catch (error) {

        console.log("Error al procesar las ventas");

    }

}


procesarVentas();