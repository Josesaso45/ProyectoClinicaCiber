// Ejemplo básico para realizar un pago simulado
const paymentLink = document.querySelector('.payment-link');

paymentLink.addEventListener('click', (e) => {
    e.preventDefault();
    
    // Aquí puedes agregar lógica para procesar el pago
    alert('Redirigiendo a nuestro portal de pagos seguro...');
    
    // Simulación de redirección (reemplaza con tu lógica real)
    window.location.href = 'https://tuportaldepagos.com';
});
