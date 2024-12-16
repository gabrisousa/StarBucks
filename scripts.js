let imagem = document.querySelector('.imagem-copo')
let fundo = document.querySelector('.circulo')


function trocarImagem(endereco) {
    imagem.src = endereco
    
}

function mudarCor(cor) {
    fundo.style.background = cor
}