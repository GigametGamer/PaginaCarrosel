const btnEsquerda = document.querySelector("#btnEsquerda");
const btnDireita = document.querySelector("#btnDireita");
const telaCarrosel = document.querySelector("#carousel");

const imagens = [
    { url: "./images/images.jpg" },
    { url: "./images/images(3).jpg" },
    { url: "./images/images(4).jpg" },
    { url: "./images/images(5).jpg" }
];

let indiceAtual = 0;


// FUNÇÃO PARA ATUALIZAR A IMAGEM
function atualizarCarrosel() {
    telaCarrosel.style.backgroundImage = `url("${imagens[indiceAtual].url}")`;
}


// BOTÃO DIREITA
btnDireita.addEventListener("click", function () {

    indiceAtual++;

    if (indiceAtual >= imagens.length) {
        indiceAtual = 0;
    }

    atualizarCarrosel();
});


// BOTÃO ESQUERDA
btnEsquerda.addEventListener("click", function () {

    indiceAtual--;

    if (indiceAtual < 0) {
        indiceAtual = imagens.length - 1;
    }

    atualizarCarrosel();
});


// MOSTRA A PRIMEIRA IMAGEM
atualizarCarrosel();