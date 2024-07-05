
 function iniciarSesion() {
    var correo = document.getElementById('email').value;
    var contrasena = document.getElementById('password').value;
    var errorMsg = document.getElementById('error-msg');

    errorMsg.textContent = '';

    if (!correo) {
        errorMsg.textContent = 'Por favor, ingrese su correo electrónico.';
        return;
    }

    if (!contrasena) {
        errorMsg.textContent = 'Por favor, ingrese su contraseña.';
        return;
    }
        
    if (correo === 'josemontero2415@gmail.com' && contrasena === 'Montero456') {
            alert('Inicio de sesión exitoso');
            // Redirigir a otra página o realizar alguna acción
    } else {
            errorMsg.textContent = 'Correo electrónico o contraseña incorrectos.';
    }
}
