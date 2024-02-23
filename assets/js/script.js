// Tooltip enabling
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


// Uso Js-1 Smooth Scroll

$(document).ready(function () {
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                window.location.hash = hash;
            });
        }
    });
});



// Uso Js-2 Esconder cartas

$(document).ready(function () {
    $(".card-title").click(function () {
        $(this).next(".card-text").toggle();
    });
});


// Uso Js-3 Mensaje de Alerta

$("#boton").on('click', function () {
    alert("Tu Mensaje fue enviado correctamente");
});
