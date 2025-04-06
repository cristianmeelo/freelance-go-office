const products = [
  {
    id: "prod-001",
    product: "Grampeadores e Extratores",
    subcategories: [
      {
        id: "subcat-001",
        name: "Grampeador Manual",
        details: [
          {
            id: 1,
            image: "../img/mock.png",
            title: "Grampeador Branco Soft Touch - 100 Folhas",
            description: "Perfeito para escritórios, este grampeador possui capacidade de 100 folhas e um toque macio que garante conforto no uso diário.",
          },
          {
            id: 2,
            image: "../img/mock.png",
            title: "Grampeador Portátil de Alta Precisão",
            description: "Compacto e eficiente, este grampeador é ideal para profissionais que precisam de alta precisão e portabilidade.",
          },
        ],
      },
      {
        id: "subcat-002",
        name: "Grampeador Elétrico",
        details: [
          {
            id: 3,
            image: "../img/mock.png",
            title: "Grampeador Profissional para Grandes Volumes",
            description: "Produto robusto que combina qualidade e desempenho para grampear grandes volumes de papel com facilidade e rapidez.",
          },
          {
            id: 4,
            image: "../img/mock.png",
            title: "Grampeador Automático - Alta Velocidade",
            description: "Modernize sua rotina com este grampeador automático que proporciona alta velocidade e eficiência em tarefas repetitivas.",
          },
        ],
      },
      {
        id: "subcat-003",
        name: "Extrator de Grampos",
        details: [
          {
            id: 5,
            image: "../img/mock.png",
            title: "Grampeador Preto Elegante - 50 Folhas",
            description: "Um grampeador sofisticado e funcional para uso diário, com capacidade para grampear até 50 folhas de forma simples.",
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
        details: [
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
        details: [
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
        details: [
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
        details: [
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
        details: [
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
        details: [
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
        details: [
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
        details: [
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
        details: [
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
        details: [
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
        details: [
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
        details: [
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
        details: [
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
        details: [
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
        details: [
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
        details: [
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
        details: [
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
        details: [
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
        details: [
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
