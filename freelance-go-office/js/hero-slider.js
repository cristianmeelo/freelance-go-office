const slider = document.getElementById("slider");
let index = 0;

export function moveSlider() {
  index++;
  if (index >= slider.children.length) {
    // Garante que não exceda o número de slides
    index = 0;
  }
  slider.style.transform = `translateX(-${index * 100}%)`;
}

// Define o intervalo para alternar os slides automaticamente
setInterval(moveSlider, 3000);
  