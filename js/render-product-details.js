import products from "/mock/products.js";

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

function renderCarousel(images) {
  const carouselContainer = document.createElement("div");
  carouselContainer.classList.add("product-mobile-carousel");

  const indicatorsContainer = document.createElement("div");
  indicatorsContainer.classList.add("product-mobile-carousel-indicators");

  images.forEach((_, index) => {
    const indicator = document.createElement("img");
    indicator.src = index === 0 ? "/assets/circle-filled.svg" : "/assets/circle-outline.svg";
    indicator.alt = `Carousel Indicator ${index + 1}`;
    indicator.classList.add("product-mobile-carousel-indicator");
    indicator.dataset.index = index;

    indicator.addEventListener("click", () => {
      document.getElementById("product-image").src = images[index];
      Array.from(indicatorsContainer.children).forEach((child, idx) => {
        child.src = idx === index ? "/assets/circle-filled.svg" : "/assets/circle-outline.svg";
      });
    });

    indicatorsContainer.appendChild(indicator);
  });

  carouselContainer.appendChild(indicatorsContainer);
  return carouselContainer;
}

export const renderProductDetails = () => {
  const params = new URLSearchParams(window.location.search);
  const productId = parseInt(params.get("id"));

  const productData = getProductById(productId);

  if (productData) {
    const { productCategory, subcategory, item } = productData;

    const breadcrumb = document.getElementById("breadcrumb");
    breadcrumb.textContent = `Produtos > ${productCategory.product} > ${subcategory.name} > ${item.title}`;

    document.getElementById("product-title").textContent = item.title;
    document.getElementById("product-code").textContent = productId;
    document.getElementById("product-image").src = item.thumbnail;
    document.getElementById("product-image").alt = item.title;
    document.getElementById("product-description").innerHTML = formatDescription(item.description);

    const technicalSpecs = item.technicalSpecifications || {};
    document.getElementById("product-segment").textContent = technicalSpecs.segment || "Não informado";
    document.getElementById("product-family").textContent = technicalSpecs.family || "Não informado";
    document.getElementById("product-subfamily").textContent = technicalSpecs.subfamily || "Não informado";
    document.getElementById("product-brand").textContent = technicalSpecs.brand || "Não informado";

    const carousel = renderCarousel(item.images || []);
    document.getElementById("product-mobile-carousel").appendChild(carousel);
  } else {
    document.getElementById("product-details").innerHTML = "<p>Produto não encontrado.</p>";
  }
};

document.addEventListener("DOMContentLoaded", () => {
  renderProductDetails();
});
