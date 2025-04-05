function renderHeader() {
  const headerHTML = `
<header class="header">
  <input type="checkbox" id="menu-toggle" class="header__toggle-checkbox" />
  <label for="menu-toggle" class="header__toggle-label">
    <div class="header__icon header__icon--hamburger"></div>
  </label>

  <ul class="header__menu">
    <!-- Menu Principal (criado dinamicamente via JavaScript) -->
    <li class="header__menu-item header__menu-item--main" style="display: none;">Menu Principal</li>

    <!-- Produtos com Submenu -->
    <li class="header__menu-item header__menu-item--products">
      <label class="header__submenu-label">
        Produtos
        <svg class="header__arrow header__arrow--down" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 7L15 12L10 17" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
      </label>
      <ul class="header__submenu">
        <li class="header__submenu-item">Categoria 1</li>
        <li class="header__submenu-item">Categoria 2</li>
      </ul>
    </li>

    <!-- Marca sem Submenu -->
    <li class="header__menu-item header__menu-item--brand">
      <a href="./pages/brand.html" class="header__menu-link">Marca</a>
    </li>

    <!-- Canais de Venda sem Submenu -->
    <li class="header__menu-item header__menu-item--sales-channels">
      <a href="./pages/sales.html" class="header__menu-link">Canais de Venda</a>
    </li>

    <!-- Acesso ao Catálogo sem Submenu -->
    <li class="header__menu-item header__menu-item--catalog">
      <a href="./pages/catalog.html" class="header__menu-link">Acesse o Catálogo</a>
    </li>
  </ul>

  <div class="header__logo"></div>
</header>



`;
  document.getElementById("header").innerHTML = headerHTML;
}

function handleHeaderTransparency() {
  const header = document.querySelector(".header");

  const isHomePage = window.location.pathname.endsWith("index.html") || window.location.pathname === "/";

  if (window.scrollY === 0 && isHomePage) {
    header.classList.add("apply__transparency");
  } else {
    header.classList.remove("apply__transparency");
  }
}

window.addEventListener("scroll", handleHeaderTransparency);

document.addEventListener("DOMContentLoaded", () => {
  renderHeader();
  handleHeaderTransparency();

  const menuToggle = document.getElementById("menu-toggle");
  const headerMenu = document.querySelector(".header__menu");
  const menuIcon = document.querySelector(".header__icon");

  menuToggle.addEventListener("change", () => {
    if (menuToggle.checked) {
      headerMenu.classList.add("header__menu--open");
      menuIcon.classList.add("header__icon--close");
      menuIcon.classList.remove("header__icon--hamburger");
    } else {
      headerMenu.classList.remove("header__menu--open");
      menuIcon.classList.remove("header__icon--close");
      menuIcon.classList.add("header__icon--hamburger");
    }
  });
});
