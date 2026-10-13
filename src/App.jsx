// ======= APP =======
/* Componente que contiene toda la página web. Es invocado por el componente main para ser renderizado */

import './App.css';
import Layout from './components/Layout/Layout.jsx';
import ProductosContainer from './components/ProductosContainer/ProductosContainer.jsx';
import FormularioContainer from './components/FormularioContainer/FormularioContainer.jsx';

function App() {
    
    return (
        <Layout>
            <section>
                <h1>Bienvenidos a GarBooks</h1>
                <p>La mejor tienda de libros online. Libros usados en excelente estado a precios increíbles.</p>
            </section>
            <section style={{margin: "10px 0"}}>
                {/* Acá van las tarjetas de productos */}
                <h2>Destacados de hoy</h2>
                <ProductosContainer />
            </section>
            <section style={{display: "flex", justifyContent: "center", margin: "15px 0"}}>
                {/* Acá va el formulario para agregar nuevos productos */}
                <FormularioContainer />
            </section>
        </Layout>
    );
}

export default App;
