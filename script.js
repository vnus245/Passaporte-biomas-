/* =========================
   🧩 SESSÃO 1
   CONFIGURAÇÃO
========================= */

let dificuldade = null;
let paisAtual = 0;
let perguntaAtual = 0;

let vidas = 3;
let pontuacao = 0;
let acertos = 0;
let erros = 0;
let especialAcertada = false;


/* =========================
   🧩 SESSÃO 2
   PAÍSES
========================= */

const paises = [

    {
        id: "brasil",
        nome: "Brasil",
        bandeira: "🇧🇷",
        regiao: "América do Sul"
    },

    {
        id: "argentina",
        nome: "Argentina",
        bandeira: "🇦🇷",
        regiao: "América do Sul"
    },

    {
        id: "uruguai",
        nome: "Uruguai",
        bandeira: "🇺🇾",
        regiao: "América do Sul"
    },

    {
        id: "estadosUnidos",
        nome: "Estados Unidos",
        bandeira: "🇺🇸",
        regiao: "América do Norte"
    },

    {
        id: "espanha",
        nome: "Espanha",
        bandeira: "🇪🇸",
        regiao: "Europa"
    },

    {
        id: "franca",
        nome: "França",
        bandeira: "🇫🇷",
        regiao: "Europa"
    },

    {
        id: "alemanha",
        nome: "Alemanha",
        bandeira: "🇩🇪",
        regiao: "Europa"
    },

    {
        id: "italia",
        nome: "Itália",
        bandeira: "🇮🇹",
        regiao: "Europa"
    },

    {
        id: "reinoUnido",
        nome: "Reino Unido",
        bandeira: "🇬🇧",
        regiao: "Europa"
    },

    {
        id: "islandia",
        nome: "Islândia",
        bandeira: "🇮🇸",
        regiao: "Europa"
    }

];/* =========================
   🧩 SESSÃO 3
   BANCO DE PERGUNTAS
========================= */

            const paises = {

  // =========================================================
  // 🇧🇷 BRASIL
  // =========================================================

  brasil: {
    nome: "Brasil",
    bandeira: "🇧🇷",

    perguntas: [

      // 🟢 FÁCIL
      {
        dificuldade: "facil",
        categoria: "Bioma",
        pergunta: "Qual é o maior bioma do Brasil?",
        alternativas: {
          A: "Amazônia",
          B: "Caatinga",
          C: "Pantanal",
          D: "Pampa"
        },
        resposta: "A",
        pontos: 10
      },

      {
        dificuldade: "facil",
        categoria: "Vegetação",
        pergunta: "Qual planta tem grande importância na culinária brasileira?",
        alternativas: {
          A: "Oliveira",
          B: "Mandioca",
          C: "Trigo",
          D: "Tâmara"
        },
        resposta: "B",
        pontos: 10
      },

      {
        dificuldade: "facil",
        categoria: "Fauna",
        pergunta: "Qual destes animais faz parte da fauna brasileira?",
        alternativas: {
          A: "Canguru",
          B: "Urso-polar",
          C: "Onça-pintada",
          D: "Panda"
        },
        resposta: "C",
        pontos: 10
      },

      // 🟡 MÉDIO
      {
        dificuldade: "medio",
        categoria: "Clima",
        pergunta: "Qual clima predomina em grande parte da Amazônia?",
        alternativas: {
          A: "Polar",
          B: "Equatorial",
          C: "Mediterrâneo",
          D: "Desértico"
        },
        resposta: "B",
        pontos: 20
      },

      {
        dificuldade: "medio",
        categoria: "Bioma",
        pergunta: "Qual bioma é conhecido por períodos de seca e vegetação adaptada à falta de água?",
        alternativas: {
          A: "Caatinga",
          B: "Pampa",
          C: "Pantanal",
          D: "Mata Atlântica"
        },
        resposta: "C",
        pontos: 20
      },

      {
        dificuldade: "medio",
        categoria: "Fauna",
        pergunta: "Qual animal é muito associado ao Pantanal?",
        alternativas: {
          A: "Girafa",
          B: "Onça-pintada",
          C: "Rena",
          D: "Foca"
        },
        resposta: "D",
        pontos: 20
      },

      // 🔴 DIFÍCIL
      {
        dificuldade: "dificil",
        categoria: "Vegetação",
        pergunta: "Qual característica é comum na vegetação do Cerrado?",
        alternativas: {
          A: "Árvores e plantas adaptadas ao período seco",
          B: "Árvores cobertas de neve",
          C: "Apenas plantas aquáticas",
          D: "Vegetação exclusivamente de coníferas"
        },
        resposta: "A",
        pontos: 30
      },

      {
        dificuldade: "dificil",
        categoria: "Cultura",
        pergunta: "Qual destes alimentos possui forte influência indígena na culinária brasileira?",
        alternativas: {
          A: "Sushi",
          B: "Mandioca",
          C: "Paella",
          D: "Croissant"
        },
        resposta: "B",
        pontos: 30
      },

      {
        dificuldade: "dificil",
        categoria: "Sociedade",
        pergunta: "Qual grupo possui uma relação histórica e cultural muito importante com os biomas brasileiros?",
        alternativas: {
          A: "Povos indígenas",
          B: "Vikings",
          C: "Samurais",
          D: "Faraós"
        },
        resposta: "D",
        pontos: 30
      },

      // ⭐ ESPECIAL
      {
        dificuldade: "especial",
        categoria: "Biomas",
        pergunta: "Qual alternativa apresenta somente biomas brasileiros?",
        alternativas: {
          A: "Amazônia, Cerrado e Caatinga",
          B: "Saara, Tundra e Amazônia",
          C: "Taiga, Tundra e Pampa",
          D: "Savana africana, Taiga e Cerrado"
        },
        resposta: "A",
        pontos: 50
      }
    ],

    referencias: [
      "🍹 Referência: 'É o Brasil!'",
      "🗿 Referência a memes envolvendo situações inesperadas no Brasil."
    ],

    curiosidades: [
      "🌳 O Brasil possui seis biomas terrestres principais.",
      "🦜 O país possui uma das maiores biodiversidades do mundo.",
      "🥥 A mandioca possui grande importância na culinária brasileira."
    ]
  },


  // =========================================================
  // 🇦🇷 ARGENTINA
  // =========================================================

  argentina: {
    nome: "Argentina",
    bandeira: "🇦🇷",

    perguntas: [

      // 🟢 FÁCIL
      {
        dificuldade: "facil",
        categoria: "Fauna",
        pergunta: "Qual animal pode ser encontrado na Argentina?",
        alternativas: {
          A: "Canguru",
          B: "Guanaco",
          C: "Panda",
          D: "Girafa"
        },
        resposta: "B",
        pontos: 10
      },

      {
        dificuldade: "facil",
        categoria: "Vegetação",
        pergunta: "Qual formação vegetal ocupa grandes áreas das planícies argentinas?",
        alternativas: {
          A: "Floresta amazônica",
          B: "Tundra",
          C: "Manguezal",
          D: "Pampas"
        },
        resposta: "C",
        pontos: 10
      },

      {
        dificuldade: "facil",
        categoria: "Clima",
        pergunta: "Qual região argentina é conhecida pelas baixas temperaturas?",
        alternativas: {
          A: "Patagônia",
          B: "Amazônia",
          C: "Caribe",
          D: "Saara"
        },
        resposta: "A",
        pontos: 10
      },

      // 🟡 MÉDIO
      {
        dificuldade: "medio",
        categoria: "Bioma",
        pergunta: "Os Pampas são conhecidos principalmente por:",
        alternativas: {
          A: "Florestas tropicais",
          B: "Campos e planícies",
          C: "Desertos de gelo",
          D: "Manguezais"
        },
        resposta: "D",
        pontos: 20
      },

      {
        dificuldade: "medio",
        categoria: "Fauna",
        pergunta: "Qual ave é encontrada na região dos Andes?",
        alternativas: {
          A: "Condor-andino",
          B: "Avestruz africano",
          C: "Pinguim-imperador",
          D: "Tucano amazônico"
        },
        resposta: "A",
        pontos: 20
      },

      {
        dificuldade: "medio",
        categoria: "Clima",
        pergunta: "A Patagônia apresenta principalmente condições:",
        alternativas: {
          A: "Tropicais",
          B: "Equatoriais",
          C: "Frias e secas em várias áreas",
          D: "Desérticas tropicais"
        },
        resposta: "B",
        pontos: 20
      },

      // 🔴 DIFÍCIL
      {
        dificuldade: "dificil",
        categoria: "Bioma",
        pergunta: "Qual ambiente aparece em regiões áridas do oeste argentino?",
        alternativas: {
          A: "Floresta equatorial",
          B: "Manguezal",
          C: "Tundra tropical",
          D: "Ambientes áridos e semiáridos"
        },
        resposta: "C",
        pontos: 30
      },

      {
        dificuldade: "dificil",
        categoria: "Fauna",
        pergunta: "O condor-andino está principalmente associado a qual região?",
        alternativas: {
          A: "Amazônia",
          B: "Cordilheira dos Andes",
          C: "Oceania",
          D: "Deserto africano"
        },
        resposta: "D",
        pontos: 30
      },

      {
        dificuldade: "dificil",
        categoria: "Sociedade",
        pergunta: "Qual tradição argentina é muito relacionada aos gaúchos?",
        alternativas: {
          A: "Vida rural e criação de gado",
          B: "Pesca no Ártico",
          C: "Navegação viking",
          D: "Cultivo de arroz tropical"
        },
        resposta: "A",
        pontos: 30
      },

      // ⭐ ESPECIAL
      {
        dificuldade: "especial",
        categoria: "Natureza",
        pergunta: "Qual conjunto apresenta ambientes encontrados na Argentina?",
        alternativas: {
          A: "Amazônia, Pantanal e Caatinga",
          B: "Pampas, Patagônia e Andes",
          C: "Saara, Savana e Taiga",
          D: "Tundra, Amazônia e Cerrado"
        },
        resposta: "B",
        pontos: 50
      }
    ],

    referencias: [
      "⚽ Referência: memes sobre a rivalidade futebolística entre Argentina e Brasil.",
      "🧉 Referência: memes sobre o mate fazer parte do cotidiano argentino."
    ],

    curiosidades: [
      "🏔️ A Argentina possui parte da Cordilheira dos Andes.",
      "🐧 Existem colônias de pinguins na Patagônia.",
      "🥩 A criação de gado possui grande importância no país."
    ]
  },


  // =========================================================
  // 🇺🇾 URUGUAI
  // =========================================================

  uruguai: {
    nome: "Uruguai",
    bandeira: "🇺🇾",

    perguntas: [

      // 🟢 FÁCIL
      {
        dificuldade: "facil",
        categoria: "Fauna",
        pergunta: "Qual animal pode ser encontrado no Uruguai?",
        alternativas: {
          A: "Canguru",
          B: "Panda",
          C: "Capivara",
          D: "Urso-polar"
        },
        resposta: "C",
        pontos: 10
      },

      {
        dificuldade: "facil",
        categoria: "Vegetação",
        pergunta: "Qual tipo de paisagem vegetal é muito comum no Uruguai?",
        alternativas: {
          A: "Campos e pastagens",
          B: "Floresta amazônica",
          C: "Tundra",
          D: "Taiga"
        },
        resposta: "A",
        pontos: 10
      },

      {
        dificuldade: "facil",
        categoria: "Clima",
        pergunta: "O clima do Uruguai é predominantemente:",
        alternativas: {
          A: "Polar",
          B: "Desértico",
          C: "Equatorial",
          D: "Temperado"
        },
        resposta: "B",
        pontos: 10
      },

      // 🟡 MÉDIO
      {
        dificuldade: "medio",
        categoria: "Bioma",
        pergunta: "As paisagens naturais do Uruguai apresentam principalmente:",
        alternativas: {
          A: "Campos",
          B: "Grandes desertos",
          C: "Florestas equatoriais",
          D: "Tundra"
        },
        resposta: "A",
        pontos: 20
      },

      {
        dificuldade: "medio",
        categoria: "Fauna",
        pergunta: "Qual animal também pode ser encontrado em áreas do Uruguai?",
        alternativas: {
          A: "Girafa",
          B: "Urso-polar",
          C: "Capivara",
          D: "Camelo"
        },
        resposta: "D",
        pontos: 20
      },

      {
        dificuldade: "medio",
        categoria: "Clima",
        pergunta: "O Uruguai apresenta estações do ano relativamente bem definidas?",
        alternativas: {
          A: "Não, só existe verão",
          B: "Sim",
          C: "Não, só existe inverno",
          D: "Não existem estações"
        },
        resposta: "C",
        pontos: 20
      },

      // 🔴 DIFÍCIL
      {
        dificuldade: "dificil",
        categoria: "Vegetação",
        pergunta: "Os campos naturais são importantes para qual atividade no Uruguai?",
        alternativas: {
          A: "Extração de gelo",
          B: "Pesca no Ártico",
          C: "Cultivo de plantas tropicais",
          D: "Pecuária"
        },
        resposta: "B",
        pontos: 30
      },

      {
        dificuldade: "dificil",
        categoria: "Bioma",
        pergunta: "O Uruguai está inserido principalmente em uma região de:",
        alternativas: {
          A: "Campos temperados",
          B: "Florestas equatoriais",
          C: "Tundra",
          D: "Desertos tropicais"
        },
        resposta: "A",
        pontos: 30
      },

      {
        dificuldade: "dificil",
        categoria: "Sociedade",
        pergunta: "Qual bebida é muito associada ao cotidiano uruguaio?",
        alternativas: {
          A: "Café turco",
          B: "Suco de manga",
          C: "Mate",
          D: "Chá de gelo"
        },
        resposta: "D",
        pontos: 30
      },

      // ⭐ ESPECIAL
      {
        dificuldade: "especial",
        categoria: "Natureza",
        pergunta: "Qual conjunto representa melhor as características naturais do Uruguai?",
        alternativas: {
          A: "Floresta equatorial, clima polar e ursos",
          B: "Deserto, clima tropical e camelos",
          C: "Campos, clima temperado e fauna de áreas abertas",
          D: "Tundra, gelo permanente e renas"
        },
        resposta: "C",
        pontos: 50
      }
    ],

    referencias: [
      "🧉 Referência: memes sobre o mate estar presente em praticamente qualquer situação.",
      "⚽ Referência: memes sobre a paixão uruguaia pelo futebol."
    ],

    curiosidades: [
      "🌱 Os campos ocupam grande parte da paisagem natural uruguaia.",
      "🧉 O mate possui grande importância cultural.",
      "🏆 O Uruguai venceu a primeira Copa do Mundo, em 1930."
    ]
  },


  // =========================================================
  // 🇺🇸 ESTADOS UNIDOS
  // =========================================================

  estadosUnidos: {
    nome: "Estados Unidos",
    bandeira: "🇺🇸",

    perguntas: [

      // 🟢 FÁCIL
      {
        dificuldade: "facil",
        categoria: "Fauna",
        pergunta: "Qual animal é um símbolo nacional dos Estados Unidos?",
        alternativas: {
          A: "Panda",
          B: "Canguru",
          C: "Onça-pintada",
          D: "Águia-careca"
        },
        resposta: "D",
        pontos: 10
      },

      {
        dificuldade: "facil",
        categoria: "Clima",
        pergunta: "Os Estados Unidos possuem vários tipos de clima?",
        alternativas: {
          A: "Sim",
          B: "Não, apenas tropical",
          C: "Não, apenas polar",
          D: "Não, apenas desértico"
        },
        resposta: "B",
        pontos: 10
      },

      {
        dificuldade: "facil",
        categoria: "Vegetação",
        pergunta: "Qual destas paisagens pode ser encontrada nos Estados Unidos?",
        alternativas: {
          A: "Apenas tundra",
          B: "Apenas desertos",
          C: "Florestas",
          D: "Apenas florestas tropicais"
        },
        resposta: "A",
        pontos: 10
      },

      // 🟡 MÉDIO
      {
        dificuldade: "medio",
        categoria: "Bioma",
        pergunta: "Qual ambiente aparece no sudoeste dos Estados Unidos?",
        alternativas: {
          A: "Floresta amazônica",
          B: "Tundra tropical",
          C: "Manguezal equatorial",
          D: "Desertos"
        },
        resposta: "C",
        pontos: 20
      },

      {
        dificuldade: "medio",
        categoria: "Fauna",
        pergunta: "Qual animal é nativo de partes da América do Norte?",
        alternativas: {
          A: "Bisão-americano",
          B: "Girafa",
          C: "Elefante africano",
          D: "Canguru"
        },
        resposta: "A",
        pontos: 20
      },

      {
        dificuldade: "medio",
        categoria: "Clima",
        pergunta: "Por possuir um território enorme, os Estados Unidos apresentam:",
        alternativas: {
          A: "Apenas clima tropical",
          B: "Grande variedade climática",
          C: "Apenas clima polar",
          D: "Apenas clima mediterrâneo"
        },
        resposta: "D",
        pontos: 20
      },

      // 🔴 DIFÍCIL
      {
        dificuldade: "dificil",
        categoria: "Bioma",
        pergunta: "As sequoias gigantes encontradas na Califórnia fazem parte de quais ambientes?",
        alternativas: {
          A: "Caatinga",
          B: "Florestas temperadas",
          C: "Cerrado",
          D: "Savana africana"
        },
        resposta: "B",
        pontos: 30
      },

      {
        dificuldade: "dificil",
        categoria: "Clima",
        pergunta: "Qual fenômeno pode produzir fortes tempestades e tornados em partes dos Estados Unidos?",
        alternativas: {
          A: "Monções asiáticas",
          B: "Furacões no Ártico",
          C: "Sistemas de tempestades severas",
          D: "Nevascas tropicais"
        },
        resposta: "C",
        pontos: 30
      },

      {
        dificuldade: "dificil",
        categoria: "Sociedade",
        pergunta: "Qual grupo possui culturas tradicionais ligadas a diversas regiões dos Estados Unidos?",
        alternativas: {
          A: "Vikings",
          B: "Faraós",
          C: "Samurais",
          D: "Povos indígenas norte-americanos"
        },
        resposta: "A",
        pontos: 30
      },

      // ⭐ ESPECIAL
      {
        dificuldade: "especial",
        categoria: "Natureza",
        pergunta: "Por que os Estados Unidos possuem tanta diversidade natural?",
        alternativas: {
          A: "Porque possuem grande extensão territorial e diferentes relevos e climas",
          B: "Porque possuem somente clima tropical",
          C: "Porque todo o país é coberto por florestas",
          D: "Porque não existem desertos"
        },
        resposta: "B",
        pontos: 50
      }
    ],

    referencias: [
      "🦅 Referência: memes relacionados a 'freedom' e à águia americana.",
      "🍔 Referência: memes sobre hambúrguer e cultura americana."
    ],

    curiosidades: [
      "🦅 A águia-careca é um símbolo nacional dos Estados Unidos.",
      "🏜️ O país possui grandes áreas desérticas.",
      "🌎 O território apresenta uma enorme variedade de paisagens."
    ]
  },


  // =========================================================
  // 🇪🇸 ESPANHA
  // =========================================================

  espanha: {
    nome: "Espanha",
    bandeira: "🇪🇸",

    perguntas: [

      // 🟢 FÁCIL
      {
        dificuldade: "facil",
        categoria: "Vegetação",
        pergunta: "Qual tipo de vegetação aparece em várias áreas da Espanha?",
        alternativas: {
          A: "Floresta amazônica",
          B: "Vegetação mediterrânea",
          C: "Tundra",
          D: "Taiga siberiana"
        },
        resposta: "B",
        pontos: 10
      },

      {
        dificuldade: "facil",
        categoria: "Fauna",
        pergunta: "Qual animal é encontrado na fauna espanhola?",
        alternativas: {
          A: "Canguru",
          B: "Panda-gigante",
          C: "Lince-ibérico",
          D: "Urso-polar"
        },
        resposta: "D",
        pontos: 10
      },

      {
        dificuldade: "facil",
        categoria: "Clima",
        pergunta: "Qual clima é muito característico de várias regiões da Espanha?",
        alternativas: {
          A: "Mediterrâneo",
          B: "Equatorial",
          C: "Polar",
          D: "Tropical amazônico"
        },
        resposta: "C",
        pontos: 10
      },

      // 🟡 MÉDIO
      {
        dificuldade: "medio",
        categoria: "Bioma",
        pergunta: "A vegetação mediterrânea é adaptada principalmente a:",
        alternativas: {
          A: "Gelo permanente",
          B: "Chuvas constantes",
          C: "Temperaturas polares",
          D: "Verões quentes e secos"
        },
        resposta: "A",
        pontos: 20
      },

      {
        dificuldade: "medio",
        categoria: "Fauna",
        pergunta: "O lince-ibérico é associado principalmente a qual região?",
        alternativas: {
          A: "Austrália",
          B: "Península Ibérica",
          C: "Amazônia",
          D: "Antártida"
        },
        resposta: "C",
        pontos: 20
      },

      {
        dificuldade: "medio",
        categoria: "Vegetação",
        pergunta: "Qual árvore é bastante associada às paisagens mediterrâneas da Espanha?",
        alternativas: {
          A: "Oliveira",
          B: "Sequoia gigante",
          C: "Palmeira amazônica",
          D: "Pinheiro tropical"
        },
        resposta: "B",
        pontos: 20
      },

      // 🔴 DIFÍCIL
      {
        dificuldade: "dificil",
        categoria: "Clima",
        pergunta: "Por que o clima espanhol apresenta diferenças entre suas regiões?",
        alternativas: {
          A: "Porque todo o país possui clima equatorial",
          B: "Porque não existem montanhas",
          C: "Por causa do relevo, altitude e influência do mar",
          D: "Porque todo o país está no deserto"
        },
        resposta: "D",
        pontos: 30
      },

      {
        dificuldade: "dificil",
        categoria: "Bioma",
        pergunta: "Qual formação vegetal pode aparecer em regiões mais secas da Espanha?",
        alternativas: {
          A: "Vegetação mediterrânea adaptada à seca",
          B: "Floresta amazônica",
          C: "Tundra",
          D: "Manguezal tropical"
        },
        resposta: "A",
        pontos: 30
      },

      {
        dificuldade: "dificil",
        categoria: "Sociedade",
        pergunta: "A Espanha possui diversidade cultural e linguística entre suas regiões?",
        alternativas: {
          A: "Não",
          B: "Sim",
          C: "Apenas nas ilhas",
          D: "Apenas nas áreas rurais"
        },
        resposta: "B",
        pontos: 30
      },

      // ⭐ ESPECIAL
      {
        dificuldade: "especial",
        categoria: "Natureza",
        pergunta: "Qual conjunto apresenta características naturais encontradas na Espanha?",
        alternativas: {
          A: "Floresta amazônica, clima equatorial e rios tropicais",
          B: "Tundra, gelo permanente e clima polar",
          C: "Savana africana e clima equatorial",
          D: "Vegetação mediterrânea, montanhas e diferentes tipos de clima"
        },
        resposta: "A",
        pontos: 50
      }
    ],

    referencias: [
      "🥘 Referência: memes sobre a paella quando alguém fala de comida espanhola.",
      "💃 Referência: memes relacionados ao flamenco e à dança espanhola."
    ],

    curiosidades: [
      "🏰 A Espanha possui muitos castelos e construções históricas.",
      "🌿 A vegetação mediterrânea é importante em várias regiões.",
      "🐈 O lince-ibérico é uma espécie emblemática da Península Ibérica."
    ]
  }
};

          
          "Sushi",
                "Tacos",
                "Feijoada"
            ],
            correta: 0,
            referencia: true
        }

    ],


    dificil: [

        {
            pergunta: "Por que o clima da França apresenta diferenças entre suas regiões?",
            categoria: "🌡️ Clima",
            alternativas: [
                "Por causa da influência oceânica, do relevo, da latitude e da distância do mar",
                "Porque todo o território possui exatamente o mesmo relevo",
                "Porque a França está localizada em uma região equatorial",
                "Porque não existem áreas montanhosas no país"
            ],
            correta: 0
        },

        {
            pergunta: "Como os Alpes influenciam as condições ambientais do sudeste da França?",
            categoria: "🌱 Vegetação",
            alternativas: [
                "A altitude provoca temperaturas mais baixas e influencia a distribuição das precipitações",
                "Faz toda a região possuir clima tropical",
                "Impede completamente a formação de rios",
                "Transforma toda a região em um deserto"
            ],
            correta: 0
        },

        {
            pergunta: "Qual destes nomes aparece como personagem em uma famosa história sobre um crítico de culinária?",
            categoria: "🐾 Fauna",
            alternativas: [
                "Anton Ego",
                "Sherlock Holmes",
                "Hércules",
                "Peter Pan"
            ],
            correta: 0,
            referencia: true
        }

    ],


    especial: {

        pergunta: "Qual alternativa reúne corretamente diferentes características naturais encontradas na França?",
        categoria: "🌳 Biomas",
        alternativas: [
            "Clima oceânico, região mediterrânea e áreas montanhosas nos Alpes e Pireneus",
            "Clima equatorial, floresta amazônica e grandes geleiras",
            "Clima polar em todo o território e ausência de montanhas",
            "Clima desértico em todo o país e ausência de rios"
        ],
        correta: 0

    }

},
alemanha: {

facil: [

    {
        pergunta: "Qual é a capital da Alemanha?",
        categoria: "🌳 Biomas",
        alternativas: [
            "Munique",
            "Berlim",
            "Hamburgo",
            "Frankfurt"
        ],
        correta: 1
    },

    {
        pergunta: "Qual tipo de clima predomina em grande parte da Alemanha?",
        categoria: "🌡️ Clima",
        alternativas: [
            "Polar",
            "Equatorial",
            "Temperado",
            "Desértico"
        ],
        correta: 2
    },

    {
        pergunta: "Qual destes animais pode ser encontrado em áreas naturais da Alemanha?",
        categoria: "🐾 Fauna",
        alternativas: [
            "Canguru",
            "Onça-pintada",
            "Panda-gigante",
            "Javali"
        ],
        correta: 3
    }

],


medio: [

    {
        pergunta: "Qual tipo de vegetação é comum em várias regiões da Alemanha?",
        categoria: "🌱 Vegetação",
        alternativas: [
            "Florestas temperadas",
            "Vegetação de desertos quentes",
            "Florestas tropicais",
            "Vegetação de tundra"
        ],
        correta: 0
    },

    {
        pergunta: "Qual formação montanhosa está presente no sul da Alemanha?",
        categoria: "🌳 Biomas",
        alternativas: [
            "Andes",
            "Himalaia",
            "Alpes",
            "Montanhas Rochosas"
        ],
        correta: 2
    },

    {
        pergunta: "Qual destas opções apresenta uma floresta famosa localizada na Alemanha?",
        categoria: "🌱 Vegetação",
        alternativas: [
            "Floresta Amazônica",
            "Floresta Negra",
            "Floresta de Sherwood",
            "Floresta Boreal Canadense"
        ],
        correta: 1,
        referencia: true
    }

],


dificil: [

    {
        pergunta: "Como a localização da Alemanha influencia seu clima?",
        categoria: "🌡️ Clima",
        alternativas: [
            "A posição na Europa Central e a influência do Oceano Atlântico contribuem para um clima temperado com variações regionais",
            "A localização próxima ao Equador faz o país possuir clima equatorial",
            "A proximidade com o Polo Sul provoca clima polar em todo o território",
            "A ausência de influência marítima impede mudanças climáticas"
        ],
        correta: 0
    },

    {
        pergunta: "Como as áreas montanhosas podem influenciar a vegetação da Alemanha?",
        categoria: "🌱 Vegetação",
        alternativas: [
            "As montanhas impedem completamente o crescimento de plantas",
            "A altitude pode alterar temperatura e umidade, favorecendo diferentes tipos de vegetação",
            "As montanhas fazem toda a vegetação ser tropical",
            "O relevo transforma todas as áreas montanhosas em desertos"
        ],
        correta: 1
    },

    {
        pergunta: "Qual destes animais é associado a ambientes naturais encontrados na Alemanha?",
        categoria: "🐾 Fauna",
        alternativas: [
            "Leão",
            "Girafa",
            "Lobo",
            "Canguru"
        ],
        correta: 2
    },

    {
    pergunta: "Qual tipo de vegetação é encontrado em áreas de clima temperado da Alemanha?",
    categoria: "🌳 Biomas",
    alternativas: [
        "Florestas temperadas",
        "Adidas",
        "Florestas tropicais",
        "Vegetação desértica"
    ],
    correta: 0,
    referencia: true
}

],


especial: {

    pergunta: "Qual alternativa reúne corretamente características naturais da Alemanha?",
    categoria: "🌳 Biomas",
    alternativas: [
        "Clima equatorial, florestas tropicais e grandes savanas",
        "Clima polar, tundra em todo o território e ausência de rios",
        "Clima desértico, vegetação de cactos e ausência de montanhas",
        "Clima temperado, florestas temperadas, rios importantes e áreas montanhosas no sul"
    ],
    correta: 3

}

},
italia: {

    facil: [

        {
            pergunta: "Qual é a capital da Itália?",
            categoria: "🌳 Biomas",
            alternativas: [
                "Milão",
                "Roma",
                "Veneza",
                "Nápoles"
            ],
            correta: 1
        },

        {
            pergunta: "Qual tipo de clima é comum em grande parte da Itália?",
            categoria: "🌡️ Clima",
            alternativas: [
                "Clima mediterrâneo",
                "Clima equatorial",
                "Clima polar",
                "Clima desértico"
            ],
            correta: 0
        },

        {
            pergunta: "Qual destes animais pode ser encontrado em áreas naturais da Itália?",
            categoria: "🐾 Fauna",
            alternativas: [
                "Canguru",
                "Onça-pintada",
                "Lobo",
                "Panda-gigante"
            ],
            correta: 2
        }

    ],


    medio: [

        {
            pergunta: "Qual formação vegetal é comum em áreas de clima mediterrâneo da Itália?",
            categoria: "🌱 Vegetação",
            alternativas: [
                "Vegetação adaptada a verões quentes e secos",
                "Vegetação de tundra",
                "Florestas equatoriais",
                "Vegetação de desertos polares"
            ],
            correta: 0
        },

        {
            pergunta: "Qual cadeia montanhosa atravessa grande parte da Península Itálica?",
            categoria: "🌳 Biomas",
            alternativas: [
                "Andes",
                "Apeninos",
                "Himalaia",
                "Montanhas Rochosas"
            ],
            correta: 1
        },

        {
            pergunta: "Qual destes animais é encontrado em ambientes naturais da Itália?",
            categoria: "🐾 Fauna",
            alternativas: [
                "Giorno Giovanna",
                "Lince-europeu",
                "Canguru",
                "Pinguim-imperador"
            ],
            correta: 1,
            referencia: true
        }

    ],


    dificil: [

        {
            pergunta: "Por que existem diferenças climáticas entre o norte e o sul da Itália?",
            categoria: "🌡️ Clima",
            alternativas: [
                "Porque há diferenças de latitude, altitude, relevo e influência marítima",
                "Porque toda a Itália possui clima equatorial",
                "Porque o país está localizado próximo ao Polo Norte",
                "Porque não existem diferenças de relevo"
            ],
            correta: 0
        },

        {
            pergunta: "Como os Alpes influenciam as condições ambientais do norte da Itália?",
            categoria: "🌱 Vegetação",
            alternativas: [
                "A altitude influencia a temperatura e a distribuição das precipitações, favorecendo diferentes tipos de vegetação",
                "Transformam toda a região em um deserto",
                "Fazem toda a região possuir clima tropical",
                "Impedem completamente o crescimento de plantas"
            ],
            correta: 0
        },

        {
            pergunta: "Qual destes animais é associado aos ambientes naturais montanhosos encontrados na Itália?",
            categoria: "🐾 Fauna",
            alternativas: [
                "Super Mario",
                "Íbex-alpino",
                "Elefante-africano",
                "Girafa"
            ],
            correta: 1,
            referencia: true
        }

    ],


    especial: {

        pergunta: "Qual alternativa reúne corretamente características naturais encontradas na Itália?",
        categoria: "🌳 Biomas",
        alternativas: [
            "Alpes, Apeninos, áreas mediterrâneas e diferentes tipos de vegetação",
            "Floresta Amazônica, clima equatorial e grandes savanas",
            "Tundra em todo o território e clima polar",
            "Desertos quentes cobrindo a maior parte do país"
        ],
        correta: 0

    }

},
reinoUnido: {

    facil: [

        {
            pergunta: "Qual é a capital do Reino Unido?",
            categoria: "🌳 Biomas",
            alternativas: [
                "Londres",
                "Manchester",
                "Liverpool",
                "Edimburgo"
            ],
            correta: 0
        },

        {
            pergunta: "Qual tipo de clima é comum em grande parte do Reino Unido?",
            categoria: "🌡️ Clima",
            alternativas: [
                "Clima equatorial",
                "Clima polar",
                "Clima temperado e úmido",
                "Clima desértico"
            ],
            correta: 2
        },

        {
            pergunta: "Qual destes animais pode ser encontrado em áreas naturais do Reino Unido?",
            categoria: "🐾 Fauna",
            alternativas: [
                "Raposa-vermelha",
                "Canguru",
                "Onça-pintada",
                "Panda-gigante"
            ],
            correta: 0
        }

    ],


    medio: [

        {
            pergunta: "Qual tipo de vegetação é comum em várias áreas rurais do Reino Unido?",
            categoria: "🌱 Vegetação",
            alternativas: [
                "Florestas tropicais",
                "Campos e pastagens",
                "Vegetação desértica",
                "Florestas equatoriais"
            ],
            correta: 1
        },

        {
            pergunta: "Qual formação de relevo é encontrada em áreas do norte do Reino Unido?",
            categoria: "🌳 Biomas",
            alternativas: [
                "Montanhas Rochosas",
                "Alpes",
                "Highlands da Escócia",
                "Hogwarts"
            ],
            correta: 2,
            referencia: true
        },

        {
            pergunta: "Qual fator contribui para a presença de vegetação verde durante boa parte do ano no Reino Unido?",
            categoria: "🌱 Vegetação",
            alternativas: [
                "A influência marítima e a ocorrência frequente de chuvas",
                "A ausência completa de precipitação",
                "O clima desértico predominante",
                "A presença de temperaturas tropicais durante todo o ano"
            ],
            correta: 0
        }

    ],


    dificil: [

        {
            pergunta: "Por que o clima do Reino Unido apresenta temperaturas geralmente moderadas?",
            categoria: "🌡️ Clima",
            alternativas: [
                "Por causa da influência marítima e das correntes oceânicas",
                "Porque o país está localizado próximo ao Equador",
                "Porque todo o território possui clima tropical",
                "Porque não recebe influência de massas de ar"
            ],
            correta: 0
        },

        {
            pergunta: "Qual destas plantas pode representar uma espécie típica de ambientes naturais do Reino Unido?",
            categoria: "🌱 Vegetação",
            alternativas: [
                "Mandrágora",
                "Carvalho",
                "Cacto-do-deserto",
                "Palmeira tropical"
            ],
            correta: 1,
            referencia: true
        },

        {
            pergunta: "Como o relevo montanhoso pode influenciar a vegetação do Reino Unido?",
            categoria: "🌳 Biomas",
            alternativas: [
                "Pode criar diferentes condições de temperatura e umidade conforme a altitude",
                "Impede completamente o crescimento de plantas",
                "Transforma todas as montanhas em desertos",
                "Faz todo o território possuir vegetação tropical"
            ],
            correta: 0
        }

    ],


    especial: {

        pergunta: "Qual alternativa reúne corretamente características naturais do Reino Unido?",
        categoria: "🌳 Biomas",
        alternativas: [
            "Clima temperado e úmido, campos, pastagens e áreas montanhosas",
            "Clima equatorial, florestas tropicais e grandes savanas",
            "Clima polar em todo o território e geleiras permanentes",
            "Clima desértico, pouca chuva e vegetação de cactos"
        ],
        correta: 0

    },
    curiosidades: [
    "O Reino Unido é formado por quatro países: Inglaterra, Escócia, País de Gales e Irlanda do Norte.",
    
    "A Escócia possui as Highlands, uma região conhecida por suas montanhas, vales e paisagens naturais.",
    
    "O Reino Unido possui milhares de quilômetros de litoral e recebe forte influência do Oceano Atlântico."
],

},
islandia: {

    facil: [

        {
            pergunta: "Qual é a capital da Islândia?",
            categoria: "🌳 Biomas",
            alternativas: [
                "Akureyri",
                "Reykjavík",
                "Vík",
                "Keflavík"
            ],
            correta: 1
        },

        {
            pergunta: "Qual característica climática é comum na Islândia?",
            categoria: "🌡️ Clima",
            alternativas: [
                "Temperaturas geralmente baixas e clima influenciado pelo oceano",
                "Clima equatorial durante todo o ano",
                "Clima desértico extremamente seco",
                "Clima tropical com temperaturas muito elevadas"
            ],
            correta: 0
        },

        {
            pergunta: "Qual destes animais pode ser encontrado naturalmente na Islândia?",
            categoria: "🐾 Fauna",
            alternativas: [
                "Leão",
                "Canguru",
                "Raposa-do-ártico",
                "Tigre"
            ],
            correta: 2
        }

    ],


    medio: [

        {
            pergunta: "Qual tipo de vegetação é comum em algumas áreas da Islândia?",
            categoria: "🌱 Vegetação",
            alternativas: [
                "Vegetação rasteira e campos de gramíneas",
                "Florestas tropicais",
                "Vegetação de deserto quente",
                "Florestas equatoriais"
            ],
            correta: 0
        },

        {
            pergunta: "Qual fenômeno natural está relacionado à atividade vulcânica da Islândia?",
            categoria: "🌳 Biomas",
            alternativas: [
                "Grandes dunas de areia",
                "Erupções vulcânicas",
                "Monções tropicais",
                "Tempestades de areia"
            ],
            correta: 1
        },

        {
            pergunta: "Qual destas opções representa uma influência importante sobre o clima da Islândia?",
            categoria: "🌡️ Clima",
            alternativas: [
                "Vikings",
                "Correntes marítimas do Atlântico Norte",
                "Clima equatorial",
                "Desertos do Saara"
            ],
            correta: 1,
            referencia: true
        }

    ],


    dificil: [

        {
            pergunta: "Por que a Islândia possui uma grande quantidade de áreas vulcânicas?",
            categoria: "🌳 Biomas",
            alternativas: [
                "Porque está localizada em uma região de encontro e afastamento de placas tectônicas",
                "Porque está localizada sobre uma grande área desértica",
                "Porque possui clima equatorial",
                "Porque não existem movimentos tectônicos na região"
            ],
            correta: 0
        },

        {
            pergunta: "Como as baixas temperaturas influenciam a vegetação de muitas regiões da Islândia?",
            categoria: "🌱 Vegetação",
            alternativas: [
                "Favorecem principalmente vegetação rasteira e espécies adaptadas ao frio",
                "Favorecem florestas tropicais muito densas",
                "Fazem crescer grandes palmeiras naturalmente",
                "Favorecem apenas plantas de regiões desérticas"
            ],
            correta: 0
        },

        {
            pergunta: "Qual destes animais está associado à fauna encontrada nas águas próximas à Islândia?",
            categoria: "🐾 Fauna",
            alternativas: [
                "Godzilla",
                "Girafa",
                "Baleia",
                "Elefante"
            ],
            correta: 2,
            referencia: true
        }

    ],


    especial: {

        pergunta: "Qual alternativa reúne corretamente características naturais da Islândia?",
        categoria: "🌳 Biomas",
        alternativas: [
            "Vulcões, geleiras, campos e áreas de clima frio",
            "Florestas tropicais, savanas e clima equatorial",
            "Desertos quentes e vegetação de cactos",
            "Florestas equatoriais e grandes rios tropicais"
        ],
        correta: 0

    },
curiosidades: [
    "A Islândia é conhecida como a 'terra do fogo e do gelo' por possuir vulcões ativos e grandes geleiras no mesmo território.",

    "A Islândia possui uma grande atividade geotérmica. O calor do interior da Terra é aproveitado para aquecer casas e produzir energia.",

    "Em algumas épocas do ano, é possível observar a Aurora Boreal no céu islandês, um dos fenômenos naturais mais impressionantes do planeta."
],
