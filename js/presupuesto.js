
const producto = document.getElementById('producto');
const plazo = document.getElementById('plazo');
const extras = document.querySelectorAll('input[name="extras"]');
const presupuesto = document.getElementById('presupuesto');
const formPresupuesto = document.getElementById('formPresupuesto');

function calcularPresupuesto() {
    let total = parseFloat(producto.value) || 0;

    // Aplicar descuento por plazo (por cada mes se reduce un 2% hasta un máximo del 20%)
    let descuento = Math.min(plazo.value * 2, 20);
    total -= (total * (descuento / 100));

    // Añadir el costo de los extras seleccionados
    extras.forEach(extra => {
        if (extra.checked) {
            total += parseFloat(extra.value);
        }
    });

    // Mostrar el presupuesto final en el input
    presupuesto.value = `€${total.toFixed(2)}`; 

}

// Escuchar cambios en producto, plazo y extras
producto.addEventListener('change', calcularPresupuesto);
plazo.addEventListener('input', calcularPresupuesto);
extras.forEach(extra => {
    extra.addEventListener('change', calcularPresupuesto);
});

// Calcular el presupuesto inicial al cargar la página
window.onload = calcularPresupuesto;

// Manejar el envío del formulario
formPresupuesto.addEventListener('submit', function(event) {
    event.preventDefault(); 
    alert('Presupuesto total: ' + presupuesto.value); 
});

// Manejar el restablecimiento del formulario
formPresupuesto.addEventListener('reset', function() {
    presupuesto.value = ''; 
});
