function validar() {
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const mensaje = document.getElementById("mensaje").value;

    // Expresiones Regulares
    const regexNombre = /^([A-Za-zÑñÁáÉéÍíÓóÚú]+['-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+)(\s+([A-Za-zÑñÁáÉéÍíÓóÚú]+['-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+([A-Za-zÑñÁáÉéÍíÓóÚú]{3,40}\s*)))*$/;
    const regexCorreo = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const regexMensaje = /^(?!(\d)\1+$)[\s\S]{10,250}$/;

    let nombreValid = regexNombre.test(nombre);
    let emailValid = regexCorreo.test(email);
    let mensajeValid = regexMensaje.test(mensaje);

    let errorMessages = [];

    // Validación de variables
    if (nombre.trim() === "") {
        errorMessages.push("El campo Nombre no puede estar vacío.");
    } else if (!nombreValid) {
        errorMessages.push("El nombre tiene que tener de 3 a 40 caracteres y solo debe contener letras y espacios.");
    }

    if (email.trim() === "") {
        errorMessages.push("El campo Correo Electrónico no puede estar vacío.");
    } else if (!emailValid) {
        errorMessages.push("El correo electrónico no es válido. Debe tener el formato correcto, por ejemplo: usuario@dominio.com");
    }

    if (mensaje.trim() === "") {
        errorMessages.push("El campo Comentarios no puede estar vacío.");
    } else if (!mensajeValid) {
        errorMessages.push("El mensaje debe ser de 10 a 250 caracteres y solo debe contener números y letras (no repetidos más de 4 veces), puede contener caracteres especiales.");
    }

    //Estilos
    const nombreElement = document.getElementById("nombre");
    const emailElement = document.getElementById("email");
    const mensajeElement = document.getElementById("mensaje");

    nombreElement.style.borderColor = nombreValid || nombre.trim() === "" ? "green" : "red";
    emailElement.style.borderColor = emailValid || email.trim() === "" ? "green" : "red";
    mensajeElement.style.borderColor = mensajeValid || mensaje.trim() === "" ? "green" : "red";

    // Mostrar mensajes de error o éxito
    if (errorMessages.length > 0) {
        Swal.fire({
            icon: 'error',
            title: 'Corrige los siguientes errores:',
            html: errorMessages.join("<br>"),
        });
        return false;
    } else {
        Swal.fire({
            icon: 'success',
            title: 'Tus datos serán enviados correctamente',
        });
        return true;
    }
}