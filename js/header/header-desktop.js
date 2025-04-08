import products from "/mock/products.js";

export const renderDesktopHeader = () => {
  const headerHTML = `
<header id="header-renderized-desktop" class="header">
  <div class="header__desktop">
    <img width="180px" src="/public/logo-gooffice-header.svg" alt="Logo" onClick="window.location.href='/index.html';" />
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

  productsContainer.innerHTML = "";

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
      <svg class="header__desktop__arrow header__desktop__arrow--down" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 7L15 12L10 17" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
      </svg>
    </div>
    `;

    const subSubmenu = document.createElement("ul");
    subSubmenu.className = "desktop-sub-submenu";

    handleDesktopSubcategories(subSubmenu, productData.subcategories);

    categoryItem.appendChild(subSubmenu);
    productsContainer.appendChild(categoryItem);

    const categoryHeader = categoryItem.querySelector(".desktop-category-header");
    const arrow = categoryHeader.querySelector(".header__desktop__arrow");

    categoryHeader.addEventListener("click", () => {
      const isOpen = subSubmenu.classList.contains("desktop-sub-submenu--open");

      if (isOpen) {
        subSubmenu.classList.remove("desktop-sub-submenu--open");
        arrow.classList.remove("header__desktop__arrow--up");
        arrow.classList.add("header__desktop__arrow--down");
      } else {
        subSubmenu.classList.add("desktop-sub-submenu--open");
        arrow.classList.remove("header__desktop__arrow--down");
        arrow.classList.add("header__desktop__arrow--up");
      }
    });
  });

  const closeButton = document.getElementById("close-products-menu");
  closeButton?.addEventListener("click", () => {
    const leftMenu = document.getElementById("desktop-left-menu");
    const overlay = document.getElementById("menu-overlay");
    leftMenu.style.left = "-338px";
    overlay.style.display = "none";
    document.body.classList.remove("body-no-scroll");

    restoreDesktopMenu();
  });
};

const handleDesktopSubcategories = (subSubmenu, subcategories) => {
  subSubmenu.innerHTML = ""; 

  subcategories.slice(0, 3).forEach((subcategory) => {
    const subcategoryItem = document.createElement("li");
    subcategoryItem.className = "desktop-sub-submenu-item";
    subcategoryItem.id = subcategory.id;
    subcategoryItem.innerHTML = `<a href="pages/products.html?subcategoryId=${subcategory.id}">${subcategory.name}</a>`;
    subSubmenu.appendChild(subcategoryItem);
  });

  if (subcategories.length > 3) {
    const viewAllOption = document.createElement("li");
    viewAllOption.className = "desktop-sub-submenu-view-all";
    viewAllOption.innerHTML = `<span>Ver tudo</span>`;
    viewAllOption.addEventListener("click", () => {
      subcategories.slice(3).forEach((subcategory) => {
        const subcategoryItem = document.createElement("li");
        subcategoryItem.className = "desktop-sub-submenu-item";
        subcategoryItem.id = subcategory.id;
        subcategoryItem.innerHTML = `<a href="pages/products.html?subcategoryId=${subcategory.id}">${subcategory.name}</a>`;
        subSubmenu.appendChild(subcategoryItem);
      });

      viewAllOption.style.display = "none";

    });

    subSubmenu.appendChild(viewAllOption);
  }
};

const restoreDesktopMenu = () => {
  const allSubmenus = document.querySelectorAll(".desktop-sub-submenu");
  const allViewAllButtons = document.querySelectorAll(".desktop-sub-submenu-view-all");
  const allSubmenuItems = document.querySelectorAll(".desktop-sub-submenu-item");

  const subSubmenuGroups = [...allSubmenuItems].reduce((groups, item) => {
    const parent = item.parentElement;
    groups[parent] = groups[parent] || [];
    groups[parent].push(item);
    return groups;
  }, {});

  Object.values(subSubmenuGroups).forEach((group) => {
    group.forEach((item, index) => {
      if (index < 3) {
        item.classList.remove("hidden"); 
      } else {
        item.classList.add("hidden"); 
      }
    });
  });

  allViewAllButtons.forEach((button) => {
    button.style.display = "block";
  });

};

document.addEventListener("DOMContentLoaded", () => {
  renderDesktopHeader();

  let overlay = document.getElementById("menu-overlay");
  if (!overlay) {
    overlay = document.createElement("div");
    overlay.id = "menu-overlay";
    overlay.className = "overlay";
    document.body.appendChild(overlay);
  }

  const productsMenuButton = document.getElementById("products-menu");
  const leftMenu = document.getElementById("desktop-left-menu");

  productsMenuButton.addEventListener("click", () => {
    renderDesktopProductsMenu();
    leftMenu.style.left = "0";
    overlay.style.display = "block";
    document.body.classList.add("body-no-scroll");
  });

  overlay.addEventListener("click", () => {
    leftMenu.style.left = "-338px";
    overlay.style.display = "none";
    document.body.classList.remove("body-no-scroll");

    restoreDesktopMenu();
  });
});
