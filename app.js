let listaDeNumerosSortiados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativa = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
function exibirMensagemInicial(){
    exibirTextoNaTela ('h1', 'Jogo do número Secreto');
    exibirTextoNaTela ('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial();
function verificarChute(){
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto){
        exibirTextoNaTela ('h1', 'Acertou!');
        let palavraTentativa = tentativa > 1 ? 'tentativas' : 'tentativa'
        let mensagemTentativas = `Você descobriu o número Secreto com ${tentativa} ${palavraTentativa}`;
        exibirTextoNaTela ('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela ('p', 'O número Secreto é menor');
        } else{
            exibirTextoNaTela ('p', 'O número Secreto é maior');
        }
        tentativa++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
   let NumeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
   let quantidadeDeElementosNaLista = listaDeNumerosSortiados.length;

if (quantidadeDeElementosNaLista == numeroLimite) {
    listaDeNumerosSortiados = [];
}
   if (listaDeNumerosSortiados.includes(NumeroEscolhido)) {
    return gerarNumeroAleatorio();
   } else {
    listaDeNumerosSortiados.push(NumeroEscolhido);
    console.log(listaDeNumerosSortiados);
    return NumeroEscolhido;
   }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativa = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true)
}