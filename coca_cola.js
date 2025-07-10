document.addEventListener("DOMContentLoaded", () => {
    // Efecto máquina de escribir para el h1
    const h1 = document.querySelector("section h1");
    if (h1) {
        const texto = h1.textContent;
        h1.textContent = "";
        let i = 0;
        const velocidad = 50; // milisegundos entre letras

        function escribir() {
            if (i < texto.length) {
                h1.textContent += texto.charAt(i);
                i++;
                setTimeout(escribir, velocidad);
            }
        }
        escribir();
    }

    const button = document.getElementById("miBoton");
    if (button) {
        button.addEventListener("click", () => {
            window.location.href = "promociones.html";
        });
    }

    const section = document.getElementById("miSeccion");
    if (section) {
        section.addEventListener("mouseover", () => {
            section.style.backgroundColor = "#f4f4f4";
        });

        section.addEventListener("mouseout", () => {
            section.style.backgroundColor = "";
        });
    }

    const form = document.getElementById("subscriptionForm");
    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada
            const email = document.getElementById("email").value;
            if (validateEmail(email)) {
                document.getElementById("message").textContent = "¡Gracias por suscribirte!";
            } else {
                document.getElementById("message").textContent = "Por favor, introduce un correo electrónico válido.";
            }
        });
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});
