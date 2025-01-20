// utils.js
function formatearFecha(date) {
    // Función para formatear la fecha
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString('es-ES', options);
}

export { formatearFecha };
