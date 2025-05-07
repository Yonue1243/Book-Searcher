import { useState } from 'react'
import { cambiarPantalla } from './helpers/funciones.jsx'
import Inicio from './components/inicio.jsx'
import './index.css'

function App() {
  const [pantallaActual, setPantallaActual] = useState('inicio');
  const [content, setContent] = useState(<Inicio />);


  const avanzarPantalla = () => {
    const orden = ['inicio', 'emociones', 'otraVista', 'final']; // nombres reales
    const siguienteIndex = (orden.indexOf(pantallaActual) + 1) % orden.length;
    const siguientePantalla = orden[siguienteIndex];

    setPantallaActual(siguientePantalla);
    cambiarPantalla(setContent, siguientePantalla);
  };

  const textosBoton = {
    inicio: 'Ir a Vista 1',
    uno: 'Ir a Vista 2',
    dos: 'Ir a Vista 3',
    tres: 'Volver al Inicio',
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ textAlign: 'center', border: '2px solid black', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', width: '50%' }}>
        <div>
          {content}
        </div>
        <button
        onClick={avanzarPantalla}
        style={{ marginTop: '20px' }}
      >
        {textosBoton[pantallaActual]}
      </button>      
      </div>
    </div>
  );
}

export default App
