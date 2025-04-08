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
            thumbnail: "../img/mock.png",
            images: ["../img/mock.png", "../img/mock_2.png", "../img/mock.png", "../img/mock.png", "../img/mock.png", "../img/mock.png", "../img/mock_2.png", "../img/mock.png"],
            title: "Grampeador Manual XPTO 1",
            description:
              "Os grampeadores da marca Go Oﬃce modelo Soft Touch possuem um sistema mecânico que reduz em até 60% o esforço para grampear. O desing moderno permite o abastecimento frontal do grampo, de forma simples e rápida. Possui ainda um botão para remover facilmente os grampos que ﬁcam presos. A profundidade de utilização é ajustável, podendo atingir 45mm. O corpo é fabricado em metal e suporte em plástico de alta resistência, alinhado a um design moderno. A base de borracha protege a superfície de apoio, evitando assim daniﬁcar a base onde é utilizado. Este modelo de grampeador admite a utlização de dois modelos de grampos; 23/6 ou 23/13 20px Próxima Nova Rg Bold 20pt Próxima Nova Rg 14pt O grampeador modelo GO 5886 é perfeito para utilizar diariamente com capacidade de grampear até 100 folhas. Produtos 10px Alﬁnetes, Clipes e Cochetes Capacidade de carga; Até 100 grampos (tamanhos 23/6 ou 23/13). PRODUTOS MARCA CANAIS DE VENDA ACESSE O CATÁLOGO Tamanho do produto; 310 x 80 x 230mm - Profundidade; 45mm",
            technicalSpecifications: {
              segment: "Escritório",
              family: "Grampeadores",
              subfamily: "Manuais",
              brand: "XPTO",
            },
          },
          {
            id: 2,
            thumbnail: "../img/mock.png",
            images: ["../img/mock.png", "../img/mock.png"],
            title: "Grampeador Manual XPTO 2",
            description: "Design ergonômico com menor esforço ao grampear pilhas de papel.",
            technicalSpecifications: {
              segment: "Escritório",
              family: "Grampeadores",
              subfamily: "Manuais",
              brand: "XPTO",
            },
          },
          {
            id: 3,
            thumbnail: "../img/mock.png",
            title: "Grampeador Manual XPTO 3",
            description: "Estrutura resistente de aço para durabilidade em uso prolongado.",
            technicalSpecifications: {
              segment: "Escritório",
              family: "Grampeadores",
              subfamily: "Manuais",
              brand: "XPTO",
            },
          },
          {
            id: 4,
            thumbnail: "../img/mock.png",
            title: "Grampeador Manual Max Flex",
            description: "Inclui regulagem de profundidade e grampeia até 40 folhas por vez.",
            technicalSpecifications: {
              segment: "Escritório",
              family: "Grampeadores",
              subfamily: "Manuais",
              brand: "Max",
            },
          },
          {
            id: 5,
            thumbnail: "../img/mock.png",
            title: "Grampeador Manual Ultra Precision",
            description: "Ideal para escritórios que buscam eficiência com acabamento premium.",
            technicalSpecifications: {
              segment: "Escritório",
              family: "Grampeadores",
              subfamily: "Manuais",
              brand: "Precision",
            },
          },
          {
            id: 6,
            thumbnail: "../img/mock.png",
            title: "Grampeador Manual ColorLine",
            description: "Disponível em diversas cores vibrantes para um toque de criatividade.",
            technicalSpecifications: {
              segment: "Escritório",
              family: "Grampeadores",
              subfamily: "Manuais",
              brand: "ColorLine",
            },
          },
        ],
      },
      {
        id: "subcat-002",
        name: "Grampeador Elétrico",
        itens: [
          {
            id: 4,
            thumbnail: "../img/mock.png",
            title: "Grampeador Elétrico XPTO 1",
            description: "Descrição do Grampeador Elétrico XPTO 1.",
            technicalSpecifications: {
              segment: "Escritório",
              family: "Grampeadores",
              subfamily: "Elétricos",
              brand: "XPTO",
            },
          },
        ],
      },
      {
        id: "subcat-003",
        name: "Grampeador Industrial",
        itens: [
          {
            id: 101,
            thumbnail: "../img/mock.png",
            title: "Grampeador Industrial Heavy Duty",
            description: "Resistente para grandes volumes e demandas industriais.",
          },
        ],
      },
      {
        id: "subcat-004",
        name: "Grampeador Portátil",
        itens: [
          {
            id: 102,
            thumbnail: "../img/mock.png",
            title: "Grampeador Portátil Compacto",
            description: "Leve e prático para transporte fácil.",
          },
        ],
      },
      {
        id: "subcat-005",
        name: "Extrator de Grampos",
        itens: [
          {
            id: 103,
            thumbnail: "../img/mock.png",
            title: "Extrator de Grampos Ergonômico",
            description: "Facilidade ao retirar grampos sem danificar documentos.",
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
            thumbnail: "../img/mock.png",
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
            thumbnail: "../img/mock.png",
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
            thumbnail: "../img/mock.png",
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
            thumbnail: "../img/mock.png",
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
            thumbnail: "../img/mock.png",
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
            thumbnail: "../img/mock.png",
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
            thumbnail: "../img/mock.png",
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
            thumbnail: "../img/mock.png",
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
            thumbnail: "../img/mock.png",
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
            thumbnail: "../img/mock.png",
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
            thumbnail: "../img/mock.png",
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
            thumbnail: "../img/mock.png",
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
            thumbnail: "../img/mock.png",
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
            thumbnail: "../img/mock.png",
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
            thumbnail: "../img/mock.png",
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
            thumbnail: "../img/mock.png",
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
            thumbnail: "../img/mock.png",
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
            thumbnail: "../img/mock.png",
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
            thumbnail: "../img/mock.png",
            title: "Fones Bluetooth",
            description: "Som de alta qualidade sem fios.",
          },
        ],
      },
    ],
  },
];

export default products;
