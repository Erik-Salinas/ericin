window.addEventListener('scroll', function () {
    let whatsappIcon = document.getElementById('whatsapp-icon');
    if (window.scrollY > 100) {
        whatsappIcon.classList.add('show');
    } else {
        whatsappIcon.classList.remove('show');
    }
});