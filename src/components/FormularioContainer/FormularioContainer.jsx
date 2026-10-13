// ======= FORMULARIO-CONTAINER =======
/* Componente contenedor que implementa la lógica del formulario. Contiene los manejadores de los eventos
asociados al formulario, los cuales se los pasa al componente presentacional del formulario junto con
los manejadores de eventos */
import { useState } from "react";
import FormularioProducto from "../FormularioProducto/FormularioProducto.jsx";

function FormularioContainer() {
    // Creamos un estado para guardar los datos del formulario. El valor inicial será un objeto con todas sus propiedades vacías
    const [datosForm, setDatosForm] = useState({
        nombreLibro: "",
        precioLibro: "",
        stockLibro: ""
    });
    // Creamos un estado para guardar el archivo de la imagen en forma de URL
    const [archivoImg, setArchivoImg] = useState(null);

    // Callback que se ejecutará cuando haya un cambio en alguno de los campos del formulario
    const manejarCambioEntradas = (evento) => {
        // Para leer el nombre y el valor de la entrada del formulario, accedemos a la propiedad
        // target del parámetro evento, el cual posee dos propiedades: name (atributo que identifica
        // al campo) y value (valor del campo)
        const {name, value} = evento.target;
        // Actualizamos el estado que guarda los datos del formulario. Creamos un nuevo objeto que contiene
        // los valores anteriores de datosForm (los cuales obtenemos con el spread operator) y el nuevo valor
        // del campo modificado
        setDatosForm({
            ...datosForm,
            // Ponemos name entre corchetes para obtener el valor de la propiedad name del input,
            // para actualizar el campo correspondiente
            [name]: value
        });
    }

    // Función que se ejecutará cuando cambie el archivo de la imagen seleccionada en el formulario
    const manejarCambioImagen = (evento) => {
        // Actualizamos el archivo de la imagen accediendo al primer elemento de evento.target.files,
        // el cual es un array que contiene los archivos seleccionados. En nuestro caso, como sólo
        // permitimos un archivo, accedemos al primer elemento
        setArchivoImg(evento.target.files[0]);
    }

    // Callback que se ejecutará cuando se presione el botón Agregar Libro para enviar las entradas del formulario
    const manejarEnvioForm = async (evento) => {
        // Evitamos que el navegador realice la acción por defecto al enviar el formulario (o sea, evitamos
        // que el navegador recargue toda la página)
        evento.preventDefault();
        // Validamos la imagen seleccionada por el usuario
        if(!archivoImg) {
            alert("Seleccione una imagen para el libro");
            return;
        }
        // Subimos la imagen seleccionada al servidor Imgbb, para lo cual debemos hacer una consulta a ese servidor
        // Para subir la imagen a Imgbb, debemos crear un objeto especial llamado FormData, que está diseñado
        // para enviar archivos y datos de formulario
        const apiEndpoint = "https://api.imgbb.com/1/upload";  // Endpoint de la API
        const apiKey = "8b546fd816cd22720ec2e4a01e851b28";  // Clave para subir las imágenes a Imgbb
        const formData = new FormData();
        // Agregamos el archivo de la imagen a FormData
        formData.append("image", archivoImg);

        try {
            // Hacemos una consulta tipo POST a la API para publicar la imagen. Se debe pasar como parámetro
            // de consulta la clave de la API. La imagen se envía en el cuerpo de la solicitud
            const r = await fetch(`${apiEndpoint}?key=${apiKey}`, {method: "POST", body: formData});
            // Obtenemos la respuesta en formato JSON
            const d = await r.json();
            if(d.success) {
                // Si la respuesta fue exitosa, unimos la URL de la imagen con el resto de los datos
                // del formulario
                const productoCompleto = {
                    ...datosForm,
                    urlImgLibro: d.data.url
                };
                // Debemos enviar los datos a la API (por el momento imprimimos un mensaje de alerta al usuario
                // ya que todavía no tenemos nuestra API)
                console.log("Datos del formulario enviados a la API: ", productoCompleto);
                alert("Libro agregado");
            }
            else {
                throw new Error('La subida de la imagen a Imgbb falló.');
            }
        }
        catch(error) {
            console.log("Error al subir la imagen: ", error);
            alert("Error al subir la imagen. Intentalo de nuevo");
        }
    }

    return (
        <FormularioProducto datosForm={datosForm} manejarCambioEntradas={manejarCambioEntradas} 
        manejarCambioImagen={manejarCambioImagen} manejarEnvioForm={manejarEnvioForm} />
    );

}

export default FormularioContainer;