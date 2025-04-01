const track = document.querySelector(".carousel__track");
const items = document.querySelectorAll(".carousel__item");
const prevButton = document.querySelector(".carousel__arrow--left");
const nextButton = document.querySelector(".carousel__arrow--right");

let currentIndex = 0;
const totalItems = items.length - 2;

export function moveToSlide(index) {
  const itemStyle = window.getComputedStyle(items[0]);
  const itemMargin = parseInt(itemStyle.marginRight) + parseInt(itemStyle.marginLeft);
  const itemWidth = items[0].offsetWidth + itemMargin;
  const maxOffset = (totalItems - 1) * itemWidth;
  const offset = Math.min(index * itemWidth, maxOffset);
  track.style.transition = "transform 0.3s ease-in-out";
  track.style.transform = `translateX(-${offset}px)`;
  currentIndex = index;
}

function handleInfiniteScroll() {
  const itemStyle = window.getComputedStyle(items[0]);
  const itemMargin = parseInt(itemStyle.marginRight) + parseInt(itemStyle.marginLeft);
  const itemWidth = items[0].offsetWidth + itemMargin;
  if (currentIndex === totalItems) {
    track.style.transition = "none";
    track.style.transform = "translateX(0px)";
    track.style.transition = "transform 0.3s ease-in-out";
    currentIndex = 0;
  } else if (currentIndex < 0) {
    track.style.transition = "none";
    track.style.transform = `translateX(-${(totalItems - 1) * itemWidth}px)`;
    track.style.transition = "transform 0.3s ease-in-out";
    currentIndex = totalItems - 1;
  }
}

prevButton.addEventListener("click", () => {
  if (currentIndex > 0 || currentIndex === 0) {
    currentIndex -= 1;
    moveToSlide(currentIndex);
  } else {
    handleInfiniteScroll();
  }
});

nextButton.addEventListener("click", () => {
  if (currentIndex < totalItems - 1 || currentIndex === totalItems - 1) {
    currentIndex += 1;
    moveToSlide(currentIndex);
  } else {
    handleInfiniteScroll();
  }
});

track.addEventListener("transitionend", handleInfiniteScroll);

moveToSlide(currentIndex);
