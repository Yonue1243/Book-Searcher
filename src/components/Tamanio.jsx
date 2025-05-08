// Tamanio.jsx
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const tamaniosDisponibles = [
  '150-300 Páginas', '300-450 Páginas', '450-650 Páginas', '650+ Páginas',
];

const Tamanio = () => {
  const { tamanioSeleccionado, setTamanioSeleccionado } = useContext(AppContext);

  const toggleTamanio = (tamanio) => {
    setTamanioSeleccionado(prev =>
      prev === tamanio ? '' : tamanio 
    );
  };

  return (
    <div>
      <h2>¿Qué tamaño de libro prefieres?</h2>
      <div className='generos'>
        {tamaniosDisponibles.map((tamanio, index) => (
          <div
            key={index}
            onClick={() => toggleTamanio(tamanio)}
            className="generos-items"
            style={{
              backgroundColor: tamanioSeleccionado === tamanio ? '#d3f8d3' : 'white',
            }}
          >
            {tamanio}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tamanio;
