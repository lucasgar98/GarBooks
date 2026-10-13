// ======= FORMULARIO-PRODUCTO =======
/* Componente presentacional que se encargará de mostrar el formulario en la página. Recibe como props las
entradas del formulario así como también los callbacks para manejar los eventos asociados al formulario. Es
invocado por el componente contenedor asociado al formulario */

function FormularioProducto({datosForm, manejarCambioEntradas, manejarCambioImagen, manejarEnvioForm}) {
    
    return (
        <form style={{maxWidth: "400px", border: "1px solid #ddd", borderRadius: "8px", 
            padding: "10px", display: "flex", flexDirection: "column", gap: "12px"}}
            onSubmit={manejarEnvioForm}>
            <h3>Agregar nuevo libro</h3>
            <div>
                <label>Nombre del libro: </label>
                <input type="text" name="nombreLibro" value={datosForm.nombre} 
                    onChange={manejarCambioEntradas} style={{maxWidth: "200px"}}/>
            </div>
            <div>
                <label>Precio: </label>
                <input type="number" name="precioLibro" value={datosForm.precio} 
                    onChange={manejarCambioEntradas} style={{maxWidth: "200px"}}/>
            </div>
            <div>
                <label>Stock: </label>
                <input type="number" name="stockLibro" value={datosForm.numbero} 
                    onChange={manejarCambioEntradas} style={{maxWidth: "200px"}}/>
            </div>
            <div>
                <label>Imagen: </label>
                <input type="file" name="imgLibro" 
                onChange={manejarCambioImagen}/> <br/>
            </div>
            <div>
                <button type="submit">Guardar libro</button>
            </div>
        </form>
    );
}

export default FormularioProducto;