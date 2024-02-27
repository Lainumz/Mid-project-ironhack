document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("myForm");
    const missingDataError = document.getElementById("missingData");
    const emailError = document.getElementById("wrongMail");
    const phoneError = document.getElementById("wrongPhone");
    const messageError = document.getElementById("wrongMsg");
    const successMessage = document.getElementById("allOk");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        
        missingDataError.style.display = "none";
        emailError.style.display = "none";
        phoneError.style.display = "none";
        messageError.style.display = "none";
        successMessage.style.display = "none";

        
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

        
        if (isValid) {
            
          
            successMessage.style.display = "block";
            
            form.reset();
        }
    });

    
    function validateEmail(email) {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

   
    function validatePhone(phone) {
        
        return phone.startsWith("+");
    }
});

