/*  MENU ANIMATION */
const menu = document.querySelector('.menu')
const close = document.querySelector('.close')
const nav = document.querySelector('nav')

menu.addEventListener('click', () => {
    nav.classList.add('open-nav')
})

close.addEventListener('click', () => {
    nav.classList.remove('open-nav')
})

/*  SCROLL ANIMATION */
window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.reveal');

    for(var i = 0; i < reveals.length; i++) {

        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 150;

        if(revealTop < windowHeight - revealPoint){
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }
    }
}
