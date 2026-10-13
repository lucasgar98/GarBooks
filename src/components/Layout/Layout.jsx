// ======= LAYOUT =======
/* Componente contenedor que va a permitir incluir componentes hijos (children), cada uno con su propia
función. Estos componentes hijos representan el contenido principal de la página, por lo que van dentro
de la etiqueta main. Este componente será invocado por el componente App, y a su vez invocará al
header (encabezado) y al footer (pie de página) */
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";

function Layout({children}) {
    
    return (
        <>
            <Header /> {/* Header*/}
            <main>
                {children} {/* Contenido principal de la página */}
            </main>
            <Footer /> {/*Footer */}
        </>
    );
}

export default Layout;