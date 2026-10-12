// ======= PRODUCTOS-CONTAINER =======
/* Componente contenedor o cerebro. Se encarga de ir a buscar la lista de productos a una API (inicialmente,
para simular una consulta a una API, leemos datos de una archivo json). Le pasa la lista de productos
al componente organizador */
import {useEffect, useState} from "react";
import ProductosList from "../ProductosList/ProductosList.jsx";

function ProductosContainer() {
    // Creamos un estado para guardar los productos
    const [productos, setProductos] = useState([]);
    // Llamamos a useEffect para hacer una consulta a la API, la cual es una operación externa al componente
    useEffect(() => {
        // Realizamos la consulta a la API (en este caso, al archivo productos.json)
        fetch("/data/productos.json")
        .then((respuesta) => {
            console.log("Respuesta cruda del servidor: ", respuesta);
            // Devolvemos la respuesta en formato JSON
            return respuesta.json();
        })
        .then((datos) => {
            console.log("Productos cargados: ", datos);
            // Actualizamos el estado de productos
            setProductos(datos);
        });
    }, []);
    
    return (
        <>
            <ProductosList productos={productos} />
        </>
    );
}

export default ProductosContainer;