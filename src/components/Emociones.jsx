// Emociones.jsx
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const emocionesDisponibles = [
  'Felicidad', 'Tristeza', 'Suspenso', 'Inspiración',
  'Miedo', 'Asombro', 'Esperanza', 'Nostalgia',
];

const Emociones = () => {
  const { emocionesSeleccionadas, setEmocionesSeleccionadas } = useContext(AppContext);

  const toggleEmocion = (emocion) => {
    setEmocionesSeleccionadas((prev) =>
      prev.includes(emocion)
        ? prev.filter((e) => e !== emocion)
        : [...prev, emocion]
    );
  };

  return (
    <div>
      <h2>¿Qué emociones buscas que te cause el libro?</h2>
      <div className='generos'>
        {emocionesDisponibles.map((emocion, index) => (
          <div
            key={index}
            onClick={() => toggleEmocion(emocion)}
            className="generos-items"
            style={{
                backgroundColor: emocionesSeleccionadas.includes(emocion)
                  ? '#d3f8d3'
                  : 'white',
              }}
          >
            {emocion}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Emociones;
