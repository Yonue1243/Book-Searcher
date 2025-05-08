// AppContext.jsx
import React, { createContext, useState } from 'react';

export const AppContext = createContext();

// AppContext.jsx
export function AppProvider({ children }) {
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [emocionesSeleccionadas, setEmocionesSeleccionadas] = useState([]);
  const [tamanioSeleccionado, setTamanioSeleccionado] = useState('');

  return (
    <AppContext.Provider value={{
      selectedGenres, setSelectedGenres,
      emocionesSeleccionadas, setEmocionesSeleccionadas,
      tamanioSeleccionado, setTamanioSeleccionado,
    }}>
      {children}
    </AppContext.Provider>
  );
}
