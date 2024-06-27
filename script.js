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