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
            "https://neumen.ar/wp-content/uploads/2022/06/formula-energy-img-3.jpg", // URL de la imagen para auto
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

// Selecciona todos los botones de "Ver más" en los productos
const productButtons = document.querySelectorAll('.product button');

// Agrega un evento a cada botón
productButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        // Prevenir la acción por defecto del enlace
        event.preventDefault();
        
        // Encuentra el producto correspondiente
        const productDiv = event.target.closest('.product');
        
        // Obtiene la información del producto
        const productImage = productDiv.querySelector('img').src;
        const productTitle = productDiv.querySelector('h3').textContent;
        const productDescription = productDiv.querySelector('p').textContent;

        // Actualiza la sección de especificaciones
        document.getElementById('specs-image').src = productImage;
        document.getElementById('specs-title').textContent = productTitle;
        document.getElementById('specs-description').textContent = productDescription;

        // Desplaza la vista hacia la sección de especificaciones
        document.querySelector('#especificaciones').scrollIntoView({ behavior: 'smooth' });
    });
});
