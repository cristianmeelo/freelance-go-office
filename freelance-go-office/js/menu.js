document.addEventListener("DOMContentLoaded", () => {
  const menuPrincipal = document.getElementById("principal-menu"); // Elemento do Menu Principal
  const produtosToggle = document.getElementById("products-menu"); // Checkbox do menu "Produtos"
  const otherMenuItems = document.querySelectorAll(".list-menu__title__another"); // Itens adicionais
  const categoriesMenu = document.getElementById("categories-menu"); // Submenu de categorias do Produtos

  if (menuPrincipal && produtosToggle) {
    menuPrincipal.addEventListener("click", () => {
      produtosToggle.checked = false;
      categoriesMenu.style.display = "none";

      otherMenuItems.forEach((item) => {
        item.style.display = "block";
      });
    });

    produtosToggle.addEventListener("change", () => {
      if (produtosToggle.checked) {
        otherMenuItems.forEach((item) => {
          item.style.display = "none";
        });

        categoriesMenu.style.display = "block";
      } else {
        otherMenuItems.forEach((item) => {
          item.style.display = "block";
        });

        categoriesMenu.style.display = "none";
      }
    });
  } else {
    console.error("Elemento 'menu-principal' ou 'produtos-menu' não encontrado no DOM!");
  }
});

// handle with "Menu Principal"
document.addEventListener("DOMContentLoaded", () => {
  const produtosCheckbox = document.getElementById("checkbox-products");
  const firstMenuItem = document.getElementById("principal-menu");
  const productsMenu = document.getElementById("products-menu");

  produtosCheckbox.addEventListener("change", () => {
    if (produtosCheckbox.checked) {
      firstMenuItem.style.display = "flex";
      productsMenu.classList.remove("padding-top-32");
    } else {
      firstMenuItem.style.display = "none";
      productsMenu.classList.add("padding-top-32");
    }
  });
});
