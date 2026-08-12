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

const perguntas = {
brasil: {

facil: [

    {
        pergunta: "Qual é a capital do Brasil?",
        categoria: "🌳 Biomas",
        alternativas: [
            "Brasília",
            "São Paulo",
            "Rio de Janeiro",
            "Salvador"
        ],
        correta: 0
    },

    {
        pergunta: "Qual é o maior bioma brasileiro em extensão territorial?",
        categoria: "🌳 Biomas",
        alternativas: [
            "Pantanal",
            "Cerrado",
            "Amazônia",
            "Caatinga"
        ],
        correta: 2
    },

    {
        pergunta: "Qual destas opções é uma planta ou alimento de origem vegetal muito presente na culinária brasileira?",
        categoria: "🌱 Vegetação",
        alternativas: [
            "Tapioca",
            "Sushi",
            "Hambúrguer",
            "Pizza"
        ],
        correta: 0,
        referencia: true
    }

],


medio: [

    {
        pergunta: "Qual bioma brasileiro é conhecido pelo clima semiárido e pela vegetação adaptada à pouca disponibilidade de água?",
        categoria: "🌳 Biomas",
        alternativas: [
            "Pampa",
            "Caatinga",
            "Pantanal",
            "Mata Atlântica"
        ],
        correta: 1
    },

    {
        pergunta: "Por que o Pantanal apresenta grandes mudanças na paisagem durante o ano?",
        categoria: "🌡️ Clima",
        alternativas: [
            "Por causa das variações entre períodos de cheia e de seca",
            "Por causa da ocorrência de neve",
            "Por causa de terremotos frequentes",
            "Por causa de erupções vulcânicas"
        ],
        correta: 0
    },

    {
        pergunta: "Qual característica é comum à vegetação da Caatinga?",
        categoria: "🌱 Vegetação",
        alternativas: [
            "Presença de plantas adaptadas a períodos de pouca água",
            "Predomínio de árvores típicas de florestas temperadas",
            "Vegetação formada principalmente por musgos de regiões polares",
            "Predomínio de plantas de clima equatorial úmido"
        ],
        correta: 0
    }

],


dificil: [

    {
        pergunta: "Por que a Amazônia apresenta uma biodiversidade tão elevada?",
        categoria: "🐾 Fauna",
        alternativas: [
            "Porque possui condições ambientais variadas, grande quantidade de água e uma enorme diversidade de habitats",
            "Porque possui apenas um tipo de animal",
            "Porque apresenta clima polar",
            "Porque não possui rios"
        ],
        correta: 0
    },

    {
        pergunta: "Qual característica ajuda a explicar a vegetação encontrada no Pampa?",
        categoria: "🌱 Vegetação",
        alternativas: [
            "Predomínio de campos e vegetação rasteira",
            "Predomínio de florestas tropicais densas",
            "Presença de vegetação típica de tundra",
            "Predomínio de cactos de regiões desérticas"
        ],
        correta: 0
    },

    {
        pergunta: "Qual destes ambientes está relacionado à presença histórica de diferentes povos indígenas no território brasileiro?",
        categoria: "🌳 Biomas",
        alternativas: [
            "Amazônia",
            "Deserto do Saara",
            "Tundra Ártica",
            "Povos indígenas"
        ],
        correta: 0,
        referencia: true
    }

],


especial: {

    pergunta: "Qual alternativa reúne corretamente características naturais encontradas no Brasil?",
    categoria: "🌳 Biomas",
    alternativas: [
        "Amazônia, Cerrado, Caatinga, Pantanal, Mata Atlântica e Pampa",
        "Tundra, Taiga, Deserto do Saara e Savana Africana",
        "Alpes, Andes, Tundra e Floresta Boreal",
        "Deserto Australiano, Taiga e Floresta Mediterrânea"
    ],
    correta: 0

},
curiosidades: [
    "O Brasil é o maior país da América do Sul e possui uma enorme variedade de paisagens e ambientes naturais.",

    "A Amazônia é a maior floresta tropical do mundo e ocupa uma grande parte do território brasileiro.",

    "O Brasil é um dos países com maior diversidade de espécies de animais e plantas do planeta."
],
},

argentina: {

facil: [

    {
        pergunta: "Qual é a capital da Argentina?",
        categoria: "🌳 Biomas",
        alternativas: [
            "Buenos Aires",
            "Córdoba",
            "Mendoza",
            "Rosário"
        ],
        correta: 0
    },

    {
        pergunta: "Qual grande cadeia de montanhas está localizada no oeste da Argentina?",
        categoria: "🌳 Biomas",
        alternativas: [
            "Alpes",
            "Himalaia",
            "Andes",
            "Montanhas Rochosas"
        ],
        correta: 2
    },

    {
        pergunta: "Qual característica é comum nas áreas de clima mais quente do norte da Argentina?",
        categoria: "🌡️ Clima",
        alternativas: [
            "Temperaturas mais elevadas em comparação com o extremo sul",
            "Clima polar durante todo o ano",
            "Presença permanente de gelo",
            "Ausência completa de chuvas"
        ],
        correta: 0
    }

],


medio: [

    {
        pergunta: "Qual característica é marcante da região dos Pampas argentinos?",
        categoria: "🌱 Vegetação",
        alternativas: [
            "Florestas tropicais muito densas",
            "Grandes planícies com campos e vegetação rasteira",
            "Vegetação típica de tundra",
            "Desertos cobertos por gelo"
        ],
        correta: 1
    },

    {
        pergunta: "Qual região da Argentina é conhecida por suas estepes, montanhas, lagos e geleiras?",
        categoria: "🌳 Biomas",
        alternativas: [
            "Chaco",
            "Pampas",
            "Patagônia",
            "Mesopotâmia"
        ],
        correta: 2
    },

    {
        pergunta: "Qual destes animais pode ser encontrado em ambientes naturais da Argentina?",
        categoria: "🐾 Fauna",
        alternativas: [
            "Canguru",
            "Puma",
            "Panda-gigante",
            "Mafalda"
        ],
        correta: 1,
        referencia: true
    }

],


dificil: [

    {
        pergunta: "Por que a vegetação da Patagônia é adaptada a condições mais frias e secas?",
        categoria: "🌱 Vegetação",
        alternativas: [
            "Por causa das baixas temperaturas, dos ventos e da menor disponibilidade de água em várias áreas",
            "Por causa do clima equatorial extremamente úmido",
            "Por causa das altas temperaturas durante todo o ano",
            "Por causa das chuvas constantes em toda a região"
        ],
        correta: 0
    },

    {
        pergunta: "Como a Cordilheira dos Andes influencia o clima de algumas regiões da Argentina?",
        categoria: "🌡️ Clima",
        alternativas: [
            "Pode dificultar a passagem de massas de ar úmidas e contribuir para áreas mais secas",
            "Faz todas as regiões argentinas terem clima tropical",
            "Provoca clima polar em todo o território",
            "Impede completamente a formação de rios"
        ],
        correta: 0
    },

    {
        pergunta: "Qual característica dos Pampas favorece atividades agropecuárias?",
        categoria: "🐾 Fauna",
        alternativas: [
            "A presença de solos férteis e extensas áreas de campos",
            "A presença de grandes geleiras",
            "O predomínio de florestas tropicais",
            "A ocorrência de neve durante todo o ano"
        ],
        correta: 0
    },

    {
        pergunta: "Qual destes elementos está fortemente associado à cultura esportiva argentina?",
        categoria: "🐾 Fauna",
        alternativas: [
            "Críquete",
            "Futebol",
            "Hóquei no gelo",
            "Beisebol"
        ],
        correta: 1,
        referencia: true
    }

],


especial: {

    pergunta: "Qual alternativa reúne corretamente características naturais da Argentina?",
    categoria: "🌳 Biomas",
    alternativas: [
        "Andes, Pampas, Patagônia e diferentes zonas climáticas",
        "Floresta Amazônica, tundra e clima equatorial",
        "Deserto do Saara, savanas africanas e clima tropical",
        "Taiga, geleiras permanentes e clima polar em todo o território"
    ],
    correta: 0

},
curiosidades: [
    "A Argentina possui a Cordilheira dos Andes em sua região oeste, formando uma das maiores cadeias montanhosas do mundo.",

    "O Aconcágua, localizado na Argentina, é a montanha mais alta das Américas.",

    "A Patagônia ocupa uma grande área no sul do país e possui paisagens com montanhas, estepes, lagos e geleiras."
],

},
uruguai: {

facil: [

    {
        pergunta: "Qual é a capital do Uruguai?",
        categoria: "🌳 Biomas",
        alternativas: [
            "Montevidéu",
            "Salto",
            "Punta del Este",
            "Colônia do Sacramento"
        ],
        correta: 0
    },

    {
        pergunta: "Qual oceano banha a costa do Uruguai?",
        categoria: "🌡️ Clima",
        alternativas: [
            "Oceano Pacífico",
            "Oceano Índico",
            "Oceano Atlântico",
            "Oceano Ártico"
        ],
        correta: 2
    },

    {
        pergunta: "Qual bebida tradicional é muito consumida no Uruguai?",
        categoria: "🌱 Vegetação",
        alternativas: [
            "Café",
            "Mate",
            "Chá preto",
            "Chocolate quente"
        ],
        correta: 1,
        referencia: true
    }

],


medio: [

    {
        pergunta: "Qual é uma característica marcante da paisagem natural do Uruguai?",
        categoria: "🌳 Biomas",
        alternativas: [
            "Grandes florestas tropicais",
            "Extensos desertos",
            "Predomínio de campos e pradarias",
            "Grandes geleiras"
        ],
        correta: 2
    },

    {
        pergunta: "Por que a criação de gado possui grande importância no Uruguai?",
        categoria: "🌱 Vegetação",
        alternativas: [
            "A presença de extensas áreas de pastagens favorece a criação de animais",
            "O país possui grandes áreas de tundra",
            "O território é coberto principalmente por desertos",
            "As temperaturas permanecem abaixo de zero durante todo o ano"
        ],
        correta: 0
    },

    {
        pergunta: "Qual característica climática é comum no Uruguai?",
        categoria: "🌡️ Clima",
        alternativas: [
            "Clima equatorial extremamente quente",
            "Clima polar durante todo o ano",
            "Clima desértico",
            "Clima temperado, com influência marítima"
        ],
        correta: 3
    }

],


dificil: [

    {
        pergunta: "Qual fator ajuda a explicar a predominância de campos naturais no território uruguaio?",
        categoria: "🌱 Vegetação",
        alternativas: [
            "A presença de uma grande floresta equatorial",
            "As condições de clima, relevo e solo favorecem a formação de áreas campestres",
            "As temperaturas negativas durante todo o ano",
            "A ausência completa de chuvas"
        ],
        correta: 1
    },

    {
        pergunta: "Como a localização do Uruguai influencia suas características ambientais?",
        categoria: "🌡️ Clima",
        alternativas: [
            "Sua posição no sudeste da América do Sul contribui para um clima temperado e sofre influência marítima",
            "Sua localização próxima ao Equador provoca clima equatorial",
            "Sua proximidade com o Polo Sul provoca clima polar",
            "Sua localização impede qualquer influência marítima"
        ],
        correta: 0
    },

    {
        pergunta: "Qual destes animais pode ser encontrado em ambientes naturais do Uruguai?",
        categoria: "🐾 Fauna",
        alternativas: [
            "Canguru",
            "Panda-gigante",
            "Capivara",
            "Urso-polar"
        ],
        correta: 2
    },

    {
        pergunta: "Qual destes nomes está associado a um famoso jogador de futebol uruguaio?",
        categoria: "🐾 Fauna",
        alternativas: [
            "Lionel Messi",
            "Luis Suárez",
            "Neymar",
            "Kylian Mbappé"
        ],
        correta: 1,
        referencia: true
    }

],


especial: {

    pergunta: "Qual alternativa reúne corretamente características naturais do Uruguai?",
    categoria: "🌳 Biomas",
    alternativas: [
        "Campos e pradarias, clima temperado e áreas costeiras",
        "Florestas tropicais, clima equatorial e grandes geleiras",
        "Desertos quentes, clima árido e ausência de rios",
        "Tundra, clima polar e vegetação de coníferas"
    ],
    correta: 0



},

curiosidades: [
    "O Uruguai é um dos menores países da América do Sul e possui muitas áreas de campos e pradarias.",

    "A criação de gado possui grande importância no país devido à presença de extensas áreas de pastagens.",

    "O mate é uma bebida muito presente na cultura uruguaia e faz parte do cotidiano de muitas pessoas."
],
    
},

estadosUnidos: {

facil: [

    {
        pergunta: "Qual é a capital dos Estados Unidos?",
        categoria: "🌳 Biomas",
        alternativas: [
            "Nova York",
            "Washington, D.C.",
            "Los Angeles",
            "Chicago"
        ],
        correta: 1
    },

    {
        pergunta: "Qual oceano banha a costa leste dos Estados Unidos?",
        categoria: "🌡️ Clima",
        alternativas: [
            "Oceano Pacífico",
            "Oceano Índico",
            "Oceano Atlântico",
            "Oceano Ártico"
        ],
        correta: 2
    },

    {
        pergunta: "Qual destes animais faz parte da fauna dos Estados Unidos?",
        categoria: "🐾 Fauna",
        alternativas: [
            "Águia-careca",
            "Canguru",
            "Onça-pintada",
            "Panda-gigante"
        ],
        correta: 0
    }

],


medio: [

    {
        pergunta: "Qual ambiente natural aparece em regiões do sudoeste dos Estados Unidos, onde o clima é muito seco?",
        categoria: "🌳 Biomas",
        alternativas: [
            "Deserto",
            "Tundra",
            "Floresta tropical",
            "Manguezal"
        ],
        correta: 0
    },

    {
        pergunta: "Qual destes ambientes NÃO é encontrado naturalmente nos Estados Unidos?",
        categoria: "🌱 Vegetação",
        alternativas: [
            "Pradarias",
            "Florestas temperadas",
            "Desertos",
            "Fenda do Biquíni"
        ],
        correta: 3,
        referencia: true
    },

    {
        pergunta: "Qual região dos Estados Unidos apresenta paisagens de tundra e temperaturas muito baixas?",
        categoria: "🌡️ Clima",
        alternativas: [
            "Flórida",
            "Alasca",
            "Texas",
            "Califórnia"
        ],
        correta: 1
    }

],


dificil: [

    {
        pergunta: "Por que os Estados Unidos apresentam uma grande variedade de climas?",
        categoria: "🌡️ Clima",
        alternativas: [
            "Por causa de sua grande extensão territorial, relevo e diferentes influências atmosféricas",
            "Porque todo o país está localizado na região tropical",
            "Porque o país possui apenas regiões montanhosas",
            "Porque não existem variações de relevo"
        ],
        correta: 0
    },

    {
        pergunta: "Como as Montanhas Rochosas podem influenciar o clima de áreas próximas?",
        categoria: "🌳 Biomas",
        alternativas: [
            "Podem dificultar a passagem de massas de ar e influenciar a distribuição das chuvas",
            "Fazem todo o país possuir clima tropical",
            "Eliminam completamente os rios da região",
            "Fazem nevar durante todo o ano em todos os estados"
        ],
        correta: 0
    },

    {
        pergunta: "Qual destes animais pode ser encontrado em ambientes naturais dos Estados Unidos?",
        categoria: "🐾 Fauna",
        alternativas: [
            "Bob Esponja",
            "Bisão-americano",
            "Canguru",
            "Panda-gigante"
        ],
        correta: 1,
        referencia: true
    }

],


especial: {

    pergunta: "Qual alternativa apresenta três ambientes naturais encontrados nos Estados Unidos?",
    categoria: "🌳 Biomas",
    alternativas: [
        "Desertos, pradarias e tundra",
        "Caatinga, Pantanal e Cerrado",
        "Floresta Amazônica, Pampa e tundra",
        "Savana africana, Taiga siberiana e Caatinga"
    ],
    correta: 0

}

},
    curiosidades: [

        "Os Estados Unidos possuem uma enorme variedade de paisagens, incluindo desertos, pradarias, florestas, montanhas e tundras.",

        "O Alasca é o maior estado dos Estados Unidos e possui grandes áreas de montanhas, florestas e regiões muito frias.",

        "O país possui uma das maiores extensões territoriais do mundo, atravessando diferentes zonas climáticas."

    ],

},

espanha: {

    facil: [

        {
            pergunta: "Qual é a capital da Espanha?",
            alternativas: [
                "Barcelona",
                "Sevilha",
                "Madri",
                "Valência"
            ],
            correta: 2
        },

        {
            pergunta: "Qual mar banha grande parte da costa leste e sudeste da Espanha?",
            alternativas: [
                "Mar Mediterrâneo",
                "Mar do Norte",
                "Mar Negro",
                "Mar Báltico"
            ],
            correta: 0
        },

        {
            pergunta: "Qual destas cidades está localizada na Espanha?",
            alternativas: [
                "Lisboa",
                "Barcelona",
                "Roma",
                "Berlim"
            ],
            correta: 1
        }

    ],


    medio: [

        {
            pergunta: "Qual tipo de clima é comum em várias áreas do interior da Espanha?",
            alternativas: [
                "Clima equatorial",
                "Clima polar",
                "Clima continental",
                "Clima de monções"
            ],
            correta: 2
        },

        {
            pergunta: "Qual característica é comum na vegetação das áreas mediterrâneas da Espanha?",
            alternativas: [
                "Florestas tropicais muito úmidas",
                "Vegetação formada apenas por musgos",
                "Vegetação adaptada exclusivamente ao gelo",
                "Plantas adaptadas a verões quentes e secos"
            ],
            correta: 3
        },

        {
            pergunta: "Qual destes países conquistou a Copa do Mundo de 2026?",
            alternativas: [
                "Alemanha",
                "Espanha",
                "França",
                "Itália"
            ],
            correta: 1,
            referencia: true
        }

    ],


    dificil: [

        {
            pergunta: "Por que existem diferenças climáticas importantes entre o norte e o interior da Espanha?",
            alternativas: [
                "Porque o relevo e a distância do oceano influenciam a distribuição de temperatura e chuva",
                "Porque todo o território possui o mesmo tipo de relevo",
                "Porque o país possui apenas clima mediterrâneo",
                "Porque não existem montanhas na Espanha"
            ],
            correta: 0
        },

        {
            pergunta: "Como as áreas montanhosas da Espanha podem influenciar a vegetação?",
            alternativas: [
                "A altitude faz toda a vegetação desaparecer",
                "As montanhas transformam todas as áreas em desertos",
                "A altitude pode provocar mudanças de temperatura e favorecer diferentes tipos de vegetação",
                "A altitude impede qualquer ocorrência de chuva"
            ],
            correta: 2
        },

        {
            pergunta: "Qual destas opções é um apelido tradicional associado à seleção espanhola?",
            alternativas: [
                "La Albiceleste",
                "Les Bleus",
                "La Roja",
                "Azzurri"
            ],
            correta: 2,
            referencia: true
        }

    ],


    especial: {

        pergunta: "Qual alternativa reúne corretamente características naturais encontradas na Espanha?",
        alternativas: [
            "Clima mediterrâneo, áreas montanhosas e influência do Oceano Atlântico e do Mar Mediterrâneo",
            "Clima equatorial, floresta amazônica e geleiras tropicais",
            "Clima polar, tundra em todo o território e ausência de montanhas",
            "Clima desértico em todo o país e ausência de influência marítima"
        ],
        correta: 0

    }

},
franca: {

    facil: [

        {
            pergunta: "Qual é a capital da França?",
            categoria: "🌳 Biomas",
            alternativas: [
                "Paris",
                "Lyon",
                "Marselha",
                "Nice"
            ],
            correta: 0
        },

        {
            pergunta: "Qual tipo de clima é comum em grande parte do oeste da França?",
            categoria: "🌡️ Clima",
            alternativas: [
                "Clima oceânico",
                "Clima equatorial",
                "Clima polar",
                "Clima desértico"
            ],
            correta: 0
        },

        {
            pergunta: "Qual destes animais pode ser encontrado em áreas naturais da França?",
            categoria: "🐾 Fauna",
            alternativas: [
                "Javali",
                "Canguru",
                "Onça-pintada",
                "Panda-gigante"
            ],
            correta: 0
        }

    ],


    medio: [

        {
            pergunta: "Qual característica é comum na vegetação das regiões mediterrâneas do sul da França?",
            categoria: "🌱 Vegetação",
            alternativas: [
                "Plantas adaptadas a verões quentes e relativamente secos",
                "Vegetação adaptada ao gelo permanente",
                "Florestas tropicais muito úmidas",
                "Vegetação exclusiva de tundra"
            ],
            correta: 0
        },

        {
            pergunta: "Qual grande cadeia montanhosa está localizada principalmente no sudeste da França?",
            categoria: "🌳 Biomas",
            alternativas: [
                "Alpes",
                "Andes",
                "Himalaia",
                "Montanhas Rochosas"
            ],
            correta: 0
        },

        {
            pergunta: "Qual destas alternativas apresenta um prato associado à culinária francesa?",
            categoria: "🐾 Fauna",
            alternativas: [
                "Ratatouille",
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
