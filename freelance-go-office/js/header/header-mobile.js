import products from "../../mock/products.js";

export const renderMobileHeader = () => {
  const headerHTML = `
  <header id="header-renderized-mobile" class="header">
    <div class="header__mobile">
      <input type="checkbox" id="menu-toggle" class="header__toggle-checkbox" />
      <label for="menu-toggle" id="menu-toggle-label">
        <div id="menu-icon" class="header__icon header__icon--hamburger"></div>
      </label>

      <ul id="header-menu" class="header__menu">
        <li id="menu-principal" class="header__menu-item header__menu-item--main" style="display: none">
          <svg id="arrow-left" class="header__arrow header__arrow--left" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 7L15 12L10 17" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
          Menu Principal
        </li>
        <li id="products-menu-item" class="header__menu-item header__menu-item--products">
          <label id="products-label" class="header__submenu-label">
            Produtos
            <svg id="arrow-down" class="header__arrow header__arrow--down" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 7L15 12L10 17" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </label>
          <ul id="products-submenu" class="header__submenu header__submenu--products"></ul>
        </li>
        <li id="brand-menu-item" class="header__menu-item header__menu-item--brand">
          <a href="./pages/brand.html" class="header__menu-link">Marca</a>
        </li>
        <li id="sales-menu-item" class="header__menu-item header__menu-item--sales-channels">
          <a href="./pages/sales.html" class="header__menu-link">Canais de Venda</a>
        </li>
        <li id="catalog-menu-item" class="header__menu-item header__menu-item--catalog">
          <a href="./pages/catalog.html" class="header__menu-link">Acesse o Catálogo</a>
        </li>
      </ul>

      <div id="header-logo" class="header__logo">
        <img src="../assets/logo-gooffice-header.svg" alt="Logo" onClick="window.location.href='/freelance-go-office/pages/index.html';" />
      </div>
    </div>
  </header>
  `;
  document.getElementById("header-mobile").innerHTML = headerHTML;
};

export const renderMobileProductsMenu = () => {
  const productsSubmenu = document.getElementById("products-submenu");

  if (!productsSubmenu) {
    console.error("Submenu de produtos não encontrado.");
    return;
  }

  products.forEach((productData) => {
    const productItem = document.createElement("li");
    productItem.className = "header__submenu-item";

    const label = document.createElement("label");
    label.className = "header__submenu-item-label";
    label.textContent = productData.product;

    const arrow = document.createElement("svg");
    arrow.className = "header__arrow header__arrow--right";
    arrow.innerHTML = `<path d="M10 7L15 12L10 17" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>`;

    label.appendChild(arrow);
    productItem.appendChild(label);

    const subSubmenu = document.createElement("ul");
    subSubmenu.className = "header__sub-submenu";

    productData.subcategories.forEach((subcategory) => {
      const subcategoryItem = document.createElement("li");
      subcategoryItem.className = "header__sub-submenu-item";
      subcategoryItem.id = subcategory.id;
      subcategoryItem.textContent = subcategory.name;

      subSubmenu.appendChild(subcategoryItem);
    });

    const viewAllOption = document.createElement("li");
    viewAllOption.className = "header__sub-submenu-view-all";
    viewAllOption.innerHTML = `<span>Ver tudo</span>`;
    viewAllOption.addEventListener("click", () => {
      const viewAllUrl = `${window.location.origin}/freelance-go-office/pages/category.html?id=${productData.id}`;
      window.location.href = viewAllUrl;
    });

    subSubmenu.appendChild(viewAllOption);
    productItem.appendChild(subSubmenu);
    productsSubmenu.appendChild(productItem);

    label.addEventListener("click", () => {
      const isOpen = subSubmenu.classList.contains("header__sub-submenu--open");

      if (!isOpen) {
        subSubmenu.classList.add("header__sub-submenu--open");
        arrow.classList.remove("header__arrow--right");
        arrow.classList.add("header__arrow--up");
      }
    });
  });
};

document.addEventListener("DOMContentLoaded", () => {
  renderMobileHeader();
  renderMobileProductsMenu();

  const menuToggle = document.getElementById("menu-toggle");
  const headerMenu = document.getElementById("header-menu");
  const menuIcon = document.getElementById("menu-icon");
  const productsMenuButton = document.getElementById("products-label");
  const productsSubmenuToggle = document.getElementById("products-submenu");
  const menuPrincipal = document.getElementById("menu-principal");

  if (menuToggle && headerMenu && menuIcon && productsMenuButton && productsSubmenuToggle && menuPrincipal) {
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

    productsMenuButton.addEventListener("click", () => {
      const isOpen = productsSubmenuToggle.classList.contains("header__submenu--open");

      if (!isOpen) {
        // Fecha todos os submenus e sub-submenus antes de abrir o de Produtos
        const allSubmenus = document.querySelectorAll(".header__submenu--open");
        const allSubSubmenus = document.querySelectorAll(".header__sub-submenu--open");

        allSubmenus.forEach((submenu) => {
          submenu.classList.remove("header__submenu--open");
        });

        allSubSubmenus.forEach((subSubmenu) => {
          subSubmenu.classList.remove("header__sub-submenu--open");
        });

        productsSubmenuToggle.classList.add("header__submenu--open");
        menuPrincipal.style.display = "flex";
        console.log("Submenu Produtos aberto e outros submenus e sub-submenus fechados.");
      }
    });

    menuPrincipal.addEventListener("click", () => {
      // Fecha todos os submenus e sub-submenus
      const allSubmenus = document.querySelectorAll(".header__submenu--open");
      const allSubSubmenus = document.querySelectorAll(".header__sub-submenu--open");

      allSubmenus.forEach((submenu) => {
        submenu.classList.remove("header__submenu--open");
      });

      allSubSubmenus.forEach((subSubmenu) => {
        subSubmenu.classList.remove("header__sub-submenu--open");
      });

      menuPrincipal.style.display = "none";
      console.log("Menu Principal clicado: todos os submenus e sub-submenus foram fechados.");
    });
  } else {
    console.error("Erro: Elementos necessários para o funcionamento do menu não encontrados.");
  }
});
