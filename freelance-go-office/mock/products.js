const products = [
  {
    id: "prod-001",
    product: "Grampeadores e Extratores",
    subcategories: [
      {
        id: "subcat-001",
        name: "Grampeador Manual",
        itens: [
          {
            id: 1,
            image: "../img/mock.png",
            title: "Grampeador Manual XPTO 1",
            description: "Compacto e eficiente para uso diário, perfeito para pequenas demandas.",
          },
          {
            id: 2,
            image: "../img/mock.png",
            title: "Grampeador Manual XPTO 2",
            description: "Design ergonômico com menor esforço ao grampear pilhas de papel.",
          },
          {
            id: 3,
            image: "../img/mock.png",
            title: "Grampeador Manual XPTO 3",
            description: "Estrutura resistente de aço para durabilidade em uso prolongado.",
          },
          {
            id: 4,
            image: "../img/mock.png",
            title: "Grampeador Manual Max Flex",
            description: "Inclui regulagem de profundidade e grampeia até 40 folhas por vez.",
          },
          {
            id: 5,
            image: "../img/mock.png",
            title: "Grampeador Manual Ultra Precision",
            description: "Ideal para escritórios que buscam eficiência com acabamento premium.",
          },
          {
            id: 6,
            image: "../img/mock.png",
            title: "Grampeador Manual ColorLine",
            description: "Disponível em diversas cores vibrantes para um toque de criatividade.",
          },
          {
            id: 7,
            image: "../img/mock.png",
            title: "Grampeador Manual Compact Pro",
            description: "Leve e portátil, fácil de levar para qualquer lugar.",
          },
          {
            id: 8,
            image: "../img/mock.png",
            title: "Grampeador Manual Soft Grip",
            description: "Pegada macia e confortável, ideal para longas sessões de trabalho.",
          },
          {
            id: 9,
            image: "../img/mock.png",
            title: "Grampeador Manual Multi-Angle",
            description: "Grampeia em diferentes ângulos, proporcionando flexibilidade.",
          },
          {
            id: 10,
            image: "../img/mock.png",
            title: "Grampeador Manual Heavy Duty",
            description: "Capaz de grampear até 80 folhas com facilidade.",
          },
          {
            id: 11,
            image: "../img/mock.png",
            title: "Grampeador Manual Eco-Friendly",
            description: "Produzido com materiais recicláveis para minimizar impacto ambiental.",
          },
          {
            id: 12,
            image: "../img/mock.png",
            title: "Grampeador Manual Smart Lock",
            description: "Sistema de trava inteligente para maior segurança ao armazenar.",
          },
        ],
      },
      {
        id: "subcat-002",
        name: "Grampeador Elétrico",
        itens: [
          {
            id: 4,
            image: "../img/mock.png",
            title: "Grampeador Elétrico XPTO 1",
            description: "Descrição do Grampeador Elétrico XPTO 1.",
          },
        ],
      },
      {
        id: "subcat-003",
        name: "Grampeador Grampos",
        itens: [
          {
            id: 5,
            image: "../img/mock.png",
            title: "Grampeador Grampos XPTO",
            description: "Descrição do Grampeador Grampos XPTO.",
          },
        ],
      },
    ],
  },
  {
    id: "prod-002",
    product: "Papelaria",
    subcategories: [
      {
        id: "subcat-004",
        name: "Canetas",
        itens: [
          {
            id: 6,
            image: "../img/mock.png",
            title: "Caneta Azul de Precisão",
            description: "Ideal para escrita clara e precisa em qualquer superfície.",
          },
        ],
      },
      {
        id: "subcat-005",
        name: "Lápis",
        itens: [
          {
            id: 7,
            image: "../img/mock.png",
            title: "Lápis HB Durável",
            description: "Feito para durar, ótimo para desenho e escrita.",
          },
        ],
      },
      {
        id: "subcat-006",
        name: "Borracha",
        itens: [
          {
            id: 8,
            image: "../img/mock.png",
            title: "Borracha Branca de Alta Precisão",
            description: "Remove traços de grafite com facilidade e precisão.",
          },
        ],
      },
    ],
  },
  {
    id: "prod-003",
    product: "Organização",
    subcategories: [
      {
        id: "subcat-007",
        name: "Pastas de Arquivo",
        itens: [
          {
            id: 9,
            image: "../img/mock.png",
            title: "Pasta de Arquivo Transparente",
            description: "Organize seus documentos de forma prática e profissional.",
          },
        ],
      },
      {
        id: "subcat-008",
        name: "Caixas Organizadoras",
        itens: [
          {
            id: 10,
            image: "../img/mock.png",
            title: "Caixa Organizadora Grande",
            description: "Perfeita para guardar itens com segurança e praticidade.",
          },
        ],
      },
    ],
  },
  {
    id: "prod-004",
    product: "Móveis de Escritório",
    subcategories: [
      {
        id: "subcat-009",
        name: "Cadeiras Ergonômicas",
        itens: [
          {
            id: 11,
            image: "../img/mock.png",
            title: "Cadeira Ergonômica Confortável",
            description: "Design moderno e apoio lombar para uso prolongado.",
          },
        ],
      },
      {
        id: "subcat-010",
        name: "Mesas de Escritório",
        itens: [
          {
            id: 12,
            image: "../img/mock.png",
            title: "Mesa de Escritório Ajustável",
            description: "Altura ajustável para maior conforto e praticidade.",
          },
        ],
      },
    ],
  },
  {
    id: "prod-005",
    product: "Tecnologia",
    subcategories: [
      {
        id: "subcat-011",
        name: "Notebooks",
        itens: [
          {
            id: 13,
            image: "../img/mock.png",
            title: "Notebook Potente",
            description: "Equipado com processador rápido e tela HD.",
          },
        ],
      },
      {
        id: "subcat-012",
        name: "Monitores",
        itens: [
          {
            id: 14,
            image: "../img/mock.png",
            title: "Monitor UltraWide",
            description: "Proporcione melhor produtividade com tela ampla.",
          },
        ],
      },
      {
        id: "subcat-013",
        name: "Teclados e Mouses",
        itens: [
          {
            id: 15,
            image: "../img/mock.png",
            title: "Teclado Mecânico RGB",
            description: "Desempenho avançado para profissionais e gamers.",
          },
        ],
      },
    ],
  },
  {
    id: "prod-006",
    product: "Limpeza",
    subcategories: [
      {
        id: "subcat-014",
        name: "Detergentes",
        itens: [
          {
            id: 16,
            image: "../img/mock.png",
            title: "Detergente Concentrado",
            description: "Remove sujeira difícil com facilidade.",
          },
        ],
      },
      {
        id: "subcat-015",
        name: "Luvas de Limpeza",
        itens: [
          {
            id: 17,
            image: "../img/mock.png",
            title: "Luvas de Borracha Resistente",
            description: "Proteção extra para tarefas de limpeza.",
          },
        ],
      },
      {
        id: "subcat-016",
        name: "Esponjas",
        itens: [
          {
            id: 18,
            image: "../img/mock.png",
            title: "Esponja Multiuso",
            description: "Excelente para limpeza de superfícies variadas.",
          },
        ],
      },
    ],
  },
  {
    id: "prod-007",
    product: "Copa e Cozinha",
    subcategories: [
      {
        id: "subcat-017",
        name: "Utensílios de Cozinha",
        itens: [
          {
            id: 19,
            image: "../img/mock.png",
            title: "Conjunto de Utensílios",
            description: "Completo e durável para sua cozinha.",
          },
        ],
      },
      {
        id: "subcat-018",
        name: "Louças",
        itens: [
          {
            id: 20,
            image: "../img/mock.png",
            title: "Pratos de Porcelana",
            description: "Design elegante e resistente.",
          },
        ],
      },
      {
        id: "subcat-019",
        name: "Talheres",
        itens: [
          {
            id: 21,
            image: "../img/mock.png",
            title: "Talheres de Inox Premium",
            description: "Alta qualidade e acabamento impecável.",
          },
        ],
      },
    ],
  },
  {
    id: "prod-008",
    product: "Eletrônicos",
    subcategories: [
      {
        id: "subcat-020",
        name: "Celulares",
        itens: [
          {
            id: 22,
            image: "../img/mock.png",
            title: "Smartphone Avançado",
            description: "Desempenho e tecnologia de ponta.",
          },
        ],
      },
      {
        id: "subcat-021",
        name: "Tablets",
        itens: [
          {
            id: 23,
            image: "../img/mock.png",
            title: "Tablet Compacto",
            description: "Ideal para trabalho e entretenimento.",
          },
        ],
      },
      {
        id: "subcat-022",
        name: "Fones de Ouvido",
        itens: [
          {
            id: 24,
            image: "../img/mock.png",
            title: "Fones Bluetooth",
            description: "Som de alta qualidade sem fios.",
          },
        ],
      },
    ],
  },
];

export default products;
