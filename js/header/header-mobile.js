import products from "/mock/products.js";

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
          <label>
          Menu Principal
          </label>
        </li>
        <li id="products-menu-item" class="header__menu-item header__menu-item--products ">
          <label id="products-label" class="header__submenu-label header__submenu-label--padding">
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
        <img src="/public/logo-gooffice-header.svg" alt="Logo" onClick="window.location.href='/index.html';" />
      </div>
    </div>
  </header>
  `;
  document.getElementById("header-mobile").innerHTML = headerHTML;
};

export const renderMobileProductsMenu = () => {
  const productsSubmenu = document.getElementById("products-submenu");

  if (!productsSubmenu) {
    return;
  }

  products.forEach((productData) => {
    const productItem = document.createElement("li");
    productItem.className = "header__submenu-item";

    const label = document.createElement("label");
    label.className = "header__submenu-item-label";
    label.textContent = productData.product;

    const arrow = `
      <svg class="header__arrow header__arrow--right" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 7L15 12L10 17" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
      </svg>
    `;
    label.innerHTML += arrow;

    productItem.appendChild(label);

    const subSubmenu = document.createElement("ul");
    subSubmenu.className = "header__sub-submenu";

    productData.subcategories.slice(0, 3).forEach((subcategory) => {
      const subcategoryItem = document.createElement("li");
      subcategoryItem.className = "header__sub-submenu-item";
      subcategoryItem.id = subcategory.id;
      subcategoryItem.innerHTML = `<a href="./pages/products.html?subcategoryId=${subcategory.id}">${subcategory.name}</a>`;
      subSubmenu.appendChild(subcategoryItem);
    });

    if (productData.subcategories.length > 3) {
      const viewAllOption = document.createElement("li");
      viewAllOption.className = "header__sub-submenu-view-all";
      viewAllOption.innerHTML = `<span>Ver tudo</span>`;
      viewAllOption.addEventListener("click", () => {
        productData.subcategories.slice(3).forEach((subcategory) => {
          const subcategoryItem = document.createElement("li");
          subcategoryItem.className = "header__sub-submenu-item";
          subcategoryItem.id = subcategory.id;
          subcategoryItem.innerHTML = `<a href="./pages/products.html?subcategoryId=${subcategory.id}">${subcategory.name}</a>`;
          subSubmenu.appendChild(subcategoryItem);
        });

        viewAllOption.style.display = "none";
      });

      subSubmenu.appendChild(viewAllOption);
    }

    productItem.appendChild(subSubmenu);
    productsSubmenu.appendChild(productItem);

    label.addEventListener("click", () => {
      const isOpen = subSubmenu.classList.contains("header__sub-submenu--open");

      if (!isOpen) {
        subSubmenu.classList.add("header__sub-submenu--open");

        const arrowElement = label.querySelector(".header__arrow");
        arrowElement.classList.remove("header__arrow--right");
        arrowElement.classList.add("header__arrow--up");
      } else {
        subSubmenu.classList.remove("header__sub-submenu--open");

        const arrowElement = label.querySelector(".header__arrow");
        arrowElement.classList.remove("header__arrow--up");
        arrowElement.classList.add("header__arrow--right");
      }
    });
  });
};

const restoreSubcategories = () => {
  const allSubmenus = document.querySelectorAll(".header__submenu--open");
  const allSubSubmenus = document.querySelectorAll(".header__sub-submenu--open");
  const allSubmenuItems = document.querySelectorAll(".header__sub-submenu-item");
  const allViewAllButtons = document.querySelectorAll(".header__sub-submenu-view-all");
  const productsMenuLabel = document.getElementById("products-label");
  const menuPrincipal = document.getElementById("menu-principal");

  allSubmenus.forEach((submenu) => {
    submenu.classList.remove("header__submenu--open");
  });

  allSubSubmenus.forEach((subSubmenu) => {
    subSubmenu.classList.remove("header__sub-submenu--open");
  });

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

  productsMenuLabel.classList.add("header__submenu-label--padding");

  menuPrincipal.style.display = "none";
};

const openProductsSubmenu = (productsSubmenuToggle, productsMenuLabel, menuPrincipal) => {
  const isOpen = productsSubmenuToggle.classList.contains("header__submenu--open");

  if (!isOpen) {
    const allSubmenus = document.querySelectorAll(".header__submenu--open");
    const allSubSubmenus = document.querySelectorAll(".header__sub-submenu--open");

    allSubmenus.forEach((submenu) => {
      submenu.classList.remove("header__submenu--open");
    });

    allSubSubmenus.forEach((subSubmenu) => {
      subSubmenu.classList.remove("header__sub-submenu--open");
    });

    productsMenuLabel.classList.remove("header__submenu-label--padding");

    productsSubmenuToggle.classList.add("header__submenu--open");

    menuPrincipal.style.display = "flex";
  }
};

const handleMenuToggle = (menuToggle, headerMenu, menuIcon, body, restoreSubcategories) => {
  if (menuToggle.checked) {
    headerMenu.classList.add("header__menu--open");
    menuIcon.classList.add("header__icon--close");
    menuIcon.classList.remove("header__icon--hamburger");
    body.classList.add("body-no-scroll");
  } else {
    headerMenu.classList.remove("header__menu--open");
    menuIcon.classList.remove("header__icon--close");
    menuIcon.classList.add("header__icon--hamburger");
    body.classList.remove("body-no-scroll");

    restoreSubcategories();
  }
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
  const productsMenuLabel = document.getElementById("products-label");
  const body = document.body;

  menuToggle.addEventListener("change", () => {
    handleMenuToggle(menuToggle, headerMenu, menuIcon, body, restoreSubcategories);
  });

  productsMenuButton.addEventListener("click", () => {
    openProductsSubmenu(productsSubmenuToggle, productsMenuLabel, menuPrincipal);
  });

  menuPrincipal.addEventListener("click", () => {
    restoreSubcategories();
  });
});
