// ======= PRODUCTOS-CONTAINER =======
/* Componente contenedor o cerebro. Se encarga de ir a buscar la lista de productos a una API (inicialmente,
para simular una consulta a una API, leemos datos de una archivo json). Le pasa la lista de productos
al componente organizador */
import {useEffect, useState} from "react";
import ProductosList from "../ProductosList/ProductosList.jsx";

function ProductosContainer() {
    // Creamos un estado para guardar los productos
    const [productos, setProductos] = useState([]);
    // Creamos un estado para guardar el error
    const [error, setError] = useState(null);
    // Creamos un estado para indicar si la página está a la espera de una respuesta.
    // Esta variable arranca en true y se pone en false cuando se recibe la respuesta
    const [cargando, setCargando] = useState(true);

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
        })
        .catch((error) => {
            console.error("Error: ", error);
            // Actualizamos el estado de error
            setError(error);
        })
        .finally(() => {
            // Si recibimos una respuesta, ponemos en false la variable cargando
            setCargando(false);
        });
    }, []);

    if(cargando) {
        return <p>Cargando, por favor espere...</p>;
    }
    if(error) {
        return <p>Error al obtener los productos: {error}</p>;
    }
    
    return (
        <ProductosList productos={productos} />
    );
}

export default ProductosContainer;