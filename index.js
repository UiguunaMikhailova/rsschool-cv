const slides = document.querySelectorAll('.project1')
const back = document.querySelector('.back')
const next = document.querySelector('.next')

const iconMenu = document.querySelector('.menu-icon')
const headerNav = document.querySelector('.nav_menu')
const menuLinks = document.querySelectorAll('.nav_list')

iconMenu.addEventListener("click", function () {
        iconMenu.classList.toggle('active')
        headerNav.classList.toggle('active')
})
menuLinks.forEach(menuLink => {
    menuLink.addEventListener("click", () => {
        if (iconMenu.classList.contains('active')) {
            iconMenu.classList.remove('active')
            headerNav.classList.remove('active')
        }
    });
})


let index = 0  
console.log(slides)

back.addEventListener('click',  prevSlide);
next.addEventListener('click',  nextSlide);

function activeSlide(i) {
    for (let slide of slides) {
        slide.classList.remove('active');
    }
    slides[i].classList.add('active');
};
function nextSlide() {
    if (index === slides.length - 1) {
        index = 0;
        activeSlide(index);
    } else {
        index++;
        activeSlide(index);
    }
};
function prevSlide() {
    if (index === 0) {
        index = slides.length - 1;
        activeSlide(index);
    } else {
        index--;
        activeSlide(index);
    }
};
