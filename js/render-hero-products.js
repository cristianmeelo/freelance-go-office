import heroProducts from "/mock/hero-products.js";

export const renderHeroCarousel = (images) => {
  const carouselContainer = document.createElement("div");
  carouselContainer.classList.add("hero-carousel");

  const arrowLeft = document.createElement("button");
  arrowLeft.classList.add("carousel-arrow", "carousel-arrow-left");

  const arrowLeftIcon = document.createElement("img");
  arrowLeftIcon.src = "/assets/arrow-outline.svg";
  arrowLeftIcon.alt = "Seta para esquerda";
  arrowLeftIcon.style.transform = "rotate(180deg)";
  arrowLeft.appendChild(arrowLeftIcon);

  const arrowRight = document.createElement("button");
  arrowRight.classList.add("carousel-arrow", "carousel-arrow-right");

  const arrowRightIcon = document.createElement("img");
  arrowRightIcon.src = "/assets/arrow-outline.svg";
  arrowRightIcon.alt = "Seta para direita";
  arrowRightIcon.style.transform = "rotate(0deg)";
  arrowRight.appendChild(arrowRightIcon);

  const previewsContainer = document.createElement("div");
  previewsContainer.classList.add("hero-carousel-previews");
  let startIndex = 0;

  const maxVisibleImages = window.innerWidth >= 1440 ? 6 : window.innerWidth >= 1024 ? 6 : window.innerWidth >= 768 ? 5 : window.innerWidth >= 425 ? 3 : 2;

  const updateCarousel = () => {
    previewsContainer.innerHTML = "";

    const visibleImages = images.slice(startIndex, startIndex + maxVisibleImages);

    visibleImages.forEach((image, index) => {
      const preview = document.createElement("img");
      preview.src = image;
      preview.alt = `Hero Image ${index + 1}`;
      preview.classList.add("hero-carousel-image");

      previewsContainer.appendChild(preview);
    });

    arrowLeft.disabled = startIndex === 0;
    arrowRight.disabled = startIndex + maxVisibleImages >= images.length;
  };

  arrowLeft.addEventListener("click", () => {
    if (startIndex > 0) {
      startIndex -= 1;
      updateCarousel();
    }
  });

  arrowRight.addEventListener("click", () => {
    if (startIndex + maxVisibleImages < images.length) {
      startIndex += 1;
      updateCarousel();
    }
  });

  updateCarousel();

  carouselContainer.appendChild(arrowLeft);
  carouselContainer.appendChild(previewsContainer);
  carouselContainer.appendChild(arrowRight);

  return carouselContainer;
};

document.addEventListener("DOMContentLoaded", () => {
  const heroCarouselImages = heroProducts;
  const heroCarousel = renderHeroCarousel(heroCarouselImages);
  document.getElementById("hero-carousel").appendChild(heroCarousel);

  window.addEventListener("resize", () => {
    document.getElementById("hero-carousel").innerHTML = "";
    const updatedHeroCarousel = renderHeroCarousel(heroCarouselImages);
    document.getElementById("hero-carousel").appendChild(updatedHeroCarousel);
  });
});
