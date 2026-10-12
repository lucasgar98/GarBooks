// ======= PRODUCTOS =======
/* Componente presentacional asociado a las tarjetas de productos, cuya función es recibir datos de
un producto y mostrarlos en pantalla. Los datos los recibirá del organizador, el cual recorrerá la lista
de productos, invocando a este componente en cada iteración.
Los datos recibidos son: nombre, precio, stock e imagen */
import Contador from "../Contador/Contador.jsx";

function Producto({nombre, precio, stock, imagen}) {

    return(
        <div style={{maxWidth: "300px"}}>
            <img src={imagen} style={{width: "250px", height: "150px"}}></img>
            <h3>{nombre}</h3>
            <strong><p>${precio}</p></strong>
            <span>Stock: {stock}</span> <br />
            <Contador /> <br />
            <button>Agregar al carrito</button>
        </div>
    );
}

export default Producto;