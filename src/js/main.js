window.addEventListener('DOMContentLoaded', function () {
  animationOnScroll();

  function animationOnScroll() {
    ScrollReveal().reveal('.sr-fade', {
      delay: 100,
      duration: 600,
      distance: '20px',
      origin: 'bottom',
      easing: 'ease-in-out'
    });
  }
})
