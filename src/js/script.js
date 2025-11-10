// array de objetos com as imagens e informações do banner
const bannerItems = [
    {
        imagem: "./src/assets/img/blacklivesmatter.png",
        titulo: "Homem aranha",
        descricao: "Fantasia",
    },
    {
        imagem: "./src/assets/img/homemformiga.png",
        titulo: "Homem formiga",
        descricao: "Fantasia",
    },
    {
        imagem: "./src/assets/img/thanos.png",
        titulo: "Sentinela",
        descricao: "Fantasia",
    },
];

// declarando as variáveis e elements com dom(document object model)
const tempo = 5000; // em milissegundos
const elementoBanner = document.querySelector(".banner");
const elementoTitulo = document.querySelector(".banner-titulo");
const elementoDescricao = document.querySelector(".banner-descricao");
let i = 0; // inicio da contagem das imagens

// funcao para o slide show
function slideShow(){
    // altera a imagem de fundo do banner
    // `` template strings ou string literais. Forma de concatenar
    elementoBanner.style.backgroundImage = `url(${bannerItems[i].imagem})`;
    
    // altera o titulo do banner
    elementoTitulo.textContent = bannerItems[i].titulo;
    elementoDescricao.textContent = bannerItems[i].descricao;

    // incrementa o índice(i) e reinicia quando chegar no final do array
    i++;

    // se i for maior que a quantidade de objetos no bannerItem, volta pra 0
    if (i >= bannerItems.length) {
        i = 0;
    }

    // chama  função novamente após o tempo definido
    setTimeout(slideShow, tempo);
}

// inicia a função
slideShow();

//