// ======= CONTADOR =======
/* Componente para incrementar o decrementar el número de libros que se van a agregar al carrito. Muestra
el número de productos y dos botones, uno para incrementar y otro para decrementar el número de libros. 
Es invocado por el componente Producto */
import { useState } from "react";

function Contador() {
    // Creamos un estado para guardar la cantidad de productos
    const [contador, setContador] = useState(0);
    // Función para incrementar el contador 
    const Incrementar = () => {
        setContador(contador+1);
    }
    // Función para decrementar el contador
    const Decrementar = () => {
        if(contador > 0){
            setContador(contador-1);
        }
    }

    return (
        <div style={{display: "flex", justifyContent: "center", gap: "10px"}}>
            <button onClick={Decrementar}>-</button>
            <label>{contador}</label>
            <button onClick={Incrementar}>+</button>
        </div>
    );
}

export default Contador;