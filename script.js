i9/* =========================
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
  },
               // =========================================================
// 🇫🇷 FRANÇA
// =========================================================

franca: {
  nome: "França",
  bandeira: "🇫🇷",

  perguntas: [

    // 🟢 FÁCIL
    {
      dificuldade: "facil",
      categoria: "Clima",
      pergunta: "Qual clima influencia boa parte das regiões da França?",
      alternativas: {
        A: "Polar",
        B: "Desértico",
        C: "Temperado",
        D: "Equatorial"
      },
      resposta: "C",
      pontos: 10
    },

    {
      dificuldade: "facil",
      categoria: "Fauna",
      pergunta: "Qual destes animais pode ser encontrado em áreas da França?",
      alternativas: {
        A: "Raposa-vermelha",
        B: "Canguru",
        C: "Panda-gigante",
        D: "Girafa"
      },
      resposta: "A",
      pontos: 10
    },

    {
      dificuldade: "facil",
      categoria: "Vegetação",
      pergunta: "Qual tipo de paisagem vegetal é comum em partes da França?",
      alternativas: {
        A: "Floresta tropical",
        B: "Florestas temperadas",
        C: "Tundra",
        D: "Savana africana"
      },
      resposta: "B",
      pontos: 10
    },

    // 🟡 MÉDIO
    {
      dificuldade: "medio",
      categoria: "Bioma",
      pergunta: "Qual ambiente aparece em regiões montanhosas da França?",
      alternativas: {
        A: "Deserto tropical",
        B: "Floresta equatorial",
        C: "Manguezal",
        D: "Ambientes alpinos"
      },
      resposta: "D",
      pontos: 20
    },

    {
      dificuldade: "medio",
      categoria: "Fauna",
      pergunta: "Qual animal pode ser encontrado nos Alpes franceses?",
      alternativas: {
        A: "Cabra-montês",
        B: "Camelo",
        C: "Canguru",
        D: "Elefante"
      },
      resposta: "A",
      pontos: 20
    },

    {
      dificuldade: "medio",
      categoria: "Clima",
      pergunta: "Como costuma ser o clima de regiões próximas ao Mediterrâneo na França?",
      alternativas: {
        A: "Polar",
        B: "Mediterrâneo",
        C: "Equatorial",
        D: "Desértico extremo"
      },
      resposta: "B",
      pontos: 20
    },

    // 🔴 DIFÍCIL
    {
      dificuldade: "dificil",
      categoria: "Vegetação",
      pergunta: "A vegetação mediterrânea francesa é adaptada principalmente a:",
      alternativas: {
        A: "Gelo permanente",
        B: "Chuvas de neve o ano inteiro",
        C: "Verões quentes e relativamente secos",
        D: "Clima equatorial"
      },
      resposta: "C",
      pontos: 30
    },

    {
      dificuldade: "dificil",
      categoria: "Bioma",
      pergunta: "Qual formação natural está relacionada às regiões montanhosas dos Alpes?",
      alternativas: {
        A: "Ambientes alpinos",
        B: "Caatinga",
        C: "Savana tropical",
        D: "Floresta amazônica"
      },
      resposta: "A",
      pontos: 30
    },

    {
      dificuldade: "dificil",
      categoria: "Sociedade",
      pergunta: "Qual região francesa possui forte identidade cultural e também língua própria além do francês?",
      alternativas: {
        A: "Bretanha",
        B: "Sibéria",
        C: "Patagônia",
        D: "Alasca"
      },
      resposta: "A",
      pontos: 30
    },

    // ⭐ ESPECIAL
    {
      dificuldade: "especial",
      categoria: "Natureza",
      pergunta: "Por que a França possui diferentes paisagens naturais?",
      alternativas: {
        A: "Porque possui diferentes relevos, regiões climáticas e influência marítima",
        B: "Porque todo o país é deserto",
        C: "Porque todo o território possui clima tropical",
        D: "Porque não existem montanhas"
      },
      resposta: "A",
      pontos: 50
    }
  ],

  referencias: [
    "🥐 Referência: memes sobre croissants e a culinária francesa.",
    "🗼 Referência: memes envolvendo a Torre Eiffel e Paris."
  ],

  curiosidades: [
    "🗼 A Torre Eiffel é um dos monumentos mais conhecidos do mundo.",
    "🏔️ A França possui regiões dos Alpes e dos Pireneus.",
    "🥐 A culinária francesa possui grande influência mundial."
  ]
},


// =========================================================
// 🇩🇪 ALEMANHA
// =========================================================

alemanha: {
  nome: "Alemanha",
  bandeira: "🇩🇪",

  perguntas: [

    // 🟢 FÁCIL
    {
      dificuldade: "facil",
      categoria: "Bioma",
      pergunta: "Qual tipo de floresta é encontrado em várias áreas da Alemanha?",
      alternativas: {
        A: "Floresta tropical",
        B: "Floresta temperada",
        C: "Savana",
        D: "Tundra"
      },
      resposta: "B",
      pontos: 10
    },

    {
      dificuldade: "facil",
      categoria: "Fauna",
      pergunta: "Qual animal pode ser encontrado na fauna alemã?",
      alternativas: {
        A: "Raposa-vermelha",
        B: "Canguru",
        C: "Girafa",
        D: "Panda"
      },
      resposta: "A",
      pontos: 10
    },

    {
      dificuldade: "facil",
      categoria: "Clima",
      pergunta: "Qual é o clima predominante em grande parte da Alemanha?",
      alternativas: {
        A: "Equatorial",
        B: "Desértico",
        C: "Temperado",
        D: "Tropical"
      },
      resposta: "C",
      pontos: 10
    },

    // 🟡 MÉDIO
    {
      dificuldade: "medio",
      categoria: "Vegetação",
      pergunta: "As florestas alemãs são formadas principalmente por:",
      alternativas: {
        A: "Vegetação tropical",
        B: "Florestas temperadas",
        C: "Vegetação desértica",
        D: "Vegetação de manguezal"
      },
      resposta: "D",
      pontos: 20
    },

    {
      dificuldade: "medio",
      categoria: "Fauna",
      pergunta: "Qual animal é encontrado em florestas e áreas rurais da Alemanha?",
      alternativas: {
        A: "Veado",
        B: "Canguru",
        C: "Elefante",
        D: "Girafa"
      },
      resposta: "A",
      pontos: 20
    },

    {
      dificuldade: "medio",
      categoria: "Clima",
      pergunta: "Os invernos alemães podem apresentar:",
      alternativas: {
        A: "Temperaturas muito elevadas",
        B: "Neve e temperaturas baixas",
        C: "Clima equatorial",
        D: "Seca tropical"
      },
      resposta: "B",
      pontos: 20
    },

    // 🔴 DIFÍCIL
    {
      dificuldade: "dificil",
      categoria: "Bioma",
      pergunta: "A Floresta Negra é conhecida principalmente por:",
      alternativas: {
        A: "Ser uma região de floresta no sudoeste da Alemanha",
        B: "Ser um deserto",
        C: "Ser uma floresta tropical",
        D: "Ser uma região polar"
      },
      resposta: "A",
      pontos: 30
    },

    {
      dificuldade: "dificil",
      categoria: "Vegetação",
      pergunta: "Qual característica é comum às florestas temperadas alemãs?",
      alternativas: {
        A: "Ausência total de árvores",
        B: "Vegetação adaptada às estações do ano",
        C: "Apenas plantas tropicais",
        D: "Vegetação exclusivamente aquática"
      },
      resposta: "B",
      pontos: 30
    },

    {
      dificuldade: "dificil",
      categoria: "Sociedade",
      pergunta: "Qual bebida aparece frequentemente associada à cultura alemã?",
      alternativas: {
        A: "Chá de manga",
        B: "Mate",
        C: "Cerveja",
        D: "Água de coco"
      },
      resposta: "D",
      pontos: 30
    },

    // ⭐ ESPECIAL
    {
      dificuldade: "especial",
      categoria: "Natureza",
      pergunta: "Qual conjunto representa melhor a natureza alemã?",
      alternativas: {
        A: "Desertos e clima tropical",
        B: "Florestas temperadas, rios e regiões montanhosas",
        C: "Floresta amazônica e savanas",
        D: "Tundra e gelo permanente"
      },
      resposta: "B",
      pontos: 50
    }
  ],

  referencias: [
    "🥨 Referência: memes sobre pretzels e comida alemã.",
    "🚗 Referência: memes sobre carros alemães."
  ],

  curiosidades: [
    "🌲 A Floresta Negra fica no sudoeste da Alemanha.",
    "🏰 O país possui muitos castelos históricos.",
    "🌊 Grandes rios, como o Reno, atravessam o território alemão."
  ]
},


// =========================================================
// 🇮🇹 ITÁLIA
// =========================================================

italia: {
  nome: "Itália",
  bandeira: "🇮🇹",

  perguntas: [

    // 🟢 FÁCIL
    {
      dificuldade: "facil",
      categoria: "Clima",
      pergunta: "Qual clima é muito comum em várias regiões da Itália?",
      alternativas: {
        A: "Mediterrâneo",
        B: "Polar",
        C: "Equatorial",
        D: "Desértico"
      },
      resposta: "A",
      pontos: 10
    },

    {
      dificuldade: "facil",
      categoria: "Fauna",
      pergunta: "Qual animal pode ser encontrado na fauna italiana?",
      alternativas: {
        A: "Canguru",
        B: "Lobo",
        C: "Panda",
        D: "Girafa"
      },
      resposta: "B",
      pontos: 10
    },

    {
      dificuldade: "facil",
      categoria: "Vegetação",
      pergunta: "Qual árvore é muito associada às regiões mediterrâneas da Itália?",
      alternativas: {
        A: "Oliveira",
        B: "Sequoia",
        C: "Palmeira amazônica",
        D: "Bétula polar"
      },
      resposta: "C",
      pontos: 10
    },

    // 🟡 MÉDIO
    {
      dificuldade: "medio",
      categoria: "Bioma",
      pergunta: "Qual ambiente caracteriza muitas regiões costeiras italianas?",
      alternativas: {
        A: "Tundra",
        B: "Deserto polar",
        C: "Vegetação mediterrânea",
        D: "Floresta equatorial"
      },
      resposta: "D",
      pontos: 20
    },

    {
      dificuldade: "medio",
      categoria: "Fauna",
      pergunta: "Qual animal é nativo de algumas regiões montanhosas da Itália?",
      alternativas: {
        A: "Cabra-montês",
        B: "Canguru",
        C: "Girafa",
        D: "Camelo"
      },
      resposta: "A",
      pontos: 20
    },

    {
      dificuldade: "medio",
      categoria: "Clima",
      pergunta: "Como são geralmente os verões das regiões mediterrâneas italianas?",
      alternativas: {
        A: "Muito frios",
        B: "Quentes e relativamente secos",
        C: "Sempre com neve",
        D: "Equatoriais"
      },
      resposta: "C",
      pontos: 20
    },

    // 🔴 DIFÍCIL
    {
      dificuldade: "dificil",
      categoria: "Bioma",
      pergunta: "Qual cadeia montanhosa fica ao norte da Itália?",
      alternativas: {
        A: "Andes",
        B: "Himalaia",
        C: "Alpes",
        D: "Montanhas Rochosas"
      },
      resposta: "D",
      pontos: 30
    },

    {
      dificuldade: "dificil",
      categoria: "Vegetação",
      pergunta: "A vegetação mediterrânea italiana é adaptada principalmente:",
      alternativas: {
        A: "Às condições quentes e secas do verão",
        B: "Ao gelo permanente",
        C: "Às chuvas equatoriais",
        D: "À tundra"
      },
      resposta: "A",
      pontos: 30
    },

    {
      dificuldade: "dificil",
      categoria: "Sociedade",
      pergunta: "Qual alimento é mundialmente associado à culinária italiana?",
      alternativas: {
        A: "Sushi",
        B: "Pizza",
        C: "Taco",
        D: "Cuscuz marroquino"
      },
      resposta: "B",
      pontos: 30
    },

    // ⭐ ESPECIAL
    {
      dificuldade: "especial",
      categoria: "Natureza",
      pergunta: "Qual conjunto representa características naturais da Itália?",
      alternativas: {
        A: "Amazônia, clima equatorial e savanas",
        B: "Tundra e gelo permanente",
        C: "Alpes, clima mediterrâneo e vegetação variada",
        D: "Deserto do Saara e savana"
      },
      resposta: "C",
      pontos: 50
    }
  ],

  referencias: [
    "🍕 Referência: memes sobre pizza italiana.",
    "🍝 Referência: memes sobre massas e o jeito italiano de falar."
  ],

  curiosidades: [
    "🍕 A pizza napolitana possui origem em Nápoles.",
    "🏔️ Os Alpes ficam ao norte da Itália.",
    "🏛️ Roma possui enorme quantidade de patrimônios históricos."
  ]
},


// =========================================================
// 🇬🇧 REINO UNIDO
// =========================================================

reinoUnido: {
  nome: "Reino Unido",
  bandeira: "🇬🇧",

  perguntas: [

    // 🟢 FÁCIL
    {
      dificuldade: "facil",
      categoria: "Clima",
      pergunta: "Como é o clima predominante no Reino Unido?",
      alternativas: {
        A: "Temperado e oceânico",
        B: "Equatorial",
        C: "Desértico",
        D: "Tropical"
      },
      resposta: "A",
      pontos: 10
    },

    {
      dificuldade: "facil",
      categoria: "Fauna",
      pergunta: "Qual animal pode ser encontrado no Reino Unido?",
      alternativas: {
        A: "Canguru",
        B: "Raposa-vermelha",
        C: "Girafa",
        D: "Panda"
      },
      resposta: "B",
      pontos: 10
    },

    {
      dificuldade: "facil",
      categoria: "Vegetação",
      pergunta: "Qual tipo de vegetação aparece em várias áreas do Reino Unido?",
      alternativas: {
        A: "Floresta amazônica",
        B: "Savana",
        C: "Campos e pastagens",
        D: "Tundra tropical"
      },
      resposta: "C",
      pontos: 10
    },

    // 🟡 MÉDIO
    {
      dificuldade: "medio",
      categoria: "Bioma",
      pergunta: "Qual ambiente é comum em regiões rurais do Reino Unido?",
      alternativas: {
        A: "Deserto",
        B: "Floresta equatorial",
        C: "Campos temperados",
        D: "Savana tropical"
      },
      resposta: "D",
      pontos: 20
    },

    {
      dificuldade: "medio",
      categoria: "Fauna",
      pergunta: "Qual animal é encontrado em áreas rurais britânicas?",
      alternativas: {
        A: "Raposa-vermelha",
        B: "Elefante",
        C: "Canguru",
        D: "Camelo"
      },
      resposta: "A",
      pontos: 20
    },

    {
      dificuldade: "medio",
      categoria: "Clima",
      pergunta: "Por estar cercado pelo oceano, o Reino Unido sofre forte influência:",
      alternativas: {
        A: "Do clima desértico",
        B: "Do clima equatorial",
        C: "Do clima marítimo",
        D: "Do clima polar"
      },
      resposta: "B",
      pontos: 20
    },

    // 🔴 DIFÍCIL
    {
      dificuldade: "dificil",
      categoria: "Bioma",
      pergunta: "As áreas de charneca e campos são importantes em algumas regiões do Reino Unido. Elas são exemplos de:",
      alternativas: {
        A: "Ambientes temperados",
        B: "Florestas tropicais",
        C: "Desertos",
        D: "Manguezais"
      },
      resposta: "D",
      pontos: 30
    },

    {
      dificuldade: "dificil",
      categoria: "Clima",
      pergunta: "Qual fator ajuda a manter temperaturas relativamente moderadas no Reino Unido?",
      alternativas: {
        A: "Influência do oceano",
        B: "Proximidade do Equador",
        C: "Deserto ao redor do país",
        D: "Gelo permanente"
      },
      resposta: "A",
      pontos: 30
    },

    {
      dificuldade: "dificil",
      categoria: "Sociedade",
      pergunta: "Qual bebida é frequentemente associada à cultura britânica?",
      alternativas: {
        A: "Mate",
        B: "Chá",
        C: "Guaraná",
        D: "Café turco"
      },
      resposta: "B",
      pontos: 30
    },

    // ⭐ ESPECIAL
    {
      dificuldade: "especial",
      categoria: "Natureza",
      pergunta: "Qual conjunto descreve melhor o ambiente do Reino Unido?",
      alternativas: {
        A: "Clima equatorial e floresta tropical",
        B: "Clima desértico e savana",
        C: "Tundra e gelo permanente",
        D: "Clima oceânico, campos e áreas de floresta temperada"
      },
      resposta: "C",
      pontos: 50
    }
  ],

  referencias: [
    "☕ Referência: memes sobre os britânicos tomando chá em qualquer situação.",
    "🌧️ Referência: memes sobre a famosa chuva britânica."
  ],

  curiosidades: [
    "🌧️ O clima do Reino Unido é bastante influenciado pelo oceano.",
    "🏰 O território possui muitos castelos históricos.",
    "🍵 O chá possui forte presença na cultura britânica."
  ]
},


// =========================================================
// 🇮🇸 ISLÂNDIA
// =========================================================

islandia: {
  nome: "Islândia",
  bandeira: "🇮🇸",

  perguntas: [

    // 🟢 FÁCIL
    {
      dificuldade: "facil",
      categoria: "Clima",
      pergunta: "Como é o clima predominante da Islândia?",
      alternativas: {
        A: "Tropical",
        B: "Frio e oceânico",
        C: "Equatorial",
        D: "Desértico"
      },
      resposta: "B",
      pontos: 10
    },

    {
      dificuldade: "facil",
      categoria: "Fauna",
      pergunta: "Qual animal é encontrado na Islândia?",
      alternativas: {
        A: "Cavalo islandês",
        B: "Canguru",
        C: "Girafa",
        D: "Panda"
      },
      resposta: "D",
      pontos: 10
    },

    {
      dificuldade: "facil",
      categoria: "Bioma",
      pergunta: "Qual característica natural é muito marcante na Islândia?",
      alternativas: {
        A: "Geleiras e vulcões",
        B: "Floresta amazônica",
        C: "Deserto tropical",
        D: "Savana africana"
      },
      resposta: "C",
      pontos: 10
    },

    // 🟡 MÉDIO
    {
      dificuldade: "medio",
      categoria: "Vegetação",
      pergunta: "Por causa do clima e do relevo, a Islândia possui relativamente:",
      alternativas: {
        A: "Poucas florestas naturais",
        B: "Grandes florestas tropicais",
        C: "Florestas amazônicas",
        D: "Selvas equatoriais"
      },
      resposta: "A",
      pontos: 20
    },

    {
      dificuldade: "medio",
      categoria: "Fauna",
      pergunta: "Qual ave pode ser encontrada na Islândia?",
      alternativas: {
        A: "Tucano",
        B: "Papagaio tropical",
        C: "Papagaio amazônico",
        D: "Papagaio-do-mar"
      },
      resposta: "C",
      pontos: 20
    },

    {
      dificuldade: "medio",
      categoria: "Bioma",
      pergunta: "Qual fenômeno natural é famoso na Islândia?",
      alternativas: {
        A: "Aurora boreal",
        B: "Monção",
        C: "Furacão tropical permanente",
        D: "Tempestade de areia"
      },
      resposta: "B",
      pontos: 20
    },

    // 🔴 DIFÍCIL
    {
      dificuldade: "dificil",
      categoria: "Geologia",
      pergunta: "Por que a Islândia possui muitos vulcões?",
      alternativas: {
        A: "Porque fica sobre uma região de atividade tectônica",
        B: "Porque está no deserto",
        C: "Porque está próxima do Equador",
        D: "Porque não possui oceanos"
      },
      resposta: "D",
      pontos: 30
    },

    {
      dificuldade: "dificil",
      categoria: "Clima",
      pergunta: "Qual fenômeno pode ser observado no céu da Islândia durante determinadas épocas do ano?",
      alternativas: {
        A: "Aurora boreal",
        B: "Aurora tropical",
        C: "Arco-íris permanente",
        D: "Sol negro"
      },
      resposta: "A",
      pontos: 30
    },

    {
      dificuldade: "dificil",
      categoria: "Sociedade",
      pergunta: "Qual atividade é bastante associada à cultura e história islandesa?",
      alternativas: {
        A: "Cultura dos vikings",
        B: "Cultura samurai",
        C: "Cultura maia",
        D: "Cultura faraônica"
      },
      resposta: "B",
      pontos: 30
    },

    // ⭐ ESPECIAL
    {
      dificuldade: "especial",
      categoria: "Natureza",
      pergunta: "Qual conjunto representa melhor a natureza da Islândia?",
      alternativas: {
        A: "Florestas tropicais, savanas e desertos",
        B: "Clima equatorial e manguezais",
        C: "Vulcões, geleiras, campos e atividade geotérmica",
        D: "Desertos quentes e clima tropical"
      },
      resposta: "C",
      pontos: 50
    }
  ],

  referencias: [
    "🌋 Referência: memes sobre a Islândia ter 'vulcão para tudo'.",
    "❄️ Referência: memes sobre o frio islandês e a pais
     ],

  curiosidades: [
    "🌋 A Islândia possui intensa atividade vulcânica.",
    "♨️ A energia geotérmica é muito importante no país.",
    "🌌 A aurora boreal pode ser observada na Islândia em determinadas épocas."
  ]
}
   /* =========================
   🧩 SESSÃO 4
   CONQUISTAS
========================= */

const conquistas = [

    {
        id: "mundo-pequeno",
        nome: "O Mundo é Pequeno Demais",
        icone: "🌍",
        descricao: "Complete os 10 destinos da jornada.",
        desbloqueada: false
    },

    {
        id: "carimbo",
        nome: "Carimbo Após Carimbo",
        icone: "🛂",
        descricao: "Conquiste todos os 10 carimbos.",
        desbloqueada: false
    },

    {
        id: "sem-volta",
        nome: "Sem Passagem de Volta",
        icone: "✈️",
        descricao: "Complete 5 países consecutivamente.",
        desbloqueada: false
    },

    {
        id: "primeira-edicao",
        nome: "Viajante de Primeira Edição",
        icone: "📖",
        descricao: "Complete todos os 10 países pela primeira vez.",
        desbloqueada: false
    },

    {
        id: "atlas",
        nome: "O Atlas Sou Eu",
        icone: "🧠",
        descricao: "Acerte todas as 100 perguntas.",
        desbloqueada: false
    },

    {
        id: "sussurros",
        nome: "Sussurros da Natureza",
        icone: "🌿",
        descricao: "Acerte perguntas sobre natureza em todos os países.",
        desbloqueada: false
    },

    {
        id: "tres-versoes",
        nome: "Três Versões de Mim",
        icone: "🎭",
        descricao: "Jogue no Fácil, Médio e Difícil.",
        desbloqueada: false
    },

    {
        id: "sem-medo",
        nome: "Sem Medo do Vermelho",
        icone: "🔥",
        descricao: "Complete um país no Difícil.",
        desbloqueada: false
    },

    {
        id: "mundo-nao-assusta",
        nome: "O Mundo Não Me Assusta",
        icone: "👑",
        descricao: "Complete todos os países no Difícil.",
        desbloqueada: false
    },

    {
        id: "nem-arranhao",
        nome: "Nem um Arranhão",
        icone: "❤️",
        descricao: "Complete um país sem perder nenhum coração.",
        desbloqueada: false
    },

    {
        id: "olho-cartografo",
        nome: "Olho de Cartógrafo",
        icone: "🧭",
        descricao: "Acerte a primeira pergunta dos 10 países.",
        desbloqueada: false
    },

    {
        id: "instinto",
        nome: "Instinto de Explorador",
        icone: "⚡",
        descricao: "Acerte 5 perguntas consecutivas.",
        desbloqueada: false
    },

    {
        id: "bussola",
        nome: "Onde a Bússola Não Aponta",
        icone: "⭐",
        descricao: "Acerte todas as perguntas especiais.",
        desbloqueada: false
    },

    {
        id: "alem-mapa",
        nome: "Além do Mapa",
        icone: "🌟",
        descricao: "Acerte uma pergunta especial sem perder coração.",
        desbloqueada: false
    },

    {
        id: "secreta",
        nome: "Você Não Deveria Estar Aqui...",
        icone: "🕵️",
        descricao: "???",
        desbloqueada: false,
        secreta: true
    }

];
/* =========================
   🧩 SESSÃO 5
   MOSTRAR CONQUISTAS
========================= */

function mostrarConquistas() {

    const lista = document.getElementById("lista-conquistas");

    if (!lista) return;

    lista.innerHTML = "";

    conquistas.forEach(conquista => {

        const item = document.createElement("div");

        item.className = "conquista";

        if (!conquista.desbloqueada) 
           item.classList.add("bloqueada");
        }

        const nome = conquista.secreta &&
                     !conquista.desbloqueada
                     ? "???"
                     : conquista.nome;

        const descricao = conquista.secreta &&
                          !conquista.desbloqueada
                          ? "Conquista secreta"
                          : conquista.descricao;

        item.innerHTML = `

            <div class="conquista-icone">
                ${conquista.desbloqueada
                    ? conquista.icone
                    : "🔒"}
            </div>

            <div class="conquista-info">

                <strong>
                    ${nome}
                </strong>

                <small>
                    ${descricao}
                </small>

            </div>

        `;

        lista.appendChild(item);

    });

}


  {/* =========================
   🧩 SESSÃO 6
   🖥️ TELAS DO JOGO
   🎨 ESTILO: PIXEL ART + AZUL
========================= */


// =========================================================
// 🖥️ SISTEMA DE TELAS
// =========================================================

const telas = {

    inicio: document.getElementById("tela-inicio"),

    paises: document.getElementById("tela-paises"),

    pais: document.getElementById("tela-pais"),

    carregamento: document.getElementById("tela-carregamento"),

    quiz: document.getElementById("tela-quiz"),

    resultado: document.getElementById("tela-resultado"),

    passaporte: document.getElementById("tela-passaporte"),

    mapa: document.getElementById("tela-mapa"),

    conquistas: document.getElementById("tela-conquistas"),

    configuracoes: document.getElementById("tela-configuracoes")

};


// =========================================================
// 🔄 MOSTRAR UMA TELA
// =========================================================

function mostrarTela(nomeTela) {

    Object.values(telas).forEach(tela => {

        if (tela) {
            tela.classList.remove("ativa");
        }

    });


    if (telas[nomeTela]) {

        telas[nomeTela].classList.add("ativa");

    }

}


// =========================================================
// 🏠 VOLTAR PARA O MENU
// =========================================================

function voltarInicio() {

    mostrarTela("inicio");

}


// =========================================================
// 🌍 ABRIR PAÍSES
// =========================================================

function abrirPaises() {

    mostrarTela("paises");

}


// =========================================================
// 📖 ABRIR INFORMAÇÕES DO PAÍS
// =========================================================

function abrirPais() {

    mostrarTela("pais");

}


// =========================================================
// ⏳ TELA DE CARREGAMENTO
// =========================================================

function iniciarCarregamento() {

    mostrarTela("carregamento");

}


// =========================================================
// ❓ ABRIR QUIZ
// =========================================================

function iniciarQuiz() {

    mostrarTela("quiz");

}


// =========================================================
// 🏁 RESULTADO
// =========================================================

function mostrarResultado() {

    mostrarTela("resultado");

}


// =========================================================
// 🛂 PASSAPORTE
// =========================================================

function abrirPassaporte() {

    mostrarTela("passaporte");

}


// =========================================================
// 🗺️ MAPA
// =========================================================

function abrirMapa() {

    mostrarTela("mapa");

}


// =========================================================
// 🏆 MÉRITOS & CONQUISTAS
// =========================================================

function abrirConquistas() {

    mostrarTela("conquistas");

    // Usa a função criada na SESSÃO 5
    mostrarConquistas();

}


// =========================================================
// ⚙️ CONFIGURAÇÕES
// =========================================================

function abrirConfiguracoes() {

    mostrarTela("configuracoes");

}


// =========================================================
// 🎬 ANIMAÇÃO DE TROCA DE TELA
// =========================================================

function trocarTela(nomeTela) {

    const telaAtual = document.querySelector(".tela.ativa");

    if (telaAtual) {

        telaAtual.classList.add("saindo");

        setTimeout(() => {

            telaAtual.classList.remove("ativa");
            telaAtual.classList.remove("saindo");

            mostrarTela(nomeTela);

        }, 200);

    } else {

        mostrarTela(nomeTela);

    }

}


// =========================================================
// 🌎 ABRIR PAÍS COM CARREGAMENTO
// =========================================================

function viajarParaPais() {

    iniciarCarregamento();


    setTimeout(() => {

        iniciarQuiz();

    }, 1500);

}


// =========================================================
// 🎮 INICIAR JOGO
// =========================================================

function iniciarJogo() {

    trocarTela("paises");

}


// =========================================================
// 🚀 INICIALIZAÇÃO
// =========================================================

document.addEventListener("DOMContentLoaded", () => {

    mostrarTela("inicio");

});
     /* =========================
   🧩 SESSÃO 7
   🗺️ MAPA-MÚNDI
========================= */


// =========================================================
// 🌍 PAÍSES DO MAPA
// =========================================================

const mapaPaises = [

    {
        id: "brasil",
        nome: "Brasil",
        bandeira: "🇧🇷",
        desbloqueado: true,
        visitado: false,
        completado: false,
        x: 36,
        y: 58
    },

    {
        id: "argentina",
        nome: "Argentina",
        bandeira: "🇦🇷",
        desbloqueado: false,
        visitado: false,
        completado: false,
        x: 34,
        y: 70
    },

    {
        id: "uruguai",
        nome: "Uruguai",
        bandeira: "🇺🇾",
        desbloqueado: false,
        visitado: false,
        completado: false,
        x: 38,
        y: 73
    },

    {
        id: "eua",
        nome: "Estados Unidos",
        bandeira: "🇺🇸",
        desbloqueado: false,
        visitado: false,
        completado: false,
        x: 22,
        y: 38
    },

    {
        id: "espanha",
        nome: "Espanha",
        bandeira: "🇪🇸",
        desbloqueado: false,
        visitado: false,
        completado: false,
        x: 48,
        y: 34
    },

    {
        id: "franca",
        nome: "França",
        bandeira: "🇫🇷",
        desbloqueado: false,
        visitado: false,
        completado: false,
        x: 49,
        y: 31
    },

    {
        id: "alemanha",
        nome: "Alemanha",
        bandeira: "🇩🇪",
        desbloqueado: false,
        visitado: false,
        completado: false,
        x: 52,
        y: 29
    },

    {
        id: "italia",
        nome: "Itália",
        bandeira: "🇮🇹",
        desbloqueado: false,
        visitado: false,
        completado: false,
        x: 52,
        y: 35
    },

    {
        id: "reino-unido",
        nome: "Reino Unido",
        bandeira: "🇬🇧",
        desbloqueado: false,
        visitado: false,
        completado: false,
        x: 47,
        y: 25
    },

    {
        id: "islandia",
        nome: "Islândia",
        bandeira: "🇮🇸",
        desbloqueado: false,
        visitado: false,
        completado: false,
        x: 45,
        y: 16
    }

];


// =========================================================
// 🗺️ ELEMENTO DO MAPA
// =========================================================

function mostrarMapa() {

    const mapa = document.getElementById("mapa-mundi");

    if (!mapa) return;

    mapa.innerHTML = "";


    mapaPaises.forEach(pais => {

        const marcador = document.createElement("button");

        marcador.className = "marcador-pais";


        // 📍 POSIÇÃO DO PAÍS

        marcador.style.left = pais.x + "%";
        marcador.style.top = pais.y + "%";


        // 🔒 PAÍS BLOQUEADO

        if (!pais.desbloqueado) {

            marcador.classList.add("bloqueado");

            marcador.innerHTML = "🔒";

            marcador.title = "Destino bloqueado";

        }


        // 🌍 PAÍS DESBLOQUEADO

        else {

            marcador.innerHTML = pais.bandeira;

            marcador.title = pais.nome;


            marcador.onclick = () => {

                selecionarPaisMapa(pais.id);

            };

        }


        // 🏁 PAÍS COMPLETADO

        if (pais.completado) {

            marcador.classList.add("completado");

        }


        mapa.appendChild(marcador);

    });

}


// =========================================================
// 🌎 SELECIONAR PAÍS
// =========================================================

function selecionarPaisMapa(idPais) {

    const pais = mapaPaises.find(
        pais => pais.id === idPais
    );


    if (!pais) return;


    if (!pais.desbloqueado) {

        return;

    }


    pais.visitado = true;


    // Guarda o país selecionado

    window.paisSelecionado = idPais;


    // Abre a tela do país

    abrirPais();

}


// =========================================================
// 🔓 DESBLOQUEAR PAÍS
// =========================================================

function desbloquearPais(idPais) {

    const pais = mapaPaises.find(
        pais => pais.id === idPais
    );


    if (!pais) return;


    pais.desbloqueado = true;


    mostrarMapa();

}


// =========================================================
// 🏁 COMPLETAR PAÍS
// =========================================================

function completarPaisMapa(idPais) {

    const pais = mapaPaises.find(
        pais => pais.id === idPais
    );


    if (!pais) return;


    pais.completado = true;

    pais.visitado = true;


    mostrarMapa();

}


// =========================================================
// 📊 PROGRESSO DO MAPA
// =========================================================

function progressoMapa() {

    const total = mapaPaises.length;


    const completados = mapaPaises.filter(
        pais => pais.completado
    ).length;


    return {

        total: total,

        completados: completados,

        porcentagem:
            Math.round((completados / total) * 100)

    };

}


// =========================================================
// 🧭 ATUALIZAR MAPA
// =========================================================

function atualizarMapa() {

    mostrarMapa();

}


// =========================================================
// 🚀 INICIALIZAÇÃO
// =========================================================

document.addEventListener(
    "DOMContentLoaded",
    () => {

        mostrarMapa();

    }
);
     /* =========================
   🧩 SESSÃO 8
   ❓ QUIZ
========================= */


// =========================================================
// 🎯 ESTADO DO QUIZ
// =========================================================

let quizAtual = {

    pais: null,

    perguntaAtual: 0,

    perguntas: [],

    respondida: false

};


// =========================================================
// 📚 CATEGORIAS
// =========================================================

const categoriasQuiz = {

    BIOMAS: "🌳 Biomas",

    CLIMA: "🌡️ Clima",

    VEGETACAO: "🌱 Vegetação",

    FAUNA: "🐾 Fauna"

};


// =========================================================
// 🎚️ DIFICULDADES
// =========================================================

const dificuldadesQuiz = {

    FACIL: "Fácil",

    MEDIO: "Médio",

    DIFICIL: "Difícil",

    ESPECIAL: "⭐ Especial"

};


// =========================================================
// ❓ INICIAR QUIZ
// =========================================================

function iniciarQuizPais(pais, perguntas) {

    quizAtual.pais = pais;

    quizAtual.perguntaAtual = 0;

    quizAtual.perguntas = perguntas;

    quizAtual.respondida = false;


    mostrarTela("quiz");

    mostrarPergunta();

}


// =========================================================
// 📝 MOSTRAR PERGUNTA
// =========================================================

function mostrarPergunta() {

    const pergunta =
        quizAtual.perguntas[
            quizAtual.perguntaAtual
        ];


    if (!pergunta) {

        finalizarQuiz();

        return;

    }


    quizAtual.respondida = false;


    const numero =
        quizAtual.perguntaAtual + 1;


    const total =
        quizAtual.perguntas.length;


    const elementoNumero =
        document.getElementById("numero-pergunta");


    const elementoCategoria =
        document.getElementById("categoria-pergunta");


    const elementoDificuldade =
        document.getElementById("dificuldade-pergunta");


    const elementoTexto =
        document.getElementById("texto-pergunta");


    const elementoAlternativas =
        document.getElementById("alternativas");


    if (elementoNumero) {

        elementoNumero.textContent =
            `Pergunta ${numero}/${total}`;

    }


    if (elementoCategoria) {

        elementoCategoria.textContent =
            pergunta.categoria;

    }


    if (elementoDificuldade) {

        elementoDificuldade.textContent =
            pergunta.dificuldade;

    }


    if (elementoTexto) {

        elementoTexto.textContent =
            pergunta.pergunta;

    }


    if (elementoAlternativas) {

        elementoAlternativas.innerHTML = "";


        pergunta.alternativas.forEach(
            (alternativa, indice) => {

                const botao =
                    document.createElement("button");


                botao.className =
                    "alternativa";


                botao.textContent =
                    `${String.fromCharCode(65 + indice)}) ${alternativa}`;


                botao.onclick = () => {

                    responderPergunta(indice);

                };


                elementoAlternativas.appendChild(
                    botao
                );

            }
        );

    }

}


// =========================================================
// 🎯 RESPONDER PERGUNTA
// =========================================================

function responderPergunta(indiceEscolhida) {

    if (quizAtual.respondida) return;


    const pergunta =
        quizAtual.perguntas[
            quizAtual.perguntaAtual
        ];


    if (!pergunta) return;


    quizAtual.respondida = true;


    const botoes =
        document.querySelectorAll(
            ".alternativa"
        );


    botoes.forEach(
        (botao, indice) => {

            botao.disabled = true;


            // ✅ RESPOSTA CORRETA

            if (
                indice ===
                pergunta.resposta
            ) {

                botao.classList.add(
                    "correta"
                );

            }


            // ❌ RESPOSTA ERRADA

            if (
                indice ===
                indiceEscolhida &&
                indice !== pergunta.resposta
            ) {

                botao.classList.add(
                    "errada"
                );

            }

        }
    );


    // Envia o resultado para a Sessão 9

    registrarRespostaQuiz(
        pergunta,
        indiceEscolhida === pergunta.resposta
    );


    setTimeout(
        proximaPergunta,
        1000
    );

}


// =========================================================
// ➡️ PRÓXIMA PERGUNTA
// =========================================================

function proximaPergunta() {

    quizAtual.perguntaAtual++;

    mostrarPergunta();

}


// =========================================================
// 🏁 FINALIZAR QUIZ
// =========================================================

function finalizarQuiz() {

    quizAtual.respondida = false;


    // A Sessão 9 poderá assumir
    // a pontuação e as vidas.

    mostrarResultado();

}


// =========================================================
// 📊 REGISTRAR RESPOSTA
// =========================================================

function registrarRespostaQuiz(
    pergunta,
    acertou
) {

    /*
        A Sessão 9 será responsável por:

        ⭐ Pontos
        ❤️ Vidas
        ✅ Acertos
        ❌ Erros
        🔥 Multiplicadores
    */


    console.log(
        "Resposta:",
        acertou
            ? "CORRETA"
            : "ERRADA"
    );

}


// =========================================================
// ⭐ PERGUNTA ESPECIAL
// =========================================================

function ehPerguntaEspecial(pergunta) {

    return pergunta.dificuldade ===
           dificuldadesQuiz.ESPECIAL;

}


// =========================================================
// 🎲 EMBARALHAR PERGUNTAS
// =========================================================

function embaralharPerguntas(perguntas) {

    return [...perguntas].sort(
        () => Math.random() - 0.5
    );

}


// =========================================================
// 🔢 ORGANIZAR PERGUNTAS
// =========================================================

function organizarPerguntas(perguntas) {

    const faceis =
        perguntas.filter(
            p => p.dificuldade === "Fácil"
        );

    const medias =
        perguntas.filter(
            p => p.dificuldade === "Médio"
        );

    const dificeis =
        perguntas.filter(
            p => p.dificuldade === "Difícil"
        );

    const especiais =
        perguntas.filter(
            p => p.dificuldade === "⭐ Especial"
        );


    return [

        ...embaralharPerguntas(faceis),

        ...embaralharPerguntas(medias),

        ...embaralharPerguntas(dificeis),

        ...embaralharPerguntas(especiais)

    ];

  }
/* =========================
   🧩 SESSÃO 9
   ❤️ PONTUAÇÃO E VIDAS
========================= */


// =========================================================
// 🎮 ESTADO DO JOGADOR
// =========================================================

let estadoJogador = {

    pontos: 0,

    vidas: 3,

    acertos: 0,

    erros: 0,

    sequenciaAcertos: 0,

    maiorSequencia: 0,

    perguntasRespondidas: 0,

    especiaisAcertadas: 0,

    especiaisRespondidas: 0,

    acertosPorCategoria: {

        "🌳 Biomas": 0,

        "🌡️ Clima": 0,

        "🌱 Vegetação": 0,

        "🐾 Fauna": 0

    }

};


// =========================================================
// ⭐ PONTOS POR DIFICULDADE
// =========================================================

const pontosDificuldade = {

    "Fácil": 100,

    "Médio": 200,

    "Difícil": 300,

    "⭐ Especial": 500

};


// =========================================================
// 🔥 MULTIPLICADOR
// =========================================================

function calcularMultiplicador() {

    const sequencia =
        estadoJogador.sequenciaAcertos;


    if (sequencia >= 10) {

        return 3;

    }

    if (sequencia >= 5) {

        return 2;

    }

    if (sequencia >= 3) {

        return 1.5;

    }


    return 1;

}


// =========================================================
// ⭐ CALCULAR PONTOS
// =========================================================

function calcularPontosPergunta(pergunta) {

    if (!pergunta) return 0;


    const pontosBase =
        pergunta.pontos ??
        pontosDificuldade[
            pergunta.dificuldade
        ] ??
        0;


    const multiplicador =
        calcularMultiplicador();


    return Math.round(
        pontosBase * multiplicador
    );

}


// =========================================================
// ✅ REGISTRAR ACERTO
// =========================================================

function registrarAcerto(pergunta) {

    estadoJogador.acertos++;

    estadoJogador.perguntasRespondidas++;

    estadoJogador.sequenciaAcertos++;


    if (
        estadoJogador.sequenciaAcertos >
        estadoJogador.maiorSequencia
    ) {

        estadoJogador.maiorSequencia =
            estadoJogador.sequenciaAcertos;

    }


    // ⭐ Pontuação

    const pontos =
        calcularPontosPergunta(pergunta);


    estadoJogador.pontos += pontos;


    // 🌳 Categoria

    if (
        pergunta.categoria &&
        estadoJogador.acertosPorCategoria[
            pergunta.categoria
        ] !== undefined
    ) {

        estadoJogador.acertosPorCategoria[
            pergunta.categoria
        ]++;

    }


    // ⭐ Pergunta especial

    if (
        pergunta.dificuldade ===
        "⭐ Especial"
    ) {

        estadoJogador.especiaisAcertadas++;

        estadoJogador.especiaisRespondidas++;

    }


    atualizarInterfacePontuacao();


    return pontos;

}


// =========================================================
// ❌ REGISTRAR ERRO
// =========================================================

function registrarErro(pergunta) {

    estadoJogador.erros++;

    estadoJogador.perguntasRespondidas++;


    // Quebra a sequência

    estadoJogador.sequenciaAcertos = 0;


    // ❤️ Perde uma vida

    perderVida();


    // ⭐ Pergunta especial respondida

    if (
        pergunta &&
        pergunta.dificuldade ===
        "⭐ Especial"
    ) {

        estadoJogador.especiaisRespondidas++;

    }


    atualizarInterfacePontuacao();

}


// =========================================================
// ❤️ PERDER VIDA
// =========================================================

function perderVida() {

    if (estadoJogador.vidas <= 0) {

        estadoJogador.vidas = 0;

        return;

    }


    estadoJogador.vidas--;


    atualizarVidas();


    if (estadoJogador.vidas <= 0) {

        gameOver();

    }

}


// =========================================================
// ❤️ RECUPERAR VIDA
// =========================================================

function recuperarVida() {

    if (estadoJogador.vidas >= 3) {

        estadoJogador.vidas = 3;

    } else {

        estadoJogador.vidas++;

    }


    atualizarVidas();

}


// =========================================================
// ❤️ MOSTRAR VIDAS
// =========================================================

function atualizarVidas() {

    const elemento =
        document.getElementById("vidas");


    if (!elemento) return;


    let coracoes = "";


    for (
        let i = 0;
        i < 3;
        i++
    ) {

        if (
            i < estadoJogador.vidas
        ) {

            coracoes += "❤️";

        } else {

            coracoes += "🖤";

        }

    }


    elemento.textContent =
        coracoes;

}


// =========================================================
// ⭐ MOSTRAR PONTOS
// =========================================================

function atualizarPontuacao() {

    const elemento =
        document.getElementById("pontuacao");


    if (!elemento) return;


    elemento.textContent =
        `⭐ ${estadoJogador.pontos}`;

}


// =========================================================
// 🎯 MOSTRAR SEQUÊNCIA
// =========================================================

function atualizarSequencia() {

    const elemento =
        document.getElementById("sequencia");


    if (!elemento) return;


    if (
        estadoJogador.sequenciaAcertos >= 2
    ) {

        elemento.textContent =
            `🔥 ${estadoJogador.sequenciaAcertos} seguidos`;

    } else {

        elemento.textContent = "";

    }

}


// =========================================================
// 📊 ATUALIZAR INTERFACE
// =========================================================

function atualizarInterfacePontuacao() {

    atualizarPontuacao();

    atualizarVidas();

    atualizarSequencia();

}


// =========================================================
// 🎯 REGISTRAR RESPOSTA DO QUIZ
// =========================================================

function registrarRespostaQuiz(
    pergunta,
    acertou
) {

    if (!pergunta) return;


    if (acertou) {

        const pontos =
            registrarAcerto(pergunta);


        console.log(
            `✅ Acertou! +${pontos} pontos`
        );


    } else {

        registrarErro(pergunta);


        console.log(
            "❌ Resposta errada!"
        );

    }


    atualizarInterfacePontuacao();

}


// =========================================================
// 💀 GAME OVER
// =========================================================

function gameOver() {

    console.log(
        "💔 Todas as vidas foram perdidas!"
    );


    // Futuramente podemos abrir
    // uma tela própria de Game Over.

    const elemento =
        document.getElementById(
            "mensagem-game-over"
        );


    if (elemento) {

        elemento.textContent =
            "💔 Você ficou sem vidas!";

    }

}


// =========================================================
// 🔄 REINICIAR PONTUAÇÃO DO PAÍS
// =========================================================

function reiniciarPontuacaoPais() {

    estadoJogador.pontos = 0;

    estadoJogador.vidas = 3;

    estadoJogador.acertos = 0;

    estadoJogador.erros = 0;

    estadoJogador.sequenciaAcertos = 0;

    estadoJogador.maiorSequencia = 0;

    estadoJogador.perguntasRespondidas = 0;

    estadoJogador.especiaisAcertadas = 0;

    estadoJogador.especiaisRespondidas = 0;


    estadoJogador.acertosPorCategoria = {

        "🌳 Biomas": 0,

        "🌡️ Clima": 0,

        "🌱 Vegetação": 0,

        "🐾 Fauna": 0

    };


    atualizarInterfacePontuacao();

}


// =========================================================
// 📊 RESUMO DO JOGADOR
// =========================================================

function obterResumoJogador() {

    return {

        pontos: estadoJogador.pontos,

        vidas: estadoJogador.vidas,

        acertos: estadoJogador.acertos,

        erros: estadoJogador.erros,

        maiorSequencia:
            estadoJogador.maiorSequencia,

        especiaisAcertadas:
            estadoJogador.especiaisAcertadas,

        acertosPorCategoria:
            estadoJogador.acertosPorCategoria

    };

}
     /* =========================
   🧩 SESSÃO 10
   🛂 PASSAPORTE E CARIMBOS
========================= */


// =========================================================
// 🎫 ESTADO DO PASSAPORTE
// =========================================================

let passaporteJogador = {

    paisesVisitados: [],

    paisesCompletados: [],

    carimbos: [],

    curiosidadesDescobertas: [],

    progressoPorPais: {}

};
     {
// =========================================================
// 🌍 LISTA DOS 10 DESTINOS OFICIAIS
// =========================================================

const destinosPassaporte = [

    {
        id: "brasil",
        nome: "Brasil",
        bandeira: "🇧🇷"
    },

    {
        id: "argentina",
        nome: "Argentina",
        bandeira: "🇦🇷"
    },

    {
        id: "uruguai",
        nome: "Uruguai",
        bandeira: "🇺🇾"
    },

    {
        id: "estados-unidos",
        nome: "Estados Unidos",
        bandeira: "🇺🇸"
    },

    {
        id: "espanha",
        nome: "Espanha",
        bandeira: "🇪🇸"
    },

    {
        id: "franca",
        nome: "França",
        bandeira: "🇫🇷"
    },

    {
        id: "alemanha",
        nome: "Alemanha",
        bandeira: "🇩🇪"
    },

    {
        id: "italia",
        nome: "Itália",
        bandeira: "🇮🇹"
    },

    {
        id: "reino-unido",
        nome: "Reino Unido",
        bandeira: "🇬🇧"
    },

    {
        id: "islandia",
        nome: "Islândia",
        bandeira: "🇮🇸"
    }

];

// =========================================================
// 🛂 REGISTRAR VISITA
// =========================================================

function registrarVisitaPais(paisId) {

    if (!paisId) return;


    // Se ainda não visitou

    if (
        !passaporteJogador.paisesVisitados
            .includes(paisId)
    ) {

        passaporteJogador.paisesVisitados
            .push(paisId);

        console.log(
            `🌍 Nova visita: ${paisId}`
        );

    }


    // Criar progresso do país

    if (
        !passaporteJogador.progressoPorPais[paisId]
    ) {

        passaporteJogador.progressoPorPais[paisId] = {

            iniciado: true,

            completado: false,

            pontos: 0,

            acertos: 0,

            erros: 0,

            maiorSequencia: 0

        };

    }

}


// =========================================================
// 🛂 CONQUISTAR CARIMBO
// =========================================================

function conquistarCarimbo(paisId) {

    if (!paisId) return;


    // Evita carimbo duplicado

    if (
        passaporteJogador.carimbos
            .includes(paisId)
    ) {

        return false;

    }


    passaporteJogador.carimbos
        .push(paisId);


    console.log(
        `🛂 Carimbo conquistado: ${paisId}`
    );


    // Verifica conquistas relacionadas

    verificarConquistasPassaporte();


    return true;

}


// =========================================================
// 🏆 COMPLETAR PAÍS
// =========================================================

function completarPaisPassaporte(paisId) {

    if (!paisId) return;


    registrarVisitaPais(paisId);


    const progresso =
        passaporteJogador.progressoPorPais[paisId];


    if (!progresso) return;


    progresso.completado = true;


    // Registrar estatísticas da Sessão 9

    progresso.pontos =
        estadoJogador.pontos;

    progresso.acertos =
        estadoJogador.acertos;

    progresso.erros =
        estadoJogador.erros;

    progresso.maiorSequencia =
        estadoJogador.maiorSequencia;


    // Adicionar à lista de completos

    if (
        !passaporteJogador.paisesCompletados
            .includes(paisId)
    ) {

        passaporteJogador.paisesCompletados
            .push(paisId);

    }


    // Conquistar carimbo

    conquistarCarimbo(paisId);


    console.log(
        `🎉 País completado: ${paisId}`
    );

}


// =========================================================
// 🔍 VERIFICAR SE POSSUI CARIMBO
// =========================================================

function possuiCarimbo(paisId) {

    return passaporteJogador.carimbos
        .includes(paisId);

}


// =========================================================
// 📊 PROGRESSO DO PASSAPORTE
// =========================================================

function obterProgressoPassaporte() {

    const total =
        destinosPassaporte.length;


    const completados =
        passaporteJogador.paisesCompletados.length;


    return {

        total: total,

        completados: completados,

        carimbos:
            passaporteJogador.carimbos.length,

        visitados:
            passaporteJogador.paisesVisitados.length,

        porcentagem:
            total > 0
                ? Math.round(
                    (completados / total) * 100
                )
                : 0

    };

}


// =========================================================
// 🌎 OBTER DADOS DE UM PAÍS
// =========================================================

function obterDadosPassaporte(paisId) {

    const pais =
        destinosPassaporte.find(
            destino =>
                destino.id === paisId
        );


    if (!pais) return null;


    const progresso =
        passaporteJogador.progressoPorPais[paisId];


    return {

        id: pais.id,

        nome: pais.nome,

        bandeira: pais.bandeira,

        visitado:
            passaporteJogador.paisesVisitados
                .includes(paisId),

        completado:
            passaporteJogador.paisesCompletados
                .includes(paisId),

        carimbo:
            passaporteJogador.carimbos
                .includes(paisId),

        progresso:
            progresso || null

    };

}


// =========================================================
// 🌿 REGISTRAR CURIOSIDADE
// =========================================================

function registrarCuriosidade(
    paisId,
    curiosidadeId
) {

    if (!paisId || !curiosidadeId) return;


    const chave =
        `${paisId}-${curiosidadeId}`;


    if (
        !passaporteJogador.curiosidadesDescobertas
            .includes(chave)
    ) {

        passaporteJogador.curiosidadesDescobertas
            .push(chave);


        console.log(
            `🌿 Curiosidade descoberta: ${chave}`
        );

    }

}


// =========================================================
// 📚 VERIFICAR CURIOSIDADE
// =========================================================

function possuiCuriosidade(
    paisId,
    curiosidadeId
) {

    const chave =
        `${paisId}-${curiosidadeId}`;


    return passaporteJogador
        .curiosidadesDescobertas
        .includes(chave);

}


// =========================================================
// 🏆 CONQUISTAS DO PASSAPORTE
// =========================================================

function verificarConquistasPassaporte() {

    if (
        typeof conquistas === "undefined"
    ) {

        return;

    }


    // 🛂 Todos os 10 carimbos

    if (
        passaporteJogador.carimbos.length >=
        destinosPassaporte.length
    ) {

        desbloquearConquista(
            "carimbo"
        );

    }


    // 🌍 Todos os países completados

    if (
        passaporteJogador.paisesCompletados
            .length >=
        destinosPassaporte.length
    ) {

        desbloquearConquista(
            "mundo-pequeno"
        );

        desbloquearConquista(
            "primeira-edicao"
        );

    }

}


// =========================================================
// 🏆 DESBLOQUEAR CONQUISTA
// =========================================================

function desbloquearConquista(id) {

    if (
        typeof conquistas === "undefined"
    ) {

        return;

    }


    const conquista =
        conquistas.find(
            item => item.id === id
        );


    if (!conquista) return;


    if (conquista.desbloqueada) {

        return;

    }


    conquista.desbloqueada = true;


    console.log(
        `🏆 Conquista desbloqueada: ${conquista.nome}`
    );


    // Atualizar lista visual se existir

    if (
        typeof mostrarConquistas ===
        "function"
    ) {

        mostrarConquistas();

    }

}


// =========================================================
// 📖 ABRIR PASSAPORTE
// =========================================================

function abrirPassaporte() {

    console.log(
        "📖 Abrindo passaporte..."
    );


    const progresso =
        obterProgressoPassaporte();


    console.log(
        `🌍 ${progresso.completados}/${progresso.total} países completos`
    );


    console.log(
        `🛂 ${progresso.carimbos} carimbos conquistados`
    );


    return passaporteJogador;

}


// =========================================================
// 🔄 RESETAR PASSAPORTE
// =========================================================

function resetarPassaporte() {

    passaporteJogador = {

        paisesVisitados: [],

        paisesCompletados: [],

        carimbos: [],

        curiosidadesDescobertas: [],

        progressoPorPais: {}

    };


    console.log(
        "🔄 Passaporte reiniciado."
    );

}


// =========================================================
// 📊 RESUMO DO PASSAPORTE
// =========================================================

function obterResumoPassaporte() {

    const progresso =
        obterProgressoPassaporte();


    return {

        paisesVisitados:
            progresso.visitados,

        paisesCompletados:
            progresso.completados,

        carimbos:
            progresso.carimbos,

        curiosidades:
            passaporteJogador
                .curiosidadesDescobertas
                .length,

        progresso:
            progresso.porcentagem

    };

  }
     /* =========================
   🧩 SESSÃO 11
   💾 SALVAR PROGRESSO
========================= */


// =========================================================
// 💾 CONFIGURAÇÃO DO SALVAMENTO
// =========================================================

const CHAVE_SALVAMENTO =
    "jogoDosPaises_progresso";

const VERSAO_SALVAMENTO =
    2;


// =========================================================
// 💾 CRIAR DADOS DO JOGADOR
// =========================================================

function criarDadosSalvamento() {

    return {

        versao:
            VERSAO_SALVAMENTO,

        dataSalvamento:
            new Date().toISOString(),


        // =================================================
        // 🎮 ESTADO DO JOGADOR
        // =================================================

        estadoJogador: {

            pontos:
                estadoJogador.pontos,

            vidas:
                estadoJogador.vidas,

            acertos:
                estadoJogador.acertos,

            erros:
                estadoJogador.erros,

            sequenciaAcertos:
                estadoJogador.sequenciaAcertos,

            maiorSequencia:
                estadoJogador.maiorSequencia,

            perguntasRespondidas:
                estadoJogador.perguntasRespondidas,

            especiaisAcertadas:
                estadoJogador.especiaisAcertadas,

            especiaisRespondidas:
                estadoJogador.especiaisRespondidas,

            acertosPorCategoria:
                estadoJogador.acertosPorCategoria

        },


        // =================================================
        // 🛂 PASSAPORTE
        // =================================================

        passaporteJogador:
            typeof passaporteJogador !== "undefined"
                ? passaporteJogador
                : null,


        // =================================================
        // 🏆 CONQUISTAS
        // =================================================

        conquistas:
            typeof conquistas !== "undefined"
                ? conquistas.map(
                    conquista => ({

                        id:
                            conquista.id,

                        desbloqueada:
                            conquista.desbloqueada,

                        secreta:
                            conquista.secreta || false

                    })
                )
                : [],


        // =================================================
        // 🏅 MÉRITOS
        // =================================================

        meritos:
            typeof meritos !== "undefined"
                ? meritos.map(
                    merito => ({

                        id:
                            merito.id,

                        desbloqueada:
                            merito.desbloqueada || false

                    })
                )
                : [],


        // =================================================
        // 🌍 PAÍSES DESBLOQUEADOS
        // =================================================

        paisesDesbloqueados:
            typeof paisesDesbloqueados !==
                "undefined"
                ? [...paisesDesbloqueados]
                : [],


        // =================================================
        // 🎁 SEGREDOS E EXTRAS
        // =================================================

        estadoSegredos:
            typeof estadoSegredos !== "undefined"
                ? estadoSegredos
                : null

    };

}


// =========================================================
// 💾 SALVAR PROGRESSO
// =========================================================

function salvarProgresso() {

    try {

        const dados =
            criarDadosSalvamento();


        const dadosConvertidos =
            JSON.stringify(dados);


        localStorage.setItem(
            CHAVE_SALVAMENTO,
            dadosConvertidos
        );


        console.log(
            "💾 Progresso salvo com sucesso!"
        );


        return true;

    } catch (erro) {

        console.error(
            "❌ Erro ao salvar progresso:",
            erro
        );


        return false;

    }

}


// =========================================================
// 📂 VERIFICAR SALVAMENTO
// =========================================================

function existeProgressoSalvo() {

    return (
        localStorage.getItem(
            CHAVE_SALVAMENTO
        ) !== null
    );

}


// =========================================================
// 📂 CARREGAR PROGRESSO
// =========================================================

function carregarProgresso() {

    try {

        const dadosSalvos =
            localStorage.getItem(
                CHAVE_SALVAMENTO
            );


        if (!dadosSalvos) {

            console.log(
                "📂 Nenhum progresso encontrado."
            );

            return false;

        }


        const dados =
            JSON.parse(dadosSalvos);


        // =================================================
        // 🎮 ESTADO DO JOGADOR
        // =================================================

        if (
            dados.estadoJogador
        ) {

            Object.assign(
                estadoJogador,
                dados.estadoJogador
            );

        }


        // =================================================
        // 🛂 PASSAPORTE
        // =================================================

        if (
            dados.passaporteJogador
        ) {

            passaporteJogador =
                dados.passaporteJogador;

        }


        // =================================================
        // 🏆 CONQUISTAS
        // =================================================

        if (
            dados.conquistas &&
            typeof conquistas !== "undefined"
        ) {

            dados.conquistas.forEach(
                conquistaSalva => {

                    const conquista =
                        conquistas.find(
                            item =>
                                item.id ===
                                conquistaSalva.id
                        );


                    if (conquista) {

                        conquista.desbloqueada =
                            conquistaSalva.desbloqueada;

                    }

                }
            );

        }


        // =================================================
        // 🏅 MÉRITOS
        // =================================================

        if (
            dados.meritos &&
            typeof meritos !== "undefined"
        ) {

            dados.meritos.forEach(
                meritoSalvo => {

                    const merito =
                        meritos.find(
                            item =>
                                item.id ===
                                meritoSalvo.id
                        );


                    if (merito) {

                        merito.desbloqueada =
                            meritoSalvo.desbloqueada;

                    }

                }
            );

        }


        // =================================================
        // 🌍 PAÍSES DESBLOQUEADOS
        // =================================================

        if (
            dados.paisesDesbloqueados &&
            typeof paisesDesbloqueados !==
                "undefined"
        ) {

            if (
                Array.isArray(
                    paisesDesbloqueados
                )
            ) {

                paisesDesbloqueados.length = 0;


                dados.paisesDesbloqueados
                    .forEach(
                        pais => {

                            paisesDesbloqueados
                                .push(pais);

                        }
                    );

            }

        }


        // =================================================
        // 🎁 SEGREDOS E EXTRAS
        // =================================================

        if (
            dados.estadoSegredos &&
            typeof estadoSegredos !==
                "undefined"
        ) {

            estadoSegredos =
                dados.estadoSegredos;

        }


        // =================================================
        // 🔄 ATUALIZAR INTERFACE
        // =================================================

        if (
            typeof atualizarInterfacePontuacao ===
            "function"
        ) {

            atualizarInterfacePontuacao();

        }


        if (
            typeof mostrarConquistas ===
            "function"
        ) {

            mostrarConquistas();

        }


        console.log(
            "📂 Progresso carregado com sucesso!"
        );


        return true;

    } catch (erro) {

        console.error(
            "❌ Erro ao carregar progresso:",
            erro
        );


        return false;

    }

}


// =========================================================
// 🔄 SALVAMENTO AUTOMÁTICO
// =========================================================

function salvarAutomaticamente() {

    salvarProgresso();

}


// =========================================================
// ⏱️ SALVAR A CADA 30 SEGUNDOS
// =========================================================

setInterval(

    () => {

        salvarProgresso();

    },

    30000

);


// =========================================================
// ❓ SALVAR APÓS PERGUNTA
// =========================================================

function salvarDepoisDaPergunta() {

    salvarProgresso();

}


// =========================================================
// 🛂 SALVAR APÓS CARIMBO
// =========================================================

function salvarDepoisDoCarimbo() {

    salvarProgresso();

}


// =========================================================
// 🏆 SALVAR APÓS CONQUISTA
// =========================================================

function salvarDepoisDaConquista() {

    salvarProgresso();

}


// =========================================================
// 🏅 SALVAR APÓS MÉRITO
// =========================================================

function salvarDepoisDoMerito() {

    salvarProgresso();

}


// =========================================================
// 🎁 SALVAR APÓS SEGREDO
// =========================================================

function salvarDepoisDoSegredo() {

    salvarProgresso();

}


// =========================================================
// 🚪 SALVAR ANTES DE FECHAR
// =========================================================

window.addEventListener(

    "beforeunload",

    () => {

        salvarProgresso();

    }

);


// =========================================================
// 🗑️ APAGAR PROGRESSO
// =========================================================

function apagarProgresso() {

    const confirmar =
        confirm(
            "⚠️ Tem certeza que deseja apagar todo o progresso?"
        );


    if (!confirmar) {

        return false;

    }


    localStorage.removeItem(
        CHAVE_SALVAMENTO
    );


    console.log(
        "🗑️ Todo o progresso foi apagado."
    );


    return true;

}


// =========================================================
// 📊 INFORMAÇÕES DO SALVAMENTO
// =========================================================

function obterInformacoesSalvamento() {

    const dadosSalvos =
        localStorage.getItem(
            CHAVE_SALVAMENTO
        );


    if (!dadosSalvos) {

        return {

            existe: false,

            data: null,

            versao: null

        };

    }


    try {

        const dados =
            JSON.parse(dadosSalvos);


        return {

            existe: true,

            data:
                dados.dataSalvamento || null,

            versao:
                dados.versao || 1

        };

    } catch {

        return {

            existe: false,

            data: null,

            versao: null

        };

    }

}


// =========================================================
// 🚀 INICIAR SISTEMA DE SALVAMENTO
// =========================================================

function iniciarSistemaDeSalvamento() {

    if (
        existeProgressoSalvo()
    ) {

        carregarProgresso();


        console.log(
            "💾 Salvamento anterior restaurado."
        );

    } else {

        console.log(
            "🆕 Nenhum progresso anterior."
        );

    }

}
/* =========================
   🧩 SESSÃO 12
   🎁 SEGREDOS E EXTRAS
========================= */


// =========================================================
// 🎁 ESTADO DOS SEGREDOS
// =========================================================

let estadoSegredos = {

    segredosDescobertos: [],

    objetosEncontrados: [],

    eventosEncontrados: [],

    easterEggsEncontrados: [],

    extrasDesbloqueados: []

};


// =========================================================
// 🕵️ LISTA DE SEGREDOS
// =========================================================

const segredos = [

    {
        id: "segredo-01",
        nome: "???",
        nomeReal: "O Visitante Misterioso",
        icone: "🕵️",
        descricao: "Você encontrou algo que não deveria estar aqui.",
        tipo: "secreta",
        descoberto: false
    },

    {
        id: "segredo-02",
        nome: "???",
        nomeReal: "A Bússola Perdida",
        icone: "🧭",
        descricao: "Uma bússola escondida em algum lugar do mapa.",
        tipo: "objeto",
        descoberto: false
    },

    {
        id: "segredo-03",
        nome: "???",
        nomeReal: "Mensagem do Viajante",
        icone: "📜",
        descricao: "Uma mensagem deixada por alguém que já percorreu o mundo.",
        tipo: "easter-egg",
        descoberto: false
    }

];


// =========================================================
// 🎁 EXTRAS DESBLOQUEÁVEIS
// =========================================================

const extrasDesbloqueaveis = [

    {
        id: "extra-mapa",
        nome: "Mapa Completo",
        icone: "🗺️",
        descricao: "Visualize todos os países no mapa.",
        desbloqueado: false
    },

    {
        id: "extra-curiosidades",
        nome: "Arquivo de Curiosidades",
        icone: "📚",
        descricao: "Veja todas as curiosidades descobertas.",
        desbloqueado: false
    },

    {
        id: "extra-passaporte",
        nome: "Passaporte Completo",
        icone: "🛂",
        descricao: "Veja o passaporte completo da jornada.",
        desbloqueado: false
    },

    {
        id: "extra-mestre",
        nome: "Modo Mestre",
        icone: "👑",
        descricao: "Um desafio especial para jogadores experientes.",
        desbloqueado: false
    }

];


// =========================================================
// 🕵️ DESCOBRIR SEGREDO
// =========================================================

function descobrirSegredo(segredoId) {

    if (!segredoId) return false;


    const segredo =
        segredos.find(
            item => item.id === segredoId
        );


    if (!segredo) return false;


    // Evitar descoberta duplicada

    if (
        estadoSegredos.segredosDescobertos
            .includes(segredoId)
    ) {

        return false;

    }


    estadoSegredos.segredosDescobertos
        .push(segredoId);


    segredo.descoberto = true;


    console.log(
        `🕵️ Segredo descoberto: ${segredo.nomeReal}`
    );


    // Verificar extras

    verificarExtras();


    // Salvar progresso

    if (
        typeof salvarProgresso ===
        "function"
    ) {

        salvarProgresso();

    }


    return true;

}


// =========================================================
// 🔍 VERIFICAR SEGREDO
// =========================================================

function possuiSegredo(segredoId) {

    return estadoSegredos
        .segredosDescobertos
        .includes(segredoId);

}


// =========================================================
// 🗺️ ENCONTRAR OBJETO ESCONDIDO
// =========================================================

function encontrarObjeto(objetoId) {

    if (!objetoId) return false;


    if (
        estadoSegredos.objetosEncontrados
            .includes(objetoId)
    ) {

        return false;

    }


    estadoSegredos.objetosEncontrados
        .push(objetoId);


    console.log(
        `🔎 Objeto encontrado: ${objetoId}`
    );


    verificarExtras();


    if (
        typeof salvarProgresso ===
        "function"
    ) {

        salvarProgresso();

    }


    return true;

}


// =========================================================
// 🎁 REGISTRAR EVENTO RARO
// =========================================================

function registrarEventoRaro(eventoId) {

    if (!eventoId) return false;


    if (
        estadoSegredos.eventosEncontrados
            .includes(eventoId)
    ) {

        return false;

    }


    estadoSegredos.eventosEncontrados
        .push(eventoId);


    console.log(
        `✨ Evento raro encontrado: ${eventoId}`
    );


    verificarExtras();


    if (
        typeof salvarProgresso ===
        "function"
    ) {

        salvarProgresso();

    }


    return true;

}


// =========================================================
// 🥚 REGISTRAR EASTER EGG
// =========================================================

function descobrirEasterEgg(easterEggId) {

    if (!easterEggId) return false;


    if (
        estadoSegredos.easterEggsEncontrados
            .includes(easterEggId)
    ) {

        return false;

    }


    estadoSegredos.easterEggsEncontrados
        .push(easterEggId);


    console.log(
        `🥚 Easter egg encontrado: ${easterEggId}`
    );


    verificarExtras();


    if (
        typeof salvarProgresso ===
        "function"
    ) {

        salvarProgresso();

    }


    return true;

}


// =========================================================
// 🔓 DESBLOQUEAR EXTRA
// =========================================================

function desbloquearExtra(extraId) {

    const extra =
        extrasDesbloqueaveis.find(
            item => item.id === extraId
        );


    if (!extra) return false;


    if (extra.desbloqueado) {

        return false;

    }


    extra.desbloqueado = true;


    if (
        !estadoSegredos.extrasDesbloqueados
            .includes(extraId)
    ) {

        estadoSegredos.extrasDesbloqueados
            .push(extraId);

    }


    console.log(
        `🎁 Extra desbloqueado: ${extra.nome}`
    );


    if (
        typeof salvarProgresso ===
        "function"
    ) {

        salvarProgresso();

    }


    return true;

}


// =========================================================
// 🔐 VERIFICAR EXTRAS
// =========================================================

function verificarExtras() {


    // 🗺️ 3 segredos descobertos

    if (
        estadoSegredos.segredosDescobertos
            .length >= 3
    ) {

        desbloquearExtra(
            "extra-mapa"
        );

    }


    // 📚 5 objetos ou descobertas

    const descobertas =
        estadoSegredos.objetosEncontrados
            .length +
        estadoSegredos.easterEggsEncontrados
            .length;


    if (descobertas >= 5) {

        desbloquearExtra(
            "extra-curiosidades"
        );

    }


    // 🛂 Todos os carimbos

    if (
        typeof passaporteJogador !==
        "undefined" &&
        typeof destinosPassaporte !==
        "undefined"
    ) {

        if (
            passaporteJogador.carimbos
                .length >=
            destinosPassaporte.length
        ) {

            desbloquearExtra(
                "extra-passaporte"
            );

        }

    }


    // 👑 Modo Mestre

    if (
        typeof conquistas !==
        "undefined"
    ) {

        const conquistasDesbloqueadas =
            conquistas.filter(
                conquista =>
                    conquista.desbloqueada
            ).length;


        if (
            conquistasDesbloqueadas >= 10
        ) {

            desbloquearExtra(
                "extra-mestre"
            );

        }

    }

}


// =========================================================
// 📊 RESUMO DOS SEGREDOS
// =========================================================

function obterResumoSegredos() {

    return {

        segredos:
            estadoSegredos
                .segredosDescobertos
                .length,

        objetos:
            estadoSegredos
                .objetosEncontrados
                .length,

        eventos:
            estadoSegredos
                .eventosEncontrados
                .length,

        easterEggs:
            estadoSegredos
                .easterEggsEncontrados
                .length,

        extras:
            estadoSegredos
                .extrasDesbloqueados
                .length

    };

}


// =========================================================
// 🔍 OBTER SEGREDOS DESCOBERTOS
// =========================================================

function obterSegredosDescobertos() {

    return segredos.filter(
        segredo =>
            segredo.descoberto
    );

}


// =========================================================
// 🎁 OBTER EXTRAS DESBLOQUEADOS
// =========================================================

function obterExtrasDesbloqueados() {

    return extrasDesbloqueaveis.filter(
        extra =>
            extra.desbloqueado
    );

}


// =========================================================
// 🔄 RESETAR SEGREDOS
// =========================================================

function resetarSegredos() {

    estadoSegredos = {

        segredosDescobertos: [],

        objetosEncontrados: [],

        eventosEncontrados: [],

        easterEggsEncontrados: [],

        extrasDesbloqueados: []

    };


    // Resetar lista de segredos

    segredos.forEach(
        segredo => {

            segredo.descoberto = false;

        }
    );


    // Resetar extras

    extrasDesbloqueaveis.forEach(
        extra => {

            extra.desbloqueado = false;

        }
    );


    console.log(
        "🔄 Segredos e extras reiniciados."
    );


    if (
        typeof salvarProgresso ===
        "function"
    ) {

        salvarProgresso();

    }

           }
