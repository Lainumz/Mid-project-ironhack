document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("myForm");
    const missingDataError = document.getElementById("missingData");
    const emailError = document.getElementById("wrongMail");
    const phoneError = document.getElementById("wrongPhone");
    const messageError = document.getElementById("wrongMsg");
    const successMessage = document.getElementById("allOk");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        // Ocultar todos los mensajes de error al intentar enviar el formulario nuevamente
        missingDataError.style.display = "none";
        emailError.style.display = "none";
        phoneError.style.display = "none";
        messageError.style.display = "none";
        successMessage.style.display = "none";

        // Validar los campos del formulario
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const message = document.getElementById("message").value.trim();

        let isValid = true;

        if (name === "" || email === "" || phone === "" || message === "") {
            missingDataError.style.display = "block";
            isValid = false;
        }

        if (!validateEmail(email)) {
            emailError.style.display = "block";
            isValid = false;
        }

        if (!validatePhone(phone)) {
            phoneError.style.display = "block";
            isValid = false;
        }

        if (message.length > 50) {
            messageError.style.display = "block";
            isValid = false;
        }

        // Si todos los campos son válidos, enviar el formulario
        if (isValid) {
            // Aquí puedes agregar código para enviar el formulario, por ejemplo:
            // form.submit();
            successMessage.style.display = "block";
            // Resetear el formulario después de enviarlo
            form.reset();
        }
    });

    // Función para validar el formato del correo electrónico
    function validateEmail(email) {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    // Función para validar el formato del número de teléfono
    function validatePhone(phone) {
        // Este es solo un ejemplo básico de validación, puedes ajustarlo según tus necesidades
        return phone.startsWith("+");
    }
});

