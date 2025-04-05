function renderHeader() {
  const headerHTML = `
<header class="header">
  <input type="checkbox" id="menu-toggle" class="header__toggle-checkbox" />
  <label for="menu-toggle" class="header__toggle-label">
    <div class="header__icon header__icon--hamburger"></div>
  </label>

  <ul class="header__menu">
    <!-- Menu Principal (criado dinamicamente via JavaScript) -->
    <li class="header__menu-item header__menu-item--main" style="display: none;">
    
    
   <svg class="header__arrow header__arrow--left" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 7L15 12L10 17" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>

    Menu Principal</li>

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
function renderHeader() {
  const headerHTML = `
<header class="header">
  <input type="checkbox" id="menu-toggle" class="header__toggle-checkbox" />
  <label for="menu-toggle" class="header__toggle-label">
    <div class="header__icon header__icon--hamburger"></div>
  </label>

  <ul class="header__menu">
    <!-- Menu Principal (criado dinamicamente via JavaScript) -->
    <li class="header__menu-item header__menu-item--main" style="display: none;">
    
    
   <svg class="header__arrow header__arrow--left" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 7L15 12L10 17" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>

    Menu Principal</li>

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

  // Elementos principais
  const menuToggle = document.getElementById("menu-toggle");
  const headerMenu = document.querySelector(".header__menu");
  const menuIcon = document.querySelector(".header__icon");

  // Controle do estado do menu hamburguer
  menuToggle.addEventListener("change", () => {
    if (menuToggle.checked) {
      // Abre o menu
      headerMenu.classList.add("header__menu--open");
      menuIcon.classList.add("header__icon--close");
      menuIcon.classList.remove("header__icon--hamburger");
    } else {
      // Fecha o menu
      headerMenu.classList.remove("header__menu--open");
      menuIcon.classList.remove("header__icon--close");
      menuIcon.classList.add("header__icon--hamburger");
    }
  });

  // Controle de "Produtos" e "Menu Principal"
  const productsLabel = document.querySelector(".header__menu-item--products .header__submenu-label");
  const productsSubmenu = document.querySelector(".header__menu-item--products .header__submenu");
  const arrowDown = document.querySelector(".header__arrow--down"); // A seta ao lado de "Produtos"
  const menuPrincipal = document.querySelector(".header__menu-item--main");
  const otherMenuItems = document.querySelectorAll(".header__menu-item:not(.header__menu-item--products):not(.header__menu-item--main)");

  // Clique em Produtos
  let isProductsOpen = false; // Variável para rastrear o estado do submenu de Produtos

  productsLabel.addEventListener("click", () => {
    if (!isProductsOpen) {
      // Abrir o submenu de Produtos apenas se ainda não estiver aberto
      productsSubmenu.classList.add("header__submenu--open");
      isProductsOpen = true;

      // Esconde a seta ao lado de Produtos
      arrowDown.style.display = "none";

      // Exibe "Menu Principal"
      menuPrincipal.style.display = "flex";

      // Esconde outros itens do menu
      otherMenuItems.forEach((item) => {
        item.style.display = "none";
      });
    }
  });

  // Clique em "Menu Principal"
  menuPrincipal.addEventListener("click", () => {
    // Fecha o submenu de Produtos
    productsSubmenu.classList.remove("header__submenu--open");
    isProductsOpen = false;

    // Reexibe a seta ao lado de Produtos
    arrowDown.style.display = "inline";

    // Esconde "Menu Principal"
    menuPrincipal.style.display = "none";

    // Reexibe outros itens do menu
    otherMenuItems.forEach((item) => {
      item.style.display = "flex";
    });
  });
});
