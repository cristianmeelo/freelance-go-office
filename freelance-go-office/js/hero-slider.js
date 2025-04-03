function createCarousel(sliderId) {
  let currentIndex = 0;
  const slider = document.querySelector(`#${sliderId}`);
  const slides = slider.querySelectorAll(".hero__slide");
  const totalSlides = slides.length;

  function showSlide(index) {
    slider.style.transform = `translateX(-${index * 100}%)`;
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
  }

  setInterval(nextSlide, 3000);
}

createCarousel("slider-mobile");
createCarousel("slider-desktop");
