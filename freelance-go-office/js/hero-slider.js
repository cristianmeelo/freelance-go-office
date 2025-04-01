const slider = document.querySelector(".slider");
let index = 0;

export function moveSlider() {
  index++;
  if (index > 2) {
    index = 0;
  }
  slider.style.transform = `translateX(-${index * 100}%)`;
}

setInterval(moveSlider, 3000);
