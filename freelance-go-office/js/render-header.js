function renderHeader() {
  const headerHTML = `
<header class="header">
  <input type="checkbox" id="menu-toggle" class="header__toggle-checkbox" />
  <label for="menu-toggle" class="header__toggle-label">
    <div class="header__icon header__icon--hamburger"></div>
  </label>

  <ul class="header__menu">
    <!-- Menu Principal -->
    <li class="header__menu-item header__menu-item--main" style="display: none;">
      <svg class="header__arrow header__arrow--left" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 7L15 12L10 17" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
      </svg>
      Menu Principal
    </li>

    <!-- Produtos com Submenu -->
    <li class="header__menu-item header__menu-item--products">
      <label class="header__submenu-label">
        Produtos
        <svg class="header__arrow header__arrow--down" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 7L15 12L10 17" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
      </label>
      <ul class="header__submenu header__submenu--products">
        <!-- Categoria 1 -->
        <li class="header__submenu-item">
          <label class="header__submenu-item-label">
            Categoria 1
            <svg class="header__arrow header__arrow--right" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 7L15 12L10 17" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </label>
          <ul class="header__sub-submenu">
            <li class="header__sub-submenu-item">Subcategoria 1.1</li>
            <li class="header__sub-submenu-item">Subcategoria 1.2</li>
          </ul>
        </li>

        <!-- Categoria 2 -->
        <li class="header__submenu-item">
          <label class="header__submenu-item-label">
            Categoria 2
            <svg class="header__arrow header__arrow--right" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 7L15 12L10 17" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </label>
          <ul class="header__sub-submenu">
            <li class="header__sub-submenu-item">Subcategoria 2.1</li>
            <li class="header__sub-submenu-item">Subcategoria 2.2</li>
          </ul>
        </li>
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
  if (menuToggle && headerMenu && menuIcon) {
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
  } else {
    console.error("Elementos do menu hamburguer não encontrados. Verifique o HTML.");
  }

  // Controle de "Produtos" e "Menu Principal"
  const productsLabel = document.querySelector(".header__menu-item--products .header__submenu-label");
  const productsSubmenu = document.querySelector(".header__menu-item--products .header__submenu");
  const menuPrincipal = document.querySelector(".header__menu-item--main");
  const otherMenuItems = document.querySelectorAll(".header__menu-item:not(.header__menu-item--products):not(.header__menu-item--main)");

  if (productsLabel && productsSubmenu && menuPrincipal && otherMenuItems.length > 0) {
    let isProductsOpen = false;

    productsLabel.addEventListener("click", () => {
      if (!isProductsOpen) {
        productsSubmenu.classList.add("header__submenu--open");
        isProductsOpen = true;

        menuPrincipal.style.display = "flex";

        otherMenuItems.forEach((item) => {
          item.style.display = "none";
        });
      }
    });

    menuPrincipal.addEventListener("click", () => {
      productsSubmenu.classList.remove("header__submenu--open");
      isProductsOpen = false;

      menuPrincipal.style.display = "none";

      otherMenuItems.forEach((item) => {
        item.style.display = "flex";
      });
    });

    // Controle das subcategorias
    const categoryItems = document.querySelectorAll(".header__submenu-item");
    categoryItems.forEach((item) => {
      const subSubmenu = item.querySelector(".header__sub-submenu");
      const arrowRight = item.querySelector(".header__arrow--right");

      if (subSubmenu && arrowRight) {
        item.addEventListener("click", () => {
          if (subSubmenu.classList.contains("header__sub-submenu--open")) {
            subSubmenu.classList.remove("header__sub-submenu--open");
            arrowRight.classList.remove("header__arrow--up");
            arrowRight.classList.add("header__arrow--right");
          } else {
            subSubmenu.classList.add("header__sub-submenu--open");
            arrowRight.classList.remove("header__arrow--right");
            arrowRight.classList.add("header__arrow--up");
          }
        });
      }
    });
  } else {
    console.error("Elementos relacionados a Produtos não encontrados. Verifique o HTML.");
  }
});
