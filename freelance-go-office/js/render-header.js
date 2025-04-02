function renderHeader() {
  const headerHTML = `<header class="header">
      <input type="checkbox" id="checkbox-hamburger" class="header__checkbox" />
      <label for="checkbox-hamburger">
        <div class="header__hamburger"></div>
      </label>

      <!-- !! ok acima -->
      <ul class="header__menu">
        <li id="principal-menu" class="header__menu-item header__menu-item--first">
          <svg class="left-arrow" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 7L15 12L10 17" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
          <label class="header__menu-item-label">Menu Principal</label>
        </li>
        <li id="products-menu" class="header__menu-item header__menu-item--title">
          <input type="checkbox" id="checkbox-products" class="submenu_toggle" />
          <label for="checkbox-products" class="list-menu__submenu">
            Produtos
            <svg class="arrow" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 7L15 12L10 17" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </label>

          <ul id="categories-menu"></ul>
        </li>
        <!-- <li class="list-menu__title__another"><a href="./pages/brand.html" class="list-menu__link">Marca</a></li> -->
        <!-- <li class="list-menu__title__another"><a href="./pages/sales-channel.html" class="list-menu__link">Canais de Venda</a></li> -->
        <li class="list-menu__title__another"><a href="./pages/catalog.html" class="list-menu__link">Acesse o Catálogo</a></li>
      </ul>

      <div class="header__logo"></div>
    </header>`;
  document.getElementById("header").innerHTML = headerHTML;
}

function handleScroll() {
  const header = document.querySelector(".header");

  if (window.scrollY > 0) {
    header.classList.add("apply__bg__color"); 
  } else {
    header.classList.remove("apply__bg__color");
  }
}

window.addEventListener("scroll", handleScroll);


document.addEventListener("DOMContentLoaded", renderHeader);
