import products from "../mock/products.js";

export const renderProductDetails = () => {
  function getProductById(productId) {
    for (const productCategory of products) {
      for (const subcategory of productCategory.subcategories) {
        const item = subcategory.itens.find((item) => item.id === productId);
        if (item) {
          return { productCategory, subcategory, item };
        }
      }
    }
    return null;
  }

  function formatDescription(description) {
    return description.replace(/\.\s/g, ".<br><br>");
  }

  const params = new URLSearchParams(window.location.search);
  const productId = parseInt(params.get("id"));

  const productData = getProductById(productId);

  if (productData) {
    const { productCategory, subcategory, item } = productData;

    // Atualiza breadcrumb dinâmico
    const breadcrumb = document.getElementById("breadcrumb");
    breadcrumb.textContent = `Produtos > ${productCategory.product} > ${subcategory.name} > ${item.title}`;

    // Renderiza detalhes do produto
    document.getElementById("product-title").textContent = item.title;
    document.getElementById("product-code").textContent = productId;
    document.getElementById("product-image").src = item.image;
    document.getElementById("product-image").alt = item.title;
    document.getElementById("product-description").innerHTML = formatDescription(item.description);

    // Renderiza especificações técnicas (fallback para "Não informado")
    const technicalSpecs = item.technicalSpecifications || {};
    document.getElementById("product-segment").textContent = technicalSpecs.segment || "Não informado";
    document.getElementById("product-family").textContent = technicalSpecs.family || "Não informado";
    document.getElementById("product-subfamily").textContent = technicalSpecs.subfamily || "Não informado";
    document.getElementById("product-brand").textContent = technicalSpecs.brand || "Não informado";
  } else {
    document.getElementById("product-details").innerHTML = "<p>Produto não encontrado.</p>";
  }
};

document.addEventListener("DOMContentLoaded", () => {
  renderProductDetails();
});
