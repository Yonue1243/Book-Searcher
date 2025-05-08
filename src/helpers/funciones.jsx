// funciones.jsx
import React from 'react';
import Inicio from '../components/inicio.jsx';
import Emociones from '../components/Emociones.jsx';
import Tamanio from '../components/Tamanio.jsx';
import LibrosRecomendados from '../components/LibrosRecomendados.jsx';

const vistas = {
  inicio: () => <Inicio />,
  emociones: () => <Emociones />,
  tamanio: () => <Tamanio />, // crea si no la tienes
  libros: () => <LibrosRecomendados />,    // idem
  
};


export function cambiarPantalla(setContent, vista) {
  const renderVista = vistas[vista.toLowerCase()] || vistas['inicio'];
  setContent(renderVista());
}
