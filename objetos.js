//Géneros
var nomeEstilos = ["Arte", "Banda Desenhada", "Informática"];
var imgEstilo = ["AR", "BD", "IN"];
var quantidade = [3, 6, 9];
//Livros
//[NOME, ESCRITOR, EDITORA, SINOPSE]
//
var livros = [
    //Arte
    {

        "atalho": "https://www.bertrand.pt/livro/cara-senhora-tosoni-jacques-gubler/24656418",
        "titulo": "Cara Senhora Tosoni",
        "autores": "Jacques Gubler",
        "editora": "Dafne Editora",
        "sinopse": "<p>Este é um livro carregado de ironia, erudição, imagens e violência. Violência da construção, imagens de arquitectura, erudição e ironia do autor que, entre 1982 e 1995, enviou regularmente postais à Senhora Tosoni, a secretária da redacção da revista milanesa Casabella, então dirigida por Vittorio Gregotti.</p><p>Os postais foram, ao longo do século XX, uma forma maior da iconografia epistolar. Produzidos industrialmente, em circulação pelo mundo, os postais transportam imagens com indícios de comportamentos sociais e práticas de construção. Jacques Gubler escalpeliza estas imagens em missivas sintéticas, por vezes herméticas, que reverberam nexos escondidos pelo hábito celebrativo que tantas vezes se confere à história.</p><p>A arquitectura, o design industrial, a história do movimento moderno, os autores e os veículos da arte, da pintura, da literatura e do conhecimento são convocados numa interrogação constante ao sentido das imagens do mundo.</p>"
    },
    {

        "atalho": "https://www.bertrand.pt/livro/imitacoes-da-vida-jose-bertolo/24592989",
        "titulo": "Imitações da Vida",
        "autores": "José Bértolo, Clara Rowland e Fernando Guerreiro",
        "editora": "Fora de Série",
        "sinopse": "«Imitações da Vida» tem o mérito de ser escrito não apenas para cinéfilos mas sobretudo para todos os grandes espectadores do cinema clássico americano. O título deste livro, Imitações da Vida, é uma evocação evidente de Imitation of Life, filme de Douglas Sirk estreado em 1959 e que representa, para o professor e crítico de cinema homenageado neste volume, o paradigma por excelência do melodrama do Cinema Clássico Americano. Todos os ensaios aqui reunidos - com diferentes registos, temas e obsessões cinematográficas - são, é certo, ensaios para Mário Jorge Torres. E no entanto, sobretudo para aqueles que tiveram o privilégio de descobrir o cinema à luz dos seus ensinamentos, ou para os que durante anos a fio o leram nas páginas dos jornais, são também ensaios escritos a partir de Mário Jorge Torres, textos devedores do seu olhar revelador, do seu entusiasmo dramático onde habita essa ideia subversiva que antes de mais o título do livro desde logo sugere: são ténues as fronteiras entre a arte e a vida - imitamos, quase sempre, as projecções do grande ecrã."
    },
    {
        "atalho": "https://www.bertrand.pt/livro/7-casas-imaginarias-antonio-santos-leite/23891800",
        "titulo": "7 Casas Imaginárias",
        "autores": "António Santos Leite",
        "editora": "Caleidoscópio",
        "sinopse": "As 7 Casas Imaginárias, Sete Caminhos de Identidade, são uma realidade que emerge a partir de uma genérica reflexão pessoal, necessariamente aberta e subjectiva, sobre o significado da Casa enquanto razão e princípio de Identidade e de Arquitectura. Concretamente, a presente publicação - também ela um Eu, um alter-ego - resultou da reinscrição, revisão e ampliação de um conjunto de textos autónomos que fomos organicamente construindo e reconstruindo no tempo, complementados por novos textos e reflexões que se foram impondo, revelando e transformando pela síntese temática desencadeada pela presente publicação. Na verdade, nesta reflexão assume-se determinada pelo reconhecimento tácito que fomos reconhecendo sobre a relação potencialmente fecunda entre a Casa, enquanto lugar arquitectónico matricial, e a expressão plena de um indivíduo potencialmente livre e subjectivo, relação essa que, muito mais do que uma mera relação quantificável e fisicamente construída, tende a revelar-se - ininterruptamente - metafórica e polissémica de sentidos; ou seja, tende a revelar-se como um âmbito fecundo que, no limite, como o pressentiam os Românticos, pode sintetizar física e simbolicamente a identidade e a própria vida. Com efeito, assumimos aqui como questão prévia da presente reflexão, a potência e o sentido do valor inscrito no conceito de Casa quando entendida matricialmente num sentido amplo e identitário, quando entendida como uma Casa identitária que se inscreve como Casa Mundo, Casa que para nós tenderá sempre a superar em muito uma estrita verdade material, dado que nela se consubstanciam, para o bem ou para todos os males, para todas as esperanças, muitas das condições fundamentais que nos determinaram identitariamente, uma vez que dela somos, e nela também somos, resultado e consequência de uma relação simbiótica única e irrepetível."
    },
    //Banda Desenhada
    {
        "atalho": "https://www.bertrand.pt/livro/o-mundo-de-garfield-1978-1983-jim-davis/19551780",
        "titulo": "O Mundo de Garfield",
        "autores": "Jim Davis",
        "editora": "Verbo",
        "sinopse": "Quem não conhece Garfield, esse gato redondinho (nunca lhe chamem gordo!) e cor de laranja que nasceu na cozinha de um restaurante italiano? Preguiçoso e guloso, adora comida italiana (e não só!), não perde uma boa sesta, odeia as segundas-feiras, é avesso a passas e a dietas, tem nojo de caçar ratos, detesta despertadores e, sobretudo, tem um constante e adiado ajuste de contas (e de peso) com a balança. O Mundo de Garfield, 1978 - 1983, para além de coligir num único volume, a preto e branco e por sequência cronológica, as tiras originalmente publicadas durante os primeiros cinco anos e meio da vida de Garfield, conta ainda artigos que permitem ao leitor acompanhar o percurso de um gato sarcástico e preguiçoso, cujo sucesso é indesmentível."
    },
    {
        "atalho": "https://www.bertrand.pt/livro/a-noite-da-grande-vinganca-bill-watterson/60249",
        "titulo": "A Noite da Grande Vingança",
        "autores": "Bill Watterson ",
        "editora": "gradiva",
        "sinopse": "As tiras Calvin & Hobbes foram publicadas pela primeira vez em Novembro de 1985 e hoje em dia estão traduzidas em mais de 40 línguas tendo vendido cerca de 30 milhões de exemplares em todo o mundo. Esta série de tiras criada, escrita e ilustrada pelo autor norte-americano Bill Watterson retrata as aventuras e a amizade de um menino cheio de personalidade e do seu tigre de peluche. Em Portugal a personagem foi popularizada pela inserção regular de uma tira no jornal Público desde o seu número 0. As personagens desta série devem os seus nomes a dois grandes pensadores europeus: João Calvino, teólogo do século XVI e Thomas Hobbes, filósofo do século XVII. Calvin é um menino de seis anos muito irrequieto, filho único, que brinca com o seu inseparável tigre de peluche, Hobbes, que 'ganha' vida sempre que os dois estão sozinhos. Juntos conseguem construir mundos diversos, graças à sua prodigiosa imaginação, levando Calvin a encarnar os inesquecíveis papéis do Astronauta Spiff, do Homem Estupendo, do detetive Tracer Bullet, das suas mutações em animais monstruosos (sobretudo em dinossáurio), do explorador dos safaris, do cowboy, sem esquecer as aventuras com os monstros debaixo da cama ou com os bonecos de neve muito criativos e cáusticos, que lhes permitem extravasar o dia a dia. Calvin & Hobbes apresenta ainda uma importante faceta contemplativa, com muitas interrogações existencialistas e uma crítica ao comportamento do Homem em relação à Natureza. Ao nível da realidade que o rodeia, Calvin pertence a uma família de classe média, em que o pai trabalha num escritório e a mãe é doméstica, dotada de uma paciência quase sem limites para ultrapassar as provas a que, constantemente, é submetida pelo filho. O seu tigre de peluche aos olhos dos outros é isso mesmo, um tigre de peluche, mas a realidade, apenas compartilhada com os leitores, é que Hobbes não só é a consciência crítica de Calvin como também um predador nato, que adora sandes de atum! Os deveres escolares e domésticos, em particular a sempre complexa arrumação do quarto, as horas passadas a ver televisão, o 'horripilante' banho ou as 'cenas' protagonizadas com as refeições são apresentadas de modo sempre inovador ao longo da série. O brutamontes do Moe, colega da escola especialista em extorquir dinheiro, a Susie Derkins, a menina exemplar com quem Calvin tanto se pega, a ama Rosalyn, a única pessoa que, verdadeiramente, põe Calvin em 'sentido', e a professora Miss Wormwood, exemplo de dedicação à causa da instrução e de infinita paciência, são as principais personagens secundárias da série. Para além de apresentar uma extraordinária dinâmica, o desenho vivo e alegre, a que não faltam expressões faciais cuidadas ao pormenor e cenários sempre muito bem construídos, constituem algumas das 'receitas' que ajudam a explicar a constante popularidade da série. É apontada como uma das mais importantes bandas desenhadas do século XX."
    },
    {
        "atalho": "https://www.bertrand.pt/livro/torpedo-1936-vol-2-enrique-sanchez-abuli/21983550",
        "titulo": "Torpedo 1936 Vol. 2",
        "autores": "Enrique Sánchez Abulí e Jordi Bernet ",
        "editora": "LENOIR",
        "sinopse": "Com estes elementos, Enrique Sánchez Abulí e Jordi Bernet construíram a melhor série clássica do policial negro das últimas três décadas, e a BD espanhola mais traduzida e lida em todo o planeta. Torpedo narra a história de um emigrante italiano, um assassino a soldo que espalha a sua justiça pelas ruas de Nova Iorque durante a Grande Depressão. Um tipo violento, amoral, mau entre os maus, mas que acaba por agradar ao leitor. Rodeado de mulheres belas e de mafiosos que lhe farão a vida mais fácil ou difícil. A ironia e o sentido de humor de Abulí, com os seus audazes jogos de palavras, combinamna perfeição com o pincel de Bernet, o grande mestre do branco e preto, para criar uma autêntica obra de arte. Uma obra para ler aos poucos, como se degusta um bom whisky."
    },
    {
        "atalho": "https://www.bertrand.pt/livro/deuses-americanos-m-ainsel-neil-gaiman/23276435",
        "titulo": "Deuses Americanos",
        "autores": "Neil Gaiman, Scott Hampton e P. Craig Russel ",
        "editora": "MACE",
        "sinopse": "Shadow e Wednesday deixam a Casa na Rocha e continuam a sua viagem pelo país enquanto reúnem aliados, conhecem novos deuses e se preparam para a guerra. O romance vencedor de prémios Hugo, Bram Stoker, Locus, World Fantasy e Nebula, que deu origem ao sucesso televisivo da Starz, com autoria de Neil Gaiman, é adaptado como novela gráfica pela primeira vez!"
    },
    {
        "atalho": "https://www.bertrand.pt/livro/demon-slayer-n-01-koyoharu-gotouge/24733957",
        "titulo": "Demon Slayer N.º 01",
        "autores": "Koyoharu Gotouge",
        "editora": "DEVIR",
        "sinopse": "No Japão da era Taishou (1912-1926), Tanjirou, um rapaz de coração gentil, vive uma vida pacata, até que inesperadamente a sua família é devorada por um demónio. A única sobrevivente, Nezuko, a sua irmã mais nova, transforma-se num dos monstros. Tanjirou e Nezuko partem numa viagem perigosa, para tentar encontrar a cura para a irmã e destruir o demónio que arruinou as suas vidas."
    },
    {
        "atalho": "https://www.bertrand.pt/livro/the-promised-neverland-n-7-kaiu-shirai/24733958",
        "titulo": "The Promised Neverland N.º 7",
        "autores": "Kaiu Shirai",
        "editora": "DEVIR",
        "sinopse": "Depois de conhecerem a verdade sobre o mundo em que vivem, os órfãos fogem. Emma, ¿Ray e as outras crianças conseguem finalmente sair da floresta e chegam ao local definido na mensagem oculta de Minerva... à sua espera há um novo tipo de desafio."
    },
    //Informática
    {
        "atalho": "https://www.bertrand.pt/livro/bases-de-dados-feliz-gouveia/24617282",
        "titulo": "Bases de Dados: Fundamentos e aplicações",
        "autores": "Feliz Gouveia",
        "editora": "FCA",
        "sinopse": "O conhecimento da arquitetura de um Sistema de Gestão de Bases de Dados Relacionais (SGBDR) e do funcionamento dos seus componentes principais é um requisito fundamental do especialista da área de computadores, sistemas ou gestão da informação. Os SGBDR existentes são produtos muito complexos, com dezenas de anos de desenvolvimento, e que recorrem por vezes a técnicas pouco conhecidas, proprietárias e mantidas em segredo. Poucos profissionais podem participar no desenvolvimento de um SGBDR, mas são muitos os que os utilizam diariamente e deles dependem para fazerem outros sistemas funcionar. Esta obra apresenta assim os conceitos fundamentais da tecnologia dos SGBDR que estão no centro dos sistemas de informação atuais, em todos os setores de atividade e em todos os domínios, sendo substituídos por sistemas especializados apenas em nichos de utilização. Não se centra num SGBDR em particular, mas dá a conhecer as especificidades dos produtos mais representativos quando a sua importância o justifica. Os princípios fundamentais dos SGBDR são abordados em capítulos independentes entre si, o que permite, para além da sua leitura sequencial, uma consulta faseada, dependendo do interesse e das necessidades do leitor. Todos os capítulos contêm vários exemplos e encerram com propostas de exercícios. Para quem precisa de realizar um trabalho de investigação, ou aprofundar um tópico em particular, procurando conhecer os detalhes de uma técnica ou de um algoritmo, a obra dispõe de uma secção de Leituras Recomendadas e de uma completa Bibliografia no final de cada capítulo. Nesta 2.ª edição aumentada foram incluídas secções novas no capítulo de SQL (funções sobre janelas, common table expressions, utilização de vistas temporárias, operadores) e um novo capítulo dedicado a outros modelos de bases de dados alternativos ao Modelo Relacional, que se têm afirmado em muitas aplicações como soluções adequadas e viáveis."
    },
    {
        "atalho": "https://www.bertrand.pt/",
        "titulo": "Tecnologia, Blockchain e Criptomoedas: O que é isto?",
        "autores": "Luís Antunes",
        "editora": "Plátano Editora",
        "sinopse": "Este livro é um manual de introdução à tecnologia Bockchain e às Criptomoedas, para o público em geral. O livro está escrito numa linguagem que toda a gente possa entender, de forma simples, clara e acessível, minimizando a utilização de expressões, terminologia ou termos excessivamente técnicos. Após os conhecimentos teóricos, pretende-se que o leitor consiga aplicá-los em contexto prático, ou seja, que: realize as principais operações com a criptomoeda bitcoin, utilizando uma carteira digital e uma Exchange. No último capítulo, há um exercício prático para o leitor realizar."
    },
    {
        "atalho": "https://www.bertrand.pt/",
        "titulo": "Inteligência Artificial: Como funciona e como podemos usá-la para criar um mundo melhor",
        "autores": "Nick Polson e James Scott",
        "editora": "yOgais",
        "sinopse": "Uma visão acessível da inteligência artificial: o que é, como funciona, de onde veio e como aproveitar o seu potencial. Dezenas de vezes ao longo do dia interagimos com máquinas inteligentes que estão constantemente a aprender com a riqueza de dados agora ao seu dispor. Essas máquinas, de smartphones a robots que falam e carros autónomos, estão a refazer o mundo no século XXI da mesma maneira que a Revolução Industrial o fez no século XIX. Este livro, escrito por dois dos principais cientistas de dados da atualidade, assenta numa premissa simples: se quer compreender o mundo moderno, precisa de conhecer um pouco da linguagem matemática falada pelas máquinas inteligentes. E é isso que este livro explica, mas de uma maneira não convencional, ancorada em histórias e não em equações. Ficará a conhecer um elenco fascinante de personagens históricas que têm muito a ensinar-lhe sobre dados, probabilidade e melhor raciocínio. Ao longo do caminho, verá como essas mesmas ideias se estão a desenrolar na era moderna de big data e de máquinas inteligentes — e como essas tecnologias em breve o ajudarão a superar algumas das suas fraquezas cognitivas, permitindo-lhe levar uma vida mais feliz, mais saudável e mais realizada. Quando a criatividade humana e o potencial das máquinas se juntam, não há limites para o que se pode fazer para criar um mundo melhor."
    },
    {
        "atalho": "https://www.bertrand.pt/",
        "titulo": "SQL - Structured Query Language",
        "autores": "Luís Damas",
        "editora": "FCA",
        "sinopse": "Esta é a nova edição atualizada de uma obra fundamental e de leitura obrigatória que aborda a temática do acesso a bases de dados através da linguagem SQL - um standard internacional. Destinado aos estudantes dos cursos de Informática e Informática de Gestão de nível universitário, politécnico e ensino técnico, e útil também para profissionais, o presente livro está dividido em duas partes: · A primeira apresenta os fundamentos gerais das bases de dados, permitindo ao leitor ter uma panorâmica global sobre o contexto e os sistemas de informação em que estas se inserem, nomeadamente os vários modelos de bases de dados, desenho de bases de dados, modelo entidade-associação e normalização. - Na segunda são apresentados e explicados, com especial cuidado, os principais comandos da linguagem SQL: SELECT / INSERT, UPDATE e DELETE / CREATE, ALTER e DROP / GRANT e REVOKE. As matérias são apresentadas de forma detalhada e pragmática, recorrendo a múltiplos exemplos de comandos que são explicados com o detalhe suficiente para se tornarem acessíveis mesmo àqueles que não têm qualquer experiência em programação. O livro cobre também as três sublinguagens DDL, DML e DCL e aborda a criação de Views e Índices, Funções Estatísticas, Joins, Ordenação e Subqueries. No final, foi adicionado um novo capítulo, que mostra, de uma forma simples e breve, as características de um sistema NoSQL. Para os mais interessados nas áreas da Programação, é apresentado um exemplo completo de ligação da linguagem C# a uma base de dados SQL Server."
    },
    {
        "atalho": "https://www.bertrand.pt/",
        "titulo": "Photoshop CC: Depressa & Bem",
        "autores": "Isabel Alcobia e Claudia Pernencar",
        "editora": "FCA",
        "sinopse": "O Adobe Photoshop é um dos programas profissionais de edição de imagem mais completos do mercado. O livro Photoshop CC - Depressa & Bem , baseado na versão Creative Cloud (CC) da Adobe, pretende ser um manual de aprendizagem transversal às principais funcionalidades, técnicas, conceitos e comandos, através da prática com exercícios passo a passo, quer em ambiente Windows, quer em Macintosh. Com exercícios resolvidos passo a passo, que lhe ensinam a dominar as ferramentas essenciais para o tratamento e edição de imagem, inúmeras ilustrações a cores e uma linguagem acessível, clara e explicativa, que lhe permitem apreender os principais conceitos e técnicas do Photoshop, não esquecendo as novas ferramentas introduzidas pela versão CC. Inclui capítulo de introdução à Adobe Creative Cloud, dando a conhecer aos leitores as suas potencialidades e os serviços online disponíveis. Cobre Photoshop CC 2014. Impresso a cores."
    },
    {
        "atalho": "https://www.bertrand.pt/",
        "titulo": "Internet das Coisas: Introdução Prática",
        "autores": "Pedro Coelho",
        "editora": "FCA",
        "sinopse": "Desde há muitos anos que se imaginam e implementam soluções baseadas na ligação de dispositivos à Internet, muito para além dos tradicionais computadores. O que antes era apenas um conceito hoje é uma realidade em concretização, com muitos meios, pessoas e ideias envolvidos: a Internet das Coisas (IoT) chegou e veio para tomar conta do nosso dia a dia! E para o demonstrar, apresentamos este livro! Fazendo uma introdução prática ao vasto tema da IoT, abordam-se os vários aspetos tecnológicos e funcionais e como estes se podem implementar em pequenos projetos de IoT, para que computadores, máquinas, pessoas, animais ou objetos possam comunicar sem qualquer intervenção humana. Com exemplos práticos de protótipos que podemos facilmente montar em casa e com explicações passo a passo, abre-se, assim, todo um mundo novo de desafios para que os leitores, com mais ou menos experiência de Desenvolvimento, Internet e Sistemas, consigam incorporar hardware e, através de pequenos programas, controlar a comunicação de peças remotas em utilizações pessoais ou empresariais."
    },
    {
        "atalho": "https://www.bertrand.pt/",
        "titulo": "Novo Regulamento Geral de Proteção de Dados",
        "autores": "Nuno Saldanha",
        "editora": "FCA",
        "sinopse": "A aprovação de um Regulamento Geral de Proteção de Dados (RGPD) relativo à proteção das pessoas singulares (tratamento de dados pessoais e livre circulação desses mesmos dados) produziu uma rutura no modo como a proteção de dados tem sido entendida nos diferentes contextos legislativos dos estados-membros da União Europeia (UE). A centralização normativa, conseguida através da aprovação de um regulamento europeu, obriga, por si só, todos os estados da UE, no mesmo momento e da mesma forma, a capacitar os seus cidadãos de um conjunto alargado de direitos: desde a proteção da sua informação, o acesso aos seus dados, à retificação, ao apagamento, ao direito de oposição e até de portabilidade. Da mesma forma, obriga todas as organizações, públicas ou privadas, que tratam de dados pessoais, a respeitar e fazer cumprir os direitos dos titulares. O seu incumprimento poderá levar a um conjunto de sanções que, no pior cenário, podem atingir os 20 milhões de euros ou 4% do volume de negócios anual ao nível mundial! São motivos mais do que suficientes para se olhar para este regulamento europeu com uma atenção muito especial. Este livro destina-se a apoiar juristas, encarregados de proteção de dados, implementadores de processos de compliance, assim como todos os gestores de topo nas diferentes organizações. Um guia prático que resume os principais temas do RGPD, comentados de forma simples, clara e útil! Inclui 14 passos para iniciar a implementação do regulamento nas organizações."
    },
    {
        "atalho": "https://www.bertrand.pt/",
        "titulo": "Estruturas de Dados e Algoritmos em C",
        "autores": "António Manuel Adrego da Rocha",
        "editora": "FCA",
        "sinopse": "Esta obra tem como objetivo fornecer uma competência sólida no desenvolvimento de programas de média e elevada complexidade e um conhecimento profundo sobre estruturas de dados avançadas e algoritmos complexos, usando a linguagem de programação C e aplicando o paradigma da programação modular. Assim, utiliza uma metodologia que dá particular ênfase à decomposição funcional das soluções, através da implementação de tipos de dados abstratos. Inclui exemplos, exercícios, programas e leituras recomendadas, com vista a facilitar a aprendizagem dos alunos."
    },
    {
        "atalho": "https://www.bertrand.pt/",
        "titulo": "Análise e Exploração de Dados com R",
        "autores": "Miguel Rocha e Pedro G. Ferreira",
        "editora": "FCA",
        "sinopse": "No mundo atual, em todas as áreas das nossas vidas, os dados são gerados a partir de fontes muito diversas e numa escala sem precedentes. A capacidade de analisar estes dados e a partir deles obter e filtrar informação, conseguindo gerar conhecimento útil e aplicável na resolução de problemas, é uma das características que distinguem os melhores profissionais em diversas áreas, sendo apontada como uma das competências mais desejáveis num mercado de trabalho cada vez mais competitivo. Este livro, com uma vertente marcadamente prática, vem apresentar as principais fases de um projeto de análise e exploração de dados, com inúmeros exemplos práticos em R, um dos sistemas com maiores potencialidades no processamento, análise e exploração de dados em larga escala. O leitor (seja estudante do ensino superior, seja profissional de qualquer área com interesse na análise de dados) encontra aqui inúmeros exemplos, bem como exercícios resolvidos e propostos, podendo, no final, experimentar vários casos de estudo de maior dimensão, onde se apresentam as principais etapas de projetos em diversas áreas. Faça a leitura deste livro em paralelo com a utilização do sistema R e tirará verdadeiro partido desta obra!"
    },
    {
        "atalho": "",
        "titulo": "",
        "autores": "",
        "editora": "",
        "sinopse": ""
    }
];