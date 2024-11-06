function selectCategory(element) {
    // Verificar si la imagen ya está seleccionada
    if (element.classList.contains('selected')) {
        // Si ya está seleccionada, quita la clase "selected" para reducir la opacidad
        element.classList.remove('selected');
    } else {
        // Quitar la clase "selected" de todas las imágenes
        const icons = document.querySelectorAll('.category-icon');
        icons.forEach(icon => icon.classList.remove('selected'));

        // Añadir la clase "selected" a la imagen clicada
        element.classList.add('selected');
    }
}
