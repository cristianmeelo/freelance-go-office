const produtosToggle = document.getElementById("produtos-menu");

const products = [
  {
    category: "Grampeadores e extratores",
    itens: ["Extrator", "Grampeador Metal", "Grampeadores Plásticos"],
  },
  {
    category: "Grampos",
    itens: ["Grampo 26/6", "Grampo 23/13", "Grampo Cobreado"],
  },
  {
    category: "Lápis e Apontadores",
    itens: ["Lápis HB", "Lápis de Cor", "Apontador Simples", "Apontador com Depósito"],
  },
  {
    category: "Lapiseiras e Grafites",
    itens: ["Lapiseira 0.5mm", "Lapiseira 0.7mm", "Grafite 0.5mm", "Grafite 0.7mm"],
  },
  {
    category: "Livros e Impressos Fiscais",
    itens: ["Caderno de Notas", "Livro Caixa", "Bloco de Recibos", "Notas Fiscais"],
  },
  {
    category: "Organização",
    itens: ["Divisórias", "Etiquetas Adesivas", "Clipes de Papel", "Organizadores de Mesa"],
  },
  {
    category: "Papel",
    itens: ["Papel Sulfite A4", "Papel Colorido", "Papel Cartão", "Papel Vegetal"],
  },
  {
    category: "Pastas e Acessórios",
    itens: ["Pasta Plástica", "Pasta Suspensa", "Elástico para Documentos", "Porta-Documentos"],
  },
];

const categoriesMenu = document.getElementById("categories-menu");

export function renderCategories() {
  products.forEach((product) => {
    const categoryItem = document.createElement("li");
    categoryItem.classList.add("list-menu__subcategory");
    categoryItem.innerHTML = `
      <label class="category-toggle">${product.category}</label>
      <ul class="submenu" style="display: none;"></ul>
    `;

    categoriesMenu.appendChild(categoryItem);

    const submenu = categoryItem.querySelector(".submenu");

    product.itens.forEach((item) => {
      const subItem = document.createElement("li");
      subItem.classList.add("submenu-item"); // Adiciona a classe ao li
      subItem.innerHTML = `<a href="#" class="submenu-link">${item}</a>`;
      submenu.appendChild(subItem);

      // Adiciona evento de clique para destacar o item selecionado
      subItem.addEventListener("click", (event) => {
        event.preventDefault(); // Previne o redirecionamento do link

        // Remove a classe de seleção de todos os itens do submenu
        submenu.querySelectorAll("li").forEach((li) => {
          li.classList.remove("selected");
        });

        // Adiciona a classe ao item clicado
        subItem.classList.add("selected");
        console.log(`Item selecionado: ${item}`);
      });
    });

    const categoryToggle = categoryItem.querySelector(".category-toggle");
    categoryToggle.addEventListener("click", () => {
      submenu.style.display = submenu.style.display === "none" ? "block" : "none";
    });
  });
}
