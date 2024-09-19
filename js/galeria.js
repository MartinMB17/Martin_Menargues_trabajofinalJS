
$(document).ready(function() {
    // Lista de imágenes
    var images = ['/Martín_Menargues_trabajofinalJS/images/foto1.jpeg', '/Martín_Menargues_trabajofinalJS/images/foto2.jpg', '/Martín_Menargues_trabajofinalJS/images/foto3.jpg', '/Martín_Menargues_trabajofinalJS/images/foto4.jpg'];

    var currentIndex = 0;

    function updateImage() {
        $('#currentImage').attr('src', images[currentIndex]);
    }

    $('#prevBtn').on('click', function() {
        currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
        updateImage();
    });

    $('#nextBtn').on('click', function() {
        currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
        updateImage();
    });
});
