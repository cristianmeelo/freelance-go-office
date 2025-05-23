import products from "/mock/products.js";

export const renderProducts = (subcategoryId) => {
  const container = document.getElementById("products-list");
  const breadcrumb = document.querySelector(".products__list__breadcrumb");

  const selectedProduct = products.find((product) => product.subcategories.some((subcategory) => subcategory.id === subcategoryId));

  if (!selectedProduct) {
    container.innerHTML = "<p>Nenhum produto encontrado.</p>";
    breadcrumb.textContent = "Produtos > Nenhum produto encontrado";
    return;
  }

  const selectedSubcategory = selectedProduct.subcategories.find((subcategory) => subcategory.id === subcategoryId);

  if (!selectedSubcategory) {
    container.innerHTML = "<p>Nenhum produto encontrado.</p>";
    breadcrumb.textContent = `Produtos > ${selectedProduct.product} > Nenhuma subcategoria encontrada`;
    return;
  }

  breadcrumb.textContent = `Produtos > ${selectedProduct.product} > ${selectedSubcategory.name}`;

  const contentHTML = selectedSubcategory.itens
    .map(
      (item) => `
        <div class="product-item">
          <a href="./product.html?id=${item.id}">
            <img src="${item.thumbnail}" alt="${item.title}" />
          </a>
          <p>${item.description}</p>
        </div>
      `
    )
    .join("");

  container.innerHTML = contentHTML;
};

document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const subcategoryId = urlParams.get("subcategoryId");
  renderProducts(subcategoryId);
});
