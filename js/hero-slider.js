function createCarousel(sliderId, indicatorsId) {
  let currentIndex = 0;
  const slider = document.querySelector(`#${sliderId}`);
  const indicatorsContainer = document.querySelector(`#${indicatorsId}`);

  if (!slider || !indicatorsContainer) {
    return;
  }

  const slides = slider.querySelectorAll(".hero__slide");
  const totalSlides = slides.length;

  indicatorsContainer.innerHTML = "";

  function showSlide(index) {
    currentIndex = index;
    slider.style.transform = `translateX(-${index * 100}%)`;

    Array.from(indicatorsContainer.children).forEach((indicator, idx) => {
      indicator.src = idx === index ? "assets/circle-filled.svg" : "assets/circle-outline.svg";
    });
  }

  slides.forEach((_, index) => {
    const indicator = document.createElement("img");
    indicator.src = index === 0 ? "assets/circle-filled.svg" : "assets/circle-outline.svg";
    indicator.alt = `Indicador ${index + 1}`;
    indicator.style.cursor = "pointer";

    indicator.addEventListener("click", () => showSlide(index));

    indicatorsContainer.appendChild(indicator);
  });

  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
  }

  setInterval(nextSlide, 3000);
}

createCarousel("slider-mobile", "indicators-mobile");
createCarousel("slider-desktop", "indicators-desktop");
