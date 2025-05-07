// funciones.jsx
import React from 'react';
import Inicio from '../components/inicio.jsx';
import Emociones from '../components/Emociones.jsx';

const vistas = {
  inicio: () => <Inicio />,
  emociones: () => <Emociones />,
  otravista: () => <OtraVista />, // crea si no la tienes
  final: () => <FinalVista />,    // idem
};


export function cambiarPantalla(setContent, vista) {
  const renderVista = vistas[vista.toLowerCase()] || vistas['inicio'];
  setContent(renderVista());
}
