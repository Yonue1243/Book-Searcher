// Inicio.jsx
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

function Inicio() {
  const { selectedGenres, setSelectedGenres } = useContext(AppContext);

  const toggleGenre = (genre) => {
    setSelectedGenres((prevSelected) =>
      prevSelected.includes(genre)
        ? prevSelected.filter((g) => g !== genre)
        : [...prevSelected, genre]
    );
  };

  const generos = [
    'Fantasía', 'Ciencia Ficción', 'Misterio', 'Romance', 'Terror',
    'Aventura', 'Histórico', 'Biografía', 'Poesía', 'Drama',
    'Humor', 'Thriller', 'Distopía', 'Mitología', 'Crimen',
    'Suspenso', 'Autobiografía', 'Infantil', 'Juvenil', 'Clásicos',
  ];

  return (
    <div>
      <h1>Bienvenido!</h1>
      <h3>Selecciona tu género favorito</h3>
      <div className='generos'>
        {generos.map((genero, index) => (
          <div
            key={index}
            onClick={() => toggleGenre(genero)}
            className='generos-items'
            style={{
              backgroundColor: selectedGenres.includes(genero)
                ? '#d3f8d3'
                : 'white',
            }}
          >
            {genero}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Inicio;
