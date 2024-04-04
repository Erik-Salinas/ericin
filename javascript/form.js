
function mostrarValor(inputId, spanId) {
    let input = document.getElementById(inputId);
    let span = document.getElementById(spanId);

    input.addEventListener('input', function () {
        span.textContent = input.value;

        
        span.classList.add("prueba");
    });
}
mostrarValor("horas", "select__horas");
mostrarValor("dias", "select__dias");
