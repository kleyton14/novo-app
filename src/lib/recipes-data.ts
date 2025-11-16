export interface Recipe {
  id: string;
  name: string;
  rating: number;
  description: string;
  ingredients: string[];
  instructions: string[];
  prepTime: string;
  servings: number;
  difficulty: 'Fácil' | 'Médio' | 'Difícil';
  image: string;
}

export interface Country {
  id: string;
  name: string;
  flag: string;
  rank: number;
  totalRating: number;
  recipes: Recipe[];
}

export const countriesData: Country[] = [
  {
    id: 'italy',
    name: 'Itália',
    flag: '🇮🇹',
    rank: 1,
    totalRating: 9.8,
    recipes: [
      {
        id: 'carbonara',
        name: 'Carbonara',
        rating: 9.9,
        description: 'Pasta cremosa com guanciale, ovos, pecorino romano e pimenta preta.',
        ingredients: ['400g spaghetti', '200g guanciale', '4 gemas', '100g pecorino romano', 'Pimenta preta', 'Sal'],
        instructions: [
          'Cozinhe o spaghetti em água fervente com sal até al dente.',
          'Corte o guanciale em cubos e frite até ficar crocante.',
          'Bata as gemas com o pecorino ralado.',
          'Escorra a pasta e misture com o guanciale.',
          'Retire do fogo e adicione a mistura de ovos, mexendo rapidamente.',
          'Finalize com pimenta preta moída na hora.'
        ],
        prepTime: '25 min',
        servings: 4,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=800&h=600&fit=crop'
      },
      {
        id: 'risotto-milanese',
        name: 'Risotto alla Milanese',
        rating: 9.7,
        description: 'Risoto cremoso com açafrão, manteiga e parmigiano reggiano.',
        ingredients: ['320g arroz arborio', '1L caldo de carne', '0.5g açafrão', '100g manteiga', '80g parmigiano', '1 cebola', 'Vinho branco'],
        instructions: [
          'Refogue a cebola picada na manteiga.',
          'Adicione o arroz e toste por 2 minutos.',
          'Adicione vinho branco e deixe evaporar.',
          'Adicione o caldo aos poucos, mexendo sempre.',
          'Dissolva o açafrão em caldo quente e adicione.',
          'Finalize com manteiga e parmigiano.'
        ],
        prepTime: '35 min',
        servings: 4,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1476124369491-c4c2d1d7a0b0?w=800&h=600&fit=crop'
      },
      {
        id: 'tiramisu',
        name: 'Tiramisù',
        rating: 9.8,
        description: 'Sobremesa clássica com mascarpone, café e cacau.',
        ingredients: ['500g mascarpone', '6 ovos', '100g açúcar', '300ml café expresso', '300g biscoitos savoiardi', 'Cacau em pó', 'Marsala'],
        instructions: [
          'Separe as gemas das claras.',
          'Bata as gemas com açúcar até clarear.',
          'Adicione o mascarpone e misture delicadamente.',
          'Bata as claras em neve e incorpore ao creme.',
          'Mergulhe os biscoitos no café com marsala.',
          'Monte camadas alternadas de biscoito e creme.',
          'Polvilhe cacau e leve à geladeira por 4 horas.'
        ],
        prepTime: '30 min + 4h geladeira',
        servings: 8,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800&h=600&fit=crop'
      },
      {
        id: 'ossobuco',
        name: 'Ossobuco alla Milanese',
        rating: 9.6,
        description: 'Jarrete de vitela cozido lentamente com vinho branco e legumes.',
        ingredients: ['4 jarrete de vitela', 'Farinha', '2 cenouras', '2 talos aipo', '1 cebola', 'Vinho branco', 'Caldo', 'Tomate', 'Gremolata'],
        instructions: [
          'Enfarinhe os jarretes e doure em azeite.',
          'Retire e reserve.',
          'Refogue cenoura, aipo e cebola picados.',
          'Retorne a carne, adicione vinho e deixe reduzir.',
          'Adicione tomate e caldo, tampe e cozinhe por 2h.',
          'Finalize com gremolata (alho, salsa e raspas de limão).'
        ],
        prepTime: '2h 30min',
        servings: 4,
        difficulty: 'Difícil',
        image: 'https://images.unsplash.com/photo-1633964913295-ceb43826e36f?w=800&h=600&fit=crop'
      },
      {
        id: 'pizza-margherita',
        name: 'Pizza Margherita',
        rating: 9.9,
        description: 'Pizza napolitana clássica com molho de tomate, mozzarella e manjericão.',
        ingredients: ['500g farinha 00', '325ml água', '10g sal', '3g fermento', '400g tomate San Marzano', '250g mozzarella di bufala', 'Manjericão', 'Azeite'],
        instructions: [
          'Prepare a massa e deixe fermentar por 24h.',
          'Abra a massa em formato redondo.',
          'Espalhe o molho de tomate.',
          'Adicione mozzarella em pedaços.',
          'Asse em forno a 450°C por 90 segundos.',
          'Finalize com manjericão fresco e azeite.'
        ],
        prepTime: '24h fermentação + 20min',
        servings: 2,
        difficulty: 'Difícil',
        image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&h=600&fit=crop'
      },
      {
        id: 'lasagna',
        name: 'Lasagna alla Bolognese',
        rating: 9.5,
        description: 'Lasanha tradicional com ragù bolonhês e bechamel.',
        ingredients: ['Massa fresca', '500g carne moída', '200g pancetta', 'Cenoura', 'Aipo', 'Cebola', 'Vinho tinto', 'Tomate', 'Leite', 'Bechamel', 'Parmigiano'],
        instructions: [
          'Prepare o ragù: refogue os legumes, adicione carne e pancetta.',
          'Adicione vinho e tomate, cozinhe por 3 horas.',
          'Prepare o bechamel.',
          'Monte camadas: massa, ragù, bechamel, parmigiano.',
          'Repita as camadas.',
          'Asse a 180°C por 40 minutos.'
        ],
        prepTime: '4h',
        servings: 8,
        difficulty: 'Difícil',
        image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800&h=600&fit=crop'
      },
      {
        id: 'panna-cotta',
        name: 'Panna Cotta',
        rating: 9.4,
        description: 'Sobremesa cremosa de nata com calda de frutas vermelhas.',
        ingredients: ['500ml creme de leite', '100g açúcar', '1 vagem baunilha', '3 folhas gelatina', 'Frutas vermelhas', 'Açúcar para calda'],
        instructions: [
          'Hidrate a gelatina em água fria.',
          'Aqueça o creme com açúcar e baunilha.',
          'Retire do fogo e adicione a gelatina escorrida.',
          'Distribua em forminhas e leve à geladeira por 4h.',
          'Prepare calda com frutas vermelhas e açúcar.',
          'Desenforme e sirva com a calda.'
        ],
        prepTime: '20min + 4h geladeira',
        servings: 6,
        difficulty: 'Fácil',
        image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&h=600&fit=crop'
      },
      {
        id: 'arancini',
        name: 'Arancini Siciliani',
        rating: 9.3,
        description: 'Bolinhos de arroz recheados, empanados e fritos.',
        ingredients: ['400g arroz arborio', 'Açafrão', '100g parmigiano', 'Ragù', 'Mozzarella', 'Ervilhas', 'Ovos', 'Farinha de rosca'],
        instructions: [
          'Cozinhe o arroz com açafrão e deixe esfriar.',
          'Misture com parmigiano e ovos.',
          'Faça bolinhas, recheie com ragù, mozzarella e ervilhas.',
          'Empane em farinha, ovo e farinha de rosca.',
          'Frite em óleo quente até dourar.',
          'Sirva quente.'
        ],
        prepTime: '1h',
        servings: 12,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1593504049359-74330189a345?w=800&h=600&fit=crop'
      },
      {
        id: 'saltimbocca',
        name: 'Saltimbocca alla Romana',
        rating: 9.2,
        description: 'Escalopes de vitela com presunto cru e sálvia.',
        ingredients: ['8 escalopes vitela', '8 fatias presunto cru', 'Sálvia fresca', 'Manteiga', 'Vinho branco', 'Farinha', 'Sal', 'Pimenta'],
        instructions: [
          'Coloque uma folha de sálvia e presunto sobre cada escalope.',
          'Prenda com palito.',
          'Enfarinhe levemente.',
          'Doure na manteiga dos dois lados.',
          'Adicione vinho branco e deixe reduzir.',
          'Sirva imediatamente com o molho.'
        ],
        prepTime: '20min',
        servings: 4,
        difficulty: 'Fácil',
        image: 'https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=800&h=600&fit=crop'
      },
      {
        id: 'gelato',
        name: 'Gelato Artigianale',
        rating: 9.7,
        description: 'Sorvete italiano cremoso de pistache.',
        ingredients: ['500ml leite integral', '200ml creme', '150g açúcar', '5 gemas', '200g pasta pistache', 'Pistaches torrados'],
        instructions: [
          'Aqueça leite e creme até quase ferver.',
          'Bata gemas com açúcar até clarear.',
          'Adicione o leite quente às gemas aos poucos.',
          'Retorne ao fogo baixo até engrossar (não ferver).',
          'Adicione a pasta de pistache.',
          'Resfrie e processe na sorveteira.',
          'Finalize com pistaches picados.'
        ],
        prepTime: '40min + sorveteira',
        servings: 8,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&h=600&fit=crop'
      }
    ]
  },
  {
    id: 'japan',
    name: 'Japão',
    flag: '🇯🇵',
    rank: 2,
    totalRating: 9.7,
    recipes: [
      {
        id: 'sushi',
        name: 'Sushi Nigiri',
        rating: 9.9,
        description: 'Arroz temperado com fatia de peixe fresco por cima.',
        ingredients: ['Arroz japonês', 'Vinagre de arroz', 'Açúcar', 'Sal', 'Atum', 'Salmão', 'Wasabi', 'Shoyu'],
        instructions: [
          'Cozinhe o arroz e tempere com vinagre, açúcar e sal.',
          'Deixe esfriar até temperatura ambiente.',
          'Corte o peixe em fatias finas.',
          'Molde o arroz em formato oval.',
          'Coloque um pouco de wasabi.',
          'Posicione a fatia de peixe sobre o arroz.',
          'Sirva com shoyu e gengibre.'
        ],
        prepTime: '45min',
        servings: 4,
        difficulty: 'Difícil',
        image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=800&h=600&fit=crop'
      },
      {
        id: 'ramen',
        name: 'Ramen Tonkotsu',
        rating: 9.8,
        description: 'Sopa de macarrão com caldo cremoso de ossos de porco.',
        ingredients: ['Ossos de porco', 'Macarrão ramen', 'Chashu', 'Ovo marinado', 'Negi', 'Nori', 'Gergelim', 'Óleo de alho'],
        instructions: [
          'Cozinhe os ossos por 12-18 horas até o caldo ficar branco.',
          'Coe o caldo e tempere com sal e shoyu.',
          'Cozinhe o macarrão separadamente.',
          'Prepare o chashu (barriga de porco marinada).',
          'Marine os ovos em shoyu e mirin.',
          'Monte a tigela: caldo, macarrão, chashu, ovo, negi.',
          'Finalize com nori e óleo de alho.'
        ],
        prepTime: '18h',
        servings: 4,
        difficulty: 'Difícil',
        image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&h=600&fit=crop'
      },
      {
        id: 'tempura',
        name: 'Tempura',
        rating: 9.6,
        description: 'Legumes e frutos do mar empanados em massa leve e crocante.',
        ingredients: ['Camarões', 'Berinjela', 'Batata doce', 'Pimentão', 'Farinha', 'Água gelada', 'Ovo', 'Óleo', 'Tentsuyu'],
        instructions: [
          'Prepare os ingredientes: limpe camarões, corte legumes.',
          'Faça a massa: misture farinha, ovo e água gelada levemente.',
          'Aqueça óleo a 180°C.',
          'Passe os ingredientes na massa.',
          'Frite rapidamente até dourar.',
          'Escorra em papel absorvente.',
          'Sirva com tentsuyu (molho de dashi, shoyu e mirin).'
        ],
        prepTime: '30min',
        servings: 4,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&h=600&fit=crop'
      },
      {
        id: 'okonomiyaki',
        name: 'Okonomiyaki',
        rating: 9.4,
        description: 'Panqueca japonesa salgada com repolho e diversos ingredientes.',
        ingredients: ['Farinha', 'Repolho', 'Ovos', 'Dashi', 'Bacon', 'Camarão', 'Molho okonomiyaki', 'Maionese japonesa', 'Katsuobushi', 'Aonori'],
        instructions: [
          'Misture farinha, ovos e dashi para fazer a massa.',
          'Adicione repolho picado fino.',
          'Aqueça uma chapa ou frigideira.',
          'Despeje a massa em formato redondo.',
          'Adicione bacon e camarão por cima.',
          'Vire e cozinhe o outro lado.',
          'Finalize com molho, maionese, katsuobushi e aonori.'
        ],
        prepTime: '25min',
        servings: 2,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1589927986089-35812388d1f4?w=800&h=600&fit=crop'
      },
      {
        id: 'tonkatsu',
        name: 'Tonkatsu',
        rating: 9.5,
        description: 'Costeleta de porco empanada e frita, crocante por fora e suculenta por dentro.',
        ingredients: ['Lombo de porco', 'Farinha', 'Ovos', 'Panko', 'Óleo', 'Molho tonkatsu', 'Repolho', 'Arroz'],
        instructions: [
          'Tempere o lombo com sal e pimenta.',
          'Passe na farinha, depois no ovo batido.',
          'Empane generosamente com panko.',
          'Frite em óleo a 170°C por 6-8 minutos.',
          'Escorra e deixe descansar 3 minutos.',
          'Corte em tiras.',
          'Sirva com molho tonkatsu, repolho ralado e arroz.'
        ],
        prepTime: '30min',
        servings: 4,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1628863353691-0071c8c1874c?w=800&h=600&fit=crop'
      },
      {
        id: 'takoyaki',
        name: 'Takoyaki',
        rating: 9.3,
        description: 'Bolinhos de polvo cozidos em forma especial.',
        ingredients: ['Farinha', 'Dashi', 'Ovos', 'Polvo cozido', 'Gengibre', 'Cebolinha', 'Molho takoyaki', 'Maionese', 'Katsuobushi', 'Aonori'],
        instructions: [
          'Prepare a massa com farinha, dashi e ovos.',
          'Aqueça a forma de takoyaki.',
          'Despeje a massa nas cavidades.',
          'Adicione cubos de polvo, gengibre e cebolinha.',
          'Vire as bolinhas com palitos até ficarem redondas.',
          'Cozinhe até dourar por todos os lados.',
          'Finalize com molho, maionese, katsuobushi e aonori.'
        ],
        prepTime: '40min',
        servings: 20,
        difficulty: 'Difícil',
        image: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=800&h=600&fit=crop'
      },
      {
        id: 'gyoza',
        name: 'Gyoza',
        rating: 9.5,
        description: 'Pastéis japoneses recheados com carne e legumes.',
        ingredients: ['Massa gyoza', 'Carne de porco moída', 'Repolho', 'Alho-poró', 'Gengibre', 'Alho', 'Shoyu', 'Óleo de gergelim', 'Sake'],
        instructions: [
          'Misture a carne com legumes picados e temperos.',
          'Coloque uma colher de recheio no centro da massa.',
          'Umedeça as bordas e feche fazendo pregas.',
          'Aqueça óleo em frigideira.',
          'Doure a base dos gyozas.',
          'Adicione água e tampe para cozinhar no vapor.',
          'Sirva com molho de shoyu e vinagre.'
        ],
        prepTime: '45min',
        servings: 30,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1626804475297-41608ea09aeb?w=800&h=600&fit=crop'
      },
      {
        id: 'udon',
        name: 'Udon',
        rating: 9.4,
        description: 'Macarrão grosso servido em caldo quente ou frio.',
        ingredients: ['Macarrão udon', 'Dashi', 'Shoyu', 'Mirin', 'Tempura', 'Kamaboko', 'Negi', 'Nori'],
        instructions: [
          'Prepare o caldo com dashi, shoyu e mirin.',
          'Cozinhe o udon em água fervente.',
          'Escorra e lave em água fria.',
          'Aqueça o caldo.',
          'Coloque o udon em tigelas.',
          'Despeje o caldo quente.',
          'Adicione tempura, kamaboko, negi e nori.'
        ],
        prepTime: '20min',
        servings: 4,
        difficulty: 'Fácil',
        image: 'https://images.unsplash.com/photo-1618841557871-b4664fbf0cb3?w=800&h=600&fit=crop'
      },
      {
        id: 'yakitori',
        name: 'Yakitori',
        rating: 9.6,
        description: 'Espetinhos de frango grelhados com molho tare.',
        ingredients: ['Coxa de frango', 'Cebolinha', 'Shoyu', 'Mirin', 'Sake', 'Açúcar', 'Sal'],
        instructions: [
          'Corte o frango em cubos.',
          'Monte os espetinhos alternando frango e cebolinha.',
          'Prepare o tare: reduza shoyu, mirin, sake e açúcar.',
          'Grelhe os espetinhos em fogo alto.',
          'Pincele com tare durante a cocção.',
          'Vire várias vezes até dourar.',
          'Sirva quente com mais tare.'
        ],
        prepTime: '30min',
        servings: 8,
        difficulty: 'Fácil',
        image: 'https://images.unsplash.com/photo-1529042410759-befb1204b468?w=800&h=600&fit=crop'
      },
      {
        id: 'matcha-mochi',
        name: 'Matcha Mochi',
        rating: 9.2,
        description: 'Doce japonês macio de arroz com chá verde matcha.',
        ingredients: ['Farinha de arroz mochiko', 'Açúcar', 'Água', 'Matcha', 'Anko (pasta de feijão doce)', 'Amido de milho'],
        instructions: [
          'Misture mochiko, açúcar, água e matcha.',
          'Cozinhe no microondas por 2 minutos.',
          'Mexa e cozinhe mais 1 minuto.',
          'Polvilhe amido em superfície.',
          'Estenda a massa e corte círculos.',
          'Recheie com anko.',
          'Feche e modele em bolinhas.'
        ],
        prepTime: '30min',
        servings: 12,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1582716401301-b2407dc7563d?w=800&h=600&fit=crop'
      }
    ]
  },
  {
    id: 'france',
    name: 'França',
    flag: '🇫🇷',
    rank: 3,
    totalRating: 9.6,
    recipes: [
      {
        id: 'coq-au-vin',
        name: 'Coq au Vin',
        rating: 9.7,
        description: 'Frango cozido lentamente em vinho tinto com cogumelos e bacon.',
        ingredients: ['Frango', 'Vinho tinto', 'Bacon', 'Cogumelos', 'Cebolas pérola', 'Cenoura', 'Alho', 'Tomilho', 'Louro', 'Manteiga', 'Farinha'],
        instructions: [
          'Marine o frango no vinho por 2 horas.',
          'Frite o bacon até crocante.',
          'Doure o frango na gordura do bacon.',
          'Refogue cenoura, cebola e alho.',
          'Retorne o frango, adicione vinho e ervas.',
          'Cozinhe em fogo baixo por 1h30.',
          'Adicione cogumelos salteados.',
          'Finalize com manteiga.'
        ],
        prepTime: '2h 30min',
        servings: 6,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=800&h=600&fit=crop'
      },
      {
        id: 'bouillabaisse',
        name: 'Bouillabaisse',
        rating: 9.6,
        description: 'Sopa de peixe provençal com frutos do mar e rouille.',
        ingredients: ['Peixes variados', 'Frutos do mar', 'Tomate', 'Alho', 'Cebola', 'Funcho', 'Açafrão', 'Vinho branco', 'Azeite', 'Rouille', 'Croutons'],
        instructions: [
          'Refogue cebola, alho e funcho em azeite.',
          'Adicione tomate, açafrão e vinho branco.',
          'Adicione caldo de peixe e cozinhe 20 minutos.',
          'Adicione peixes firmes primeiro.',
          'Depois peixes delicados e frutos do mar.',
          'Cozinhe até os peixes ficarem prontos.',
          'Sirva com rouille e croutons.'
        ],
        prepTime: '1h 30min',
        servings: 6,
        difficulty: 'Difícil',
        image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=800&h=600&fit=crop'
      },
      {
        id: 'ratatouille',
        name: 'Ratatouille',
        rating: 9.4,
        description: 'Legumes provençais assados em camadas.',
        ingredients: ['Berinjela', 'Abobrinha', 'Tomate', 'Pimentão', 'Cebola', 'Alho', 'Tomilho', 'Manjericão', 'Azeite'],
        instructions: [
          'Prepare molho de tomate com cebola e alho.',
          'Espalhe no fundo de uma forma.',
          'Corte os legumes em rodelas finas.',
          'Arrume em camadas alternadas.',
          'Regue com azeite e temperos.',
          'Cubra com papel alumínio.',
          'Asse a 180°C por 45 minutos.',
          'Retire o papel e asse mais 15 minutos.'
        ],
        prepTime: '1h 30min',
        servings: 6,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=800&h=600&fit=crop'
      },
      {
        id: 'beef-bourguignon',
        name: 'Boeuf Bourguignon',
        rating: 9.8,
        description: 'Carne bovina cozida lentamente em vinho tinto da Borgonha.',
        ingredients: ['Carne bovina', 'Vinho tinto Borgonha', 'Bacon', 'Cebolas pérola', 'Cogumelos', 'Cenoura', 'Alho', 'Tomilho', 'Louro', 'Manteiga'],
        instructions: [
          'Marine a carne no vinho por 4 horas.',
          'Frite o bacon e reserve.',
          'Doure a carne em lotes.',
          'Refogue cenoura, cebola e alho.',
          'Retorne a carne, adicione vinho e ervas.',
          'Cozinhe em fogo baixo por 3 horas.',
          'Adicione cebolas pérola e cogumelos.',
          'Finalize com manteiga.'
        ],
        prepTime: '4h',
        servings: 6,
        difficulty: 'Difícil',
        image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=800&h=600&fit=crop'
      },
      {
        id: 'croissant',
        name: 'Croissant',
        rating: 9.9,
        description: 'Pão folhado amanteigado francês clássico.',
        ingredients: ['Farinha', 'Leite', 'Fermento', 'Açúcar', 'Sal', 'Manteiga (muito)', 'Ovo'],
        instructions: [
          'Prepare a massa e deixe descansar.',
          'Lamine a manteiga em retângulo.',
          'Envolva a manteiga na massa.',
          'Faça 3 voltas duplas com descanso entre elas.',
          'Abra a massa e corte triângulos.',
          'Enrole os triângulos formando croissants.',
          'Deixe crescer por 2 horas.',
          'Pincele com ovo e asse a 200°C por 15 minutos.'
        ],
        prepTime: '8h (com descansos)',
        servings: 12,
        difficulty: 'Difícil',
        image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&h=600&fit=crop'
      },
      {
        id: 'creme-brulee',
        name: 'Crème Brûlée',
        rating: 9.7,
        description: 'Creme de baunilha com crosta caramelizada.',
        ingredients: ['Creme de leite', 'Gemas', 'Açúcar', 'Baunilha', 'Açúcar para caramelizar'],
        instructions: [
          'Aqueça o creme com baunilha.',
          'Bata gemas com açúcar.',
          'Adicione o creme quente às gemas.',
          'Distribua em ramequins.',
          'Asse em banho-maria a 150°C por 40 minutos.',
          'Resfrie completamente.',
          'Polvilhe açúcar e caramelize com maçarico.'
        ],
        prepTime: '1h + 4h geladeira',
        servings: 6,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=800&h=600&fit=crop'
      },
      {
        id: 'quiche-lorraine',
        name: 'Quiche Lorraine',
        rating: 9.5,
        description: 'Torta salgada com bacon, queijo e creme.',
        ingredients: ['Massa podre', 'Bacon', 'Ovos', 'Creme de leite', 'Queijo gruyère', 'Noz-moscada', 'Sal', 'Pimenta'],
        instructions: [
          'Forre uma forma com a massa.',
          'Pré-asse por 10 minutos.',
          'Frite o bacon até crocante.',
          'Distribua bacon e queijo sobre a massa.',
          'Bata ovos com creme e temperos.',
          'Despeje sobre o bacon.',
          'Asse a 180°C por 35 minutos.'
        ],
        prepTime: '1h',
        servings: 8,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1476124369491-c4c2d1d7a0b0?w=800&h=600&fit=crop'
      },
      {
        id: 'escargot',
        name: 'Escargots de Bourgogne',
        rating: 9.3,
        description: 'Caracóis com manteiga de alho e salsa.',
        ingredients: ['Caracóis', 'Manteiga', 'Alho', 'Salsa', 'Echalote', 'Vinho branco', 'Pão'],
        instructions: [
          'Prepare a manteiga: misture manteiga, alho, salsa e echalote.',
          'Coloque os caracóis nas conchas.',
          'Cubra com a manteiga de alho.',
          'Arrume em forma especial.',
          'Asse a 200°C por 10 minutos.',
          'Sirva imediatamente com pão.'
        ],
        prepTime: '30min',
        servings: 4,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1599020792689-9fde458e7e17?w=800&h=600&fit=crop'
      },
      {
        id: 'macaron',
        name: 'Macaron',
        rating: 9.8,
        description: 'Biscoito francês delicado com recheio de ganache.',
        ingredients: ['Farinha de amêndoas', 'Açúcar de confeiteiro', 'Claras', 'Açúcar', 'Corante', 'Ganache'],
        instructions: [
          'Peneire farinha de amêndoas e açúcar de confeiteiro.',
          'Faça merengue francês com claras e açúcar.',
          'Incorpore a mistura de amêndoas (macaronage).',
          'Faça discos em tapete de silicone.',
          'Deixe secar por 30 minutos.',
          'Asse a 150°C por 12 minutos.',
          'Recheie com ganache.'
        ],
        prepTime: '2h',
        servings: 30,
        difficulty: 'Difícil',
        image: 'https://images.unsplash.com/photo-1571506165871-ee72a35bc9d4?w=800&h=600&fit=crop'
      },
      {
        id: 'tarte-tatin',
        name: 'Tarte Tatin',
        rating: 9.6,
        description: 'Torta de maçã invertida caramelizada.',
        ingredients: ['Maçãs', 'Açúcar', 'Manteiga', 'Massa folhada', 'Baunilha'],
        instructions: [
          'Caramelize açúcar e manteiga em forma.',
          'Arrume maçãs em fatias sobre o caramelo.',
          'Cozinhe em fogo médio por 20 minutos.',
          'Cubra com massa folhada.',
          'Asse a 200°C por 25 minutos.',
          'Deixe esfriar 10 minutos.',
          'Inverta em prato.',
          'Sirva com creme fraîche.'
        ],
        prepTime: '1h',
        servings: 8,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800&h=600&fit=crop'
      }
    ]
  },
  {
    id: 'thailand',
    name: 'Tailândia',
    flag: '🇹🇭',
    rank: 4,
    totalRating: 9.5,
    recipes: [
      {
        id: 'pad-thai',
        name: 'Pad Thai',
        rating: 9.8,
        description: 'Macarrão de arroz salteado com camarão, tofu e amendoim.',
        ingredients: ['Macarrão de arroz', 'Camarão', 'Tofu', 'Ovos', 'Broto de feijão', 'Cebolinha', 'Amendoim', 'Molho tamarindo', 'Molho de peixe', 'Açúcar de palma'],
        instructions: [
          'Hidrate o macarrão em água morna.',
          'Prepare o molho com tamarindo, molho de peixe e açúcar.',
          'Salteie camarão e tofu em wok quente.',
          'Adicione ovos e mexa.',
          'Adicione macarrão e molho.',
          'Salteie rapidamente.',
          'Finalize com broto, cebolinha e amendoim.'
        ],
        prepTime: '30min',
        servings: 4,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?w=800&h=600&fit=crop'
      },
      {
        id: 'tom-yum',
        name: 'Tom Yum Goong',
        rating: 9.7,
        description: 'Sopa picante e azeda com camarão.',
        ingredients: ['Camarão', 'Cogumelos', 'Capim-limão', 'Galanga', 'Folhas de limão kaffir', 'Pimenta tailandesa', 'Molho de peixe', 'Suco de limão', 'Coentro'],
        instructions: [
          'Ferva água com capim-limão, galanga e folhas de limão.',
          'Adicione cogumelos e cozinhe 5 minutos.',
          'Adicione camarões.',
          'Tempere com molho de peixe e pimenta.',
          'Retire do fogo.',
          'Adicione suco de limão.',
          'Finalize com coentro.'
        ],
        prepTime: '25min',
        servings: 4,
        difficulty: 'Fácil',
        image: 'https://images.unsplash.com/photo-1548943487-a2e4e43b4853?w=800&h=600&fit=crop'
      },
      {
        id: 'green-curry',
        name: 'Green Curry',
        rating: 9.6,
        description: 'Curry verde tailandês cremoso com frango.',
        ingredients: ['Frango', 'Pasta de curry verde', 'Leite de coco', 'Berinjela tailandesa', 'Pimentão', 'Manjericão tailandês', 'Molho de peixe', 'Açúcar de palma'],
        instructions: [
          'Frite a pasta de curry em óleo.',
          'Adicione metade do leite de coco.',
          'Adicione frango e cozinhe.',
          'Adicione berinjela e pimentão.',
          'Adicione resto do leite de coco.',
          'Tempere com molho de peixe e açúcar.',
          'Finalize com manjericão.'
        ],
        prepTime: '35min',
        servings: 4,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=800&h=600&fit=crop'
      },
      {
        id: 'som-tam',
        name: 'Som Tam',
        rating: 9.4,
        description: 'Salada de mamão verde picante.',
        ingredients: ['Mamão verde', 'Tomate cereja', 'Vagem', 'Amendoim', 'Camarão seco', 'Alho', 'Pimenta', 'Molho de peixe', 'Suco de limão', 'Açúcar de palma'],
        instructions: [
          'Rale o mamão verde em tiras finas.',
          'Soque alho e pimenta no pilão.',
          'Adicione vagem e tomate, soque levemente.',
          'Adicione mamão e soque.',
          'Tempere com molho de peixe, limão e açúcar.',
          'Adicione amendoim e camarão seco.',
          'Misture bem.'
        ],
        prepTime: '20min',
        servings: 4,
        difficulty: 'Fácil',
        image: 'https://images.unsplash.com/photo-1562565652-a0d8f0c59eb4?w=800&h=600&fit=crop'
      },
      {
        id: 'massaman-curry',
        name: 'Massaman Curry',
        rating: 9.5,
        description: 'Curry tailandês suave com influência indiana.',
        ingredients: ['Carne bovina', 'Pasta massaman', 'Leite de coco', 'Batata', 'Cebola', 'Amendoim', 'Molho de peixe', 'Açúcar de palma', 'Tamarindo'],
        instructions: [
          'Frite a pasta massaman em óleo.',
          'Adicione carne e doure.',
          'Adicione leite de coco.',
          'Cozinhe por 1 hora.',
          'Adicione batata e cebola.',
          'Cozinhe até amaciar.',
          'Tempere e adicione amendoim torrado.'
        ],
        prepTime: '1h 30min',
        servings: 6,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&h=600&fit=crop'
      },
      {
        id: 'khao-soi',
        name: 'Khao Soi',
        rating: 9.3,
        description: 'Curry de macarrão do norte da Tailândia.',
        ingredients: ['Macarrão de ovo', 'Frango', 'Pasta de curry', 'Leite de coco', 'Caldo', 'Cebolinha', 'Coentro', 'Limão', 'Chalota frita'],
        instructions: [
          'Frite a pasta de curry.',
          'Adicione leite de coco e caldo.',
          'Adicione frango e cozinhe.',
          'Cozinhe o macarrão separadamente.',
          'Frite parte do macarrão até crocante.',
          'Monte: macarrão macio, curry, macarrão crocante.',
          'Finalize com cebolinha, coentro, limão e chalota.'
        ],
        prepTime: '40min',
        servings: 4,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1569562211093-4ed0d0758f12?w=800&h=600&fit=crop'
      },
      {
        id: 'larb',
        name: 'Larb Gai',
        rating: 9.4,
        description: 'Salada de carne moída picante do nordeste.',
        ingredients: ['Frango moído', 'Arroz torrado', 'Hortelã', 'Coentro', 'Cebolinha', 'Chalota', 'Pimenta', 'Molho de peixe', 'Suco de limão'],
        instructions: [
          'Cozinhe o frango moído.',
          'Toste arroz e moa grosseiramente.',
          'Misture frango com chalota, pimenta e ervas.',
          'Tempere com molho de peixe e limão.',
          'Adicione arroz torrado.',
          'Sirva com alface e vegetais.'
        ],
        prepTime: '25min',
        servings: 4,
        difficulty: 'Fácil',
        image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=800&h=600&fit=crop'
      },
      {
        id: 'mango-sticky-rice',
        name: 'Mango Sticky Rice',
        rating: 9.6,
        description: 'Arroz glutinoso doce com manga e leite de coco.',
        ingredients: ['Arroz glutinoso', 'Leite de coco', 'Açúcar', 'Sal', 'Manga madura', 'Gergelim'],
        instructions: [
          'Deixe o arroz de molho por 4 horas.',
          'Cozinhe no vapor por 20 minutos.',
          'Aqueça leite de coco com açúcar e sal.',
          'Misture com o arroz quente.',
          'Deixe descansar 30 minutos.',
          'Corte a manga em fatias.',
          'Sirva arroz com manga e leite de coco por cima.',
          'Polvilhe gergelim.'
        ],
        prepTime: '4h molho + 1h',
        servings: 4,
        difficulty: 'Fácil',
        image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=800&h=600&fit=crop'
      },
      {
        id: 'satay',
        name: 'Satay',
        rating: 9.5,
        description: 'Espetinhos de carne marinados com molho de amendoim.',
        ingredients: ['Frango', 'Leite de coco', 'Curry em pó', 'Açúcar', 'Molho de soja', 'Amendoim', 'Pasta de curry', 'Tamarindo'],
        instructions: [
          'Marine o frango em leite de coco, curry e açúcar.',
          'Monte os espetinhos.',
          'Grelhe até dourar.',
          'Prepare molho: frite pasta de curry, adicione leite de coco.',
          'Adicione amendoim moído e tamarindo.',
          'Sirva espetinhos com molho.'
        ],
        prepTime: '2h marinada + 20min',
        servings: 8,
        difficulty: 'Fácil',
        image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=800&h=600&fit=crop'
      },
      {
        id: 'thai-basil-chicken',
        name: 'Pad Krapow Gai',
        rating: 9.4,
        description: 'Frango salteado com manjericão tailandês.',
        ingredients: ['Frango moído', 'Manjericão tailandês', 'Pimenta', 'Alho', 'Molho de ostra', 'Molho de soja', 'Açúcar', 'Ovo frito'],
        instructions: [
          'Salteie alho e pimenta em óleo quente.',
          'Adicione frango e cozinhe.',
          'Tempere com molhos e açúcar.',
          'Adicione manjericão e salteie rapidamente.',
          'Frite um ovo separadamente.',
          'Sirva sobre arroz com ovo por cima.'
        ],
        prepTime: '15min',
        servings: 2,
        difficulty: 'Fácil',
        image: 'https://images.unsplash.com/photo-1562565652-a0d8f0c59eb4?w=800&h=600&fit=crop'
      }
    ]
  },
  {
    id: 'spain',
    name: 'Espanha',
    flag: '🇪🇸',
    rank: 5,
    totalRating: 9.4,
    recipes: [
      {
        id: 'paella',
        name: 'Paella Valenciana',
        rating: 9.8,
        description: 'Arroz espanhol com frango, coelho e vegetais.',
        ingredients: ['Arroz bomba', 'Frango', 'Coelho', 'Vagem', 'Feijão branco', 'Tomate', 'Pimentão', 'Açafrão', 'Alecrim', 'Azeite'],
        instructions: [
          'Doure frango e coelho em paellera.',
          'Adicione vegetais e refogue.',
          'Adicione tomate e pimentão.',
          'Adicione arroz e toste.',
          'Adicione caldo com açafrão.',
          'Cozinhe sem mexer por 18 minutos.',
          'Deixe descansar 5 minutos.'
        ],
        prepTime: '1h',
        servings: 6,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1534080564583-6be75777b70a?w=800&h=600&fit=crop'
      },
      {
        id: 'gazpacho',
        name: 'Gazpacho',
        rating: 9.5,
        description: 'Sopa fria de tomate e vegetais.',
        ingredients: ['Tomate', 'Pepino', 'Pimentão', 'Cebola', 'Alho', 'Pão', 'Vinagre', 'Azeite', 'Sal'],
        instructions: [
          'Corte todos os vegetais.',
          'Deixe o pão de molho em água.',
          'Bata tudo no liquidificador.',
          'Adicione vinagre e azeite.',
          'Tempere com sal.',
          'Coe se desejar.',
          'Leve à geladeira por 2 horas.',
          'Sirva com cubos de pão torrado.'
        ],
        prepTime: '20min + 2h geladeira',
        servings: 6,
        difficulty: 'Fácil',
        image: 'https://images.unsplash.com/photo-1541529086526-db283c563270?w=800&h=600&fit=crop'
      },
      {
        id: 'tortilla-espanola',
        name: 'Tortilla Española',
        rating: 9.6,
        description: 'Omelete espanhola de batata e cebola.',
        ingredients: ['Batatas', 'Ovos', 'Cebola', 'Azeite', 'Sal'],
        instructions: [
          'Corte batatas em fatias finas.',
          'Frite em muito azeite até macias.',
          'Escorra bem.',
          'Bata os ovos com sal.',
          'Misture batatas e cebola aos ovos.',
          'Cozinhe em frigideira até firmar.',
          'Vire e cozinhe o outro lado.',
          'Sirva morna ou fria.'
        ],
        prepTime: '40min',
        servings: 6,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800&h=600&fit=crop'
      },
      {
        id: 'patatas-bravas',
        name: 'Patatas Bravas',
        rating: 9.3,
        description: 'Batatas fritas com molho picante.',
        ingredients: ['Batatas', 'Óleo', 'Tomate', 'Pimentão', 'Pimenta', 'Alho', 'Páprica', 'Maionese', 'Vinagre'],
        instructions: [
          'Corte batatas em cubos.',
          'Frite até dourar e crocante.',
          'Prepare molho bravo: refogue alho, pimentão e tomate.',
          'Adicione páprica e pimenta.',
          'Prepare aioli picante.',
          'Sirva batatas com os dois molhos.'
        ],
        prepTime: '35min',
        servings: 4,
        difficulty: 'Fácil',
        image: 'https://images.unsplash.com/photo-1598511726623-d2e9996892f0?w=800&h=600&fit=crop'
      },
      {
        id: 'churros',
        name: 'Churros con Chocolate',
        rating: 9.7,
        description: 'Massa frita crocante servida com chocolate quente.',
        ingredients: ['Farinha', 'Água', 'Sal', 'Óleo', 'Açúcar', 'Canela', 'Chocolate', 'Leite'],
        instructions: [
          'Ferva água com sal.',
          'Adicione farinha de uma vez e mexa.',
          'Deixe esfriar um pouco.',
          'Coloque em saco de confeitar.',
          'Frite em óleo quente formando churros.',
          'Escorra e passe em açúcar com canela.',
          'Prepare chocolate quente espesso.',
          'Sirva churros com chocolate para mergulhar.'
        ],
        prepTime: '30min',
        servings: 6,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1543773495-e8ba8f1f2e9c?w=800&h=600&fit=crop'
      },
      {
        id: 'pulpo-gallega',
        name: 'Pulpo a la Gallega',
        rating: 9.4,
        description: 'Polvo galego com batatas, páprica e azeite.',
        ingredients: ['Polvo', 'Batatas', 'Páprica doce', 'Páprica picante', 'Azeite', 'Sal grosso'],
        instructions: [
          'Cozinhe o polvo em água fervente (3 mergulhos).',
          'Cozinhe por 40 minutos até macio.',
          'Cozinhe batatas em rodelas.',
          'Corte o polvo em rodelas.',
          'Arrume batatas e polvo no prato.',
          'Polvilhe sal grosso e páprica.',
          'Regue generosamente com azeite.'
        ],
        prepTime: '1h',
        servings: 4,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1625944230945-1b7dd3b949ab?w=800&h=600&fit=crop'
      },
      {
        id: 'croquetas',
        name: 'Croquetas de Jamón',
        rating: 9.5,
        description: 'Croquetes cremosos de presunto ibérico.',
        ingredients: ['Presunto ibérico', 'Manteiga', 'Farinha', 'Leite', 'Noz-moscada', 'Ovos', 'Farinha de rosca', 'Óleo'],
        instructions: [
          'Faça bechamel: derreta manteiga, adicione farinha.',
          'Adicione leite aos poucos mexendo.',
          'Adicione presunto picado.',
          'Tempere com noz-moscada.',
          'Deixe esfriar completamente.',
          'Modele croquetes.',
          'Empane em farinha, ovo e farinha de rosca.',
          'Frite até dourar.'
        ],
        prepTime: '2h (com resfriamento)',
        servings: 20,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&h=600&fit=crop'
      },
      {
        id: 'fabada',
        name: 'Fabada Asturiana',
        rating: 9.3,
        description: 'Ensopado de feijão branco com embutidos.',
        ingredients: ['Feijão branco', 'Chorizo', 'Morcilla', 'Panceta', 'Açafrão', 'Alho', 'Louro', 'Pimentão'],
        instructions: [
          'Deixe o feijão de molho overnight.',
          'Cozinhe o feijão em água fria.',
          'Adicione carnes e embutidos.',
          'Adicione açafrão, alho e louro.',
          'Cozinhe em fogo baixo por 2 horas.',
          'Não mexa muito para não quebrar os feijões.',
          'Sirva quente.'
        ],
        prepTime: '2h 30min',
        servings: 6,
        difficulty: 'Fácil',
        image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&h=600&fit=crop'
      },
      {
        id: 'crema-catalana',
        name: 'Crema Catalana',
        rating: 9.6,
        description: 'Creme catalão com crosta caramelizada.',
        ingredients: ['Leite', 'Gemas', 'Açúcar', 'Amido de milho', 'Canela', 'Casca de limão', 'Açúcar para caramelizar'],
        instructions: [
          'Ferva leite com canela e casca de limão.',
          'Bata gemas com açúcar e amido.',
          'Adicione leite quente às gemas.',
          'Retorne ao fogo e cozinhe até engrossar.',
          'Distribua em tigelas rasas.',
          'Resfrie completamente.',
          'Polvilhe açúcar e caramelize com ferro quente.'
        ],
        prepTime: '30min + 4h geladeira',
        servings: 6,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&h=600&fit=crop'
      },
      {
        id: 'pimientos-padron',
        name: 'Pimientos de Padrón',
        rating: 9.2,
        description: 'Pimentões pequenos fritos com sal grosso.',
        ingredients: ['Pimientos de Padrón', 'Azeite', 'Sal grosso'],
        instructions: [
          'Lave e seque bem os pimentões.',
          'Aqueça bastante azeite em frigideira.',
          'Frite os pimentões até a pele bolhar.',
          'Escorra em papel absorvente.',
          'Polvilhe sal grosso generosamente.',
          'Sirva imediatamente.'
        ],
        prepTime: '10min',
        servings: 4,
        difficulty: 'Fácil',
        image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800&h=600&fit=crop'
      }
    ]
  },
  {
    id: 'india',
    name: 'Índia',
    flag: '🇮🇳',
    rank: 6,
    totalRating: 9.3,
    recipes: [
      {
        id: 'butter-chicken',
        name: 'Butter Chicken',
        rating: 9.7,
        description: 'Frango em molho cremoso de tomate e manteiga.',
        ingredients: ['Frango', 'Iogurte', 'Garam masala', 'Tomate', 'Creme de leite', 'Manteiga', 'Gengibre', 'Alho', 'Pimenta', 'Coentro'],
        instructions: [
          'Marine frango em iogurte e especiarias por 2 horas.',
          'Asse o frango no tandoor ou forno.',
          'Refogue gengibre e alho na manteiga.',
          'Adicione tomate e cozinhe até virar molho.',
          'Adicione especiarias e creme.',
          'Adicione o frango assado.',
          'Finalize com manteiga e coentro.'
        ],
        prepTime: '2h 30min',
        servings: 6,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=800&h=600&fit=crop'
      },
      {
        id: 'biryani',
        name: 'Chicken Biryani',
        rating: 9.8,
        description: 'Arroz aromático em camadas com frango especiado.',
        ingredients: ['Arroz basmati', 'Frango', 'Iogurte', 'Cebola', 'Tomate', 'Especiarias', 'Açafrão', 'Leite', 'Ghee', 'Hortelã', 'Coentro'],
        instructions: [
          'Marine frango em iogurte e especiarias.',
          'Cozinhe arroz até 70% pronto.',
          'Frite cebola até dourar.',
          'Cozinhe frango com tomate e especiarias.',
          'Monte camadas: frango, arroz, cebola frita.',
          'Regue com leite de açafrão.',
          'Cozinhe em dum (vapor) por 30 minutos.'
        ],
        prepTime: '2h',
        servings: 6,
        difficulty: 'Difícil',
        image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&h=600&fit=crop'
      },
      {
        id: 'palak-paneer',
        name: 'Palak Paneer',
        rating: 9.5,
        description: 'Queijo indiano em molho cremoso de espinafre.',
        ingredients: ['Paneer', 'Espinafre', 'Cebola', 'Tomate', 'Gengibre', 'Alho', 'Garam masala', 'Creme', 'Ghee'],
        instructions: [
          'Branqueie espinafre e bata no liquidificador.',
          'Frite cubos de paneer até dourar.',
          'Refogue cebola, gengibre e alho.',
          'Adicione tomate e cozinhe.',
          'Adicione purê de espinafre.',
          'Adicione especiarias e creme.',
          'Adicione paneer e cozinhe 5 minutos.'
        ],
        prepTime: '35min',
        servings: 4,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&h=600&fit=crop'
      },
      {
        id: 'tandoori-chicken',
        name: 'Tandoori Chicken',
        rating: 9.6,
        description: 'Frango marinado em especiarias e assado no tandoor.',
        ingredients: ['Frango', 'Iogurte', 'Suco de limão', 'Garam masala', 'Páprica', 'Cominho', 'Gengibre', 'Alho', 'Corante vermelho'],
        instructions: [
          'Faça cortes no frango.',
          'Misture iogurte com todas as especiarias.',
          'Marine o frango por 4-24 horas.',
          'Asse em forno muito quente (250°C).',
          'Vire e pincele com ghee.',
          'Asse até carbonizar levemente.',
          'Sirva com limão e cebola.'
        ],
        prepTime: '4h marinada + 30min',
        servings: 4,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=800&h=600&fit=crop'
      },
      {
        id: 'dal-makhani',
        name: 'Dal Makhani',
        rating: 9.4,
        description: 'Lentilhas pretas cremosas com manteiga.',
        ingredients: ['Lentilha preta', 'Feijão rajma', 'Manteiga', 'Creme', 'Tomate', 'Gengibre', 'Alho', 'Garam masala', 'Pimenta'],
        instructions: [
          'Deixe lentilhas de molho overnight.',
          'Cozinhe em panela de pressão por 30 minutos.',
          'Refogue gengibre e alho na manteiga.',
          'Adicione tomate e especiarias.',
          'Adicione lentilhas cozidas.',
          'Cozinhe em fogo baixo por 1 hora.',
          'Finalize com manteiga e creme.'
        ],
        prepTime: '2h',
        servings: 6,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&h=600&fit=crop'
      },
      {
        id: 'naan',
        name: 'Naan',
        rating: 9.5,
        description: 'Pão indiano macio assado no tandoor.',
        ingredients: ['Farinha', 'Iogurte', 'Leite', 'Fermento', 'Açúcar', 'Sal', 'Ghee', 'Alho'],
        instructions: [
          'Misture farinha, fermento, açúcar e sal.',
          'Adicione iogurte e leite morno.',
          'Sove até ficar macio.',
          'Deixe crescer por 2 horas.',
          'Divida e abra em formato oval.',
          'Asse em forno muito quente ou tandoor.',
          'Pincele com ghee e alho.'
        ],
        prepTime: '2h 30min',
        servings: 8,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&h=600&fit=crop'
      },
      {
        id: 'samosa',
        name: 'Samosa',
        rating: 9.6,
        description: 'Pastel indiano frito recheado com batata e ervilha.',
        ingredients: ['Farinha', 'Batata', 'Ervilha', 'Cebola', 'Gengibre', 'Cominho', 'Coentro', 'Garam masala', 'Pimenta', 'Óleo'],
        instructions: [
          'Prepare massa com farinha, óleo e água.',
          'Cozinhe batatas e amasse.',
          'Refogue cebola, gengibre e especiarias.',
          'Misture batata e ervilha.',
          'Abra a massa e corte em tiras.',
          'Recheie e feche em formato triangular.',
          'Frite até dourar.'
        ],
        prepTime: '1h',
        servings: 15,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&h=600&fit=crop'
      },
      {
        id: 'tikka-masala',
        name: 'Chicken Tikka Masala',
        rating: 9.7,
        description: 'Frango tikka em molho cremoso de tomate.',
        ingredients: ['Frango', 'Iogurte', 'Especiarias tikka', 'Tomate', 'Creme', 'Cebola', 'Gengibre', 'Alho', 'Garam masala', 'Páprica'],
        instructions: [
          'Marine frango em iogurte e especiarias.',
          'Asse o frango até carbonizar levemente.',
          'Refogue cebola, gengibre e alho.',
          'Adicione tomate e cozinhe.',
          'Adicione especiarias e creme.',
          'Adicione frango assado.',
          'Cozinhe por 10 minutos.'
        ],
        prepTime: '2h',
        servings: 6,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800&h=600&fit=crop'
      },
      {
        id: 'gulab-jamun',
        name: 'Gulab Jamun',
        rating: 9.5,
        description: 'Bolinhos doces fritos em calda de açúcar.',
        ingredients: ['Leite em pó', 'Farinha', 'Ghee', 'Leite', 'Cardamomo', 'Açúcar', 'Água de rosas', 'Açafrão'],
        instructions: [
          'Misture leite em pó, farinha e ghee.',
          'Adicione leite até formar massa.',
          'Modele bolinhas pequenas.',
          'Frite em ghee em fogo baixo até dourar.',
          'Prepare calda com açúcar, água e cardamomo.',
          'Adicione água de rosas.',
          'Mergulhe as bolinhas na calda quente.',
          'Deixe absorver por 2 horas.'
        ],
        prepTime: '3h',
        servings: 20,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800&h=600&fit=crop'
      },
      {
        id: 'chole-bhature',
        name: 'Chole Bhature',
        rating: 9.4,
        description: 'Grão-de-bico especiado com pão frito inflado.',
        ingredients: ['Grão-de-bico', 'Cebola', 'Tomate', 'Gengibre', 'Alho', 'Especiarias', 'Farinha', 'Iogurte', 'Fermento', 'Óleo'],
        instructions: [
          'Cozinhe grão-de-bico até macio.',
          'Refogue cebola, gengibre e alho.',
          'Adicione tomate e especiarias.',
          'Adicione grão-de-bico e cozinhe.',
          'Prepare massa de bhature com farinha e iogurte.',
          'Deixe crescer por 2 horas.',
          'Frite em óleo quente até inflar.',
          'Sirva chole com bhature quente.'
        ],
        prepTime: '3h',
        servings: 6,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&h=600&fit=crop'
      }
    ]
  },
  {
    id: 'mexico',
    name: 'México',
    flag: '🇲🇽',
    rank: 7,
    totalRating: 9.2,
    recipes: [
      {
        id: 'tacos-al-pastor',
        name: 'Tacos al Pastor',
        rating: 9.8,
        description: 'Tacos de carne de porco marinada com abacaxi.',
        ingredients: ['Carne de porco', 'Abacaxi', 'Chile guajillo', 'Achiote', 'Vinagre', 'Cebola', 'Coentro', 'Tortillas', 'Limão'],
        instructions: [
          'Prepare marinada com chiles, achiote e especiarias.',
          'Marine a carne por 4 horas.',
          'Empilhe carne em espeto com abacaxi no topo.',
          'Asse girando constantemente.',
          'Corte fatias finas da carne.',
          'Aqueça tortillas.',
          'Monte tacos com carne, abacaxi, cebola e coentro.',
          'Sirva com limão.'
        ],
        prepTime: '4h marinada + 1h',
        servings: 8,
        difficulty: 'Difícil',
        image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&h=600&fit=crop'
      },
      {
        id: 'mole-poblano',
        name: 'Mole Poblano',
        rating: 9.6,
        description: 'Molho complexo com chocolate e chiles sobre frango.',
        ingredients: ['Frango', 'Chiles variados', 'Chocolate', 'Tomate', 'Cebola', 'Alho', 'Amêndoas', 'Passas', 'Canela', 'Tortillas', 'Especiarias'],
        instructions: [
          'Toste chiles, sementes e especiarias.',
          'Frite tortillas, amêndoas e passas.',
          'Asse tomate, cebola e alho.',
          'Bata tudo no liquidificador com caldo.',
          'Cozinhe o molho por 1 hora.',
          'Adicione chocolate.',
          'Cozinhe frango separadamente.',
          'Sirva frango coberto com mole.'
        ],
        prepTime: '3h',
        servings: 8,
        difficulty: 'Difícil',
        image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=800&h=600&fit=crop'
      },
      {
        id: 'guacamole',
        name: 'Guacamole',
        rating: 9.5,
        description: 'Pasta cremosa de abacate com tomate e coentro.',
        ingredients: ['Abacate', 'Tomate', 'Cebola', 'Coentro', 'Limão', 'Jalapeño', 'Sal'],
        instructions: [
          'Amasse os abacates com garfo.',
          'Pique tomate, cebola e coentro.',
          'Pique jalapeño finamente.',
          'Misture tudo.',
          'Adicione suco de limão.',
          'Tempere com sal.',
          'Sirva imediatamente com tortilla chips.'
        ],
        prepTime: '15min',
        servings: 6,
        difficulty: 'Fácil',
        image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=800&h=600&fit=crop'
      },
      {
        id: 'enchiladas',
        name: 'Enchiladas',
        rating: 9.4,
        description: 'Tortillas recheadas cobertas com molho de chile.',
        ingredients: ['Tortillas', 'Frango', 'Queijo', 'Chile guajillo', 'Tomate', 'Cebola', 'Alho', 'Creme', 'Coentro'],
        instructions: [
          'Prepare molho com chiles, tomate e especiarias.',
          'Desfie o frango cozido.',
          'Passe tortillas no molho.',
          'Recheie com frango.',
          'Enrole e arrume em forma.',
          'Cubra com mais molho e queijo.',
          'Asse até o queijo derreter.',
          'Finalize com creme e coentro.'
        ],
        prepTime: '1h',
        servings: 6,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=800&h=600&fit=crop'
      },
      {
        id: 'pozole',
        name: 'Pozole Rojo',
        rating: 9.5,
        description: 'Sopa tradicional de milho com carne de porco.',
        ingredients: ['Carne de porco', 'Milho pozolero', 'Chile guajillo', 'Chile ancho', 'Alho', 'Cebola', 'Orégano', 'Repolho', 'Rabanete', 'Limão'],
        instructions: [
          'Cozinhe a carne de porco até macia.',
          'Cozinhe o milho pozolero separadamente.',
          'Prepare molho com chiles tostados.',
          'Misture carne, milho e molho.',
          'Cozinhe junto por 30 minutos.',
          'Sirva com repolho, rabanete, orégano e limão.'
        ],
        prepTime: '3h',
        servings: 8,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1626804475297-41608ea09aeb?w=800&h=600&fit=crop'
      },
      {
        id: 'chiles-rellenos',
        name: 'Chiles Rellenos',
        rating: 9.3,
        description: 'Pimentões poblanos recheados e empanados.',
        ingredients: ['Chile poblano', 'Queijo', 'Carne moída', 'Ovos', 'Farinha', 'Tomate', 'Cebola', 'Alho'],
        instructions: [
          'Asse e descasque os chiles.',
          'Recheie com queijo ou picadillo.',
          'Feche a abertura.',
          'Passe na farinha.',
          'Empane em claras batidas em neve.',
          'Frite até dourar.',
          'Prepare molho de tomate.',
          'Sirva com molho por cima.'
        ],
        prepTime: '1h 30min',
        servings: 6,
        difficulty: 'Difícil',
        image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&h=600&fit=crop'
      },
      {
        id: 'tamales',
        name: 'Tamales',
        rating: 9.6,
        description: 'Massa de milho recheada cozida em folha de bananeira.',
        ingredients: ['Masa harina', 'Banha', 'Caldo', 'Recheio (carne/chile)', 'Folhas de milho', 'Sal'],
        instructions: [
          'Bata banha até fofa.',
          'Adicione masa e caldo aos poucos.',
          'Hidrate folhas de milho.',
          'Espalhe masa nas folhas.',
          'Adicione recheio no centro.',
          'Enrole e feche.',
          'Cozinhe no vapor por 1h30.',
          'Deixe descansar antes de servir.'
        ],
        prepTime: '3h',
        servings: 20,
        difficulty: 'Difícil',
        image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=800&h=600&fit=crop'
      },
      {
        id: 'ceviche',
        name: 'Ceviche Mexicano',
        rating: 9.4,
        description: 'Peixe cru marinado em limão com vegetais.',
        ingredients: ['Peixe branco', 'Limão', 'Tomate', 'Cebola roxa', 'Coentro', 'Jalapeño', 'Abacate', 'Sal'],
        instructions: [
          'Corte peixe em cubos pequenos.',
          'Cubra com suco de limão.',
          'Marine por 30 minutos na geladeira.',
          'Pique tomate, cebola e coentro.',
          'Escorra parte do limão.',
          'Misture com vegetais.',
          'Adicione abacate.',
          'Sirva com tostadas.'
        ],
        prepTime: '45min',
        servings: 6,
        difficulty: 'Fácil',
        image: 'https://images.unsplash.com/photo-1562565652-a0d8f0c59eb4?w=800&h=600&fit=crop'
      },
      {
        id: 'churros-mexicanos',
        name: 'Churros Mexicanos',
        rating: 9.5,
        description: 'Churros crocantes com chocolate mexicano.',
        ingredients: ['Farinha', 'Água', 'Manteiga', 'Sal', 'Açúcar', 'Canela', 'Chocolate mexicano', 'Leite'],
        instructions: [
          'Ferva água com manteiga e sal.',
          'Adicione farinha de uma vez.',
          'Mexa até formar massa.',
          'Coloque em saco de confeitar.',
          'Frite em óleo quente.',
          'Passe em açúcar com canela.',
          'Prepare chocolate quente mexicano.',
          'Sirva churros com chocolate.'
        ],
        prepTime: '30min',
        servings: 8,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1543773495-e8ba8f1f2e9c?w=800&h=600&fit=crop'
      },
      {
        id: 'quesadillas',
        name: 'Quesadillas',
        rating: 9.3,
        description: 'Tortillas recheadas com queijo e outros ingredientes.',
        ingredients: ['Tortillas', 'Queijo Oaxaca', 'Cogumelos', 'Flor de abóbora', 'Cebola', 'Epazote'],
        instructions: [
          'Refogue cogumelos ou flor de abóbora.',
          'Aqueça tortilla em comal.',
          'Adicione queijo e recheio.',
          'Dobre ao meio.',
          'Cozinhe até o queijo derreter.',
          'Vire para dourar os dois lados.',
          'Sirva com salsa verde.'
        ],
        prepTime: '20min',
        servings: 4,
        difficulty: 'Fácil',
        image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&h=600&fit=crop'
      }
    ]
  },
  {
    id: 'china',
    name: 'China',
    flag: '🇨🇳',
    rank: 8,
    totalRating: 9.1,
    recipes: [
      {
        id: 'peking-duck',
        name: 'Pato à Pequim',
        rating: 9.9,
        description: 'Pato assado com pele crocante servido com panquecas.',
        ingredients: ['Pato', 'Mel', 'Vinagre', 'Molho de soja', 'Vinho de arroz', 'Panquecas', 'Cebolinha', 'Pepino', 'Molho hoisin'],
        instructions: [
          'Seque o pato completamente.',
          'Pincele com mistura de mel e vinagre.',
          'Deixe secar pendurado por 24 horas.',
          'Asse em forno alto até a pele ficar crocante.',
          'Corte a pele em pedaços.',
          'Fatie a carne.',
          'Sirva com panquecas, cebolinha, pepino e molho hoisin.'
        ],
        prepTime: '24h + 2h',
        servings: 6,
        difficulty: 'Difícil',
        image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=800&h=600&fit=crop'
      },
      {
        id: 'mapo-tofu',
        name: 'Mapo Tofu',
        rating: 9.5,
        description: 'Tofu picante com carne moída de Sichuan.',
        ingredients: ['Tofu', 'Carne de porco moída', 'Pasta de feijão', 'Pimenta Sichuan', 'Alho', 'Gengibre', 'Cebolinha', 'Molho de soja', 'Óleo de pimenta'],
        instructions: [
          'Corte tofu em cubos.',
          'Refogue carne moída até dourar.',
          'Adicione alho, gengibre e pasta de feijão.',
          'Adicione caldo e molho de soja.',
          'Adicione tofu delicadamente.',
          'Cozinhe por 5 minutos.',
          'Finalize com pimenta Sichuan e cebolinha.',
          'Regue com óleo de pimenta.'
        ],
        prepTime: '25min',
        servings: 4,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&h=600&fit=crop'
      },
      {
        id: 'dim-sum',
        name: 'Dim Sum Variado',
        rating: 9.7,
        description: 'Seleção de bolinhos cozidos no vapor.',
        ingredients: ['Massa de dim sum', 'Camarão', 'Carne de porco', 'Cogumelos', 'Bambu', 'Gengibre', 'Cebolinha', 'Molho de soja', 'Óleo de gergelim'],
        instructions: [
          'Prepare recheios variados.',
          'Abra massas finamente.',
          'Recheie e modele diferentes formatos.',
          'Arrume em cestas de bambu.',
          'Cozinhe no vapor por 8-10 minutos.',
          'Prepare molho de soja com gengibre.',
          'Sirva quente com molho.'
        ],
        prepTime: '1h 30min',
        servings: 20,
        difficulty: 'Difícil',
        image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&h=600&fit=crop'
      },
      {
        id: 'kung-pao-chicken',
        name: 'Frango Kung Pao',
        rating: 9.4,
        description: 'Frango salteado picante com amendoim.',
        ingredients: ['Frango', 'Amendoim', 'Pimentas secas', 'Pimentão', 'Cebolinha', 'Alho', 'Gengibre', 'Molho de soja', 'Vinagre', 'Açúcar', 'Amido'],
        instructions: [
          'Corte frango em cubos e marine.',
          'Prepare molho com soja, vinagre e açúcar.',
          'Frite pimentas secas em óleo quente.',
          'Salteie frango em wok.',
          'Adicione alho, gengibre e pimentão.',
          'Adicione molho e amendoim.',
          'Finalize com cebolinha.'
        ],
        prepTime: '30min',
        servings: 4,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=800&h=600&fit=crop'
      },
      {
        id: 'hot-pot',
        name: 'Hot Pot',
        rating: 9.6,
        description: 'Fondue chinês com caldo picante e ingredientes variados.',
        ingredients: ['Caldo (picante/suave)', 'Carne fatiada', 'Frutos do mar', 'Tofu', 'Cogumelos', 'Vegetais', 'Macarrão', 'Molhos para mergulhar'],
        instructions: [
          'Prepare caldo aromático.',
          'Ferva em panela no centro da mesa.',
          'Prepare todos os ingredientes fatiados.',
          'Cada pessoa cozinha seus ingredientes no caldo.',
          'Mergulhe em molhos personalizados.',
          'Finalize com macarrão no caldo.'
        ],
        prepTime: '1h prep + tempo de cozinhar',
        servings: 6,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&h=600&fit=crop'
      },
      {
        id: 'spring-rolls',
        name: 'Rolinhos Primavera',
        rating: 9.3,
        description: 'Rolinhos crocantes fritos com vegetais.',
        ingredients: ['Massa de rolinho', 'Repolho', 'Cenoura', 'Cogumelos', 'Broto de feijão', 'Carne de porco', 'Gengibre', 'Alho', 'Molho de soja', 'Óleo'],
        instructions: [
          'Refogue vegetais e carne rapidamente.',
          'Tempere e deixe esfriar.',
          'Coloque recheio na massa.',
          'Enrole firmemente.',
          'Sele as pontas com água.',
          'Frite em óleo quente até dourar.',
          'Sirva com molho agridoce.'
        ],
        prepTime: '45min',
        servings: 15,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1593504049359-74330189a345?w=800&h=600&fit=crop'
      },
      {
        id: 'sweet-sour-pork',
        name: 'Porco Agridoce',
        rating: 9.4,
        description: 'Carne de porco frita em molho agridoce.',
        ingredients: ['Carne de porco', 'Pimentão', 'Abacaxi', 'Cebola', 'Ketchup', 'Vinagre', 'Açúcar', 'Amido', 'Ovo', 'Farinha'],
        instructions: [
          'Corte carne em cubos.',
          'Empane em farinha e ovo.',
          'Frite até crocante.',
          'Refogue pimentão, cebola e abacaxi.',
          'Prepare molho agridoce.',
          'Adicione carne frita.',
          'Misture rapidamente e sirva.'
        ],
        prepTime: '35min',
        servings: 4,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1633964913295-ceb43826e36f?w=800&h=600&fit=crop'
      },
      {
        id: 'wonton-soup',
        name: 'Sopa Wonton',
        rating: 9.5,
        description: 'Sopa clara com wontons recheados.',
        ingredients: ['Massa wonton', 'Camarão', 'Carne de porco', 'Cebolinha', 'Gengibre', 'Caldo de galinha', 'Bok choy', 'Molho de soja', 'Óleo de gergelim'],
        instructions: [
          'Prepare recheio com camarão e carne.',
          'Recheie e feche wontons.',
          'Prepare caldo aromático.',
          'Cozinhe wontons em água fervente.',
          'Branqueie bok choy.',
          'Monte tigelas com caldo, wontons e bok choy.',
          'Finalize com cebolinha e óleo de gergelim.'
        ],
        prepTime: '1h',
        servings: 6,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&h=600&fit=crop'
      },
      {
        id: 'char-siu',
        name: 'Char Siu',
        rating: 9.6,
        description: 'Carne de porco assada com molho barbecue chinês.',
        ingredients: ['Lombo de porco', 'Molho hoisin', 'Molho de soja', 'Mel', 'Vinho de arroz', 'Cinco especiarias', 'Alho', 'Corante vermelho'],
        instructions: [
          'Prepare marinada com todos os molhos.',
          'Marine a carne por 24 horas.',
          'Asse em forno alto.',
          'Pincele com marinada várias vezes.',
          'Asse até caramelizar.',
          'Deixe descansar e fatie.',
          'Sirva com arroz ou em bao.'
        ],
        prepTime: '24h marinada + 1h',
        servings: 6,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1633964913295-ceb43826e36f?w=800&h=600&fit=crop'
      },
      {
        id: 'fried-rice',
        name: 'Arroz Frito Yangzhou',
        rating: 9.2,
        description: 'Arroz frito com camarão, presunto e vegetais.',
        ingredients: ['Arroz cozido frio', 'Camarão', 'Presunto', 'Ervilha', 'Cenoura', 'Ovos', 'Cebolinha', 'Molho de soja', 'Óleo'],
        instructions: [
          'Use arroz do dia anterior.',
          'Scramble os ovos e reserve.',
          'Salteie camarão e presunto.',
          'Adicione vegetais.',
          'Adicione arroz e quebre os grãos.',
          'Adicione ovos.',
          'Tempere com molho de soja.',
          'Finalize com cebolinha.'
        ],
        prepTime: '20min',
        servings: 4,
        difficulty: 'Fácil',
        image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&h=600&fit=crop'
      }
    ]
  },
  {
    id: 'greece',
    name: 'Grécia',
    flag: '🇬🇷',
    rank: 9,
    totalRating: 9.0,
    recipes: [
      {
        id: 'moussaka',
        name: 'Moussaka',
        rating: 9.6,
        description: 'Lasanha grega com berinjela, carne e bechamel.',
        ingredients: ['Berinjela', 'Carne moída', 'Tomate', 'Cebola', 'Alho', 'Canela', 'Bechamel', 'Queijo', 'Azeite'],
        instructions: [
          'Fatie e grelhe berinjelas.',
          'Refogue carne com cebola e tomate.',
          'Tempere com canela e especiarias.',
          'Prepare bechamel espesso.',
          'Monte camadas: berinjela, carne, berinjela.',
          'Cubra com bechamel e queijo.',
          'Asse a 180°C por 45 minutos.',
          'Deixe descansar antes de cortar.'
        ],
        prepTime: '2h',
        servings: 8,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=800&h=600&fit=crop'
      },
      {
        id: 'souvlaki',
        name: 'Souvlaki',
        rating: 9.5,
        description: 'Espetinhos gregos de carne marinada.',
        ingredients: ['Carne de porco', 'Limão', 'Azeite', 'Orégano', 'Alho', 'Pita', 'Tzatziki', 'Tomate', 'Cebola'],
        instructions: [
          'Marine carne em limão, azeite e orégano.',
          'Monte espetinhos.',
          'Grelhe até dourar.',
          'Aqueça pitas.',
          'Prepare tzatziki.',
          'Monte com carne, tomate, cebola e tzatziki.',
          'Enrole e sirva.'
        ],
        prepTime: '2h marinada + 20min',
        servings: 6,
        difficulty: 'Fácil',
        image: 'https://images.unsplash.com/photo-1529042410759-befb1204b468?w=800&h=600&fit=crop'
      },
      {
        id: 'greek-salad',
        name: 'Salada Grega',
        rating: 9.3,
        description: 'Salada fresca com feta, azeitonas e vegetais.',
        ingredients: ['Tomate', 'Pepino', 'Pimentão', 'Cebola roxa', 'Azeitonas Kalamata', 'Queijo feta', 'Azeite', 'Orégano'],
        instructions: [
          'Corte tomate em gomos.',
          'Corte pepino em meias-luas.',
          'Corte pimentão em tiras.',
          'Fatie cebola roxa finamente.',
          'Misture todos os vegetais.',
          'Adicione azeitonas.',
          'Coloque feta em blocos por cima.',
          'Regue com azeite e polvilhe orégano.'
        ],
        prepTime: '15min',
        servings: 4,
        difficulty: 'Fácil',
        image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&h=600&fit=crop'
      },
      {
        id: 'spanakopita',
        name: 'Spanakopita',
        rating: 9.4,
        description: 'Torta de espinafre e feta em massa filo.',
        ingredients: ['Massa filo', 'Espinafre', 'Queijo feta', 'Ricota', 'Ovos', 'Cebola', 'Endro', 'Manteiga'],
        instructions: [
          'Refogue cebola e espinafre.',
          'Misture com feta, ricota e ovos.',
          'Adicione endro.',
          'Pincele massa filo com manteiga.',
          'Monte camadas de massa e recheio.',
          'Finalize com massa por cima.',
          'Corte em quadrados.',
          'Asse a 180°C por 40 minutos.'
        ],
        prepTime: '1h 15min',
        servings: 12,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&h=600&fit=crop'
      },
      {
        id: 'tzatziki',
        name: 'Tzatziki',
        rating: 9.2,
        description: 'Molho cremoso de iogurte com pepino e alho.',
        ingredients: ['Iogurte grego', 'Pepino', 'Alho', 'Azeite', 'Limão', 'Endro', 'Sal'],
        instructions: [
          'Rale o pepino e esprema o excesso de água.',
          'Misture iogurte com pepino.',
          'Adicione alho picado.',
          'Adicione endro fresco.',
          'Tempere com limão e sal.',
          'Regue com azeite.',
          'Leve à geladeira por 1 hora.'
        ],
        prepTime: '15min + 1h geladeira',
        servings: 6,
        difficulty: 'Fácil',
        image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=800&h=600&fit=crop'
      },
      {
        id: 'dolmades',
        name: 'Dolmades',
        rating: 9.3,
        description: 'Folhas de uva recheadas com arroz e ervas.',
        ingredients: ['Folhas de uva', 'Arroz', 'Cebola', 'Endro', 'Hortelã', 'Limão', 'Azeite', 'Pinhões'],
        instructions: [
          'Refogue cebola e arroz.',
          'Adicione ervas e pinhões.',
          'Coloque recheio nas folhas de uva.',
          'Enrole firmemente.',
          'Arrume em panela.',
          'Cubra com água, limão e azeite.',
          'Cozinhe por 40 minutos.',
          'Sirva frio com tzatziki.'
        ],
        prepTime: '1h 30min',
        servings: 30,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=800&h=600&fit=crop'
      },
      {
        id: 'pastitsio',
        name: 'Pastitsio',
        rating: 9.5,
        description: 'Lasanha grega de macarrão com carne e bechamel.',
        ingredients: ['Macarrão penne', 'Carne moída', 'Tomate', 'Cebola', 'Canela', 'Bechamel', 'Queijo', 'Ovos'],
        instructions: [
          'Cozinhe o macarrão al dente.',
          'Prepare molho de carne com canela.',
          'Misture macarrão com ovos e queijo.',
          'Prepare bechamel espesso.',
          'Monte: macarrão, carne, macarrão.',
          'Cubra com bechamel.',
          'Asse a 180°C por 45 minutos.',
          'Deixe descansar antes de cortar.'
        ],
        prepTime: '2h',
        servings: 10,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800&h=600&fit=crop'
      },
      {
        id: 'baklava',
        name: 'Baklava',
        rating: 9.7,
        description: 'Doce de massa filo com nozes e mel.',
        ingredients: ['Massa filo', 'Nozes', 'Pistache', 'Manteiga', 'Açúcar', 'Mel', 'Água', 'Limão', 'Canela'],
        instructions: [
          'Pique nozes e pistache.',
          'Misture com canela e açúcar.',
          'Pincele massa filo com manteiga.',
          'Monte camadas de massa e nozes.',
          'Corte em losangos antes de assar.',
          'Asse a 180°C até dourar.',
          'Prepare calda de mel.',
          'Despeje calda quente sobre baklava fria.'
        ],
        prepTime: '1h 30min',
        servings: 24,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1519676867240-f03562e64548?w=800&h=600&fit=crop'
      },
      {
        id: 'fasolada',
        name: 'Fasolada',
        rating: 9.1,
        description: 'Sopa tradicional grega de feijão branco.',
        ingredients: ['Feijão branco', 'Tomate', 'Cenoura', 'Aipo', 'Cebola', 'Alho', 'Azeite', 'Louro'],
        instructions: [
          'Deixe feijão de molho overnight.',
          'Cozinhe o feijão até macio.',
          'Refogue cebola, cenoura e aipo.',
          'Adicione tomate e alho.',
          'Adicione feijão com caldo.',
          'Cozinhe por 30 minutos.',
          'Finalize com azeite generoso.'
        ],
        prepTime: '2h',
        servings: 6,
        difficulty: 'Fácil',
        image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&h=600&fit=crop'
      },
      {
        id: 'galaktoboureko',
        name: 'Galaktoboureko',
        rating: 9.4,
        description: 'Torta de creme de leite em massa filo com calda.',
        ingredients: ['Massa filo', 'Leite', 'Sêmola', 'Açúcar', 'Ovos', 'Baunilha', 'Manteiga', 'Calda de açúcar', 'Limão'],
        instructions: [
          'Prepare creme: ferva leite com sêmola.',
          'Adicione açúcar e ovos.',
          'Cozinhe até engrossar.',
          'Forre forma com massa filo pincelada com manteiga.',
          'Despeje o creme.',
          'Cubra com mais massa filo.',
          'Asse a 180°C até dourar.',
          'Despeje calda fria sobre torta quente.'
        ],
        prepTime: '1h 30min',
        servings: 12,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&h=600&fit=crop'
      }
    ]
  },
  {
    id: 'turkey',
    name: 'Turquia',
    flag: '🇹🇷',
    rank: 10,
    totalRating: 8.9,
    recipes: [
      {
        id: 'kebab',
        name: 'Kebab Turco',
        rating: 9.5,
        description: 'Espetinho de carne marinada grelhada.',
        ingredients: ['Cordeiro', 'Iogurte', 'Limão', 'Alho', 'Cominho', 'Páprica', 'Pimenta', 'Cebola', 'Tomate'],
        instructions: [
          'Marine carne em iogurte e especiarias por 4 horas.',
          'Monte espetinhos alternando com vegetais.',
          'Grelhe em fogo alto.',
          'Vire constantemente.',
          'Sirva com arroz pilaf e salada.',
          'Acompanhe com pão pita.'
        ],
        prepTime: '4h marinada + 20min',
        servings: 6,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1529042410759-befb1204b468?w=800&h=600&fit=crop'
      },
      {
        id: 'lahmacun',
        name: 'Lahmacun',
        rating: 9.3,
        description: 'Pizza turca fina com carne moída e vegetais.',
        ingredients: ['Massa', 'Carne moída', 'Tomate', 'Pimentão', 'Cebola', 'Alho', 'Cominho', 'Pimenta', 'Salsa', 'Limão'],
        instructions: [
          'Prepare massa fina.',
          'Misture carne com vegetais picados e especiarias.',
          'Espalhe sobre a massa.',
          'Asse em forno muito quente.',
          'Sirva com salsa, limão e cebola.',
          'Enrole e coma com as mãos.'
        ],
        prepTime: '1h',
        servings: 8,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&h=600&fit=crop'
      },
      {
        id: 'manti',
        name: 'Manti',
        rating: 9.4,
        description: 'Pequenos raviólis turcos com iogurte e manteiga.',
        ingredients: ['Farinha', 'Ovos', 'Carne moída', 'Cebola', 'Iogurte', 'Alho', 'Manteiga', 'Páprica', 'Hortelã'],
        instructions: [
          'Prepare massa e abra finamente.',
          'Corte em quadrados pequenos.',
          'Recheie com carne e cebola.',
          'Feche formando trouxinhas.',
          'Cozinhe em água fervente ou vapor.',
          'Sirva com iogurte de alho.',
          'Regue com manteiga de páprica.',
          'Polvilhe hortelã seca.'
        ],
        prepTime: '2h',
        servings: 6,
        difficulty: 'Difícil',
        image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=800&h=600&fit=crop'
      },
      {
        id: 'imam-bayildi',
        name: 'İmam Bayıldı',
        rating: 9.2,
        description: 'Berinjela recheada com cebola e tomate.',
        ingredients: ['Berinjela', 'Cebola', 'Tomate', 'Alho', 'Salsa', 'Azeite', 'Açúcar', 'Limão'],
        instructions: [
          'Corte berinjelas ao meio e frite levemente.',
          'Refogue cebola até caramelizar.',
          'Adicione tomate, alho e salsa.',
          'Recheie as berinjelas.',
          'Arrume em forma.',
          'Regue com azeite.',
          'Asse a 180°C por 40 minutos.',
          'Sirva frio.'
        ],
        prepTime: '1h 30min',
        servings: 6,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=800&h=600&fit=crop'
      },
      {
        id: 'borek',
        name: 'Börek',
        rating: 9.4,
        description: 'Pastel folhado turco com queijo ou carne.',
        ingredients: ['Massa yufka', 'Queijo feta', 'Salsa', 'Ovos', 'Manteiga', 'Leite', 'Gergelim'],
        instructions: [
          'Misture queijo com salsa e ovos.',
          'Pincele massa com manteiga derretida.',
          'Espalhe recheio.',
          'Enrole ou dobre.',
          'Arrume em forma.',
          'Pincele com leite e polvilhe gergelim.',
          'Asse a 180°C até dourar.'
        ],
        prepTime: '45min',
        servings: 8,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&h=600&fit=crop'
      },
      {
        id: 'kofte',
        name: 'Köfte',
        rating: 9.3,
        description: 'Almôndegas turcas grelhadas temperadas.',
        ingredients: ['Carne moída', 'Cebola', 'Alho', 'Salsa', 'Cominho', 'Páprica', 'Pão ralado', 'Ovo'],
        instructions: [
          'Misture todos os ingredientes.',
          'Sove bem a mistura.',
          'Modele almôndegas alongadas.',
          'Grelhe ou asse.',
          'Sirva com arroz e salada.',
          'Acompanhe com iogurte.'
        ],
        prepTime: '30min',
        servings: 6,
        difficulty: 'Fácil',
        image: 'https://images.unsplash.com/photo-1529042410759-befb1204b468?w=800&h=600&fit=crop'
      },
      {
        id: 'pide',
        name: 'Pide',
        rating: 9.4,
        description: 'Pão turco em formato de barco com recheios variados.',
        ingredients: ['Farinha', 'Fermento', 'Iogurte', 'Carne moída', 'Queijo', 'Ovo', 'Tomate', 'Pimentão', 'Manteiga'],
        instructions: [
          'Prepare massa e deixe crescer.',
          'Abra em formato oval.',
          'Adicione recheio no centro.',
          'Dobre as bordas formando barco.',
          'Pincele bordas com manteiga.',
          'Asse em forno muito quente.',
          'Quebre um ovo por cima no final (opcional).'
        ],
        prepTime: '2h',
        servings: 4,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&h=600&fit=crop'
      },
      {
        id: 'baklava-turca',
        name: 'Baklava Turca',
        rating: 9.6,
        description: 'Doce de massa filo com pistache e calda.',
        ingredients: ['Massa filo', 'Pistache', 'Manteiga', 'Açúcar', 'Água', 'Limão', 'Água de rosas'],
        instructions: [
          'Pique pistaches finamente.',
          'Pincele massa filo com manteiga.',
          'Monte camadas de massa e pistache.',
          'Corte em losangos.',
          'Asse a 180°C até dourar.',
          'Prepare calda com açúcar e água de rosas.',
          'Despeje calda quente sobre baklava fria.',
          'Deixe absorver por 4 horas.'
        ],
        prepTime: '2h',
        servings: 24,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1519676867240-f03562e64548?w=800&h=600&fit=crop'
      },
      {
        id: 'menemen',
        name: 'Menemen',
        rating: 9.1,
        description: 'Ovos mexidos turcos com tomate e pimentão.',
        ingredients: ['Ovos', 'Tomate', 'Pimentão verde', 'Cebola', 'Azeite', 'Pimenta', 'Sal'],
        instructions: [
          'Refogue cebola e pimentão.',
          'Adicione tomate picado.',
          'Cozinhe até formar molho.',
          'Quebre os ovos por cima.',
          'Mexa delicadamente.',
          'Cozinhe até os ovos ficarem cremosos.',
          'Sirva com pão.'
        ],
        prepTime: '20min',
        servings: 2,
        difficulty: 'Fácil',
        image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=800&h=600&fit=crop'
      },
      {
        id: 'turkish-delight',
        name: 'Lokum (Turkish Delight)',
        rating: 9.2,
        description: 'Doce gelatinoso turco com sabores variados.',
        ingredients: ['Açúcar', 'Amido de milho', 'Água', 'Suco de limão', 'Água de rosas', 'Pistache', 'Açúcar de confeiteiro'],
        instructions: [
          'Ferva açúcar com água até formar calda.',
          'Prepare pasta de amido separadamente.',
          'Misture calda com pasta de amido.',
          'Cozinhe mexendo até engrossar.',
          'Adicione água de rosas.',
          'Despeje em forma untada.',
          'Deixe firmar overnight.',
          'Corte em cubos e passe em açúcar de confeiteiro.'
        ],
        prepTime: '24h',
        servings: 40,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800&h=600&fit=crop'
      }
    ]
  }
];
