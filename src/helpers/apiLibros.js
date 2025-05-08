// Importar la clave de la API desde un archivo de configuración
const API_KEY = import.meta.env.VITE_GOOGLE_BOOKS_API_KEY; // Accede a la clave de la API desde Vite

export const generarURLGoogleBooks = (generos, emociones) => {
    if (!generos.length && !emociones.length) return '';
  
    const genreQuery = generos.map(g => `subject:${g}`).join(' ');
    const emocionesQuery = emociones.join(' '); // Como texto libre
  
    const query = [genreQuery, emocionesQuery].filter(Boolean).join(' ');
  
    return `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}&maxResults=20&printType=books&key=${API_KEY}`;
  };
  
  
export const buscarLibros = async (generos, emociones, rangoPaginas) => {
  const url = generarURLGoogleBooks(generos, emociones);
  if (!url) {
    return []; // Retornar vacío si no hay parámetros de búsqueda
  }

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Error en la respuesta de la API de Google Books');
    }

    const data = await response.json();
    console.log(data);

    const librosFiltrados = data.items?.filter((item) => {
      const paginas = item.volumeInfo?.pageCount || 0;

      switch (rangoPaginas) {
        case '150-300 Páginas':
          return paginas >= 150 && paginas <= 300;
        case '300-450 Páginas':
          return paginas > 300 && paginas <= 450;
        case '450-650 Páginas':
          return paginas > 450 && paginas <= 650;
        case '650+ Páginas':
          return paginas > 650;
        default:
          return true;
      }
    });

    return librosFiltrados || [];
  } catch (error) {
    console.error("Error al buscar libros:", error);
    return []; // Retorna un array vacío en caso de error
  }
};
