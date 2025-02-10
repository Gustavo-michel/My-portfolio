window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.fade-in');
    
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < (windowHeight * 1.00)) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    });
});

let backToTopBtn = document.getElementById("backToTopBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
}

backToTopBtn.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });}

document.addEventListener('DOMContentLoaded', () => {
changeLanguage('pt');
});
    function changeLanguage(lang) {
const elements = document.querySelectorAll('[data-lang]');
elements.forEach(element => {
    element.innerHTML = element.getAttribute(`data-lang-${lang}`);
});
}
const toggleThemeButton = document.getElementById('toggleTheme');
const body = document.body;

// Verificar o tema atual no carregamento da página
const currentTheme = localStorage.getItem('theme') || 'dark';
body.classList.add(`${currentTheme}-theme`);

// Alterar o tema ao clicar no botão
toggleThemeButton.addEventListener('click', () => {
    if (body.classList.contains('dark-theme')) {
        body.classList.replace('dark-theme', 'light-theme');
        localStorage.setItem('theme', 'light');
    } else {
        body.classList.replace('light-theme', 'dark-theme');
        localStorage.setItem('theme', 'dark');
    }
});

function scrollToSection() {
    document.querySelector("#footer").scrollIntoView({ behavior: "smooth" });
}
