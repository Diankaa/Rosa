//menu
const selectEl = function (el) {
    return document.querySelector(el);
}

let menuToggle = selectEl('.nav-toggle');
let body = selectEl('body');

menuToggle.addEventListener('click', function () {
    body.classList.toggle('open');
})

// animation
window.sr = ScrollReveal();
sr.reveal('.animate-left', {
    origin: 'left',
    duration: 1000,
    distance: '25rem',
    delay: 300
});

sr.reveal('.animate-right', {
    origin: 'right',
    duration: 1000,
    distance: '25rem',
    delay: 600
});

sr.reveal('.animate-top', {
    origin: 'top',
    duration: 1000,
    distance: '25rem',
    delay: 300
});

sr.reveal('.animate-bottom', {
    origin: 'bottom',
    duration: 1000,
    distance: '25rem',
    delay: 300
});

//loader
const loader = document.querySelector('#loader');
const wrapper = document.getElementById('wrapper');
const load = function () {
    document.addEventListener("DOMContentLoaded", function () {
        setTimeout(function () {
            loader.classList.remove('show');
            wrapper.classList.remove('hidden');
        }, 2000)
    });
};
load();

// deferred loading
[].forEach.call(document.querySelectorAll('img[data-src]'), function (img) {
    img.setAttribute('src', img.getAttribute('data-src'));
    img.onload = function () {
        img.removeAttribute('data-src');
    };
});