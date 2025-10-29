document.addEventListener('DOMContentLoaded', () => {
    // 1. Verificar si estamos en la página donde existe el buscador de estados
    const buscador = document.getElementById('buscador');
    
    if (!buscador) {
        // Si el elemento 'buscador' no existe (ej. estamos en index.html), salimos del script.
        return; 
    }

    // 2. Elementos a filtrar
    // Seleccionamos las SECCIONES que contienen las tarjetas de cada estado
    const seccionesEstados = document.querySelectorAll('.estado-seccion'); 
    // Seleccionamos los títulos H2 de los estados
    const titulosEstados = document.querySelectorAll('main h2');

    // 3. Agregar el evento de escucha al buscador
    buscador.addEventListener('keyup', () => {
        const textoBusqueda = buscador.value.toLowerCase().trim();

        // Iterar sobre cada sección de estado
        seccionesEstados.forEach(seccion => {
            // El nombre del estado se obtiene del atributo data-estado
            const nombreEstado = seccion.getAttribute('data-estado').toLowerCase();
            
            // Comprobar si la búsqueda está contenida en el nombre del estado
            const coincide = nombreEstado.includes(textoBusqueda);
            
            // Mostrar u ocultar la SECCIÓN COMPLETA
            if (coincide) {
                // Usar el valor que mejor se adapte a tu CSS (grid, flex o block)
                seccion.style.display = 'grid'; 
            } else {
                seccion.style.display = 'none';
            }
        });
        
        // Iterar sobre los títulos para ocultarlos o mostrarlos
        titulosEstados.forEach(tituloH2 => {
            const nombreEstadoH2 = tituloH2.textContent.toLowerCase().trim();
            const coincide = nombreEstadoH2.includes(textoBusqueda);
            
            if (coincide) {
                tituloH2.style.display = 'block'; 
            } else {
                tituloH2.style.display = 'none';
            }
        });
    });
});