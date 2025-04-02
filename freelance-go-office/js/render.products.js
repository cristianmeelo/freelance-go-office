const products = [
  {
    image: "../img/mock.png",
    description: "Grampeador 100 Folhas Branco Soft Touch | GoOffice GO 5886",
  },
  {
    image: "../img/mock.png",
    description: "Produto 2 - Descrição completa aqui.",
  },
  {
    image: "../img/mock.png",
    description:
      "Produto 3 - Este é um produto incrível que oferece uma combinação perfeita de qualidade e desempenho. Ideal para aqueles que buscam eficiência e durabilidade no uso diário. Seja para o trabalho ou para o lazer, ele atende a todas as necessidades com excelência. Não perca a chance de aproveitar esta oportunidade única de adquirir um produto inovador, prático e extremamente confiável. Recomendado para quem valoriza o melhor custo-benefício do mercado. Teste hoje e descubra por si mesmo a diferença que ele pode fazer em sua rotina!",
  },
  {
    image: "../img/mock.png",
    description: "Produto 4 - Descrição completa aqui.",
  },
  {
    image: "../img/mock.png",
    description: "Produto 5 - Descrição completa aqui.",
  },
  {
    image: "../img/mock.png",
    description: "Produto 6 - Descrição completa aqui.",
  },
  {
    image: "../img/mock.png",
    description: "Produto 7 - Descrição completa aqui.",
  },
];

function renderProducts() {
  const container = document.getElementById("products-list");
  const contentHTML = products
    .map(
      (product) => `
        <div class="product-item">
          <img src="${product.image}" alt="${product.description}" width="180" />
          <p title="${product.description}">${product.description}</p>
        </div>
      `
    )
    .join("");
  container.innerHTML = contentHTML;
}

document.addEventListener("DOMContentLoaded", renderProducts);
