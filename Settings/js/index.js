// CAROUSEL CODE.
const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function showNextSlide() {
  slides[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % slides.length;
  slides[currentIndex].classList.add('active');
}

// Cambiar imagen cada 2 segundos
setInterval(showNextSlide, 2000);