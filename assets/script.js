const technologyImageElement = document.getElementById('technologies-images');

// element.style.backgroundColor = 'yellow';


// Cria um texto para adicionar à div


const firstChild = technologyImageElement.children[0]
const secondChild = technologyImageElement.children[1]
const thirdChild = technologyImageElement.children[2] 
const fourthChild = technologyImageElement.children[3]

const firstChildText = 'Eu tenho uma boa base em HTML, CSS e JavaScript. Em HTML, sei como estruturar documentos, usar elementos de texto, formulários, links e imagens, além de organizar layouts. No CSS, domino seletores, propriedades básicas, o box model, layout com flexbox e grid, animações, transições, pseudo-classes e responsividade. Em JavaScript, sou capaz de manipular o DOM, lidar com eventos, alterar estilos, criar elementos dinamicamente e navegar pelo DOM. Esses conhecimentos me permitem criar sites e interfaces interativas de forma eficiente.'

const secondChildText = 'Tenho uma boa base em ASP.NET. Sei como estruturar e desenvolver aplicações web dinâmicas usando a plataforma, trabalhando tanto com ASP.NET Core quanto com versões anteriores. No ASP.NET, sou capaz de criar páginas dinâmicas com Razor, manipular dados utilizando Entity Framework, integrar APIs e trabalhar com autenticação e autorização de usuários. Tenho experiência na criação de páginas e componentes reutilizáveis, além de configurar rotas e trabalhar com middleware. Também sou familiarizado com o uso de Blazor para criar interfaces de usuário interativas utilizando C# em vez de JavaScript. Esses conhecimentos me permitem desenvolver aplicações web escaláveis e de alto desempenho com segurança e eficiência.'

const thirdChildText = 'Tenho uma boa base em Photoshop. Sei como criar e editar imagens para web e design gráfico, manipulando camadas, máscaras, e efeitos especiais. Tenho experiência na criação de layouts, retoques em fotografias, manipulação de cores, ajustes de brilho e contraste, e na utilização de filtros. Sou capaz de trabalhar com vetores e tipografia para compor designs que atendam às necessidades do projeto. Além disso, domino técnicas avançadas como o uso de atalhos, manipulação de texturas e composição de imagens complexas. Esses conhecimentos me permitem criar designs de alta qualidade e otimizados para uso em diferentes plataformas e dispositivos.'

const fourthChildText = 'Tenho uma boa base em SQL Server. Sei como criar e gerenciar bancos de dados relacionais, escrever consultas SQL complexas para manipulação de dados, e otimizar o desempenho das consultas. Tenho experiência com a criação de tabelas, relacionamentos, índices e stored procedures. Sou capaz de realizar operações de backup e recuperação, além de gerenciar permissões de usuários para garantir a segurança dos dados. Também entendo como aplicar boas práticas de normalização de dados e como lidar com transações e integridade referencial. Esses conhecimentos me permitem trabalhar de forma eficiente na gestão de grandes volumes de dados em sistemas de banco de dados SQL Server.'

let technologyDescription = document.getElementById('technology-description');


firstChild.addEventListener('mouseover', () => {
    secondChild.style.opacity = '0%';
    thirdChild.style.opacity = '0%';
    fourthChild.style.opacity = '0%';
    firstChild.style.transform = 'translateX(-50%)';
    technologyDescription.innerText = firstChildText;
    technologyDescription.style.opacity = '100%';
})

firstChild.addEventListener('mouseout', () => {
    secondChild.style.opacity = '100%';
    thirdChild.style.opacity = '100%';
    fourthChild.style.opacity = '100%';
    firstChild.style.transform = 'translateX(0%)';
    technologyDescription.style.opacity = '0%';
})


secondChild.addEventListener('mouseover', () => {
    firstChild.style.opacity = '0%';
    thirdChild.style.opacity = '0%';
    fourthChild.style.opacity = '0%';
    secondChild.style.transform = 'translateX(-170%)';
    technologyDescription.innerText = secondChildText;
    technologyDescription.style.opacity = '100%';
})

secondChild.addEventListener('mouseout', () => {
    firstChild.style.opacity = '100%';
    thirdChild.style.opacity = '100%';
    fourthChild.style.opacity = '100%';
    secondChild.style.transform = 'translateX(0%)';
    technologyDescription.style.opacity = '0%';
})


thirdChild.addEventListener('mouseover', () => {
    firstChild.style.opacity = '0%';
    secondChild.style.opacity = '0%';
    fourthChild.style.opacity = '0%';
    thirdChild.style.transform = 'translateX(-290%)';
    technologyDescription.innerText = thirdChildText;
    technologyDescription.style.opacity = '100%';
})

thirdChild.addEventListener('mouseout', () => {
    firstChild.style.opacity = '100%';
    secondChild.style.opacity = '100%';
    fourthChild.style.opacity = '100%';
    thirdChild.style.transform = 'translateX(0%)';
    technologyDescription.style.opacity = '0%';
})


fourthChild.addEventListener('mouseover', () => {
    firstChild.style.opacity = '0%';
    secondChild.style.opacity = '0%';
    thirdChild.style.opacity = '0%';
    fourthChild.style.transform = 'translateX(-410%)';
    technologyDescription.innerText = fourthChildText;
    technologyDescription.style.opacity = '100%';
})

fourthChild.addEventListener('mouseout', () => {
    firstChild.style.opacity = '100%';
    secondChild.style.opacity = '100%';
    thirdChild.style.opacity = '100%';
    fourthChild.style.transform = 'translateX(0%)';
    technologyDescription.style.opacity = '0%';
})

