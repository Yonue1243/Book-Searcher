// AppContext.jsx
import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [emocionesSeleccionadas, setEmocionesSeleccionadas] = useState([]);
  // puedes agregar más estados como autor favorito, tipo de historia, etc.

  return (
    <AppContext.Provider value={{
      selectedGenres, setSelectedGenres,
      emocionesSeleccionadas, setEmocionesSeleccionadas,
    }}>
      {children}
    </AppContext.Provider>
  );
}
