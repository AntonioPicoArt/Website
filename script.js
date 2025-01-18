document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('nav');

  hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
  });
});

// Smooth scroll with offset to prevent cutting off content
document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    // Scroll to the section with a slight offset for the sticky navbar
    window.scrollTo({
      top: targetSection.offsetTop - 70, // Offset height of the navbar
      behavior: 'smooth'
    });
  });
});

let currentSlideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? 'block' : 'none';
  });
}

function nextSlide() {
  currentSlideIndex = (currentSlideIndex + 1) % slides.length;
  showSlide(currentSlideIndex);
}

showSlide(currentSlideIndex);
setInterval(nextSlide, 3000); // Change slide every 3 seconds