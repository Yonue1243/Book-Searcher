import React, { useEffect, useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { buscarLibros } from '../helpers/apiLibros';

const LibrosRecomendados = () => {
  const { selectedGenres, emocionesSeleccionadas, tamanioSeleccionado } = useContext(AppContext);
  const [libros, setLibros] = useState([]);

  useEffect(() => {
    if (selectedGenres.length > 0) {
      buscarLibros(selectedGenres, emocionesSeleccionadas, tamanioSeleccionado)
        .then(setLibros)
        .catch(console.error);
    }
  }, [selectedGenres, emocionesSeleccionadas, tamanioSeleccionado]);

  return (
    <div className="libros-recomendados">
      <h2>Libros recomendados para ti</h2>
      {libros.length > 0 ? (
        <div className="libros-lista">
          {libros.map((libro, index) => (
            <div key={index} className="libro-item">
              <img 
                src={libro.volumeInfo.imageLinks?.thumbnail || 'https://via.placeholder.com/100x150?text=Sin+Imagen'} 
                alt={libro.volumeInfo.title} 
                className="libro-imagen"
              />
              <div className="libro-detalles">
                <h3>{libro.volumeInfo.title}</h3>
                <p>{libro.volumeInfo.description ? libro.volumeInfo.description.substring(0, 150) + '...' : 'Sin descripción'}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No se encontraron libros para tus criterios.</p>
      )}
    </div>
  );
};

export default LibrosRecomendados;
