import products from "../../mock/products.js";

export const renderDesktopHeader = () => {
  const headerHTML = `
<header id="header-renderized-desktop" class="header">
  <div class="header__desktop">
    <img width="180px" src="../assets/logo-gooffice-header.svg" alt="Logo" onClick="window.location.href='/freelance-go-office/pages/index.html';" />
    <div class="header__desktop-menu">
      <ul class="header__desktop-menu-list">
        <li id="products-menu">Produtos</li>
        <li>
          <a href="./pages/brand.html">Marca</a>
        </li>
        <li>
          <a href="./pages/sales.html">Canais de Venda</a>
        </li>
      </ul>
      <div class="header__desktop-link">
        <a href="./pages/catalog.html">Acesse o Catálogo</a>
      </div>
    </div>
  </div>
  <div id="desktop-left-menu" class="desktop-left-menu">
    <div id="desktop-products-container" class="desktop-products-container"></div>
  </div>
</header>
     `;
  document.getElementById("header-desktop").innerHTML = headerHTML;
};

export const renderDesktopProductsMenu = () => {
  const productsContainer = document.querySelector(".desktop-products-container");
  const header = document.createElement("div");
  header.className = "desktop-products-header";
  header.innerHTML = `
    <span class="desktop-products-title">Produtos</span>
    <svg id="close-products-menu" class="close-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 6L6 18M6 6L18 18" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `;
  productsContainer.appendChild(header);

  products.forEach((productData) => {
    const categoryItem = document.createElement("div");
    categoryItem.className = "desktop-category-item";

    categoryItem.innerHTML = `
    <div class="desktop-category-header">
      <span>${productData.product}</span>
      <svg class="header__desktop__arrow header__desktop__arrow--right" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 7L15 12L10 17"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
      </svg>
      </div>
    `;

    const subSubmenu = document.createElement("ul");
    subSubmenu.className = "desktop-sub-submenu";

    productData.subcategories.forEach((subcategory) => {
      const subcategoryItem = document.createElement("li");
      subcategoryItem.className = "desktop-sub-submenu-item";
      subcategoryItem.id = subcategory.id;
      subcategoryItem.textContent = subcategory.name;
      subSubmenu.appendChild(subcategoryItem);
    });

    const viewAllOption = document.createElement("li");
    viewAllOption.className = "desktop-sub-submenu-view-all";
    viewAllOption.innerHTML = `<span>Ver tudo</span>`;
    viewAllOption.addEventListener("click", () => {
      const viewAllUrl = `${window.location.origin}/freelance-go-office/pages/category.html?id=${productData.id}`;
      window.location.href = viewAllUrl;
    });

    subSubmenu.appendChild(viewAllOption);
    categoryItem.appendChild(subSubmenu);
    productsContainer.appendChild(categoryItem);

    const arrow = categoryItem.querySelector(".desktop-arrow");
    categoryItem.addEventListener("click", () => {
      const isOpen = subSubmenu.classList.contains("desktop-sub-submenu--open");

      if (isOpen) {
        subSubmenu.classList.remove("desktop-sub-submenu--open");
        arrow.classList.remove("desktop-arrow--up");
        arrow.classList.add("desktop-arrow--right");
      } else {
        subSubmenu.classList.add("desktop-sub-submenu--open");
        arrow.classList.remove("desktop-arrow--right");
        arrow.classList.add("desktop-arrow--up");
      }
    });
  });

  const closeButton = document.getElementById("close-products-menu");
  closeButton.addEventListener("click", () => {
    productsContainer.style.display = "none";
  });
};

document.addEventListener("DOMContentLoaded", () => {
  renderDesktopHeader();
  renderDesktopProductsMenu();

  const productsMenuButton = document.getElementById("products-menu");
  const leftMenu = document.getElementById("desktop-left-menu");
  const closeButton = document.getElementById("close-products-menu");

  productsMenuButton.addEventListener("click", () => {
    leftMenu.style.left = "0";
  });

  closeButton.addEventListener("click", () => {
    leftMenu.style.left = "-330px";
  });

  const catalogLink = document.querySelector(".header__desktop-link a");
  catalogLink.addEventListener("click", (event) => {});
});
