// ======= HEADER =======
/* Componente que representa el encabezado de la página, donde se encuentran los enlaces a cada una de
las secciones de la página. Este componente es invocado por Layout */

function Header() {
    
    return (
        <header style={{backgroundColor: "#eeb845cf"}}>
            <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                <h1>GarBooks</h1>
                <nav style={{display: "flex", gap: "20px"}}>
                    <strong><a>Inicio</a></strong>
                    <strong><a>Nuestros libros</a></strong>
                    <strong><a>Quiénes somos</a></strong>
                    <strong><a>Contacto</a></strong>
                </nav>
            </div>
        </header>
    );
}

export default Header;