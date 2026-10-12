// ======= PRODUCTOS-LIST =======
/* Componente organizador, el cual es un componente intermedio entre el cerebro (ProductosContainer) y 
el exhibidor (Producto). Recibe datos del cerebro en forma de lista y recorre dicha lista invocando
al componente exhibidor, pasándole como props el nombre del producto, el precio, el stock y la imagen */
import Producto from "../TarjetaProducto/Producto.jsx";

function ProductosList({productos}) {
    return (
        <div style={{display: "flex", gap: "20px", justifyContent: "center"}}>
            {
                productos.map(prod => (
                    <Producto key={prod.id} nombre={prod.nombre} precio={prod.precio} stock={prod.stock} imagen={prod.imagen} />
                ))
            }
        </div>
    );
}

export default ProductosList;