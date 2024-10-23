document.querySelectorAll('.product a').forEach((link, index) => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Evita el comportamiento por defecto del enlace
        const specsSection = document.querySelector('.specifications');
        
        // Cambia el título y la descripción según el producto (opcional)
        const titles = ['Cubierta para Auto', 'Cubierta para Camioneta', 'Cubierta para Moto'];
        const descriptions = [
            'Alta durabilidad y rendimiento en la carretera.',
            'Excelente tracción y resistencia en terrenos difíciles.',
            'Diseño especial para máxima seguridad y confort.'
        ];
        const images = [
            'https://via.placeholder.com/400x200', // URL de la imagen para auto
            'https://via.placeholder.com/400x200', // URL de la imagen para camioneta
            'https://via.placeholder.com/400x200'  // URL de la imagen para moto
        ];

        // Mostrar la sección de especificaciones
        specsSection.classList.add('active');
        
        // Actualizar el contenido de especificaciones
        document.getElementById('specs-title').textContent = titles[index];
        document.getElementById('specs-description').textContent = descriptions[index];
        document.getElementById('specs-image').src = images[index];

        // Desplazamiento suave a la sección
        specsSection.scrollIntoView({ behavior: 'smooth' });
    });
});

