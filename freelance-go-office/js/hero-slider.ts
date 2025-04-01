const slider = document.getElementById("slider") as HTMLElement;
let index: number = 0;

/**
 * Move o carrossel para o próximo slide.
 *
 * A função incrementa o índice atual (`index`) e ajusta a posição do slider com base nele.
 * Caso o índice exceda o número total de slides disponíveis (2), ele será reiniciado para 0.
 *
 * @returns {void} Esta função não retorna nenhum valor.
 */
export function moveSlider(): void {
  index++;
  if (index > 2) {
    index = 0;
  }
  slider.style.transform = `translateX(-${index * 100}%)`;
}

/**
 * Inicia o movimento automático do carrossel.
 *
 * A cada 3000ms (3 segundos), a função `moveSlider` é chamada para transitar entre os slides.
 */
setInterval(moveSlider, 3000);
