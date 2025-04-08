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

function renderMobileCarousel(images) {
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

function renderDesktopCarousel(images) {
  const carouselContainer = document.createElement("div");
  carouselContainer.classList.add("product-desktop-carousel");

  const arrowUp = document.createElement("button");
  arrowUp.classList.add("product-desktop-carousel-arrow", "product-desktop-carousel-arrow-up");
  arrowUp.disabled = true;

  const arrowUpIcon = document.createElement("img");
  arrowUpIcon.src = "/assets/arrow-outline.svg";
  arrowUpIcon.alt = "Seta para cima";
  arrowUpIcon.style.transform = "rotate(-90deg)";
  arrowUpIcon.style.width = "25px";
  arrowUpIcon.style.height = "25px";

  arrowUp.appendChild(arrowUpIcon);

  const arrowDown = document.createElement("button");
  arrowDown.classList.add("product-desktop-carousel-arrow", "product-desktop-carousel-arrow-down");

  const arrowDownIcon = document.createElement("img");
  arrowDownIcon.src = "/assets/arrow-outline.svg";
  arrowDownIcon.alt = "Seta para baixo";
  arrowDownIcon.style.transform = "rotate(90deg)";
  arrowDownIcon.style.width = "25px";
  arrowDownIcon.style.height = "25px";
  arrowDown.appendChild(arrowDownIcon);

  const previewsContainer = document.createElement("div");
  previewsContainer.classList.add("product-desktop-carousel-previews");

  let startIndex = 0;

  function updateCarousel() {
    previewsContainer.innerHTML = "";

    const visibleImages = images.slice(startIndex, startIndex + 4);
    visibleImages.forEach((image, index) => {
      const preview = document.createElement("img");
      preview.src = image;
      preview.alt = `Preview ${index + 1}`;
      preview.classList.add("product-desktop-carousel-preview");
      preview.style.width = "100px";
      preview.style.height = "100px";

      preview.addEventListener("click", () => {
        document.getElementById("product-image").src = image;
      });

      previewsContainer.appendChild(preview);
    });

    arrowUp.disabled = startIndex === 0;
    arrowDown.disabled = startIndex + 4 >= images.length;
  }

  arrowUp.addEventListener("click", () => {
    if (startIndex > 0) {
      startIndex -= 1;
      updateCarousel();
    }
  });

  arrowDown.addEventListener("click", () => {
    if (startIndex + 4 < images.length) {
      startIndex += 1;
      updateCarousel();
    }
  });

  updateCarousel();

  carouselContainer.appendChild(arrowUp);
  carouselContainer.appendChild(previewsContainer);
  carouselContainer.appendChild(arrowDown);

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

    const desktopCarousel = renderDesktopCarousel(item.images || []);
    document.getElementById("product-desktop-carousel").appendChild(desktopCarousel);

    const mobileCarousel = renderMobileCarousel(item.images || []);
    document.getElementById("product-mobile-carousel").appendChild(mobileCarousel);
  } else {
    document.getElementById("product-details").innerHTML = "<p>Produto não encontrado.</p>";
  }
};

document.addEventListener("DOMContentLoaded", () => {
  renderProductDetails();
});
