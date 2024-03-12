document.addEventListener('DOMContentLoaded', () => {
  const slidesContainer = document.querySelector('.slides');
  const slides = document.querySelectorAll('.slide');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  const navDotsContainer = document.querySelector('.nav-dots');

  let currentIndex = 0;

  // Create navigation dots
  slides.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    dot.addEventListener('click', () => navigateToSlide(index));
    navDotsContainer.appendChild(dot);
  });

  const navDots = document.querySelectorAll('.dot');

  // Set initial active state
  navDots[currentIndex].classList.add('active');

  // Event listeners for buttons
  prevBtn.addEventListener('click', () => navigate('prev'));
  nextBtn.addEventListener('click', () => navigate('next'));

  // Auto-advance slides every 5 seconds
  setInterval(() => navigate('next'), 5000);

  function navigate(direction) {
    direction === 'next' ? currentIndex++ : currentIndex--;
    if (currentIndex < 0) currentIndex = slides.length - 1;
    if (currentIndex >= slides.length) currentIndex = 0;
    updateSlider();
  }

  function navigateToSlide(index) {
    currentIndex = index;
    updateSlider();
  }

  function updateSlider() {
    slidesContainer.style.transform = `translateX(${-currentIndex * 100}%)`;

    // Update navigation dots
    navDots.forEach((dot, index) => {
      dot.classList.remove('active');
      if (index === currentIndex) {
        dot.classList.add('active');
      }
    });
  }
});
