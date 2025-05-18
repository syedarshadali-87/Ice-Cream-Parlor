// Mobile Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Animation on Scroll
const animatedSections = document.querySelectorAll('.animate');

function checkAnimation() {
  animatedSections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const triggerPoint = window.innerHeight / 1.2;

    if(sectionTop < triggerPoint) {
      section.classList.add('active');
    }
  });
}

window.addEventListener('scroll', checkAnimation);
window.addEventListener('load', checkAnimation);


// Preloader Hide
window.addEventListener('load', function(){
  const preloader = document.getElementById('preloader');
  preloader.style.display = 'none';
});


// Newsletter Form (Dummy)
document.getElementById('newsletter-form').addEventListener('submit', function(e){
  e.preventDefault();
  alert('Thank you for subscribing!');
});

// Back to Top Button
let backToTopBtn = document.getElementById("backToTopBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
