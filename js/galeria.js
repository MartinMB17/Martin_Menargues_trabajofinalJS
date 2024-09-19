
$(document).ready(function() {
    // Lista de imágenes
    var images = ['images/foto1.jpeg', 'images/foto2.jpg', 'images/foto3.jpg', 'images/foto4.jpg'];

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
