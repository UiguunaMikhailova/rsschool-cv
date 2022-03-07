const slides = document.querySelectorAll('.project1')
const back = document.querySelector('.back')
const next = document.querySelector('.next')

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
