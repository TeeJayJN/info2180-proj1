/* Add your JavaScript to this file */

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".newsletter form");
    const message = document.querySelector(".newsletter .message");
    const emailin = document.querySelector(".form-group input")
    
    const emailptrn = new RegExp('^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$');

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const email = emailin.value.trim();

        if(!emailptrn.test(email)){
            message.innerHTML = "<p>Please enter a valid email address.</p>";
            return;
        }

        else {
            message.innerHTML = `<p>Thank you! Your email address '${email}' has been added to our mailing list!</p>`;
            return;
        }
    });
});