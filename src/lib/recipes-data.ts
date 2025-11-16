export interface Recipe {
  id: string;
  name: string;
  description: string;
  ingredients: string[];
  instructions: string[];
  prepTime: string;
  cookTime: string;
  servings: number;
  difficulty: 'Fácil' | 'Médio' | 'Difícil';
  image: string;
  category: string;
}

export interface Country {
  id: string;
  name: string;
  flag: string;
  description: string;
  recipes: Recipe[];
}

export const countriesData: Country[] = [
  {
    id: 'brasil',
    name: 'Brasil',
    flag: '🇧🇷',
    description: 'Culinária rica e diversificada, com influências indígenas, africanas e europeias.',
    recipes: [
      {
        id: 'feijoada',
        name: 'Feijoada Completa',
        description: 'Prato tradicional brasileiro feito com feijão preto e diversos tipos de carne de porco, servido com arroz, couve, farofa e laranja.',
        ingredients: ['500g feijão preto', '300g carne seca', '300g costela de porco', '200g linguiça calabresa', '200g bacon', '1 paio', 'Alho', 'Cebola', 'Louro', 'Sal'],
        instructions: ['Deixe o feijão de molho por 12 horas', 'Dessalgue as carnes por 8 horas', 'Cozinhe o feijão com as carnes em panela de pressão por 40 minutos', 'Refogue alho e cebola, adicione ao feijão', 'Deixe apurar por mais 30 minutos', 'Sirva com arroz, couve refogada, farofa e laranja'],
        prepTime: '12 horas (molho)',
        cookTime: '2 horas',
        servings: 8,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1633630113851-b2bcbb48f1d9?w=800&h=600&fit=crop',
        category: 'Prato Principal'
      },
      {
        id: 'moqueca',
        name: 'Moqueca Capixaba',
        description: 'Ensopado de peixe com urucum, tomate, cebola e coentro, cozido em panela de barro.',
        ingredients: ['1kg peixe (badejo ou robalo)', '3 tomates', '2 cebolas', '1 pimentão', 'Coentro', 'Urucum', 'Azeite de oliva', 'Limão', 'Sal'],
        instructions: ['Tempere o peixe com limão e sal', 'Em panela de barro, faça camadas de cebola, tomate, pimentão e peixe', 'Regue com azeite e urucum', 'Cozinhe em fogo baixo por 30 minutos', 'Finalize com coentro fresco'],
        prepTime: '20 minutos',
        cookTime: '40 minutos',
        servings: 6,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1604152135912-04a022e23696?w=800&h=600&fit=crop',
        category: 'Prato Principal'
      },
      {
        id: 'brigadeiro',
        name: 'Brigadeiro',
        description: 'Doce brasileiro feito com leite condensado, chocolate em pó e manteiga, coberto com granulado.',
        ingredients: ['1 lata leite condensado', '3 colheres chocolate em pó', '1 colher manteiga', 'Chocolate granulado'],
        instructions: ['Misture leite condensado, chocolate e manteiga em panela', 'Cozinhe em fogo baixo mexendo sempre até desgrudar do fundo', 'Deixe esfriar', 'Faça bolinhas e passe no granulado'],
        prepTime: '5 minutos',
        cookTime: '15 minutos',
        servings: 30,
        difficulty: 'Fácil',
        image: 'https://images.unsplash.com/photo-1626200419199-391ae4be7a41?w=800&h=600&fit=crop',
        category: 'Sobremesa'
      },
      {
        id: 'pao-de-queijo',
        name: 'Pão de Queijo',
        description: 'Pãozinho de polvilho com queijo, crocante por fora e macio por dentro.',
        ingredients: ['500g polvilho azedo', '250ml leite', '100ml óleo', '2 ovos', '200g queijo minas ralado', 'Sal'],
        instructions: ['Ferva leite, óleo e sal', 'Despeje sobre o polvilho e misture', 'Adicione ovos e queijo', 'Faça bolinhas', 'Asse a 180°C por 25 minutos'],
        prepTime: '15 minutos',
        cookTime: '25 minutos',
        servings: 40,
        difficulty: 'Fácil',
        image: 'https://images.unsplash.com/photo-1618897996318-5a901fa6ca71?w=800&h=600&fit=crop',
        category: 'Lanche'
      },
      {
        id: 'acaraje',
        name: 'Acarajé',
        description: 'Bolinho de feijão fradinho frito no azeite de dendê, recheado com vatapá, caruru e camarão.',
        ingredients: ['500g feijão fradinho', '1 cebola', 'Sal', 'Azeite de dendê', 'Vatapá', 'Caruru', 'Camarão seco'],
        instructions: ['Deixe o feijão de molho e retire as cascas', 'Bata no liquidificador com cebola', 'Tempere com sal', 'Frite no azeite de dendê bem quente', 'Recheie com vatapá, caruru e camarão'],
        prepTime: '12 horas',
        cookTime: '30 minutos',
        servings: 15,
        difficulty: 'Difícil',
        image: 'https://images.unsplash.com/photo-1612871689761-3a1d432e0d1e?w=800&h=600&fit=crop',
        category: 'Lanche'
      }
    ]
  },
  {
    id: 'italia',
    name: 'Itália',
    flag: '🇮🇹',
    description: 'Berço da pizza e da pasta, com tradição milenar em gastronomia.',
    recipes: [
      {
        id: 'carbonara',
        name: 'Spaghetti alla Carbonara',
        description: 'Massa italiana com molho cremoso de ovos, queijo pecorino, guanciale e pimenta preta.',
        ingredients: ['400g spaghetti', '150g guanciale', '4 gemas', '100g pecorino romano', 'Pimenta preta', 'Sal'],
        instructions: ['Cozinhe o spaghetti al dente', 'Frite o guanciale até ficar crocante', 'Misture gemas com pecorino ralado', 'Escorra a massa e misture com guanciale', 'Desligue o fogo e adicione a mistura de ovos', 'Mexa rapidamente até cremoso', 'Finalize com pimenta preta moída na hora'],
        prepTime: '10 minutos',
        cookTime: '15 minutos',
        servings: 4,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=800&h=600&fit=crop',
        category: 'Prato Principal'
      },
      {
        id: 'pizza-margherita',
        name: 'Pizza Margherita',
        description: 'Pizza clássica napolitana com molho de tomate, mussarela de búfala, manjericão fresco e azeite.',
        ingredients: ['Massa de pizza', '400g tomate pelado', '250g mussarela de búfala', 'Manjericão fresco', 'Azeite extra virgem', 'Sal'],
        instructions: ['Abra a massa em formato redondo', 'Espalhe o molho de tomate', 'Distribua a mussarela em pedaços', 'Asse em forno bem quente (250°C) por 10 minutos', 'Finalize com manjericão fresco e azeite'],
        prepTime: '2 horas (fermentação)',
        cookTime: '10 minutos',
        servings: 2,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&h=600&fit=crop',
        category: 'Prato Principal'
      },
      {
        id: 'tiramisu',
        name: 'Tiramisù',
        description: 'Sobremesa italiana com camadas de biscoito champagne embebido em café, creme de mascarpone e cacau.',
        ingredients: ['500g mascarpone', '4 ovos', '100g açúcar', '300ml café expresso', '200g biscoito champagne', 'Cacau em pó', 'Marsala'],
        instructions: ['Separe gemas e claras', 'Bata gemas com açúcar até clarear', 'Adicione mascarpone e misture', 'Bata claras em neve e incorpore delicadamente', 'Mergulhe biscoitos no café com marsala', 'Monte camadas alternadas de biscoito e creme', 'Finalize com cacau peneirado', 'Leve à geladeira por 4 horas'],
        prepTime: '30 minutos',
        cookTime: '0 minutos',
        servings: 8,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800&h=600&fit=crop',
        category: 'Sobremesa'
      },
      {
        id: 'risotto',
        name: 'Risotto alla Milanese',
        description: 'Arroz cremoso cozido lentamente com açafrão, vinho branco, manteiga e parmesão.',
        ingredients: ['300g arroz arbóreo', '1L caldo de carne', '100ml vinho branco', '1 cebola', '80g manteiga', '100g parmesão', 'Açafrão', 'Sal'],
        instructions: ['Refogue cebola na manteiga', 'Adicione arroz e torre levemente', 'Adicione vinho e deixe evaporar', 'Adicione caldo aos poucos, mexendo sempre', 'Adicione açafrão dissolvido', 'Finalize com manteiga e parmesão'],
        prepTime: '10 minutos',
        cookTime: '25 minutos',
        servings: 4,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1476124369491-c4f6e3e8b5c5?w=800&h=600&fit=crop',
        category: 'Prato Principal'
      },
      {
        id: 'lasagna',
        name: 'Lasagna alla Bolognese',
        description: 'Camadas de massa fresca, molho bolonhesa, bechamel e parmesão gratinado.',
        ingredients: ['Massa para lasanha', '500g carne moída', '400g tomate pelado', '500ml bechamel', '200g parmesão', 'Cebola', 'Cenoura', 'Aipo', 'Vinho tinto'],
        instructions: ['Prepare o ragù bolonhesa (carne, legumes, tomate, vinho)', 'Cozinhe por 2 horas em fogo baixo', 'Prepare o bechamel', 'Monte camadas: massa, ragù, bechamel, parmesão', 'Repita até acabar os ingredientes', 'Asse a 180°C por 40 minutos'],
        prepTime: '45 minutos',
        cookTime: '3 horas',
        servings: 8,
        difficulty: 'Difícil',
        image: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=800&h=600&fit=crop',
        category: 'Prato Principal'
      }
    ]
  },
  {
    id: 'japao',
    name: 'Japão',
    flag: '🇯🇵',
    description: 'Culinária refinada com foco em ingredientes frescos, apresentação e equilíbrio de sabores.',
    recipes: [
      {
        id: 'sushi',
        name: 'Sushi Nigiri',
        description: 'Bolinho de arroz temperado coberto com fatia de peixe cru fresco.',
        ingredients: ['400g arroz japonês', '500g peixe fresco (salmão, atum)', '50ml vinagre de arroz', '2 colheres açúcar', '1 colher sal', 'Wasabi', 'Shoyu'],
        instructions: ['Cozinhe o arroz e tempere com vinagre, açúcar e sal', 'Deixe esfriar até temperatura ambiente', 'Corte o peixe em fatias finas', 'Molde o arroz em formato oval', 'Coloque um pouco de wasabi', 'Cubra com a fatia de peixe', 'Sirva com shoyu'],
        prepTime: '40 minutos',
        cookTime: '20 minutos',
        servings: 4,
        difficulty: 'Difícil',
        image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=800&h=600&fit=crop',
        category: 'Prato Principal'
      },
      {
        id: 'ramen',
        name: 'Ramen Tonkotsu',
        description: 'Sopa de macarrão com caldo cremoso de ossos de porco, chashu, ovo marinado e cebolinha.',
        ingredients: ['2kg ossos de porco', 'Macarrão ramen', 'Chashu (barriga de porco)', 'Ovos', 'Cebolinha', 'Alho', 'Gengibre', 'Shoyu', 'Mirin', 'Sake'],
        instructions: ['Ferva os ossos por 12 horas para fazer o caldo', 'Prepare o chashu marinado e assado', 'Cozinhe ovos por 6 minutos e marine em shoyu', 'Cozinhe o macarrão al dente', 'Monte a tigela: macarrão, caldo quente, chashu, ovo, cebolinha'],
        prepTime: '30 minutos',
        cookTime: '12 horas',
        servings: 4,
        difficulty: 'Difícil',
        image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&h=600&fit=crop',
        category: 'Prato Principal'
      },
      {
        id: 'tempura',
        name: 'Tempura de Camarão',
        description: 'Camarões empanados em massa leve e crocante, fritos rapidamente.',
        ingredients: ['500g camarões grandes', '1 xícara farinha de trigo', '1 xícara água gelada', '1 ovo', 'Óleo para fritar', 'Molho tentsuyu'],
        instructions: ['Limpe os camarões deixando a cauda', 'Misture farinha, ovo e água gelada levemente', 'Aqueça óleo a 180°C', 'Passe camarões na massa', 'Frite rapidamente até dourar', 'Escorra em papel absorvente', 'Sirva imediatamente com molho'],
        prepTime: '20 minutos',
        cookTime: '15 minutos',
        servings: 4,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&h=600&fit=crop',
        category: 'Prato Principal'
      },
      {
        id: 'takoyaki',
        name: 'Takoyaki',
        description: 'Bolinhos de massa com pedaços de polvo, cobertos com molho especial, maionese e katsuobushi.',
        ingredients: ['200g farinha de trigo', '600ml dashi', '3 ovos', '300g polvo cozido', 'Gengibre em conserva', 'Cebolinha', 'Molho takoyaki', 'Maionese japonesa', 'Katsuobushi', 'Aonori'],
        instructions: ['Misture farinha, dashi e ovos', 'Aqueça a chapa de takoyaki', 'Despeje a massa nas formas', 'Adicione polvo, gengibre e cebolinha', 'Vire as bolinhas com palitos', 'Cubra com molho, maionese, katsuobushi e aonori'],
        prepTime: '15 minutos',
        cookTime: '20 minutos',
        servings: 20,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1606297752170-d45eaace8d70?w=800&h=600&fit=crop',
        category: 'Lanche'
      },
      {
        id: 'mochi',
        name: 'Mochi',
        description: 'Bolinho de arroz glutinoso macio, tradicionalmente recheado com pasta de feijão doce.',
        ingredients: ['200g farinha de arroz mochiko', '200ml água', '100g açúcar', 'Anko (pasta de feijão azuki)', 'Amido de milho'],
        instructions: ['Misture mochiko, água e açúcar', 'Cozinhe no microondas por 2 minutos', 'Mexa e cozinhe mais 1 minuto', 'Polvilhe amido em superfície', 'Estenda a massa', 'Corte círculos e recheie com anko', 'Feche as bordas'],
        prepTime: '20 minutos',
        cookTime: '10 minutos',
        servings: 12,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1582716401301-b2407dc7563d?w=800&h=600&fit=crop',
        category: 'Sobremesa'
      }
    ]
  },
  {
    id: 'mexico',
    name: 'México',
    flag: '🇲🇽',
    description: 'Culinária vibrante com sabores intensos, herança asteca e maia.',
    recipes: [
      {
        id: 'tacos',
        name: 'Tacos al Pastor',
        description: 'Tacos com carne de porco marinada em especiarias, abacaxi, cebola e coentro.',
        ingredients: ['1kg carne de porco', 'Chiles guajillo', 'Abacaxi', 'Cebola', 'Coentro', 'Limão', 'Tortillas de milho', 'Achiote', 'Cominho'],
        instructions: ['Marine a carne com chiles, achiote e especiarias por 4 horas', 'Asse a carne em espeto vertical', 'Corte fatias finas', 'Aqueça as tortillas', 'Monte com carne, abacaxi grelhado, cebola e coentro', 'Finalize com limão'],
        prepTime: '4 horas',
        cookTime: '2 horas',
        servings: 8,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&h=600&fit=crop',
        category: 'Prato Principal'
      },
      {
        id: 'guacamole',
        name: 'Guacamole',
        description: 'Pasta cremosa de abacate com tomate, cebola, coentro, limão e jalapeño.',
        ingredients: ['3 abacates maduros', '2 tomates', '1 cebola roxa', 'Coentro fresco', '2 limões', '1 jalapeño', 'Sal'],
        instructions: ['Amasse os abacates com garfo', 'Pique tomate, cebola, coentro e jalapeño', 'Misture tudo', 'Adicione suco de limão e sal', 'Sirva imediatamente com nachos'],
        prepTime: '15 minutos',
        cookTime: '0 minutos',
        servings: 6,
        difficulty: 'Fácil',
        image: 'https://images.unsplash.com/photo-1623961990059-e9d5a7e5b9f5?w=800&h=600&fit=crop',
        category: 'Entrada'
      },
      {
        id: 'enchiladas',
        name: 'Enchiladas Verdes',
        description: 'Tortillas recheadas com frango, cobertas com molho verde de tomatillo e queijo gratinado.',
        ingredients: ['12 tortillas', '500g frango desfiado', '500g tomatillos', 'Chiles serranos', 'Cebola', 'Alho', 'Coentro', 'Creme de leite', 'Queijo fresco'],
        instructions: ['Cozinhe tomatillos e chiles', 'Bata com cebola, alho e coentro', 'Refogue o frango temperado', 'Passe tortillas no molho', 'Recheie com frango', 'Enrole e disponha em refratário', 'Cubra com molho e queijo', 'Asse até gratinar'],
        prepTime: '30 minutos',
        cookTime: '40 minutos',
        servings: 6,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1599974789516-672445505da0?w=800&h=600&fit=crop',
        category: 'Prato Principal'
      },
      {
        id: 'churros',
        name: 'Churros Mexicanos',
        description: 'Massa frita crocante coberta com açúcar e canela, servida com chocolate quente.',
        ingredients: ['250ml água', '100g manteiga', '150g farinha', '3 ovos', 'Açúcar', 'Canela', 'Chocolate para molho'],
        instructions: ['Ferva água com manteiga', 'Adicione farinha de uma vez e mexa', 'Deixe esfriar e adicione ovos', 'Coloque em saco de confeitar', 'Frite em óleo quente', 'Passe em açúcar com canela', 'Sirva com chocolate quente'],
        prepTime: '20 minutos',
        cookTime: '20 minutos',
        servings: 20,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=800&h=600&fit=crop',
        category: 'Sobremesa'
      },
      {
        id: 'pozole',
        name: 'Pozole Rojo',
        description: 'Sopa tradicional com milho hominy, carne de porco e molho vermelho de chiles.',
        ingredients: ['1kg carne de porco', '800g milho hominy', 'Chiles guajillo', 'Alho', 'Cebola', 'Orégano', 'Repolho', 'Rabanete', 'Limão', 'Tostadas'],
        instructions: ['Cozinhe a carne até macia', 'Hidrate e bata os chiles com alho', 'Adicione o molho à carne', 'Adicione o milho hominy', 'Cozinhe por 1 hora', 'Sirva com repolho, rabanete, limão e tostadas'],
        prepTime: '30 minutos',
        cookTime: '3 horas',
        servings: 8,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1604152135912-04a022e23696?w=800&h=600&fit=crop',
        category: 'Prato Principal'
      }
    ]
  },
  {
    id: 'franca',
    name: 'França',
    flag: '🇫🇷',
    description: 'Alta gastronomia com técnicas refinadas e ingredientes de qualidade.',
    recipes: [
      {
        id: 'ratatouille',
        name: 'Ratatouille',
        description: 'Legumes provençais (berinjela, abobrinha, pimentão, tomate) cozidos lentamente com ervas.',
        ingredients: ['2 berinjelas', '2 abobrinhas', '2 pimentões', '4 tomates', 'Cebola', 'Alho', 'Tomilho', 'Manjericão', 'Azeite'],
        instructions: ['Corte todos os legumes em rodelas finas', 'Refogue cebola e alho', 'Adicione molho de tomate', 'Disponha os legumes em camadas', 'Regue com azeite e ervas', 'Asse a 180°C por 45 minutos'],
        prepTime: '30 minutos',
        cookTime: '45 minutos',
        servings: 6,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=800&h=600&fit=crop',
        category: 'Prato Principal'
      },
      {
        id: 'croissant',
        name: 'Croissant',
        description: 'Pão folhado amanteigado, crocante por fora e macio por dentro.',
        ingredients: ['500g farinha', '250g manteiga gelada', '10g sal', '50g açúcar', '10g fermento', '250ml leite', '1 ovo'],
        instructions: ['Prepare a massa e deixe descansar', 'Lamine a manteiga entre a massa', 'Faça 3 voltas duplas', 'Descanse na geladeira entre cada volta', 'Corte triângulos e enrole', 'Deixe crescer por 2 horas', 'Pincele com ovo', 'Asse a 200°C por 20 minutos'],
        prepTime: '4 horas',
        cookTime: '20 minutos',
        servings: 12,
        difficulty: 'Difícil',
        image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&h=600&fit=crop',
        category: 'Pão'
      },
      {
        id: 'coq-au-vin',
        name: 'Coq au Vin',
        description: 'Frango cozido lentamente em vinho tinto com cogumelos, bacon e cebolas pérola.',
        ingredients: ['1 frango inteiro', '750ml vinho tinto', '200g bacon', '200g cogumelos', 'Cebolas pérola', 'Cenoura', 'Alho', 'Tomilho', 'Louro', 'Farinha'],
        instructions: ['Doure o frango em pedaços', 'Retire e doure bacon, cebolas e cogumelos', 'Adicione farinha e vinho', 'Retorne o frango', 'Adicione ervas', 'Cozinhe em fogo baixo por 1h30', 'Sirva com batatas'],
        prepTime: '30 minutos',
        cookTime: '2 horas',
        servings: 6,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=800&h=600&fit=crop',
        category: 'Prato Principal'
      },
      {
        id: 'creme-brulee',
        name: 'Crème Brûlée',
        description: 'Creme de baunilha assado com crosta caramelizada crocante.',
        ingredients: ['500ml creme de leite', '6 gemas', '100g açúcar', '1 fava de baunilha', 'Açúcar para caramelizar'],
        instructions: ['Aqueça o creme com baunilha', 'Bata gemas com açúcar', 'Misture com o creme quente', 'Despeje em ramequins', 'Asse em banho-maria a 150°C por 40 minutos', 'Deixe esfriar', 'Polvilhe açúcar e caramelize com maçarico'],
        prepTime: '20 minutos',
        cookTime: '40 minutos',
        servings: 6,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=800&h=600&fit=crop',
        category: 'Sobremesa'
      },
      {
        id: 'bouillabaisse',
        name: 'Bouillabaisse',
        description: 'Sopa de peixe provençal com frutos do mar, açafrão e rouille.',
        ingredients: ['1kg peixes variados', '500g frutos do mar', 'Tomate', 'Alho', 'Cebola', 'Funcho', 'Açafrão', 'Vinho branco', 'Azeite', 'Rouille'],
        instructions: ['Refogue cebola, alho e funcho', 'Adicione tomate e vinho', 'Adicione açafrão e caldo de peixe', 'Cozinhe os peixes por partes', 'Adicione frutos do mar', 'Sirva com rouille e croutons'],
        prepTime: '30 minutos',
        cookTime: '45 minutos',
        servings: 6,
        difficulty: 'Difícil',
        image: 'https://images.unsplash.com/photo-1559847844-5315695dadae?w=800&h=600&fit=crop',
        category: 'Prato Principal'
      }
    ]
  },
  {
    id: 'india',
    name: 'Índia',
    flag: '🇮🇳',
    description: 'Culinária rica em especiarias, com grande variedade vegetariana.',
    recipes: [
      {
        id: 'butter-chicken',
        name: 'Butter Chicken',
        description: 'Frango em molho cremoso de tomate, manteiga, creme de leite e especiarias aromáticas.',
        ingredients: ['1kg frango', 'Iogurte', 'Garam masala', 'Gengibre', 'Alho', '400g tomate', '200ml creme de leite', 'Manteiga', 'Coentro'],
        instructions: ['Marine o frango em iogurte e especiarias por 4 horas', 'Grelhe o frango', 'Refogue gengibre e alho na manteiga', 'Adicione tomate e especiarias', 'Adicione creme de leite', 'Adicione o frango', 'Finalize com coentro'],
        prepTime: '4 horas',
        cookTime: '40 minutos',
        servings: 6,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=800&h=600&fit=crop',
        category: 'Prato Principal'
      },
      {
        id: 'biryani',
        name: 'Chicken Biryani',
        description: 'Arroz basmati aromático cozido com frango marinado em camadas com especiarias.',
        ingredients: ['500g frango', '400g arroz basmati', 'Iogurte', 'Cebola frita', 'Açafrão', 'Cardamomo', 'Canela', 'Gengibre', 'Alho', 'Hortelã'],
        instructions: ['Marine o frango em iogurte e especiarias', 'Cozinhe o arroz até meio cozido', 'Refogue o frango', 'Monte camadas: arroz, frango, cebola frita', 'Adicione açafrão dissolvido em leite', 'Cozinhe em fogo baixo por 30 minutos'],
        prepTime: '2 horas',
        cookTime: '1 hora',
        servings: 6,
        difficulty: 'Difícil',
        image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&h=600&fit=crop',
        category: 'Prato Principal'
      },
      {
        id: 'samosa',
        name: 'Samosa',
        description: 'Pastel triangular frito recheado com batata temperada, ervilha e especiarias.',
        ingredients: ['Massa: farinha, água, óleo', 'Recheio: batata, ervilha, cominho, coentro, garam masala, gengibre', 'Óleo para fritar'],
        instructions: ['Prepare a massa e deixe descansar', 'Cozinhe batatas e ervilhas com especiarias', 'Abra a massa e corte círculos', 'Recheie e dobre em formato triangular', 'Frite até dourar', 'Sirva com chutney'],
        prepTime: '40 minutos',
        cookTime: '30 minutos',
        servings: 20,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&h=600&fit=crop',
        category: 'Lanche'
      },
      {
        id: 'naan',
        name: 'Naan',
        description: 'Pão indiano macio assado em forno tandoor, pincelado com manteiga.',
        ingredients: ['500g farinha', '10g fermento', '200ml iogurte', '100ml leite', 'Açúcar', 'Sal', 'Manteiga', 'Alho (opcional)'],
        instructions: ['Misture todos os ingredientes', 'Sove até ficar elástica', 'Deixe crescer por 2 horas', 'Divida em porções', 'Abra em formato oval', 'Asse em forno bem quente', 'Pincele com manteiga'],
        prepTime: '2h30',
        cookTime: '10 minutos',
        servings: 8,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=800&h=600&fit=crop',
        category: 'Pão'
      },
      {
        id: 'gulab-jamun',
        name: 'Gulab Jamun',
        description: 'Bolinhos fritos de leite em pó embebidos em calda de açúcar aromática.',
        ingredients: ['200g leite em pó', '50g farinha', '1 colher fermento', 'Leite', 'Ghee', 'Açúcar', 'Água', 'Cardamomo', 'Água de rosas'],
        instructions: ['Misture leite em pó, farinha e fermento', 'Adicione leite até formar massa', 'Faça bolinhas', 'Frite em ghee até dourar', 'Prepare calda com açúcar, água, cardamomo', 'Embeba as bolinhas na calda quente', 'Deixe absorver por 2 horas'],
        prepTime: '30 minutos',
        cookTime: '30 minutos',
        servings: 20,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1589301773859-34a6b7e0b3e7?w=800&h=600&fit=crop',
        category: 'Sobremesa'
      }
    ]
  },
  {
    id: 'tailandia',
    name: 'Tailândia',
    flag: '🇹🇭',
    description: 'Equilíbrio perfeito entre doce, salgado, azedo e picante.',
    recipes: [
      {
        id: 'pad-thai',
        name: 'Pad Thai',
        description: 'Macarrão de arroz salteado com camarão, ovo, amendoim, brotos de feijão e molho tamarindo.',
        ingredients: ['200g macarrão de arroz', '300g camarão', '2 ovos', 'Amendoim torrado', 'Brotos de feijão', 'Cebolinha', 'Molho de peixe', 'Tamarindo', 'Açúcar de palma'],
        instructions: ['Hidrate o macarrão', 'Prepare o molho com tamarindo, molho de peixe e açúcar', 'Salteie camarão', 'Adicione ovo mexido', 'Adicione macarrão e molho', 'Finalize com amendoim, brotos e cebolinha'],
        prepTime: '20 minutos',
        cookTime: '15 minutos',
        servings: 4,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?w=800&h=600&fit=crop',
        category: 'Prato Principal'
      },
      {
        id: 'tom-yum',
        name: 'Tom Yum Goong',
        description: 'Sopa picante e azeda com camarão, capim-limão, galanga, folhas de limão kaffir.',
        ingredients: ['500g camarão', 'Capim-limão', 'Galanga', 'Folhas de limão kaffir', 'Cogumelos', 'Tomate', 'Chiles', 'Molho de peixe', 'Suco de limão', 'Coentro'],
        instructions: ['Ferva água com capim-limão, galanga e folhas de limão', 'Adicione cogumelos e tomate', 'Adicione camarão', 'Tempere com molho de peixe e chiles', 'Finalize com suco de limão e coentro'],
        prepTime: '15 minutos',
        cookTime: '20 minutos',
        servings: 4,
        difficulty: 'Fácil',
        image: 'https://images.unsplash.com/photo-1548943487-a2e4e43b4853?w=800&h=600&fit=crop',
        category: 'Sopa'
      },
      {
        id: 'green-curry',
        name: 'Green Curry',
        description: 'Curry verde cremoso com frango, berinjela, manjericão tailandês e leite de coco.',
        ingredients: ['500g frango', 'Pasta de curry verde', '400ml leite de coco', 'Berinjela', 'Pimentão', 'Manjericão tailandês', 'Folhas de limão kaffir', 'Molho de peixe', 'Açúcar de palma'],
        instructions: ['Frite a pasta de curry no creme do leite de coco', 'Adicione frango', 'Adicione resto do leite de coco', 'Adicione berinjela e pimentão', 'Tempere com molho de peixe e açúcar', 'Finalize com manjericão e folhas de limão'],
        prepTime: '15 minutos',
        cookTime: '25 minutos',
        servings: 4,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=800&h=600&fit=crop',
        category: 'Prato Principal'
      },
      {
        id: 'mango-sticky-rice',
        name: 'Mango Sticky Rice',
        description: 'Arroz glutinoso doce com leite de coco servido com manga madura.',
        ingredients: ['300g arroz glutinoso', '400ml leite de coco', '100g açúcar', 'Sal', '2 mangas maduras', 'Gergelim torrado'],
        instructions: ['Deixe o arroz de molho por 4 horas', 'Cozinhe no vapor por 30 minutos', 'Aqueça leite de coco com açúcar e sal', 'Misture com o arroz', 'Deixe absorver por 30 minutos', 'Sirva com manga fatiada e gergelim'],
        prepTime: '4 horas',
        cookTime: '30 minutos',
        servings: 4,
        difficulty: 'Fácil',
        image: 'https://images.unsplash.com/photo-1604085792782-8d92f276d7d8?w=800&h=600&fit=crop',
        category: 'Sobremesa'
      },
      {
        id: 'som-tam',
        name: 'Som Tam',
        description: 'Salada picante de mamão verde com tomate, amendoim, camarão seco e molho de peixe.',
        ingredients: ['1 mamão verde', 'Tomate cereja', 'Vagem', 'Amendoim torrado', 'Camarão seco', 'Alho', 'Chiles', 'Molho de peixe', 'Suco de limão', 'Açúcar de palma'],
        instructions: ['Rale o mamão verde em tiras', 'Pilão alho e chiles', 'Adicione vagem e tomate', 'Adicione mamão', 'Tempere com molho de peixe, limão e açúcar', 'Finalize com amendoim e camarão seco'],
        prepTime: '20 minutos',
        cookTime: '0 minutos',
        servings: 4,
        difficulty: 'Fácil',
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=600&fit=crop',
        category: 'Salada'
      }
    ]
  },
  {
    id: 'china',
    name: 'China',
    flag: '🇨🇳',
    description: 'Uma das culinárias mais antigas e diversificadas do mundo.',
    recipes: [
      {
        id: 'pato-pequim',
        name: 'Pato à Pequim',
        description: 'Pato assado com pele crocante, servido com panquecas, molho hoisin, pepino e cebolinha.',
        ingredients: ['1 pato inteiro', 'Mel', 'Vinagre', 'Molho de soja', 'Vinho de arroz', 'Gengibre', 'Panquecas chinesas', 'Molho hoisin', 'Pepino', 'Cebolinha'],
        instructions: ['Seque o pato e pincele com mel e vinagre', 'Deixe secar por 24 horas na geladeira', 'Asse a 180°C por 1h30', 'Aumente para 220°C nos últimos 15 minutos', 'Fatie a pele e carne', 'Sirva com panquecas, molho, pepino e cebolinha'],
        prepTime: '24 horas',
        cookTime: '2 horas',
        servings: 6,
        difficulty: 'Difícil',
        image: 'https://images.unsplash.com/photo-1583935909166-be77d3a5e2c0?w=800&h=600&fit=crop',
        category: 'Prato Principal'
      },
      {
        id: 'dim-sum',
        name: 'Dim Sum Variado',
        description: 'Seleção de pequenos pratos cozidos no vapor: shumai, har gow, char siu bao.',
        ingredients: ['Massa de dim sum', 'Camarão', 'Carne de porco', 'Cogumelos shiitake', 'Bambu', 'Gengibre', 'Molho de soja', 'Óleo de gergelim', 'Cebolinha'],
        instructions: ['Prepare recheios variados', 'Envolva em massa de dim sum', 'Cozinhe no vapor por 8-10 minutos', 'Sirva com molho de soja e gengibre'],
        prepTime: '1 hora',
        cookTime: '15 minutos',
        servings: 20,
        difficulty: 'Difícil',
        image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=800&h=600&fit=crop',
        category: 'Entrada'
      },
      {
        id: 'mapo-tofu',
        name: 'Mapo Tofu',
        description: 'Tofu em molho picante de pimenta Sichuan, carne moída e pasta de feijão fermentado.',
        ingredients: ['500g tofu', '200g carne moída', 'Pasta de feijão fermentado', 'Pimenta Sichuan', 'Chile', 'Alho', 'Gengibre', 'Cebolinha', 'Molho de soja', 'Amido de milho'],
        instructions: ['Corte tofu em cubos', 'Refogue carne com alho e gengibre', 'Adicione pasta de feijão e chiles', 'Adicione tofu e caldo', 'Tempere com pimenta Sichuan', 'Engrosse com amido', 'Finalize com cebolinha'],
        prepTime: '15 minutos',
        cookTime: '20 minutos',
        servings: 4,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=800&h=600&fit=crop',
        category: 'Prato Principal'
      },
      {
        id: 'chow-mein',
        name: 'Chow Mein',
        description: 'Macarrão salteado com legumes, carne e molho de soja.',
        ingredients: ['400g macarrão chinês', '300g frango ou carne', 'Repolho', 'Cenoura', 'Broto de feijão', 'Cebola', 'Alho', 'Gengibre', 'Molho de soja', 'Óleo de gergelim'],
        instructions: ['Cozinhe o macarrão al dente', 'Salteie carne com alho e gengibre', 'Adicione legumes', 'Adicione macarrão', 'Tempere com molho de soja', 'Finalize com óleo de gergelim'],
        prepTime: '20 minutos',
        cookTime: '15 minutos',
        servings: 4,
        difficulty: 'Fácil',
        image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=800&h=600&fit=crop',
        category: 'Prato Principal'
      },
      {
        id: 'spring-rolls',
        name: 'Spring Rolls',
        description: 'Rolinhos fritos crocantes recheados com legumes e carne.',
        ingredients: ['Massa para spring rolls', 'Repolho', 'Cenoura', 'Cogumelos', 'Carne de porco', 'Gengibre', 'Alho', 'Molho de soja', 'Óleo para fritar'],
        instructions: ['Refogue legumes e carne', 'Tempere com molho de soja', 'Deixe esfriar', 'Recheie as massas', 'Enrole bem apertado', 'Frite até dourar', 'Sirva com molho agridoce'],
        prepTime: '30 minutos',
        cookTime: '20 minutos',
        servings: 20,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=800&h=600&fit=crop',
        category: 'Entrada'
      }
    ]
  },
  {
    id: 'espanha',
    name: 'Espanha',
    flag: '🇪🇸',
    description: 'Culinária mediterrânea com influências árabes e tradição de tapas.',
    recipes: [
      {
        id: 'paella',
        name: 'Paella Valenciana',
        description: 'Arroz espanhol com frango, coelho, feijão verde, açafrão e pimentão.',
        ingredients: ['400g arroz', '500g frango', '300g coelho', 'Feijão verde', 'Pimentão', 'Tomate', 'Açafrão', 'Alho', 'Azeite', 'Caldo de galinha'],
        instructions: ['Doure as carnes na paellera', 'Adicione legumes', 'Adicione tomate e pimentão', 'Adicione arroz e torre', 'Adicione caldo quente com açafrão', 'Cozinhe sem mexer por 20 minutos', 'Deixe descansar 5 minutos'],
        prepTime: '20 minutos',
        cookTime: '40 minutos',
        servings: 6,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1534080564583-6be75777b70a?w=800&h=600&fit=crop',
        category: 'Prato Principal'
      },
      {
        id: 'tortilla',
        name: 'Tortilla Española',
        description: 'Omelete espanhola grossa com batata e cebola.',
        ingredients: ['6 ovos', '4 batatas grandes', '1 cebola', 'Azeite', 'Sal'],
        instructions: ['Frite batatas e cebola em bastante azeite', 'Escorra bem', 'Bata os ovos', 'Misture batatas aos ovos', 'Cozinhe em frigideira até firmar', 'Vire com ajuda de prato', 'Cozinhe o outro lado'],
        prepTime: '15 minutos',
        cookTime: '30 minutos',
        servings: 6,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1565299543923-37dd37887442?w=800&h=600&fit=crop',
        category: 'Prato Principal'
      },
      {
        id: 'gazpacho',
        name: 'Gazpacho',
        description: 'Sopa fria de tomate, pepino, pimentão e alho, típica do verão andaluz.',
        ingredients: ['1kg tomate maduro', '1 pepino', '1 pimentão verde', '1 dente alho', 'Pão amanhecido', 'Azeite', 'Vinagre', 'Sal'],
        instructions: ['Bata todos os ingredientes no liquidificador', 'Passe por peneira', 'Tempere com sal, azeite e vinagre', 'Leve à geladeira por 2 horas', 'Sirva bem gelado com cubos de pão torrado'],
        prepTime: '15 minutos',
        cookTime: '0 minutos',
        servings: 6,
        difficulty: 'Fácil',
        image: 'https://images.unsplash.com/photo-1541529086526-db283c563270?w=800&h=600&fit=crop',
        category: 'Sopa'
      },
      {
        id: 'churros-espanhol',
        name: 'Churros com Chocolate',
        description: 'Massa frita em formato de estrela servida com chocolate quente espesso.',
        ingredients: ['250ml água', '100g manteiga', '150g farinha', 'Sal', 'Açúcar', '200g chocolate amargo', '200ml creme de leite'],
        instructions: ['Ferva água com manteiga e sal', 'Adicione farinha de uma vez', 'Mexa até desgrudar', 'Coloque em saco de confeitar', 'Frite em óleo quente', 'Passe em açúcar', 'Derreta chocolate com creme para o molho'],
        prepTime: '15 minutos',
        cookTime: '20 minutos',
        servings: 20,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1543773495-e75e5d90c8c7?w=800&h=600&fit=crop',
        category: 'Sobremesa'
      },
      {
        id: 'patatas-bravas',
        name: 'Patatas Bravas',
        description: 'Batatas fritas com molho picante de tomate e maionese de alho.',
        ingredients: ['1kg batatas', 'Tomate', 'Pimentão picante', 'Alho', 'Páprica picante', 'Maionese', 'Azeite', 'Vinagre'],
        instructions: ['Corte batatas em cubos', 'Frite até dourar', 'Prepare molho bravo com tomate, pimentão e páprica', 'Prepare aioli (maionese de alho)', 'Sirva batatas com os dois molhos'],
        prepTime: '15 minutos',
        cookTime: '25 minutos',
        servings: 4,
        difficulty: 'Fácil',
        image: 'https://images.unsplash.com/photo-1565299543923-37dd37887442?w=800&h=600&fit=crop',
        category: 'Tapa'
      }
    ]
  },
  {
    id: 'grecia',
    name: 'Grécia',
    flag: '🇬🇷',
    description: 'Culinária mediterrânea com azeite, queijo feta, azeitonas e ervas frescas.',
    recipes: [
      {
        id: 'moussaka',
        name: 'Moussaka',
        description: 'Camadas de berinjela, carne moída temperada e molho bechamel gratinado.',
        ingredients: ['3 berinjelas', '500g carne moída', 'Tomate', 'Cebola', 'Alho', 'Canela', 'Bechamel', 'Queijo', 'Azeite'],
        instructions: ['Frite fatias de berinjela', 'Prepare molho de carne com tomate e canela', 'Prepare bechamel', 'Monte camadas: berinjela, carne, bechamel', 'Polvilhe queijo', 'Asse a 180°C por 45 minutos'],
        prepTime: '40 minutos',
        cookTime: '1 hora',
        servings: 8,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&h=600&fit=crop',
        category: 'Prato Principal'
      },
      {
        id: 'souvlaki',
        name: 'Souvlaki',
        description: 'Espetinhos de carne marinada grelhados, servidos com pita, tzatziki e salada.',
        ingredients: ['800g carne (porco ou frango)', 'Limão', 'Alho', 'Orégano', 'Azeite', 'Pita', 'Tzatziki', 'Tomate', 'Cebola', 'Alface'],
        instructions: ['Marine a carne por 4 horas', 'Monte espetinhos', 'Grelhe até dourar', 'Aqueça pitas', 'Sirva com tzatziki, salada e batatas fritas'],
        prepTime: '4 horas',
        cookTime: '15 minutos',
        servings: 4,
        difficulty: 'Fácil',
        image: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=800&h=600&fit=crop',
        category: 'Prato Principal'
      },
      {
        id: 'tzatziki',
        name: 'Tzatziki',
        description: 'Molho cremoso de iogurte grego com pepino, alho e endro.',
        ingredients: ['500g iogurte grego', '1 pepino', '3 dentes alho', 'Endro fresco', 'Azeite', 'Vinagre', 'Sal'],
        instructions: ['Rale o pepino e esprema bem', 'Misture com iogurte', 'Adicione alho picado', 'Adicione endro', 'Tempere com azeite, vinagre e sal', 'Leve à geladeira por 1 hora'],
        prepTime: '15 minutos',
        cookTime: '0 minutos',
        servings: 6,
        difficulty: 'Fácil',
        image: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=800&h=600&fit=crop',
        category: 'Molho'
      },
      {
        id: 'spanakopita',
        name: 'Spanakopita',
        description: 'Torta folhada recheada com espinafre, queijo feta e ervas.',
        ingredients: ['500g espinafre', '300g queijo feta', 'Massa filo', 'Cebola', 'Endro', 'Ovos', 'Azeite', 'Noz-moscada'],
        instructions: ['Refogue espinafre com cebola', 'Misture com feta esfarelado, ovos e endro', 'Pincele massa filo com azeite', 'Monte camadas de massa e recheio', 'Asse a 180°C por 40 minutos'],
        prepTime: '30 minutos',
        cookTime: '40 minutos',
        servings: 8,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&h=600&fit=crop',
        category: 'Torta'
      },
      {
        id: 'baklava',
        name: 'Baklava',
        description: 'Doce folhado com nozes, mel e especiarias.',
        ingredients: ['Massa filo', '400g nozes picadas', '200g manteiga', '300g mel', 'Açúcar', 'Canela', 'Cravo', 'Água'],
        instructions: ['Misture nozes com canela', 'Pincele massa filo com manteiga', 'Monte camadas de massa e nozes', 'Corte em losangos', 'Asse a 180°C por 45 minutos', 'Prepare calda de mel', 'Despeje calda quente sobre baklava fria'],
        prepTime: '40 minutos',
        cookTime: '45 minutos',
        servings: 24,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1598110750624-207050c4f28c?w=800&h=600&fit=crop',
        category: 'Sobremesa'
      }
    ]
  },
  {
    id: 'turquia',
    name: 'Turquia',
    flag: '🇹🇷',
    description: 'Ponte entre Oriente e Ocidente, com sabores ricos e especiarias.',
    recipes: [
      {
        id: 'kebab',
        name: 'Döner Kebab',
        description: 'Carne marinada assada em espeto vertical, servida em pão com salada e molhos.',
        ingredients: ['1kg carne (cordeiro ou frango)', 'Iogurte', 'Alho', 'Páprica', 'Cominho', 'Pão pita', 'Alface', 'Tomate', 'Cebola', 'Molho de iogurte'],
        instructions: ['Marine a carne por 12 horas', 'Asse em espeto girando constantemente', 'Fatie finamente', 'Aqueça o pão', 'Monte com salada e molhos'],
        prepTime: '12 horas',
        cookTime: '2 horas',
        servings: 8,
        difficulty: 'Difícil',
        image: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=800&h=600&fit=crop',
        category: 'Prato Principal'
      },
      {
        id: 'manti',
        name: 'Manti',
        description: 'Pequenos pastéis recheados com carne, servidos com iogurte de alho e manteiga com páprica.',
        ingredients: ['Massa: farinha, ovo, água', 'Recheio: carne moída, cebola, salsa', 'Iogurte', 'Alho', 'Manteiga', 'Páprica', 'Hortelã'],
        instructions: ['Prepare massa fina', 'Recheie com carne temperada', 'Feche em formato de trouxinha', 'Cozinhe no vapor', 'Sirva com iogurte de alho', 'Regue com manteiga e páprica'],
        prepTime: '1 hora',
        cookTime: '30 minutos',
        servings: 6,
        difficulty: 'Difícil',
        image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&h=600&fit=crop',
        category: 'Prato Principal'
      },
      {
        id: 'borek',
        name: 'Börek',
        description: 'Pastel folhado turco recheado com queijo, espinafre ou carne.',
        ingredients: ['Massa filo', 'Queijo feta', 'Ricota', 'Salsa', 'Ovos', 'Manteiga', 'Gergelim'],
        instructions: ['Misture queijos com salsa e ovo', 'Pincele massa filo com manteiga', 'Recheie e enrole', 'Pincele com ovo', 'Polvilhe gergelim', 'Asse a 180°C por 30 minutos'],
        prepTime: '30 minutos',
        cookTime: '30 minutos',
        servings: 12,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&h=600&fit=crop',
        category: 'Lanche'
      },
      {
        id: 'baklava-turco',
        name: 'Baklava Turco',
        description: 'Doce folhado com pistache, nozes e calda de mel.',
        ingredients: ['Massa filo', '300g pistache', '200g nozes', 'Manteiga', 'Mel', 'Açúcar', 'Água de rosas', 'Limão'],
        instructions: ['Pique pistache e nozes', 'Monte camadas de massa filo com manteiga', 'Adicione camada de nozes', 'Repita até acabar', 'Corte em losangos', 'Asse até dourar', 'Despeje calda de mel'],
        prepTime: '45 minutos',
        cookTime: '50 minutos',
        servings: 24,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1598110750624-207050c4f28c?w=800&h=600&fit=crop',
        category: 'Sobremesa'
      },
      {
        id: 'lahmacun',
        name: 'Lahmacun',
        description: 'Pizza turca fina com carne moída temperada, tomate e especiarias.',
        ingredients: ['Massa de pizza fina', '300g carne moída', 'Tomate', 'Pimentão', 'Cebola', 'Alho', 'Páprica', 'Cominho', 'Salsa', 'Limão'],
        instructions: ['Prepare massa fina', 'Misture carne com legumes e especiarias', 'Espalhe sobre a massa', 'Asse em forno bem quente', 'Sirva com salsa, limão e enrole'],
        prepTime: '1 hora',
        cookTime: '10 minutos',
        servings: 8,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&h=600&fit=crop',
        category: 'Prato Principal'
      }
    ]
  },
  {
    id: 'argentina',
    name: 'Argentina',
    flag: '🇦🇷',
    description: 'Famosa por suas carnes de qualidade e tradição do churrasco.',
    recipes: [
      {
        id: 'asado',
        name: 'Asado Argentino',
        description: 'Churrasco tradicional com diversos cortes de carne bovina grelhados lentamente.',
        ingredients: ['Costela', 'Chorizo', 'Morcilla', 'Vazio', 'Sal grosso', 'Chimichurri'],
        instructions: ['Tempere as carnes com sal grosso', 'Prepare brasas de carvão', 'Grelhe as carnes lentamente', 'Vire apenas uma vez', 'Sirva com chimichurri e saladas'],
        prepTime: '30 minutos',
        cookTime: '3 horas',
        servings: 10,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&h=600&fit=crop',
        category: 'Prato Principal'
      },
      {
        id: 'empanadas',
        name: 'Empanadas Argentinas',
        description: 'Pastéis assados recheados com carne, cebola, ovo, azeitona e temperos.',
        ingredients: ['Massa: farinha, gordura, água', 'Recheio: carne moída, cebola, ovo cozido, azeitona, cominho, páprica', 'Ovo para pincelar'],
        instructions: ['Refogue carne com cebola e temperos', 'Adicione ovo e azeitona picados', 'Abra discos de massa', 'Recheie e feche com repulgo', 'Pincele com ovo', 'Asse a 200°C por 25 minutos'],
        prepTime: '45 minutos',
        cookTime: '25 minutos',
        servings: 20,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&h=600&fit=crop',
        category: 'Lanche'
      },
      {
        id: 'chimichurri',
        name: 'Chimichurri',
        description: 'Molho tradicional argentino de salsa, alho, vinagre e azeite.',
        ingredients: ['Salsa fresca', 'Orégano', 'Alho', 'Vinagre de vinho tinto', 'Azeite', 'Pimenta calabresa', 'Sal'],
        instructions: ['Pique a salsa finamente', 'Pique o alho', 'Misture todos os ingredientes', 'Deixe descansar por 2 horas', 'Sirva com carnes grelhadas'],
        prepTime: '15 minutos',
        cookTime: '0 minutos',
        servings: 8,
        difficulty: 'Fácil',
        image: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=800&h=600&fit=crop',
        category: 'Molho'
      },
      {
        id: 'dulce-de-leche',
        name: 'Dulce de Leche',
        description: 'Doce de leite cremoso argentino, base para diversas sobremesas.',
        ingredients: ['2L leite integral', '500g açúcar', '1 colher bicarbonato', 'Essência de baunilha'],
        instructions: ['Misture leite, açúcar e bicarbonato', 'Cozinhe em fogo baixo mexendo sempre', 'Cozinhe por 2-3 horas até engrossar', 'Adicione baunilha', 'Deixe esfriar'],
        prepTime: '10 minutos',
        cookTime: '3 horas',
        servings: 20,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&h=600&fit=crop',
        category: 'Sobremesa'
      },
      {
        id: 'alfajores',
        name: 'Alfajores',
        description: 'Biscoitos amanteigados recheados com dulce de leche e cobertos com chocolate.',
        ingredients: ['300g farinha', '200g amido de milho', '200g manteiga', '100g açúcar', 'Gemas', 'Dulce de leche', 'Chocolate', 'Coco ralado'],
        instructions: ['Misture ingredientes secos', 'Adicione manteiga e gemas', 'Abra a massa', 'Corte círculos', 'Asse até dourar levemente', 'Recheie com dulce de leche', 'Cubra com chocolate e coco'],
        prepTime: '30 minutos',
        cookTime: '15 minutos',
        servings: 24,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1626200419199-391ae4be7a41?w=800&h=600&fit=crop',
        category: 'Sobremesa'
      }
    ]
  },
  {
    id: 'peru',
    name: 'Peru',
    flag: '🇵🇪',
    description: 'Culinária diversificada com influências incas, espanholas e asiáticas.',
    recipes: [
      {
        id: 'ceviche',
        name: 'Ceviche Peruano',
        description: 'Peixe cru marinado em suco de limão com cebola roxa, ají e coentro.',
        ingredients: ['500g peixe branco fresco', 'Limão', 'Cebola roxa', 'Ají limo', 'Coentro', 'Milho', 'Batata-doce', 'Sal'],
        instructions: ['Corte o peixe em cubos', 'Marine com suco de limão por 5 minutos', 'Adicione cebola em juliana', 'Adicione ají e coentro', 'Tempere com sal', 'Sirva com milho e batata-doce'],
        prepTime: '20 minutos',
        cookTime: '0 minutos',
        servings: 4,
        difficulty: 'Fácil',
        image: 'https://images.unsplash.com/photo-1559847844-5315695dadae?w=800&h=600&fit=crop',
        category: 'Entrada'
      },
      {
        id: 'lomo-saltado',
        name: 'Lomo Saltado',
        description: 'Carne salteada com cebola, tomate, batata frita e molho de soja, servido com arroz.',
        ingredients: ['600g filé mignon', 'Cebola roxa', 'Tomate', 'Ají amarillo', 'Batatas', 'Molho de soja', 'Vinagre', 'Coentro', 'Arroz'],
        instructions: ['Corte a carne em tiras', 'Frite batatas em palito', 'Salteie carne em fogo alto', 'Adicione cebola e tomate', 'Adicione molho de soja e vinagre', 'Adicione batatas fritas', 'Finalize com coentro', 'Sirva com arroz'],
        prepTime: '20 minutos',
        cookTime: '20 minutos',
        servings: 4,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&h=600&fit=crop',
        category: 'Prato Principal'
      },
      {
        id: 'aji-de-gallina',
        name: 'Ají de Gallina',
        description: 'Frango desfiado em molho cremoso de ají amarillo, leite e pão.',
        ingredients: ['1kg frango', 'Ají amarillo', 'Pão de forma', 'Leite', 'Cebola', 'Alho', 'Nozes', 'Queijo parmesão', 'Batata', 'Ovo', 'Azeitona'],
        instructions: ['Cozinhe e desfie o frango', 'Bata ají, pão, leite e nozes', 'Refogue cebola e alho', 'Adicione o creme de ají', 'Adicione frango', 'Finalize com queijo', 'Sirva com batata, ovo e azeitona'],
        prepTime: '30 minutos',
        cookTime: '40 minutos',
        servings: 6,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=800&h=600&fit=crop',
        category: 'Prato Principal'
      },
      {
        id: 'causa-limena',
        name: 'Causa Limeña',
        description: 'Camadas de purê de batata amarela temperado com limão e ají, recheado com frango ou atum.',
        ingredients: ['1kg batata amarela', 'Limão', 'Ají amarillo', 'Azeite', 'Frango ou atum', 'Maionese', 'Abacate', 'Ovo', 'Azeitona'],
        instructions: ['Cozinhe e amasse as batatas', 'Tempere com limão, ají e azeite', 'Prepare recheio de frango com maionese', 'Monte camadas em forma', 'Decore com abacate, ovo e azeitona', 'Leve à geladeira'],
        prepTime: '40 minutos',
        cookTime: '30 minutos',
        servings: 8,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&h=600&fit=crop',
        category: 'Entrada'
      },
      {
        id: 'suspiro-limeno',
        name: 'Suspiro Limeño',
        description: 'Sobremesa cremosa de dulce de leche coberta com merengue de vinho do Porto.',
        ingredients: ['Dulce de leche', 'Leite condensado', 'Gemas', 'Claras', 'Açúcar', 'Vinho do Porto', 'Canela'],
        instructions: ['Cozinhe dulce de leche com leite condensado e gemas', 'Despeje em taças', 'Bata claras em neve com açúcar', 'Adicione vinho do Porto', 'Cubra o doce de leite', 'Polvilhe canela'],
        prepTime: '20 minutos',
        cookTime: '30 minutos',
        servings: 6,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&h=600&fit=crop',
        category: 'Sobremesa'
      }
    ]
  },
  {
    id: 'coreia',
    name: 'Coreia do Sul',
    flag: '🇰🇷',
    description: 'Culinária com fermentados, picante e banchan (acompanhamentos variados).',
    recipes: [
      {
        id: 'kimchi',
        name: 'Kimchi',
        description: 'Repolho fermentado com pasta de pimenta coreana, alho e gengibre.',
        ingredients: ['1 repolho napa', 'Sal grosso', 'Gochugaru (pimenta coreana)', 'Alho', 'Gengibre', 'Molho de peixe', 'Açúcar', 'Cebolinha'],
        instructions: ['Corte e salgue o repolho por 2 horas', 'Enxágue bem', 'Prepare pasta com gochugaru, alho, gengibre', 'Adicione molho de peixe e açúcar', 'Misture com repolho', 'Fermente por 3-5 dias'],
        prepTime: '3 horas',
        cookTime: '0 minutos',
        servings: 20,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1604908815453-7462d2d90a4c?w=800&h=600&fit=crop',
        category: 'Acompanhamento'
      },
      {
        id: 'bibimbap',
        name: 'Bibimbap',
        description: 'Arroz com legumes variados, carne, ovo frito e gochujang.',
        ingredients: ['Arroz', 'Carne moída', 'Espinafre', 'Cenoura', 'Broto de feijão', 'Cogumelos', 'Ovo', 'Gochujang', 'Óleo de gergelim', 'Gergelim'],
        instructions: ['Cozinhe arroz', 'Refogue cada legume separadamente', 'Tempere carne e refogue', 'Monte tigela: arroz, legumes em setores', 'Coloque carne no centro', 'Frite ovo e coloque por cima', 'Sirva com gochujang'],
        prepTime: '30 minutos',
        cookTime: '30 minutos',
        servings: 4,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1553163147-622ab57be1c7?w=800&h=600&fit=crop',
        category: 'Prato Principal'
      },
      {
        id: 'bulgogi',
        name: 'Bulgogi',
        description: 'Carne marinada em molho doce de soja, grelhada e servida com alface.',
        ingredients: ['600g carne bovina fatiada', 'Molho de soja', 'Açúcar', 'Alho', 'Gengibre', 'Óleo de gergelim', 'Pera', 'Cebola', 'Cebolinha', 'Alface'],
        instructions: ['Bata pera, alho, gengibre, molho de soja e açúcar', 'Marine a carne por 4 horas', 'Grelhe em fogo alto', 'Sirva com alface para embrulhar', 'Acompanhe com arroz e kimchi'],
        prepTime: '4 horas',
        cookTime: '15 minutos',
        servings: 4,
        difficulty: 'Fácil',
        image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&h=600&fit=crop',
        category: 'Prato Principal'
      },
      {
        id: 'tteokbokki',
        name: 'Tteokbokki',
        description: 'Bolinhos de arroz em molho picante e doce de gochujang.',
        ingredients: ['500g tteok (bolinhos de arroz)', 'Gochujang', 'Gochugaru', 'Açúcar', 'Molho de soja', 'Alho', 'Fishcake', 'Cebola', 'Cebolinha', 'Ovo cozido'],
        instructions: ['Ferva água com gochujang, açúcar e molho de soja', 'Adicione tteok', 'Adicione fishcake e cebola', 'Cozinhe até engrossar', 'Finalize com cebolinha e ovo'],
        prepTime: '10 minutos',
        cookTime: '20 minutos',
        servings: 4,
        difficulty: 'Fácil',
        image: 'https://images.unsplash.com/photo-1604908815453-7462d2d90a4c?w=800&h=600&fit=crop',
        category: 'Lanche'
      },
      {
        id: 'japchae',
        name: 'Japchae',
        description: 'Macarrão de batata-doce salteado com legumes e carne.',
        ingredients: ['200g macarrão de batata-doce', 'Carne bovina', 'Espinafre', 'Cenoura', 'Cogumelos', 'Cebola', 'Molho de soja', 'Açúcar', 'Óleo de gergelim', 'Gergelim'],
        instructions: ['Cozinhe o macarrão', 'Salteie carne com molho de soja', 'Salteie cada legume separadamente', 'Misture tudo', 'Tempere com molho de soja, açúcar e óleo de gergelim', 'Finalize com gergelim'],
        prepTime: '30 minutos',
        cookTime: '30 minutos',
        servings: 6,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=800&h=600&fit=crop',
        category: 'Prato Principal'
      }
    ]
  },
  {
    id: 'vietnam',
    name: 'Vietnã',
    flag: '🇻🇳',
    description: 'Culinária leve e aromática com ervas frescas e molho de peixe.',
    recipes: [
      {
        id: 'pho',
        name: 'Phở',
        description: 'Sopa de macarrão de arroz com caldo aromático de ossos, carne e ervas frescas.',
        ingredients: ['Ossos de boi', 'Carne bovina', 'Macarrão de arroz', 'Anis estrelado', 'Canela', 'Gengibre', 'Cebola', 'Molho de peixe', 'Manjericão', 'Coentro', 'Limão', 'Broto de feijão'],
        instructions: ['Ferva ossos por 12 horas com especiarias', 'Coe o caldo', 'Cozinhe macarrão', 'Fatie carne finamente', 'Monte tigela: macarrão, carne crua', 'Despeje caldo fervente', 'Sirva com ervas e limão'],
        prepTime: '30 minutos',
        cookTime: '12 horas',
        servings: 6,
        difficulty: 'Difícil',
        image: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=800&h=600&fit=crop',
        category: 'Sopa'
      },
      {
        id: 'banh-mi',
        name: 'Bánh Mì',
        description: 'Sanduíche vietnamita em baguete com patê, carne, legumes em conserva e coentro.',
        ingredients: ['Baguete', 'Patê', 'Carne de porco assada', 'Cenoura em conserva', 'Rabanete em conserva', 'Pepino', 'Coentro', 'Pimenta', 'Maionese', 'Molho de soja'],
        instructions: ['Asse a baguete', 'Passe patê e maionese', 'Adicione carne', 'Adicione legumes em conserva', 'Adicione pepino e coentro', 'Tempere com molho de soja e pimenta'],
        prepTime: '20 minutos',
        cookTime: '10 minutos',
        servings: 4,
        difficulty: 'Fácil',
        image: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=800&h=600&fit=crop',
        category: 'Lanche'
      },
      {
        id: 'bun-cha',
        name: 'Bún Chả',
        description: 'Macarrão de arroz com almôndegas de porco grelhadas, servido com molho agridoce.',
        ingredients: ['Macarrão de arroz', 'Carne de porco moída', 'Barriga de porco', 'Molho de peixe', 'Açúcar', 'Vinagre', 'Alho', 'Cenoura', 'Pepino', 'Ervas frescas'],
        instructions: ['Faça almôndegas com carne moída', 'Grelhe almôndegas e barriga de porco', 'Prepare molho com molho de peixe, açúcar, vinagre', 'Cozinhe macarrão', 'Sirva com carne, molho, legumes e ervas'],
        prepTime: '30 minutos',
        cookTime: '25 minutos',
        servings: 4,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=800&h=600&fit=crop',
        category: 'Prato Principal'
      },
      {
        id: 'goi-cuon',
        name: 'Gỏi Cuốn',
        description: 'Rolinhos frescos de papel de arroz com camarão, carne de porco, legumes e ervas.',
        ingredients: ['Papel de arroz', 'Camarão cozido', 'Carne de porco cozida', 'Macarrão de arroz', 'Alface', 'Cenoura', 'Pepino', 'Manjericão', 'Hortelã', 'Molho hoisin', 'Amendoim'],
        instructions: ['Hidrate papel de arroz', 'Disponha ingredientes no centro', 'Enrole bem apertado', 'Prepare molho com hoisin e amendoim', 'Sirva fresco'],
        prepTime: '30 minutos',
        cookTime: '20 minutos',
        servings: 12,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=800&h=600&fit=crop',
        category: 'Entrada'
      },
      {
        id: 'ca-kho-to',
        name: 'Cá Kho Tộ',
        description: 'Peixe caramelizado em panela de barro com molho de peixe e açúcar.',
        ingredients: ['600g peixe (bagre)', 'Açúcar', 'Molho de peixe', 'Cebola', 'Alho', 'Pimenta', 'Água de coco', 'Cebolinha'],
        instructions: ['Caramelize açúcar', 'Adicione molho de peixe e água de coco', 'Adicione peixe', 'Adicione cebola, alho e pimenta', 'Cozinhe em fogo baixo por 30 minutos', 'Finalize com cebolinha'],
        prepTime: '15 minutos',
        cookTime: '40 minutos',
        servings: 4,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?w=800&h=600&fit=crop',
        category: 'Prato Principal'
      }
    ]
  },
  {
    id: 'libano',
    name: 'Líbano',
    flag: '🇱🇧',
    description: 'Culinária mediterrânea com mezze, grãos, azeite e especiarias.',
    recipes: [
      {
        id: 'homus',
        name: 'Homus',
        description: 'Pasta cremosa de grão-de-bico com tahine, limão e alho.',
        ingredients: ['400g grão-de-bico cozido', '3 colheres tahine', '2 limões', '2 dentes alho', 'Azeite', 'Cominho', 'Páprica', 'Sal'],
        instructions: ['Bata grão-de-bico com tahine, limão e alho', 'Adicione água aos poucos até cremoso', 'Tempere com sal e cominho', 'Sirva com azeite e páprica por cima'],
        prepTime: '15 minutos',
        cookTime: '0 minutos',
        servings: 6,
        difficulty: 'Fácil',
        image: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=800&h=600&fit=crop',
        category: 'Entrada'
      },
      {
        id: 'tabule',
        name: 'Tabule',
        description: 'Salada refrescante de trigo bulgur com tomate, pepino, salsa e hortelã.',
        ingredients: ['100g trigo bulgur', '3 tomates', '1 pepino', 'Salsa', 'Hortelã', 'Cebola', 'Limão', 'Azeite', 'Sal'],
        instructions: ['Hidrate o bulgur em água fria', 'Pique tomate, pepino, salsa e hortelã', 'Escorra o bulgur', 'Misture tudo', 'Tempere com limão, azeite e sal'],
        prepTime: '30 minutos',
        cookTime: '0 minutos',
        servings: 6,
        difficulty: 'Fácil',
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=600&fit=crop',
        category: 'Salada'
      },
      {
        id: 'kafta',
        name: 'Kafta',
        description: 'Espetinhos de carne moída temperada com salsa, cebola e especiarias.',
        ingredients: ['500g carne moída', 'Cebola', 'Salsa', 'Cominho', 'Pimenta síria', 'Canela', 'Sal'],
        instructions: ['Misture carne com cebola, salsa e especiarias', 'Modele em formato de salsicha nos espetos', 'Grelhe até dourar', 'Sirva com arroz, salada e homus'],
        prepTime: '20 minutos',
        cookTime: '15 minutos',
        servings: 4,
        difficulty: 'Fácil',
        image: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=800&h=600&fit=crop',
        category: 'Prato Principal'
      },
      {
        id: 'esfiha',
        name: 'Esfiha',
        description: 'Massa fina recheada com carne temperada, aberta ou fechada.',
        ingredients: ['Massa: farinha, fermento, água, azeite', 'Recheio: carne moída, tomate, cebola, limão, tahine, especiarias'],
        instructions: ['Prepare massa e deixe crescer', 'Refogue carne com tomate, cebola e especiarias', 'Abra discos de massa', 'Recheie', 'Deixe aberta ou feche', 'Asse a 200°C por 15 minutos'],
        prepTime: '2 horas',
        cookTime: '15 minutos',
        servings: 20,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&h=600&fit=crop',
        category: 'Lanche'
      },
      {
        id: 'baklava-libanes',
        name: 'Baklava Libanês',
        description: 'Doce folhado com nozes, pistache e calda de água de flor de laranjeira.',
        ingredients: ['Massa filo', 'Nozes', 'Pistache', 'Manteiga', 'Açúcar', 'Água', 'Água de flor de laranjeira', 'Limão'],
        instructions: ['Pique nozes e pistache', 'Monte camadas de massa filo com manteiga', 'Adicione camada de nozes', 'Repita até acabar', 'Corte em losangos', 'Asse até dourar', 'Prepare calda e despeje'],
        prepTime: '45 minutos',
        cookTime: '50 minutos',
        servings: 24,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1598110750624-207050c4f28c?w=800&h=600&fit=crop',
        category: 'Sobremesa'
      }
    ]
  },
  {
    id: 'marrocos',
    name: 'Marrocos',
    flag: '🇲🇦',
    description: 'Culinária aromática com tajines, cuscuz e especiarias exóticas.',
    recipes: [
      {
        id: 'tajine',
        name: 'Tajine de Cordeiro',
        description: 'Ensopado marroquino cozido lentamente com cordeiro, legumes, frutas secas e especiarias.',
        ingredients: ['1kg cordeiro', 'Cebola', 'Tomate', 'Cenoura', 'Damasco seco', 'Amêndoas', 'Mel', 'Gengibre', 'Açafrão', 'Canela', 'Coentro'],
        instructions: ['Doure o cordeiro', 'Adicione cebola e especiarias', 'Adicione tomate e cenoura', 'Adicione damascos', 'Cozinhe em tajine por 2 horas', 'Finalize com amêndoas torradas e mel'],
        prepTime: '30 minutos',
        cookTime: '2 horas',
        servings: 6,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=800&h=600&fit=crop',
        category: 'Prato Principal'
      },
      {
        id: 'cuscuz-marroquino',
        name: 'Cuscuz Marroquino',
        description: 'Cuscuz cozido no vapor com legumes, grão-de-bico e carne.',
        ingredients: ['500g cuscuz', 'Cordeiro ou frango', 'Cenoura', 'Nabo', 'Abobrinha', 'Grão-de-bico', 'Cebola', 'Tomate', 'Especiarias marroquinas'],
        instructions: ['Cozinhe carne com legumes e especiarias', 'Hidrate cuscuz com água', 'Cozinhe no vapor sobre o ensopado', 'Solte os grãos com garfo', 'Sirva cuscuz com ensopado por cima'],
        prepTime: '30 minutos',
        cookTime: '1 hora',
        servings: 8,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&h=600&fit=crop',
        category: 'Prato Principal'
      },
      {
        id: 'harira',
        name: 'Harira',
        description: 'Sopa tradicional de lentilha, grão-de-bico, tomate e carne, servida no Ramadã.',
        ingredients: ['Cordeiro', 'Lentilha', 'Grão-de-bico', 'Tomate', 'Cebola', 'Aipo', 'Coentro', 'Salsa', 'Gengibre', 'Açafrão', 'Canela', 'Farinha'],
        instructions: ['Refogue carne com cebola e especiarias', 'Adicione lentilha e grão-de-bico', 'Adicione tomate e ervas', 'Cozinhe por 1 hora', 'Engrosse com farinha', 'Finalize com coentro e limão'],
        prepTime: '20 minutos',
        cookTime: '1h30',
        servings: 8,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1548943487-a2e4e43b4853?w=800&h=600&fit=crop',
        category: 'Sopa'
      },
      {
        id: 'pastilla',
        name: 'Pastilla',
        description: 'Torta folhada doce e salgada com frango, amêndoas, ovos e canela.',
        ingredients: ['Massa filo', 'Frango', 'Amêndoas', 'Ovos', 'Cebola', 'Salsa', 'Coentro', 'Açúcar', 'Canela', 'Açafrão', 'Manteiga'],
        instructions: ['Cozinhe frango com especiarias', 'Desfie o frango', 'Prepare ovos mexidos', 'Torre amêndoas com açúcar e canela', 'Monte camadas: massa, frango, ovos, amêndoas', 'Asse até dourar', 'Polvilhe açúcar e canela'],
        prepTime: '1 hora',
        cookTime: '45 minutos',
        servings: 8,
        difficulty: 'Difícil',
        image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&h=600&fit=crop',
        category: 'Prato Principal'
      },
      {
        id: 'cha-marroquino',
        name: 'Chá de Hortelã Marroquino',
        description: 'Chá verde com hortelã fresca e açúcar, servido em ritual tradicional.',
        ingredients: ['Chá verde gunpowder', 'Hortelã fresca', 'Açúcar'],
        instructions: ['Ferva água', 'Aqueça o bule', 'Adicione chá e água fervente', 'Deixe em infusão por 2 minutos', 'Adicione hortelã e açúcar', 'Sirva despejando de altura'],
        prepTime: '5 minutos',
        cookTime: '5 minutos',
        servings: 6,
        difficulty: 'Fácil',
        image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=800&h=600&fit=crop',
        category: 'Bebida'
      }
    ]
  },
  {
    id: 'portugal',
    name: 'Portugal',
    flag: '🇵🇹',
    description: 'Culinária rica em frutos do mar, bacalhau e doces conventuais.',
    recipes: [
      {
        id: 'bacalhau-bras',
        name: 'Bacalhau à Brás',
        description: 'Bacalhau desfiado com batata palha, ovos, cebola e azeitonas.',
        ingredients: ['500g bacalhau dessalgado', '500g batata palha', '6 ovos', '2 cebolas', 'Alho', 'Azeitonas pretas', 'Salsa', 'Azeite'],
        instructions: ['Desfie o bacalhau', 'Refogue cebola e alho no azeite', 'Adicione bacalhau', 'Adicione batata palha', 'Adicione ovos batidos', 'Mexa até cremoso', 'Finalize com azeitonas e salsa'],
        prepTime: '48 horas (dessalgar)',
        cookTime: '30 minutos',
        servings: 6,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?w=800&h=600&fit=crop',
        category: 'Prato Principal'
      },
      {
        id: 'pastel-nata',
        name: 'Pastel de Nata',
        description: 'Tortinha de massa folhada com creme de ovos caramelizado.',
        ingredients: ['Massa folhada', '6 gemas', '200g açúcar', '30g farinha', '500ml leite', 'Casca de limão', 'Canela'],
        instructions: ['Prepare creme com leite, açúcar, farinha e gemas', 'Forre forminhas com massa folhada', 'Despeje o creme', 'Asse a 250°C até caramelizar', 'Polvilhe canela'],
        prepTime: '30 minutos',
        cookTime: '20 minutos',
        servings: 12,
        difficulty: 'Difícil',
        image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&h=600&fit=crop',
        category: 'Sobremesa'
      },
      {
        id: 'caldo-verde',
        name: 'Caldo Verde',
        description: 'Sopa de couve fatiada finamente com batata, chouriço e azeite.',
        ingredients: ['1kg batata', '500g couve galega', '200g chouriço', 'Cebola', 'Alho', 'Azeite', 'Sal'],
        instructions: ['Cozinhe batatas com cebola e alho', 'Amasse as batatas', 'Adicione couve fatiada finamente', 'Adicione chouriço em rodelas', 'Cozinhe por 5 minutos', 'Finalize com azeite'],
        prepTime: '15 minutos',
        cookTime: '30 minutos',
        servings: 6,
        difficulty: 'Fácil',
        image: 'https://images.unsplash.com/photo-1548943487-a2e4e43b4853?w=800&h=600&fit=crop',
        category: 'Sopa'
      },
      {
        id: 'francesinha',
        name: 'Francesinha',
        description: 'Sanduíche com carnes, linguiça, coberto com queijo derretido e molho picante.',
        ingredients: ['Pão de forma', 'Bife', 'Presunto', 'Linguiça', 'Salsicha', 'Queijo', 'Cerveja', 'Tomate', 'Pimenta', 'Molho inglês'],
        instructions: ['Grelhe as carnes', 'Monte sanduíche com todas as carnes', 'Cubra com queijo', 'Gratine no forno', 'Prepare molho com cerveja, tomate e temperos', 'Despeje molho quente', 'Sirva com batatas fritas'],
        prepTime: '20 minutos',
        cookTime: '30 minutos',
        servings: 2,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=800&h=600&fit=crop',
        category: 'Prato Principal'
      },
      {
        id: 'arroz-marisco',
        name: 'Arroz de Marisco',
        description: 'Arroz caldoso com frutos do mar variados e coentro.',
        ingredients: ['Arroz', 'Camarão', 'Mexilhão', 'Lula', 'Amêijoa', 'Tomate', 'Cebola', 'Alho', 'Pimentão', 'Coentro', 'Vinho branco'],
        instructions: ['Refogue cebola, alho e pimentão', 'Adicione tomate', 'Adicione frutos do mar', 'Adicione vinho branco', 'Adicione arroz e caldo', 'Cozinhe até arroz ficar caldoso', 'Finalize com coentro'],
        prepTime: '30 minutos',
        cookTime: '40 minutos',
        servings: 6,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?w=800&h=600&fit=crop',
        category: 'Prato Principal'
      }
    ]
  },
  {
    id: 'alemanha',
    name: 'Alemanha',
    flag: '🇩🇪',
    description: 'Culinária robusta com salsichas, batatas, repolho e cerveja.',
    recipes: [
      {
        id: 'schnitzel',
        name: 'Wiener Schnitzel',
        description: 'Bife de vitela empanado e frito, servido com batata e limão.',
        ingredients: ['4 bifes de vitela', 'Farinha', 'Ovos', 'Farinha de rosca', 'Manteiga', 'Limão', 'Sal', 'Pimenta'],
        instructions: ['Bata os bifes até ficarem finos', 'Tempere com sal e pimenta', 'Passe na farinha, ovo e farinha de rosca', 'Frite em manteiga até dourar', 'Sirva com limão e batata'],
        prepTime: '20 minutos',
        cookTime: '15 minutos',
        servings: 4,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&h=600&fit=crop',
        category: 'Prato Principal'
      },
      {
        id: 'sauerkraut',
        name: 'Sauerkraut com Salsichas',
        description: 'Repolho fermentado cozido com salsichas alemãs e batatas.',
        ingredients: ['1kg sauerkraut', 'Salsichas alemãs', 'Bacon', 'Cebola', 'Batata', 'Vinho branco', 'Bagas de zimbro', 'Louro'],
        instructions: ['Refogue bacon e cebola', 'Adicione sauerkraut', 'Adicione vinho e especiarias', 'Cozinhe por 1 hora', 'Adicione salsichas', 'Cozinhe batatas separadamente', 'Sirva junto'],
        prepTime: '15 minutos',
        cookTime: '1h30',
        servings: 6,
        difficulty: 'Fácil',
        image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=800&h=600&fit=crop',
        category: 'Prato Principal'
      },
      {
        id: 'pretzel',
        name: 'Pretzel',
        description: 'Pão alemão em formato de laço, crocante por fora e macio por dentro.',
        ingredients: ['500g farinha', '10g fermento', '300ml água', 'Açúcar', 'Sal', 'Bicarbonato de sódio', 'Sal grosso'],
        instructions: ['Prepare massa e deixe crescer', 'Divida e modele em formato de pretzel', 'Ferva água com bicarbonato', 'Mergulhe pretzels por 30 segundos', 'Polvilhe sal grosso', 'Asse a 200°C por 15 minutos'],
        prepTime: '2 horas',
        cookTime: '15 minutos',
        servings: 8,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&h=600&fit=crop',
        category: 'Pão'
      },
      {
        id: 'black-forest-cake',
        name: 'Bolo Floresta Negra',
        description: 'Bolo de chocolate com cerejas, chantilly e raspas de chocolate.',
        ingredients: ['Massa de chocolate', 'Cerejas em calda', 'Kirsch', 'Chantilly', 'Chocolate', 'Açúcar'],
        instructions: ['Asse massa de chocolate em 3 camadas', 'Embeba com kirsch', 'Recheie com chantilly e cerejas', 'Cubra com chantilly', 'Decore com cerejas e raspas de chocolate'],
        prepTime: '45 minutos',
        cookTime: '30 minutos',
        servings: 12,
        difficulty: 'Difícil',
        image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&h=600&fit=crop',
        category: 'Sobremesa'
      },
      {
        id: 'kartoffelsalat',
        name: 'Kartoffelsalat',
        description: 'Salada alemã de batata com bacon, cebola e vinagre.',
        ingredients: ['1kg batata', 'Bacon', 'Cebola', 'Vinagre', 'Caldo de carne', 'Mostarda', 'Cebolinha', 'Sal', 'Pimenta'],
        instructions: ['Cozinhe batatas com casca', 'Descasque e fatie', 'Frite bacon', 'Refogue cebola', 'Misture vinagre, caldo e mostarda', 'Despeje sobre batatas quentes', 'Adicione bacon e cebolinha'],
        prepTime: '15 minutos',
        cookTime: '30 minutos',
        servings: 6,
        difficulty: 'Fácil',
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=600&fit=crop',
        category: 'Salada'
      }
    ]
  },
  {
    id: 'eua',
    name: 'Estados Unidos',
    flag: '🇺🇸',
    description: 'Culinária diversificada com influências de todo o mundo.',
    recipes: [
      {
        id: 'hamburger',
        name: 'Hambúrguer Clássico',
        description: 'Hambúrguer suculento com queijo, alface, tomate, cebola e molhos especiais.',
        ingredients: ['500g carne moída', 'Pão de hambúrguer', 'Queijo cheddar', 'Alface', 'Tomate', 'Cebola', 'Picles', 'Ketchup', 'Mostarda', 'Maionese'],
        instructions: ['Faça hambúrgueres de 150g', 'Tempere com sal e pimenta', 'Grelhe até o ponto desejado', 'Derreta queijo por cima', 'Torre o pão', 'Monte com todos os ingredientes'],
        prepTime: '15 minutos',
        cookTime: '10 minutos',
        servings: 4,
        difficulty: 'Fácil',
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&h=600&fit=crop',
        category: 'Prato Principal'
      },
      {
        id: 'bbq-ribs',
        name: 'BBQ Ribs',
        description: 'Costela de porco defumada com molho barbecue.',
        ingredients: ['2kg costela de porco', 'Dry rub (páprica, açúcar mascavo, alho, cebola, pimenta)', 'Molho barbecue', 'Madeira para defumar'],
        instructions: ['Tempere costela com dry rub', 'Deixe descansar por 4 horas', 'Defume a 110°C por 5 horas', 'Pincele com molho barbecue', 'Finalize em fogo alto', 'Sirva com mais molho'],
        prepTime: '4 horas',
        cookTime: '6 horas',
        servings: 6,
        difficulty: 'Difícil',
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&h=600&fit=crop',
        category: 'Prato Principal'
      },
      {
        id: 'mac-and-cheese',
        name: 'Mac and Cheese',
        description: 'Macarrão com molho cremoso de queijo cheddar gratinado.',
        ingredients: ['500g macarrão', '400g queijo cheddar', '50g manteiga', '50g farinha', '500ml leite', 'Noz-moscada', 'Sal', 'Pimenta', 'Farinha de rosca'],
        instructions: ['Cozinhe macarrão al dente', 'Prepare molho bechamel', 'Adicione queijo ralado', 'Misture com macarrão', 'Coloque em refratário', 'Cubra com queijo e farinha de rosca', 'Gratine no forno'],
        prepTime: '15 minutos',
        cookTime: '30 minutos',
        servings: 6,
        difficulty: 'Fácil',
        image: 'https://images.unsplash.com/photo-1476124369491-c4f6e3e8b5c5?w=800&h=600&fit=crop',
        category: 'Prato Principal'
      },
      {
        id: 'apple-pie',
        name: 'Apple Pie',
        description: 'Torta de maçã americana com massa amanteigada e canela.',
        ingredients: ['Massa: farinha, manteiga, açúcar, água', 'Recheio: 8 maçãs, açúcar, canela, noz-moscada, limão, amido'],
        instructions: ['Prepare massa e deixe descansar', 'Descasque e fatie maçãs', 'Misture com açúcar, canela e amido', 'Forre forma com massa', 'Adicione recheio', 'Cubra com tiras de massa', 'Asse a 180°C por 50 minutos'],
        prepTime: '40 minutos',
        cookTime: '50 minutos',
        servings: 8,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1535920527002-b35e96722eb9?w=800&h=600&fit=crop',
        category: 'Sobremesa'
      },
      {
        id: 'buffalo-wings',
        name: 'Buffalo Wings',
        description: 'Asinhas de frango fritas com molho picante de manteiga e pimenta.',
        ingredients: ['1kg asinhas de frango', 'Molho de pimenta', 'Manteiga', 'Alho', 'Vinagre', 'Sal', 'Molho ranch', 'Aipo'],
        instructions: ['Tempere e frite as asinhas', 'Derreta manteiga com molho de pimenta', 'Misture asinhas com molho', 'Sirva com molho ranch e aipo'],
        prepTime: '15 minutos',
        cookTime: '25 minutos',
        servings: 4,
        difficulty: 'Fácil',
        image: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=800&h=600&fit=crop',
        category: 'Entrada'
      }
    ]
  },
  {
    id: 'australia',
    name: 'Austrália',
    flag: '🇦🇺',
    description: 'Culinária multicultural com influências britânicas, asiáticas e mediterrâneas.',
    recipes: [
      {
        id: 'meat-pie',
        name: 'Meat Pie',
        description: 'Torta individual de carne moída com molho rico, coberta com massa folhada.',
        ingredients: ['500g carne moída', 'Cebola', 'Cenoura', 'Molho inglês', 'Ketchup', 'Caldo de carne', 'Massa folhada', 'Ovo'],
        instructions: ['Refogue carne com cebola e cenoura', 'Adicione molhos e caldo', 'Cozinhe até engrossar', 'Coloque em forminhas', 'Cubra com massa folhada', 'Pincele com ovo', 'Asse a 200°C por 25 minutos'],
        prepTime: '30 minutos',
        cookTime: '40 minutos',
        servings: 6,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&h=600&fit=crop',
        category: 'Prato Principal'
      },
      {
        id: 'pavlova',
        name: 'Pavlova',
        description: 'Merengue crocante por fora e macio por dentro, coberto com chantilly e frutas.',
        ingredients: ['4 claras', '250g açúcar', 'Vinagre', 'Amido de milho', 'Chantilly', 'Frutas frescas (morango, kiwi, maracujá)'],
        instructions: ['Bata claras em neve', 'Adicione açúcar aos poucos', 'Adicione vinagre e amido', 'Modele disco em assadeira', 'Asse a 120°C por 1h30', 'Deixe esfriar no forno', 'Cubra com chantilly e frutas'],
        prepTime: '20 minutos',
        cookTime: '1h30',
        servings: 8,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800&h=600&fit=crop',
        category: 'Sobremesa'
      },
      {
        id: 'lamington',
        name: 'Lamington',
        description: 'Cubos de bolo cobertos com chocolate e coco ralado.',
        ingredients: ['Bolo de baunilha', 'Chocolate', 'Manteiga', 'Leite', 'Açúcar de confeiteiro', 'Coco ralado'],
        instructions: ['Corte bolo em cubos', 'Prepare cobertura de chocolate', 'Mergulhe cubos no chocolate', 'Passe no coco ralado', 'Deixe secar'],
        prepTime: '30 minutos',
        cookTime: '30 minutos',
        servings: 16,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&h=600&fit=crop',
        category: 'Sobremesa'
      },
      {
        id: 'barramundi',
        name: 'Barramundi Grelhado',
        description: 'Peixe australiano grelhado com limão e ervas.',
        ingredients: ['4 filés de barramundi', 'Limão', 'Alho', 'Tomilho', 'Azeite', 'Sal', 'Pimenta'],
        instructions: ['Tempere o peixe com limão, alho e ervas', 'Deixe marinar por 30 minutos', 'Grelhe por 4 minutos de cada lado', 'Sirva com legumes grelhados'],
        prepTime: '35 minutos',
        cookTime: '10 minutos',
        servings: 4,
        difficulty: 'Fácil',
        image: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?w=800&h=600&fit=crop',
        category: 'Prato Principal'
      },
      {
        id: 'vegemite-toast',
        name: 'Vegemite on Toast',
        description: 'Torrada com manteiga e vegemite, café da manhã australiano clássico.',
        ingredients: ['Pão', 'Manteiga', 'Vegemite'],
        instructions: ['Torrar o pão', 'Passar manteiga generosamente', 'Passar uma fina camada de vegemite', 'Servir imediatamente'],
        prepTime: '5 minutos',
        cookTime: '2 minutos',
        servings: 2,
        difficulty: 'Fácil',
        image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&h=600&fit=crop',
        category: 'Café da Manhã'
      }
    ]
  },
  {
    id: 'russia',
    name: 'Rússia',
    flag: '🇷🇺',
    description: 'Culinária robusta adaptada ao clima frio, com sopas, carnes e fermentados.',
    recipes: [
      {
        id: 'borscht',
        name: 'Borscht',
        description: 'Sopa de beterraba com carne, repolho e creme azedo.',
        ingredients: ['500g carne bovina', '3 beterrabas', 'Repolho', 'Batata', 'Cenoura', 'Cebola', 'Tomate', 'Alho', 'Vinagre', 'Creme azedo', 'Endro'],
        instructions: ['Cozinhe a carne', 'Adicione beterraba ralada', 'Adicione legumes picados', 'Adicione repolho', 'Tempere com vinagre e alho', 'Sirva com creme azedo e endro'],
        prepTime: '30 minutos',
        cookTime: '2 horas',
        servings: 8,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1548943487-a2e4e43b4853?w=800&h=600&fit=crop',
        category: 'Sopa'
      },
      {
        id: 'beef-stroganoff',
        name: 'Beef Stroganoff',
        description: 'Tiras de carne em molho cremoso de cogumelos e creme azedo.',
        ingredients: ['600g filé mignon', 'Cogumelos', 'Cebola', 'Alho', 'Mostarda', 'Creme azedo', 'Vinho branco', 'Manteiga', 'Farinha'],
        instructions: ['Corte carne em tiras', 'Doure a carne', 'Refogue cogumelos e cebola', 'Adicione vinho e mostarda', 'Adicione creme azedo', 'Engrosse com farinha', 'Sirva com arroz ou batata'],
        prepTime: '20 minutos',
        cookTime: '30 minutos',
        servings: 4,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&h=600&fit=crop',
        category: 'Prato Principal'
      },
      {
        id: 'pelmeni',
        name: 'Pelmeni',
        description: 'Pequenos pastéis recheados com carne, servidos com creme azedo.',
        ingredients: ['Massa: farinha, ovo, água', 'Recheio: carne moída, cebola, alho, sal, pimenta', 'Creme azedo', 'Endro'],
        instructions: ['Prepare massa fina', 'Misture carne com cebola e temperos', 'Corte círculos de massa', 'Recheie e feche', 'Cozinhe em água fervente', 'Sirva com creme azedo e endro'],
        prepTime: '1 hora',
        cookTime: '15 minutos',
        servings: 6,
        difficulty: 'Difícil',
        image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&h=600&fit=crop',
        category: 'Prato Principal'
      },
      {
        id: 'blini',
        name: 'Blini',
        description: 'Panquecas russas servidas com caviar, salmão defumado ou creme azedo.',
        ingredients: ['Farinha', 'Leite', 'Ovos', 'Fermento', 'Açúcar', 'Sal', 'Manteiga', 'Caviar ou salmão', 'Creme azedo'],
        instructions: ['Misture ingredientes da massa', 'Deixe descansar por 1 hora', 'Frite pequenas panquecas', 'Sirva com caviar, salmão e creme azedo'],
        prepTime: '1h15',
        cookTime: '20 minutos',
        servings: 20,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&h=600&fit=crop',
        category: 'Entrada'
      },
      {
        id: 'medovik',
        name: 'Medovik',
        description: 'Bolo de mel russo com camadas finas e creme de leite condensado.',
        ingredients: ['Mel', 'Açúcar', 'Ovos', 'Farinha', 'Bicarbonato', 'Manteiga', 'Creme de leite', 'Leite condensado'],
        instructions: ['Prepare massa com mel aquecido', 'Asse camadas finas', 'Prepare creme com leite condensado', 'Monte camadas alternadas', 'Deixe descansar por 12 horas', 'Decore com migalhas'],
        prepTime: '1 hora',
        cookTime: '40 minutos',
        servings: 12,
        difficulty: 'Difícil',
        image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&h=600&fit=crop',
        category: 'Sobremesa'
      }
    ]
  },
  {
    id: 'egito',
    name: 'Egito',
    flag: '🇪🇬',
    description: 'Culinária milenar com leguminosas, especiarias e pães tradicionais.',
    recipes: [
      {
        id: 'koshari',
        name: 'Koshari',
        description: 'Prato nacional com arroz, lentilha, macarrão, grão-de-bico e molho de tomate picante.',
        ingredients: ['Arroz', 'Lentilha', 'Macarrão', 'Grão-de-bico', 'Tomate', 'Cebola frita', 'Alho', 'Cominho', 'Vinagre', 'Pimenta'],
        instructions: ['Cozinhe arroz, lentilha, macarrão e grão-de-bico separadamente', 'Prepare molho de tomate com especiarias', 'Frite cebola até crocante', 'Monte camadas: arroz, lentilha, macarrão, grão-de-bico', 'Cubra com molho e cebola frita'],
        prepTime: '30 minutos',
        cookTime: '45 minutos',
        servings: 6,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&h=600&fit=crop',
        category: 'Prato Principal'
      },
      {
        id: 'ful-medames',
        name: 'Ful Medames',
        description: 'Fava cozida lentamente com alho, limão e cominho, servida com pão.',
        ingredients: ['500g fava', 'Alho', 'Limão', 'Cominho', 'Azeite', 'Sal', 'Tomate', 'Cebola', 'Salsa', 'Pão pita'],
        instructions: ['Cozinhe fava até macia', 'Amasse parcialmente', 'Adicione alho, limão e cominho', 'Regue com azeite', 'Sirva com tomate, cebola e pão'],
        prepTime: '12 horas (molho)',
        cookTime: '2 horas',
        servings: 6,
        difficulty: 'Fácil',
        image: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=800&h=600&fit=crop',
        category: 'Prato Principal'
      },
      {
        id: 'mahshi',
        name: 'Mahshi',
        description: 'Legumes recheados com arroz, carne e especiarias.',
        ingredients: ['Abobrinha', 'Berinjela', 'Pimentão', 'Folhas de uva', 'Arroz', 'Carne moída', 'Tomate', 'Cebola', 'Especiarias'],
        instructions: ['Esvazie os legumes', 'Prepare recheio com arroz, carne e especiarias', 'Recheie os legumes', 'Disponha em panela', 'Cubra com molho de tomate', 'Cozinhe por 1 hora'],
        prepTime: '1 hora',
        cookTime: '1 hora',
        servings: 8,
        difficulty: 'Difícil',
        image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&h=600&fit=crop',
        category: 'Prato Principal'
      },
      {
        id: 'basbousa',
        name: 'Basbousa',
        description: 'Bolo de sêmolina embebido em calda de açúcar aromática.',
        ingredients: ['Sêmolina', 'Açúcar', 'Iogurte', 'Manteiga', 'Coco ralado', 'Fermento', 'Amêndoas', 'Calda: açúcar, água, limão, água de rosas'],
        instructions: ['Misture sêmolina, açúcar, iogurte, manteiga e coco', 'Adicione fermento', 'Despeje em forma', 'Corte em losangos', 'Coloque amêndoa em cada pedaço', 'Asse até dourar', 'Despeje calda quente'],
        prepTime: '20 minutos',
        cookTime: '35 minutos',
        servings: 16,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&h=600&fit=crop',
        category: 'Sobremesa'
      },
      {
        id: 'ta-meya',
        name: "Ta'meya (Falafel Egípcio)",
        description: 'Bolinho frito de fava com ervas, diferente do falafel de grão-de-bico.',
        ingredients: ['500g fava', 'Cebola', 'Alho', 'Coentro', 'Salsa', 'Cominho', 'Coentro em pó', 'Pimenta', 'Bicarbonato', 'Gergelim'],
        instructions: ['Deixe fava de molho por 12 horas', 'Bata com ervas e especiarias', 'Adicione bicarbonato', 'Faça bolinhas', 'Passe em gergelim', 'Frite até dourar', 'Sirva com tahine'],
        prepTime: '12 horas',
        cookTime: '20 minutos',
        servings: 20,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1612871689761-3a1d432e0d1e?w=800&h=600&fit=crop',
        category: 'Lanche'
      }
    ]
  },
  {
    id: 'canada',
    name: 'Canadá',
    flag: '🇨🇦',
    description: 'Culinária diversificada com influências britânicas, francesas e indígenas.',
    recipes: [
      {
        id: 'poutine',
        name: 'Poutine',
        description: 'Batatas fritas cobertas com queijo coalho e molho gravy quente.',
        ingredients: ['Batatas', 'Queijo coalho', 'Caldo de carne', 'Farinha', 'Manteiga', 'Sal', 'Pimenta'],
        instructions: ['Frite batatas até crocantes', 'Prepare gravy com caldo, farinha e manteiga', 'Coloque batatas em tigela', 'Adicione queijo coalho', 'Despeje gravy quente', 'Sirva imediatamente'],
        prepTime: '15 minutos',
        cookTime: '25 minutos',
        servings: 4,
        difficulty: 'Fácil',
        image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&h=600&fit=crop',
        category: 'Prato Principal'
      },
      {
        id: 'tourtiere',
        name: 'Tourtière',
        description: 'Torta quebequense de carne moída com especiarias.',
        ingredients: ['Massa: farinha, manteiga, água', 'Recheio: carne moída, cebola, alho, batata, canela, cravo, sal, pimenta'],
        instructions: ['Prepare massa e deixe descansar', 'Refogue carne com cebola e especiarias', 'Adicione batata cozida e amassada', 'Forre forma com massa', 'Adicione recheio', 'Cubra com massa', 'Asse a 190°C por 45 minutos'],
        prepTime: '40 minutos',
        cookTime: '45 minutos',
        servings: 8,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&h=600&fit=crop',
        category: 'Prato Principal'
      },
      {
        id: 'butter-tarts',
        name: 'Butter Tarts',
        description: 'Tortinhas doces com recheio caramelizado de manteiga, açúcar e ovos.',
        ingredients: ['Massa quebrada', 'Manteiga', 'Açúcar mascavo', 'Ovos', 'Xarope de bordo', 'Vinagre', 'Baunilha', 'Passas (opcional)'],
        instructions: ['Forre forminhas com massa', 'Misture manteiga derretida, açúcar, ovos, xarope', 'Adicione vinagre e baunilha', 'Adicione passas se desejar', 'Despeje nas forminhas', 'Asse a 180°C por 20 minutos'],
        prepTime: '30 minutos',
        cookTime: '20 minutos',
        servings: 12,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&h=600&fit=crop',
        category: 'Sobremesa'
      },
      {
        id: 'bannock',
        name: 'Bannock',
        description: 'Pão indígena canadense frito ou assado.',
        ingredients: ['Farinha', 'Fermento', 'Sal', 'Açúcar', 'Manteiga', 'Leite'],
        instructions: ['Misture ingredientes secos', 'Adicione manteiga e leite', 'Sove levemente', 'Modele discos', 'Frite em óleo ou asse no forno', 'Sirva quente com manteiga e mel'],
        prepTime: '15 minutos',
        cookTime: '20 minutos',
        servings: 8,
        difficulty: 'Fácil',
        image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&h=600&fit=crop',
        category: 'Pão'
      },
      {
        id: 'nanaimo-bars',
        name: 'Nanaimo Bars',
        description: 'Sobremesa em camadas: base de biscoito, creme de manteiga e cobertura de chocolate.',
        ingredients: ['Base: biscoito triturado, coco, cacau, manteiga', 'Meio: manteiga, creme de leite, açúcar de confeiteiro, baunilha', 'Topo: chocolate'],
        instructions: ['Misture ingredientes da base e comprima em forma', 'Prepare creme e espalhe sobre base', 'Leve à geladeira', 'Derreta chocolate e cubra', 'Deixe firmar', 'Corte em quadrados'],
        prepTime: '30 minutos',
        cookTime: '0 minutos',
        servings: 16,
        difficulty: 'Fácil',
        image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&h=600&fit=crop',
        category: 'Sobremesa'
      }
    ]
  },
  {
    id: 'suecia',
    name: 'Suécia',
    flag: '🇸🇪',
    description: 'Culinária escandinava com peixes, batatas, pães e doces.',
    recipes: [
      {
        id: 'kottbullar',
        name: 'Köttbullar',
        description: 'Almôndegas suecas servidas com molho cremoso, purê de batata e geleia de lingonberry.',
        ingredients: ['500g carne moída mista', 'Cebola', 'Pão ralado', 'Leite', 'Ovo', 'Noz-moscada', 'Creme de leite', 'Caldo de carne', 'Geleia de lingonberry'],
        instructions: ['Misture carne com pão embebido em leite, ovo, cebola e especiarias', 'Faça bolinhas pequenas', 'Frite até dourar', 'Prepare molho com creme e caldo', 'Sirva com purê e geleia'],
        prepTime: '30 minutos',
        cookTime: '25 minutos',
        servings: 6,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=800&h=600&fit=crop',
        category: 'Prato Principal'
      },
      {
        id: 'gravlax',
        name: 'Gravlax',
        description: 'Salmão curado com sal, açúcar, endro e especiarias.',
        ingredients: ['1kg salmão fresco', 'Sal grosso', 'Açúcar', 'Endro fresco', 'Pimenta', 'Vodka ou aquavit'],
        instructions: ['Misture sal, açúcar, endro e pimenta', 'Cubra salmão com a mistura', 'Adicione vodka', 'Embrulhe bem', 'Deixe curar na geladeira por 48 horas', 'Vire a cada 12 horas', 'Fatie fino e sirva'],
        prepTime: '20 minutos',
        cookTime: '0 minutos',
        servings: 12,
        difficulty: 'Fácil',
        image: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?w=800&h=600&fit=crop',
        category: 'Entrada'
      },
      {
        id: 'kanelbullar',
        name: 'Kanelbullar',
        description: 'Pãezinhos doces de canela suecos.',
        ingredients: ['Farinha', 'Leite', 'Fermento', 'Açúcar', 'Manteiga', 'Cardamomo', 'Canela', 'Açúcar pérola'],
        instructions: ['Prepare massa doce com cardamomo', 'Deixe crescer', 'Abra retângulo', 'Espalhe manteiga, açúcar e canela', 'Enrole e corte', 'Deixe crescer novamente', 'Pincele com ovo', 'Polvilhe açúcar pérola', 'Asse a 200°C'],
        prepTime: '2h30',
        cookTime: '15 minutos',
        servings: 20,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&h=600&fit=crop',
        category: 'Pão'
      },
      {
        id: 'princess-cake',
        name: 'Prinsesstårta',
        description: 'Bolo de princesa com camadas de pão de ló, creme e cobertura de marzipan verde.',
        ingredients: ['Pão de ló', 'Creme de baunilha', 'Geleia de framboesa', 'Chantilly', 'Marzipan verde', 'Rosa de marzipan'],
        instructions: ['Corte pão de ló em 3 camadas', 'Recheie com geleia e creme', 'Cubra com chantilly em formato de domo', 'Cubra com marzipan verde', 'Decore com rosa de marzipan'],
        prepTime: '1 hora',
        cookTime: '30 minutos',
        servings: 12,
        difficulty: 'Difícil',
        image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&h=600&fit=crop',
        category: 'Sobremesa'
      },
      {
        id: 'janssons-frestelse',
        name: 'Janssons Frestelse',
        description: 'Gratinado de batata com anchovas e creme.',
        ingredients: ['1kg batata', 'Anchovas', 'Cebola', 'Creme de leite', 'Manteiga', 'Farinha de rosca'],
        instructions: ['Corte batatas em palitos', 'Refogue cebola', 'Monte camadas: batata, cebola, anchovas', 'Despeje creme', 'Polvilhe farinha de rosca', 'Asse a 200°C por 1 hora'],
        prepTime: '20 minutos',
        cookTime: '1 hora',
        servings: 6,
        difficulty: 'Fácil',
        image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&h=600&fit=crop',
        category: 'Prato Principal'
      }
    ]
  },
  {
    id: 'etiopia',
    name: 'Etiópia',
    flag: '🇪🇹',
    description: 'Culinária única com injera, berbere e pratos compartilhados.',
    recipes: [
      {
        id: 'doro-wat',
        name: 'Doro Wat',
        description: 'Ensopado picante de frango com ovos cozidos e berbere.',
        ingredients: ['1 frango', 'Cebola', 'Alho', 'Gengibre', 'Berbere', 'Manteiga clarificada', 'Ovos', 'Vinho tinto', 'Tomate'],
        instructions: ['Refogue cebola até caramelizar', 'Adicione alho, gengibre e berbere', 'Adicione frango', 'Adicione tomate e vinho', 'Cozinhe por 1 hora', 'Adicione ovos cozidos', 'Sirva com injera'],
        prepTime: '30 minutos',
        cookTime: '1h30',
        servings: 6,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=800&h=600&fit=crop',
        category: 'Prato Principal'
      },
      {
        id: 'injera',
        name: 'Injera',
        description: 'Pão esponjoso e azedo feito de teff fermentado.',
        ingredients: ['Farinha de teff', 'Água', 'Sal'],
        instructions: ['Misture teff com água', 'Deixe fermentar por 3 dias', 'Adicione sal', 'Despeje em frigideira quente', 'Cozinhe apenas um lado até formar bolhas', 'Deixe esfriar'],
        prepTime: '3 dias',
        cookTime: '5 minutos por unidade',
        servings: 10,
        difficulty: 'Difícil',
        image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&h=600&fit=crop',
        category: 'Pão'
      },
      {
        id: 'kitfo',
        name: 'Kitfo',
        description: 'Carne bovina crua ou mal passada temperada com mitmita e manteiga clarificada.',
        ingredients: ['500g carne bovina magra', 'Manteiga clarificada', 'Mitmita (pimenta etíope)', 'Cardamomo', 'Queijo cottage etíope'],
        instructions: ['Pique a carne finamente', 'Misture com manteiga clarificada morna', 'Tempere com mitmita e cardamomo', 'Sirva crua ou levemente aquecida', 'Acompanhe com queijo e injera'],
        prepTime: '20 minutos',
        cookTime: '0 minutos',
        servings: 4,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&h=600&fit=crop',
        category: 'Prato Principal'
      },
      {
        id: 'shiro',
        name: 'Shiro',
        description: 'Ensopado cremoso de grão-de-bico ou fava em pó.',
        ingredients: ['Shiro (farinha de grão-de-bico)', 'Cebola', 'Alho', 'Gengibre', 'Tomate', 'Berbere', 'Óleo', 'Água'],
        instructions: ['Refogue cebola, alho e gengibre', 'Adicione tomate e berbere', 'Adicione água', 'Adicione shiro aos poucos mexendo', 'Cozinhe até engrossar', 'Sirva com injera'],
        prepTime: '10 minutos',
        cookTime: '25 minutos',
        servings: 6,
        difficulty: 'Fácil',
        image: 'https://images.unsplash.com/photo-1604152135912-04a022e23696?w=800&h=600&fit=crop',
        category: 'Prato Principal'
      },
      {
        id: 'tibs',
        name: 'Tibs',
        description: 'Carne salteada com legumes e especiarias.',
        ingredients: ['600g carne (bovina ou cordeiro)', 'Cebola', 'Pimentão', 'Tomate', 'Alho', 'Gengibre', 'Berbere', 'Manteiga clarificada'],
        instructions: ['Corte carne em cubos', 'Salteie em manteiga bem quente', 'Adicione cebola e pimentão', 'Adicione alho, gengibre e berbere', 'Adicione tomate', 'Sirva com injera'],
        prepTime: '20 minutos',
        cookTime: '20 minutos',
        servings: 4,
        difficulty: 'Fácil',
        image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&h=600&fit=crop',
        category: 'Prato Principal'
      }
    ]
  },
  {
    id: 'noruega',
    name: 'Noruega',
    flag: '🇳🇴',
    description: 'Culinária escandinava com foco em peixes, frutos do mar e conservas.',
    recipes: [
      {
        id: 'rakfisk',
        name: 'Rakfisk',
        description: 'Truta fermentada servida com cebola, creme azedo e flatbrød.',
        ingredients: ['Truta fresca', 'Sal', 'Açúcar', 'Cebola roxa', 'Creme azedo', 'Flatbrød', 'Endro'],
        instructions: ['Limpe a truta', 'Cubra com sal e açúcar', 'Fermente por 2-3 meses em local frio', 'Fatie finamente', 'Sirva com cebola, creme azedo e flatbrød'],
        prepTime: '30 minutos',
        cookTime: '0 minutos',
        servings: 8,
        difficulty: 'Difícil',
        image: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?w=800&h=600&fit=crop',
        category: 'Entrada'
      },
      {
        id: 'farikal',
        name: 'Fårikål',
        description: 'Ensopado tradicional de cordeiro com repolho e pimenta preta.',
        ingredients: ['1kg cordeiro', '1 repolho', 'Farinha', 'Pimenta preta em grão', 'Sal', 'Água'],
        instructions: ['Corte cordeiro em pedaços', 'Corte repolho em fatias grossas', 'Monte camadas em panela: cordeiro, repolho, pimenta', 'Adicione água', 'Cozinhe em fogo baixo por 2 horas', 'Sirva com batatas'],
        prepTime: '20 minutos',
        cookTime: '2 horas',
        servings: 6,
        difficulty: 'Fácil',
        image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=800&h=600&fit=crop',
        category: 'Prato Principal'
      },
      {
        id: 'brunost',
        name: 'Brunost',
        description: 'Queijo marrom norueguês de soro de leite caramelizado.',
        ingredients: ['Soro de leite', 'Creme de leite', 'Leite'],
        instructions: ['Ferva soro, creme e leite', 'Cozinhe mexendo por 3-4 horas', 'Continue até caramelizar e engrossar', 'Despeje em forma', 'Deixe esfriar e firmar', 'Sirva em fatias finas com pão'],
        prepTime: '15 minutos',
        cookTime: '4 horas',
        servings: 20,
        difficulty: 'Difícil',
        image: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=800&h=600&fit=crop',
        category: 'Queijo'
      },
      {
        id: 'lefse',
        name: 'Lefse',
        description: 'Panqueca macia de batata, servida com manteiga e açúcar.',
        ingredients: ['Batata', 'Farinha', 'Manteiga', 'Creme de leite', 'Sal', 'Açúcar'],
        instructions: ['Cozinhe e amasse batatas', 'Misture com farinha, manteiga e creme', 'Abra discos finos', 'Cozinhe em frigideira quente', 'Passe manteiga e açúcar', 'Enrole e sirva'],
        prepTime: '1 hora',
        cookTime: '30 minutos',
        servings: 12,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&h=600&fit=crop',
        category: 'Pão'
      },
      {
        id: 'krumkake',
        name: 'Krumkake',
        description: 'Biscoito fino enrolado em formato de cone.',
        ingredients: ['Ovos', 'Açúcar', 'Manteiga', 'Farinha', 'Creme de leite', 'Baunilha', 'Cardamomo'],
        instructions: ['Bata ovos com açúcar', 'Adicione manteiga derretida', 'Adicione farinha, creme e especiarias', 'Asse em ferro especial', 'Enrole imediatamente em cone', 'Deixe esfriar'],
        prepTime: '20 minutos',
        cookTime: '30 minutos',
        servings: 24,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1626200419199-391ae4be7a41?w=800&h=600&fit=crop',
        category: 'Sobremesa'
      }
    ]
  },
  {
    id: 'filipinas',
    name: 'Filipinas',
    flag: '🇵🇭',
    description: 'Culinária com influências espanholas, chinesas e malaias.',
    recipes: [
      {
        id: 'adobo',
        name: 'Adobo',
        description: 'Frango ou porco marinado e cozido em vinagre, molho de soja e alho.',
        ingredients: ['1kg frango ou porco', 'Vinagre', 'Molho de soja', 'Alho', 'Louro', 'Pimenta preta', 'Açúcar'],
        instructions: ['Marine carne com vinagre, molho de soja e alho', 'Deixe por 1 hora', 'Cozinhe com o marinado', 'Adicione louro e pimenta', 'Cozinhe até carne ficar macia', 'Reduza o molho', 'Sirva com arroz'],
        prepTime: '1 hora',
        cookTime: '45 minutos',
        servings: 6,
        difficulty: 'Fácil',
        image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=800&h=600&fit=crop',
        category: 'Prato Principal'
      },
      {
        id: 'sinigang',
        name: 'Sinigang',
        description: 'Sopa azeda com carne, frutos do mar ou peixe, e legumes.',
        ingredients: ['Porco ou peixe', 'Tamarindo', 'Tomate', 'Cebola', 'Rabanete', 'Kangkong (espinafre d\'água)', 'Pimenta', 'Molho de peixe'],
        instructions: ['Ferva água com tamarindo', 'Adicione carne', 'Adicione tomate e cebola', 'Adicione rabanete', 'Tempere com molho de peixe', 'Adicione kangkong no final', 'Sirva quente'],
        prepTime: '20 minutos',
        cookTime: '40 minutos',
        servings: 6,
        difficulty: 'Fácil',
        image: 'https://images.unsplash.com/photo-1548943487-a2e4e43b4853?w=800&h=600&fit=crop',
        category: 'Sopa'
      },
      {
        id: 'lumpia',
        name: 'Lumpia',
        description: 'Rolinhos primavera filipinos fritos, recheados com legumes e carne.',
        ingredients: ['Massa para lumpia', 'Carne moída', 'Cenoura', 'Repolho', 'Cebola', 'Alho', 'Molho de soja', 'Óleo para fritar'],
        instructions: ['Refogue carne com legumes', 'Tempere com molho de soja', 'Deixe esfriar', 'Recheie as massas', 'Enrole bem apertado', 'Frite até dourar', 'Sirva com molho agridoce'],
        prepTime: '40 minutos',
        cookTime: '20 minutos',
        servings: 20,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=800&h=600&fit=crop',
        category: 'Entrada'
      },
      {
        id: 'lechon',
        name: 'Lechon',
        description: 'Leitão assado inteiro com pele crocante.',
        ingredients: ['1 leitão', 'Capim-limão', 'Cebola', 'Alho', 'Louro', 'Pimenta', 'Sal'],
        instructions: ['Tempere leitão por dentro e por fora', 'Recheie com ervas aromáticas', 'Asse em espeto girando por 4-5 horas', 'Pincele com óleo para pele crocante', 'Sirva com molho de fígado'],
        prepTime: '2 horas',
        cookTime: '5 horas',
        servings: 20,
        difficulty: 'Difícil',
        image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&h=600&fit=crop',
        category: 'Prato Principal'
      },
      {
        id: 'halo-halo',
        name: 'Halo-Halo',
        description: 'Sobremesa gelada com gelo raspado, leite condensado, frutas e sorvete.',
        ingredients: ['Gelo raspado', 'Leite condensado', 'Feijão doce', 'Nata de coco', 'Geleia', 'Banana', 'Jaca', 'Ube (inhame roxo)', 'Sorvete', 'Leche flan'],
        instructions: ['Coloque ingredientes em camadas em copo alto', 'Cubra com gelo raspado', 'Despeje leite condensado', 'Adicione sorvete e leche flan', 'Misture tudo antes de comer'],
        prepTime: '20 minutos',
        cookTime: '0 minutos',
        servings: 4,
        difficulty: 'Fácil',
        image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&h=600&fit=crop',
        category: 'Sobremesa'
      }
    ]
  },
  {
    id: 'belgica',
    name: 'Bélgica',
    flag: '🇧🇪',
    description: 'Culinária conhecida por batatas fritas, waffles, chocolate e cerveja.',
    recipes: [
      {
        id: 'moules-frites',
        name: 'Moules-Frites',
        description: 'Mexilhões cozidos em vinho branco com ervas, servidos com batatas fritas.',
        ingredients: ['2kg mexilhões', 'Vinho branco', 'Cebola', 'Alho', 'Aipo', 'Salsa', 'Manteiga', 'Batatas', 'Óleo para fritar'],
        instructions: ['Limpe os mexilhões', 'Refogue cebola, alho e aipo', 'Adicione vinho e mexilhões', 'Cozinhe até abrirem', 'Finalize com salsa', 'Frite batatas em palito', 'Sirva junto'],
        prepTime: '30 minutos',
        cookTime: '20 minutos',
        servings: 4,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?w=800&h=600&fit=crop',
        category: 'Prato Principal'
      },
      {
        id: 'carbonnade',
        name: 'Carbonnade Flamande',
        description: 'Ensopado de carne com cerveja escura, cebola e pão de especiarias.',
        ingredients: ['1kg carne bovina', 'Cerveja escura', 'Cebola', 'Pão de especiarias', 'Mostarda', 'Açúcar mascavo', 'Tomilho', 'Louro'],
        instructions: ['Doure a carne', 'Caramelize cebolas', 'Adicione cerveja', 'Adicione pão de especiarias, mostarda e açúcar', 'Adicione ervas', 'Cozinhe em fogo baixo por 2 horas', 'Sirva com batatas fritas'],
        prepTime: '30 minutos',
        cookTime: '2h30',
        servings: 6,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=800&h=600&fit=crop',
        category: 'Prato Principal'
      },
      {
        id: 'waffles-belgas',
        name: 'Waffles Belgas',
        description: 'Waffles grossos e crocantes servidos com chantilly e frutas.',
        ingredients: ['Farinha', 'Leite', 'Ovos', 'Manteiga', 'Açúcar', 'Fermento', 'Baunilha', 'Chantilly', 'Frutas', 'Chocolate'],
        instructions: ['Misture ingredientes da massa', 'Deixe descansar por 30 minutos', 'Asse em máquina de waffle', 'Sirva com chantilly, frutas e chocolate'],
        prepTime: '40 minutos',
        cookTime: '20 minutos',
        servings: 8,
        difficulty: 'Fácil',
        image: 'https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=800&h=600&fit=crop',
        category: 'Sobremesa'
      },
      {
        id: 'waterzooi',
        name: 'Waterzooi',
        description: 'Ensopado cremoso de frango ou peixe com legumes.',
        ingredients: ['Frango ou peixe', 'Alho-poró', 'Cenoura', 'Aipo', 'Batata', 'Creme de leite', 'Gemas', 'Salsa', 'Louro'],
        instructions: ['Cozinhe frango com legumes e ervas', 'Retire frango e desosse', 'Coe o caldo', 'Adicione creme e gemas', 'Retorne frango', 'Sirva com pão'],
        prepTime: '30 minutos',
        cookTime: '1 hora',
        servings: 6,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1548943487-a2e4e43b4853?w=800&h=600&fit=crop',
        category: 'Sopa'
      },
      {
        id: 'speculoos',
        name: 'Speculoos',
        description: 'Biscoitos de especiarias belgas crocantes.',
        ingredients: ['Farinha', 'Açúcar mascavo', 'Manteiga', 'Canela', 'Noz-moscada', 'Cravo', 'Gengibre', 'Bicarbonato'],
        instructions: ['Misture manteiga com açúcar', 'Adicione especiarias', 'Adicione farinha e bicarbonato', 'Deixe descansar por 2 horas', 'Abra massa fina', 'Corte biscoitos', 'Asse a 180°C por 12 minutos'],
        prepTime: '2h30',
        cookTime: '12 minutos',
        servings: 40,
        difficulty: 'Fácil',
        image: 'https://images.unsplash.com/photo-1626200419199-391ae4be7a41?w=800&h=600&fit=crop',
        category: 'Sobremesa'
      }
    ]
  },
  {
    id: 'irlanda',
    name: 'Irlanda',
    flag: '🇮🇪',
    description: 'Culinária reconfortante com batatas, cordeiro e ensopados.',
    recipes: [
      {
        id: 'irish-stew',
        name: 'Irish Stew',
        description: 'Ensopado tradicional de cordeiro com batata, cebola e cenoura.',
        ingredients: ['1kg cordeiro', 'Batata', 'Cebola', 'Cenoura', 'Tomilho', 'Salsa', 'Caldo de carne', 'Sal', 'Pimenta'],
        instructions: ['Doure o cordeiro', 'Adicione cebola', 'Adicione batata e cenoura', 'Adicione caldo e ervas', 'Cozinhe em fogo baixo por 2 horas', 'Sirva com pão de soda'],
        prepTime: '20 minutos',
        cookTime: '2 horas',
        servings: 6,
        difficulty: 'Fácil',
        image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=800&h=600&fit=crop',
        category: 'Prato Principal'
      },
      {
        id: 'colcannon',
        name: 'Colcannon',
        description: 'Purê de batata com couve e cebola.',
        ingredients: ['1kg batata', 'Couve', 'Cebola', 'Leite', 'Manteiga', 'Sal', 'Pimenta'],
        instructions: ['Cozinhe batatas', 'Refogue couve com cebola', 'Amasse batatas com leite e manteiga', 'Misture com couve', 'Tempere', 'Sirva com manteiga derretida no centro'],
        prepTime: '15 minutos',
        cookTime: '30 minutos',
        servings: 6,
        difficulty: 'Fácil',
        image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&h=600&fit=crop',
        category: 'Acompanhamento'
      },
      {
        id: 'soda-bread',
        name: 'Irish Soda Bread',
        description: 'Pão rápido feito com bicarbonato de sódio em vez de fermento.',
        ingredients: ['Farinha integral', 'Farinha branca', 'Bicarbonato', 'Sal', 'Buttermilk'],
        instructions: ['Misture ingredientes secos', 'Adicione buttermilk', 'Sove levemente', 'Modele bola', 'Faça corte em cruz', 'Asse a 200°C por 40 minutos'],
        prepTime: '10 minutos',
        cookTime: '40 minutos',
        servings: 8,
        difficulty: 'Fácil',
        image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&h=600&fit=crop',
        category: 'Pão'
      },
      {
        id: 'boxty',
        name: 'Boxty',
        description: 'Panqueca de batata irlandesa.',
        ingredients: ['Batata crua ralada', 'Purê de batata', 'Farinha', 'Bicarbonato', 'Buttermilk', 'Sal'],
        instructions: ['Esprema batata ralada', 'Misture com purê', 'Adicione farinha, bicarbonato e buttermilk', 'Frite em frigideira', 'Sirva com manteiga'],
        prepTime: '20 minutos',
        cookTime: '20 minutos',
        servings: 8,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&h=600&fit=crop',
        category: 'Acompanhamento'
      },
      {
        id: 'baileys-cheesecake',
        name: 'Baileys Cheesecake',
        description: 'Cheesecake cremoso com licor Baileys.',
        ingredients: ['Biscoito triturado', 'Manteiga', 'Cream cheese', 'Açúcar', 'Ovos', 'Baileys', 'Creme de leite', 'Chocolate'],
        instructions: ['Prepare base com biscoito e manteiga', 'Bata cream cheese com açúcar', 'Adicione ovos e Baileys', 'Despeje sobre base', 'Asse em banho-maria', 'Deixe esfriar', 'Decore com chocolate'],
        prepTime: '30 minutos',
        cookTime: '1 hora',
        servings: 12,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1533134242820-b4f3f2d5e3b5?w=800&h=600&fit=crop',
        category: 'Sobremesa'
      }
    ]
  },
  {
    id: 'indonesia',
    name: 'Indonésia',
    flag: '🇮🇩',
    description: 'Culinária diversificada com especiarias, coco e sambal.',
    recipes: [
      {
        id: 'nasi-goreng',
        name: 'Nasi Goreng',
        description: 'Arroz frito indonésio com kecap manis, ovo e camarão.',
        ingredients: ['Arroz cozido', 'Camarão', 'Ovo', 'Alho', 'Cebola', 'Pimenta', 'Kecap manis', 'Molho de peixe', 'Cebolinha'],
        instructions: ['Refogue alho, cebola e pimenta', 'Adicione camarão', 'Adicione arroz', 'Tempere com kecap manis e molho de peixe', 'Frite ovo separadamente', 'Sirva arroz com ovo por cima'],
        prepTime: '15 minutos',
        cookTime: '15 minutos',
        servings: 4,
        difficulty: 'Fácil',
        image: 'https://images.unsplash.com/photo-1553163147-622ab57be1c7?w=800&h=600&fit=crop',
        category: 'Prato Principal'
      },
      {
        id: 'rendang',
        name: 'Rendang',
        description: 'Curry seco de carne cozido lentamente com leite de coco e especiarias.',
        ingredients: ['1kg carne bovina', 'Leite de coco', 'Capim-limão', 'Galanga', 'Folhas de limão kaffir', 'Chiles', 'Cebola', 'Alho', 'Gengibre', 'Açafrão'],
        instructions: ['Bata especiarias em pasta', 'Refogue pasta aromática', 'Adicione carne', 'Adicione leite de coco', 'Cozinhe em fogo baixo por 3 horas', 'Continue até secar e escurecer'],
        prepTime: '30 minutos',
        cookTime: '3 horas',
        servings: 8,
        difficulty: 'Difícil',
        image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=800&h=600&fit=crop',
        category: 'Prato Principal'
      },
      {
        id: 'satay',
        name: 'Satay',
        description: 'Espetinhos de carne marinada grelhados com molho de amendoim.',
        ingredients: ['Frango ou carne', 'Açafrão', 'Capim-limão', 'Alho', 'Gengibre', 'Molho de soja', 'Amendoim', 'Leite de coco', 'Kecap manis', 'Pimenta'],
        instructions: ['Marine carne por 4 horas', 'Monte espetinhos', 'Grelhe até dourar', 'Prepare molho de amendoim', 'Sirva com molho, pepino e cebola'],
        prepTime: '4 horas',
        cookTime: '15 minutos',
        servings: 6,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=800&h=600&fit=crop',
        category: 'Prato Principal'
      },
      {
        id: 'gado-gado',
        name: 'Gado-Gado',
        description: 'Salada de legumes cozidos com molho de amendoim.',
        ingredients: ['Repolho', 'Vagem', 'Broto de feijão', 'Batata', 'Ovo', 'Tofu', 'Tempeh', 'Amendoim', 'Leite de coco', 'Kecap manis', 'Tamarindo'],
        instructions: ['Cozinhe legumes separadamente', 'Frite tofu e tempeh', 'Prepare molho de amendoim', 'Disponha legumes em prato', 'Despeje molho', 'Adicione ovo cozido'],
        prepTime: '30 minutos',
        cookTime: '30 minutos',
        servings: 4,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=600&fit=crop',
        category: 'Salada'
      },
      {
        id: 'pisang-goreng',
        name: 'Pisang Goreng',
        description: 'Banana frita empanada crocante.',
        ingredients: ['Bananas', 'Farinha', 'Açúcar', 'Sal', 'Água', 'Óleo para fritar'],
        instructions: ['Prepare massa com farinha, açúcar e água', 'Corte bananas ao meio', 'Passe na massa', 'Frite até dourar', 'Escorra', 'Sirva quente'],
        prepTime: '10 minutos',
        cookTime: '15 minutos',
        servings: 8,
        difficulty: 'Fácil',
        image: 'https://images.unsplash.com/photo-1587132117816-5a4e8f6c3e0d?w=800&h=600&fit=crop',
        category: 'Sobremesa'
      }
    ]
  },
  {
    id: 'malasia',
    name: 'Malásia',
    flag: '🇲🇾',
    description: 'Fusão de culinárias malaia, chinesa e indiana.',
    recipes: [
      {
        id: 'nasi-lemak',
        name: 'Nasi Lemak',
        description: 'Arroz cozido em leite de coco servido com sambal, amendoim, anchovas e ovo.',
        ingredients: ['Arroz', 'Leite de coco', 'Folhas de pandan', 'Sambal', 'Amendoim torrado', 'Anchovas fritas', 'Ovo', 'Pepino'],
        instructions: ['Cozinhe arroz com leite de coco e pandan', 'Prepare sambal', 'Frite anchovas', 'Frite ovo', 'Monte prato com todos os componentes'],
        prepTime: '20 minutos',
        cookTime: '30 minutos',
        servings: 4,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1553163147-622ab57be1c7?w=800&h=600&fit=crop',
        category: 'Prato Principal'
      },
      {
        id: 'laksa',
        name: 'Laksa',
        description: 'Sopa picante de macarrão com leite de coco e frutos do mar.',
        ingredients: ['Macarrão de arroz', 'Camarão', 'Tofu puffs', 'Leite de coco', 'Pasta de laksa', 'Broto de feijão', 'Hortelã', 'Limão'],
        instructions: ['Prepare caldo com pasta de laksa', 'Adicione leite de coco', 'Cozinhe camarão', 'Cozinhe macarrão', 'Monte tigela com macarrão, camarão, tofu', 'Despeje caldo', 'Finalize com brotos e ervas'],
        prepTime: '20 minutos',
        cookTime: '30 minutos',
        servings: 4,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=800&h=600&fit=crop',
        category: 'Sopa'
      },
      {
        id: 'char-kway-teow',
        name: 'Char Kway Teow',
        description: 'Macarrão largo salteado com camarão, linguiça chinesa e broto de feijão.',
        ingredients: ['Macarrão de arroz largo', 'Camarão', 'Linguiça chinesa', 'Broto de feijão', 'Cebolinha', 'Ovo', 'Molho de soja escuro', 'Molho de peixe'],
        instructions: ['Aqueça wok em fogo alto', 'Salteie linguiça e camarão', 'Adicione macarrão', 'Adicione molhos', 'Adicione ovo', 'Adicione brotos e cebolinha', 'Sirva imediatamente'],
        prepTime: '15 minutos',
        cookTime: '10 minutos',
        servings: 2,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=800&h=600&fit=crop',
        category: 'Prato Principal'
      },
      {
        id: 'roti-canai',
        name: 'Roti Canai',
        description: 'Pão achatado folhado servido com curry.',
        ingredients: ['Farinha', 'Água', 'Ghee', 'Sal', 'Curry de frango ou dhal'],
        instructions: ['Prepare massa e deixe descansar', 'Divida em porções', 'Estique bem fino', 'Dobre em camadas', 'Frite em chapa com ghee', 'Sirva com curry'],
        prepTime: '2 horas',
        cookTime: '20 minutos',
        servings: 8,
        difficulty: 'Difícil',
        image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&h=600&fit=crop',
        category: 'Pão'
      },
      {
        id: 'cendol',
        name: 'Cendol',
        description: 'Sobremesa gelada com gelo raspado, leite de coco, geleia de pandan e gula melaka.',
        ingredients: ['Gelo raspado', 'Leite de coco', 'Geleia de pandan', 'Gula melaka (açúcar de palma)', 'Feijão vermelho'],
        instructions: ['Prepare geleia de pandan em formato de fios', 'Coloque gelo raspado em tigela', 'Adicione geleia, feijão e gula melaka', 'Despeje leite de coco', 'Misture antes de comer'],
        prepTime: '30 minutos',
        cookTime: '20 minutos',
        servings: 4,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&h=600&fit=crop',
        category: 'Sobremesa'
      }
    ]
  },
  {
    id: 'singapura',
    name: 'Singapura',
    flag: '🇸🇬',
    description: 'Melting pot culinário com influências chinesas, malaias e indianas.',
    recipes: [
      {
        id: 'chilli-crab',
        name: 'Chilli Crab',
        description: 'Caranguejo em molho picante e doce de tomate.',
        ingredients: ['2 caranguejos', 'Tomate', 'Chiles', 'Alho', 'Gengibre', 'Ketchup', 'Molho de chile', 'Açúcar', 'Ovo', 'Cebolinha'],
        instructions: ['Limpe e corte caranguejos', 'Refogue alho, gengibre e chiles', 'Adicione tomate e molhos', 'Adicione caranguejos', 'Cozinhe até ficarem vermelhos', 'Adicione ovo batido', 'Finalize com cebolinha', 'Sirva com pão frito'],
        prepTime: '30 minutos',
        cookTime: '25 minutos',
        servings: 4,
        difficulty: 'Difícil',
        image: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?w=800&h=600&fit=crop',
        category: 'Prato Principal'
      },
      {
        id: 'hainanese-chicken-rice',
        name: 'Hainanese Chicken Rice',
        description: 'Frango pochê servido com arroz aromático cozido na gordura do frango.',
        ingredients: ['1 frango', 'Arroz', 'Gengibre', 'Alho', 'Cebola', 'Molho de soja', 'Óleo de gergelim', 'Molho de chile', 'Pepino'],
        instructions: ['Cozinhe frango com gengibre', 'Reserve caldo', 'Refogue arroz com gordura do frango', 'Cozinhe arroz no caldo', 'Fatie frango', 'Sirva com arroz, molhos e pepino'],
        prepTime: '20 minutos',
        cookTime: '1 hora',
        servings: 4,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=800&h=600&fit=crop',
        category: 'Prato Principal'
      },
      {
        id: 'bak-kut-teh',
        name: 'Bak Kut Teh',
        description: 'Sopa de costela de porco com ervas chinesas.',
        ingredients: ['Costela de porco', 'Alho', 'Pimenta preta', 'Anis estrelado', 'Canela', 'Cravo', 'Molho de soja', 'Molho de ostra'],
        instructions: ['Ferva costela para limpar', 'Prepare caldo com especiarias', 'Adicione costela', 'Cozinhe por 2 horas', 'Tempere com molhos', 'Sirva com arroz e you tiao'],
        prepTime: '20 minutos',
        cookTime: '2 horas',
        servings: 4,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1548943487-a2e4e43b4853?w=800&h=600&fit=crop',
        category: 'Sopa'
      },
      {
        id: 'kaya-toast',
        name: 'Kaya Toast',
        description: 'Torrada com kaya (geleia de coco e ovo) e manteiga.',
        ingredients: ['Pão de forma', 'Kaya', 'Manteiga', 'Ovos', 'Molho de soja', 'Pimenta branca'],
        instructions: ['Torre pão até crocante', 'Passe manteiga fria', 'Passe kaya', 'Sirva com ovos moles temperados'],
        prepTime: '5 minutos',
        cookTime: '10 minutos',
        servings: 2,
        difficulty: 'Fácil',
        image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&h=600&fit=crop',
        category: 'Café da Manhã'
      },
      {
        id: 'ice-kacang',
        name: 'Ice Kacang',
        description: 'Sobremesa gelada com gelo raspado, feijão vermelho, geleia e xaropes coloridos.',
        ingredients: ['Gelo raspado', 'Feijão vermelho', 'Milho doce', 'Geleia', 'Attap chee', 'Xaropes coloridos', 'Leite condensado', 'Leite evaporado'],
        instructions: ['Coloque ingredientes em tigela', 'Cubra com gelo raspado em formato de montanha', 'Despeje xaropes coloridos', 'Adicione leite condensado e evaporado', 'Misture tudo antes de comer'],
        prepTime: '15 minutos',
        cookTime: '0 minutos',
        servings: 2,
        difficulty: 'Fácil',
        image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&h=600&fit=crop',
        category: 'Sobremesa'
      }
    ]
  },
  {
    id: 'jamaica',
    name: 'Jamaica',
    flag: '🇯🇲',
    description: 'Culinária caribenha com jerk, frutas tropicais e especiarias.',
    recipes: [
      {
        id: 'jerk-chicken',
        name: 'Jerk Chicken',
        description: 'Frango marinado em tempero jerk picante e defumado.',
        ingredients: ['Frango', 'Pimenta scotch bonnet', 'Pimenta da Jamaica', 'Tomilho', 'Alho', 'Gengibre', 'Cebola', 'Limão', 'Açúcar mascavo', 'Molho de soja'],
        instructions: ['Bata todos os temperos em pasta', 'Marine frango por 12 horas', 'Grelhe em fogo baixo com fumaça', 'Vire frequentemente', 'Sirva com arroz e feijão'],
        prepTime: '12 horas',
        cookTime: '45 minutos',
        servings: 6,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=800&h=600&fit=crop',
        category: 'Prato Principal'
      },
      {
        id: 'ackee-saltfish',
        name: 'Ackee and Saltfish',
        description: 'Prato nacional com ackee (fruta) e bacalhau salgado.',
        ingredients: ['Ackee em lata', 'Bacalhau salgado', 'Cebola', 'Tomate', 'Pimentão', 'Pimenta scotch bonnet', 'Tomilho', 'Alho'],
        instructions: ['Dessalgue bacalhau', 'Desfie o bacalhau', 'Refogue cebola, tomate e pimentão', 'Adicione bacalhau', 'Adicione ackee delicadamente', 'Tempere com tomilho e pimenta', 'Sirva com bammy ou dumplings'],
        prepTime: '24 horas',
        cookTime: '20 minutos',
        servings: 4,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?w=800&h=600&fit=crop',
        category: 'Prato Principal'
      },
      {
        id: 'curry-goat',
        name: 'Curry Goat',
        description: 'Curry jamaicano de carne de cabra.',
        ingredients: ['1kg carne de cabra', 'Curry em pó', 'Pimenta da Jamaica', 'Tomilho', 'Cebola', 'Alho', 'Gengibre', 'Pimenta scotch bonnet', 'Batata', 'Cenoura'],
        instructions: ['Marine carne com curry e especiarias', 'Doure a carne', 'Adicione cebola, alho e gengibre', 'Adicione água', 'Cozinhe por 2 horas', 'Adicione batata e cenoura', 'Cozinhe até macio', 'Sirva com arroz'],
        prepTime: '2 horas',
        cookTime: '2h30',
        servings: 6,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=800&h=600&fit=crop',
        category: 'Prato Principal'
      },
      {
        id: 'festival',
        name: 'Festival',
        description: 'Pão frito doce jamaicano.',
        ingredients: ['Farinha', 'Fubá', 'Açúcar', 'Fermento', 'Sal', 'Baunilha', 'Leite', 'Óleo para fritar'],
        instructions: ['Misture ingredientes secos', 'Adicione leite e baunilha', 'Sove até formar massa', 'Modele em formato oval', 'Frite até dourar', 'Escorra', 'Sirva com jerk chicken'],
        prepTime: '15 minutos',
        cookTime: '20 minutos',
        servings: 12,
        difficulty: 'Fácil',
        image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&h=600&fit=crop',
        category: 'Pão'
      },
      {
        id: 'rum-cake',
        name: 'Rum Cake',
        description: 'Bolo embebido em rum jamaicano.',
        ingredients: ['Farinha', 'Açúcar', 'Manteiga', 'Ovos', 'Frutas secas', 'Rum escuro', 'Baunilha', 'Especiarias', 'Fermento'],
        instructions: ['Deixe frutas de molho em rum por 24 horas', 'Bata manteiga com açúcar', 'Adicione ovos', 'Adicione farinha e especiarias', 'Adicione frutas', 'Asse por 1 hora', 'Embeba com mais rum', 'Deixe maturar por 1 semana'],
        prepTime: '24 horas',
        cookTime: '1 hora',
        servings: 12,
        difficulty: 'Médio',
        image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&h=600&fit=crop',
        category: 'Sobremesa'
      }
    ]
  }
];
