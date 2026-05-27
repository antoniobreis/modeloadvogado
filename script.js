document.addEventListener('DOMContentLoaded', () => {

    // Ano no footer
    const anoAtual = document.getElementById('ano-atual');
    if (anoAtual) {
        anoAtual.textContent = new Date().getFullYear();
    }

    // Sombra no header ao rolar
    const header = document.getElementById('header');
    if (header) {
        window.addEventListener('scroll', () => {
            header.classList.toggle('scrolled', window.scrollY > 20);
        });
    }

    // Fade-in ao entrar na viewport
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                setTimeout(() => entry.target.classList.add('visible'), i * 130);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

});