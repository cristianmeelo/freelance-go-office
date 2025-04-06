const products = [
  {
    id: "prod-001",
    product: "Grampeadores e Extratores",
    subcategories: [
      { id: "1", name: "Grampeador Manual" },
      { id: "2", name: "Grampeador Elétrico" },
      { id: "3", name: "Extrator de Grampos" },
    ],
  },
  {
    id: "prod-002",
    product: "Papelaria",
    subcategories: [
      { id: "subcat-004", name: "Canetas" },
      { id: "subcat-005", name: "Lápis" },
      { id: "subcat-006", name: "Borracha" },
    ],
  },
  {
    id: "prod-003",
    product: "Organização",
    subcategories: [
      { id: "subcat-007", name: "Pastas de Arquivo" },
      { id: "subcat-008", name: "Caixas Organizadoras" },
    ],
  },
  {
    id: "prod-004",
    product: "Móveis de Escritório",
    subcategories: [
      { id: "subcat-009", name: "Cadeiras Ergonômicas" },
      { id: "subcat-010", name: "Mesas de Escritório" },
    ],
  },
  {
    id: "prod-005",
    product: "Tecnologia",
    subcategories: [
      { id: "subcat-011", name: "Notebooks" },
      { id: "subcat-012", name: "Monitores" },
      { id: "subcat-013", name: "Teclados e Mouses" },
    ],
  },
  {
    id: "prod-006",
    product: "Limpeza",
    subcategories: [
      { id: "subcat-014", name: "Detergentes" },
      { id: "subcat-015", name: "Luvas de Limpeza" },
      { id: "subcat-016", name: "Esponjas" },
    ],
  },
  {
    id: "prod-007",
    product: "Copa e Cozinha",
    subcategories: [
      { id: "subcat-017", name: "Utensílios de Cozinha" },
      { id: "subcat-018", name: "Louças" },
      { id: "subcat-019", name: "Talheres" },
    ],
  },
  {
    id: "prod-008",
    product: "Eletrônicos",
    subcategories: [
      { id: "subcat-020", name: "Celulares" },
      { id: "subcat-021", name: "Tablets" },
      { id: "subcat-022", name: "Fones de Ouvido" },
    ],
  },
  {
    id: "prod-009",
    product: "Ferramentas",
    subcategories: [
      { id: "subcat-023", name: "Furadeiras" },
      { id: "subcat-024", name: "Chaves de Fenda" },
      { id: "subcat-025", name: "Alicates" },
    ],
  },
  {
    id: "prod-010",
    product: "Automotivo",
    subcategories: [
      { id: "subcat-026", name: "Óleos e Lubrificantes" },
      { id: "subcat-027", name: "Limpadores Automotivos" },
      { id: "subcat-028", name: "Acessórios para Carros" },
    ],
  },
];

function renderHeader() {
  const headerHTML = `
  <header id="header-renderized" class="header">
    <div class="header__mobile">
      <input type="checkbox" id="menu-toggle" class="header__toggle-checkbox" />
      <label for="menu-toggle" class="header__toggle-label">
        <div class="header__icon header__icon--hamburger"></div>
      </label>

      <ul class="header__menu">
        <li class="header__menu-item header__menu-item--main" style="display: none">
          <svg class="header__arrow header__arrow--left" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 7L15 12L10 17" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
          Menu Principal
        </li>
        <li class="header__menu-item header__menu-item--products">
          <label class="header__submenu-label">
            Produtos
            <svg class="header__arrow header__arrow--down" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 7L15 12L10 17" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </label>
          <ul class="header__submenu header__submenu--products"></ul>
        </li>
        <li class="header__menu-item header__menu-item--brand">
          <a href="./pages/brand.html" class="header__menu-link">Marca</a>
        </li>
        <li class="header__menu-item header__menu-item--sales-channels">
          <a href="./pages/sales.html" class="header__menu-link">Canais de Venda</a>
        </li>
        <li class="header__menu-item header__menu-item--catalog">
          <a href="./pages/catalog.html" class="header__menu-link">Acesse o Catálogo</a>
        </li>
      </ul>

      <div class="header__logo">
        <img src="../assets/logo-gooffice-header.svg" alt="Logo" onClick="window.location.href='/freelance-go-office/pages/index.html';" />
      </div>
    </div>
    <div class="header__desktop">

        
        <img width="180px" src="../assets/logo-gooffice-header.svg" alt="Logo" onClick="window.location.href='/freelance-go-office/pages/index.html';" />

       <div class="header__desktop-menu">
        <ul class="header__desktop-menu-list">
          <li>produtos</li>
          <li>marca</li>
          <li>canais de venda</li>
        </ul>

        <span>
          acesse o catálogo
        </span>
       </div>

    </div>
  </header>

  `;
  document.getElementById("header").innerHTML = headerHTML;
}

function handleHeaderTransparency() {
  const header = document.getElementById("header-renderized");

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

  if (menuToggle && headerMenu && menuIcon) {
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
  }

  const renderProductsMenu = () => {
    const productsSubmenu = document.querySelector(".header__submenu--products");

    products.forEach((productData) => {
      const productItem = document.createElement("li");
      productItem.className = "header__submenu-item";

      const label = document.createElement("label");
      label.className = "header__submenu-item-label";
      label.textContent = productData.product;

      const arrow = document.createElement("svg");
      arrow.className = "header__arrow header__arrow--right";
      arrow.setAttribute("viewBox", "0 0 24 24");
      arrow.setAttribute("fill", "none");
      arrow.setAttribute("xmlns", "http://www.w3.org/2000/svg");
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

      productItem.appendChild(subSubmenu);
      productsSubmenu.appendChild(productItem);

      label.addEventListener("click", () => {
        const isOpen = subSubmenu.classList.contains("header__sub-submenu--open");

        if (isOpen) {
          subSubmenu.classList.remove("header__sub-submenu--open");
          arrow.classList.remove("header__arrow--up");
          arrow.classList.add("header__arrow--right");
        } else {
          subSubmenu.classList.add("header__sub-submenu--open");
          arrow.classList.remove("header__arrow--right");
          arrow.classList.add("header__arrow--up");
        }
      });
    });

    const productsLabel = document.querySelector(".header__menu-item--products .header__submenu-label");
    const productsSubmenuToggle = document.querySelector(".header__submenu--products");
    const menuPrincipal = document.querySelector(".header__menu-item--main");
    const otherMenuItems = document.querySelectorAll(".header__menu-item:not(.header__menu-item--products):not(.header__menu-item--main)");
    let isProductsOpen = false;

    productsLabel.addEventListener("click", () => {
      if (!isProductsOpen) {
        productsSubmenuToggle.classList.add("header__submenu--open");
        menuPrincipal.style.display = "flex";
        otherMenuItems.forEach((item) => (item.style.display = "none"));
        isProductsOpen = true;
      }
    });

    menuPrincipal.addEventListener("click", () => {
      productsSubmenuToggle.classList.remove("header__submenu--open");
      menuPrincipal.style.display = "none";
      otherMenuItems.forEach((item) => (item.style.display = "flex"));
      isProductsOpen = false;
    });
  };

  renderProductsMenu();

  const subSubmenuItems = document.querySelectorAll(".header__sub-submenu-item");

  subSubmenuItems.forEach((subItem) => {
    const subcategoryId = subItem.id;

    if (subcategoryId) {
      const productPageUrl = `${window.location.origin}/freelance-go-office/pages/product.html?id=${subcategoryId}`;

      subItem.addEventListener("click", (event) => {
        event.stopPropagation();

        console.log(`Redirecionando para: ${productPageUrl}`);
        window.location.href = productPageUrl;
      });
    } else {
      console.error("ID de subcategoria inválido ou não encontrado!");
    }
  });
});
