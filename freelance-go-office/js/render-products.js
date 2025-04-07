import products from "../mock/products.js";

export const renderProductDetails = () => {
  function getProductById(productId) {
    for (const product of products) {
      for (const subcategory of product.subcategories) {
        const item = subcategory.itens.find((item) => item.id === productId);
        if (item) {
          return { product, subcategory, item };
        }
      }
    }
    return null;
  }

  const params = new URLSearchParams(window.location.search);
  const productId = parseInt(params.get("id"), 10);

  const productData = getProductById(productId);

  if (productData) {
    const { product, subcategory, item } = productData;

    // Atualiza o breadcrumb
    const breadcrumb = document.getElementById("breadcrumb");
    if (breadcrumb) {
      breadcrumb.textContent = `Produtos > ${product.product} > ${subcategory.name} > ${item.title}`;
    }

    // Preenche os detalhes do produto
    document.getElementById("product-title").textContent = item.title;
    document.getElementById("product-code").textContent = productId;
    document.getElementById("product-image").src = item.image;
    document.getElementById("product-image").alt = item.title;
    document.getElementById("product-description").textContent = item.description;

    // Preenche as especificações técnicas
    const specs = item.technicalSpecifications || {};
    document.getElementById("product-segment").textContent = specs.segment || "Não informado";
    document.getElementById("product-family").textContent = specs.family || "Não informado";
    document.getElementById("product-subfamily").textContent = specs.subfamily || "Não informado";
    document.getElementById("product-brand").textContent = specs.brand || "Não informado";
  } else {
    // Mostra mensagem de erro se o produto não for encontrado
    document.getElementById("product-details").innerHTML = "<p>Produto não encontrado.</p>";
  }
};
