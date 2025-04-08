export const renderFooter = () => {
  const footerHTML = `
    <footer class="footer">
      <div class="footer__logo"></div>
      <div class="footer__group">
        <div class="footer__links">
          <a href="">home</a>
          <a href="">marca</a>
          <a href="">canais de venda</a>
        </div>
        <div class="footer__container">
          <div class="footer__icon"></div>
          
          <a class="footer__info" href="mailto:sac@brsupply.com.br?subject=Atendimento%20ao%20Cliente&body=Olá, estou entrando em contato para...">sac@brsupply.com.br</a>
        </div>
      </div>
    </footer>
  `;

  const footerContainer = document.getElementById("footer");
  footerContainer.innerHTML = footerHTML;
};

document.addEventListener("DOMContentLoaded", renderFooter);
