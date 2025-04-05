const productsWithoutCat = [
  {
    id: 1,
    image: "../img/mock.png",
    title: "Grampeador 100 Folhas Branco Soft Touch GoOffice GO 5886",
    code: "031627",
    description:
      "Os grampeadores da marca Go Oﬃce modelo Soft Touch possuem um sistema mecânico que reduz em até 60% o esforço para grampear. O design moderno permite o abastecimento frontal do grampo, de forma simples e rápida. Possui ainda um botão para remover facilmente os grampos que ﬁcam presos. A profundidade de utilização é ajustável, podendo atingir 45mm. O corpo é fabricado em metal e suporte em plástico de alta resistência, alinhado a um design moderno.",
    technicalSpecifications: {
      segment: "Office",
      family: "Staplers",
      subfamily: "High Capacity Staplers",
      brand: "GoOffice",
    },
  },
  {
    id: 2,
    image: "../img/mock.png",
    title: "Portable High Precision Stapler",
    code: "048291",
    description: "Compact and efficient, this stapler is ideal for professionals who need high precision and portability.",
    technicalSpecifications: {
      segment: "Portable",
      family: "Staplers",
      subfamily: "Compact Staplers",
      brand: "GoOffice",
    },
  },
  {
    id: 3,
    image: "../img/mock.png",
    title: "Professional Stapler for Large Volumes",
    code: "059384",
    description: "A robust product that combines quality and performance to staple large volumes of paper with ease and speed.",
    technicalSpecifications: {
      segment: "Industrial",
      family: "Staplers",
      subfamily: "Professional Staplers",
      brand: "ProGramp",
    },
  },
  {
    id: 4,
    image: "../img/mock.png",
    title: "Automatic Stapler - High Speed",
    code: "072815",
    description: "Modernize your routine with this automatic stapler that provides high speed and efficiency for repetitive tasks.",
    technicalSpecifications: {
      segment: "Automation",
      family: "Staplers",
      subfamily: "Automatic Staplers",
      brand: "QuickStaple",
    },
  },
  {
    id: 5,
    image: "../img/mock.png",
    title: "Elegant Black Stapler - 50 Sheets",
    code: "091637",
    description: "A sophisticated and functional stapler for daily use, with a capacity to staple up to 50 sheets effortlessly.",
    technicalSpecifications: {
      segment: "Office",
      family: "Staplers",
      subfamily: "Elegant Staplers",
      brand: "StyleStaple",
    },
  },
  {
    id: 6,
    image: "../img/mock.png",
    title: "Heavy Duty Industrial Stapler",
    code: "110492",
    description: "An essential tool for industrial environments, designed for durability and performance in heavy-duty tasks.",
    technicalSpecifications: {
      segment: "Industrial",
      family: "Staplers",
      subfamily: "Heavy Duty Staplers",
      brand: "ProGramp",
    },
  },
  {
    id: 7,
    image: "../img/mock.png",
    title: "Colorful Stapler - Style and Practicality",
    code: "120548",
    description: "Add a touch of color to your workspace with this fun and practical stapler.",
    technicalSpecifications: {
      segment: "Office",
      family: "Staplers",
      subfamily: "Decorative Staplers",
      brand: "ColorStaple",
    },
  },
  {
    id: 8,
    image: "../img/mock.png",
    title: "Compact Stapler for Travel",
    code: "131764",
    description: "Small and lightweight, this stapler is ideal for professionals who need functionality while on the move.",
    technicalSpecifications: {
      segment: "Portable",
      family: "Staplers",
      subfamily: "Travel Staplers",
      brand: "GoOffice",
    },
  },
  {
    id: 9,
    image: "../img/mock.png",
    title: "Multi-Purpose Stapler 2-in-1",
    code: "145839",
    description: "This versatile stapler also works as a paper puncher, making your work routine easier.",
    technicalSpecifications: {
      segment: "Office",
      family: "Staplers",
      subfamily: "Multi-Purpose Staplers",
      brand: "MultiToolStapler",
    },
  },
  {
    id: 10,
    image: "../img/mock.png",
    title: "Elegant Desk Stapler - High Capacity",
    code: "156204",
    description: "With an elegant and modern design, this stapler is perfect for sophisticated offices and offers high capacity.",
    technicalSpecifications: {
      segment: "Office",
      family: "Staplers",
      subfamily: "Desk Staplers",
      brand: "OfficeElegance",
    },
  },
  {
    id: 11,
    image: "../img/mock.png",
    title: "Stapler for Cardstock and Graphic Materials",
    code: "169582",
    description: "Perfect for graphic materials, this stapler is compatible with thicker papers and ensures precise results.",
    technicalSpecifications: {
      segment: "Graphic",
      family: "Staplers",
      subfamily: "Cardstock Staplers",
      brand: "GraphStapler",
    },
  },
  {
    id: 12,
    image: "../img/mock.png",
    title: "Ergonomic Stapler for Prolonged Use",
    code: "178394",
    description: "Designed to provide comfort during extended tasks, with ergonomics and efficiency for daily use.",
    technicalSpecifications: {
      segment: "Office",
      family: "Staplers",
      subfamily: "Ergonomic Staplers",
      brand: "ErgoStaple",
    },
  },
];

function renderProducts() {
  const container = document.getElementById("products-list");
  const contentHTML = productsWithoutCat
    .map(
      (product) => `
        <div class="product-item">
          <a href="./product.html?id=${product.id}">
            <img src="${product.image}" alt="${product.description}" />
          </a>
          <p title="${product.description}">${product.description}</p>
        </div>
      `
    )
    .join("");
  container.innerHTML = contentHTML;
}

document.addEventListener("DOMContentLoaded", renderProducts);
