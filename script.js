let ValorSorteado = Math.random() * (100 - 1) + 1; // valor para comparação
let input = document.querySelector("#palpite"); // unico input da pagina
let contador = 0; // contador fora da função
let tentativas = document.querySelector("#numeroTentativa"); //campo visual para tentativa

function Palpite() {
    //vai guardar o palpite sem as casas decimais
    const ValorSorteadoTruncado = Math.trunc(ValorSorteado);
    // vai guardar o valor do palpite do usuário
    let ValorSugerido = input.value.trim();
    //vai contar as tentativas

    //comparação para descobrir o valor
    if(ValorSugerido == '') {
        alert("Coloque um valor a caixa vazia");
        contador++;
        return;
    } else if(ValorSorteadoTruncado < ValorSugerido){
        alert("Mais baixo");
        contador++;
    } else if(ValorSorteadoTruncado > ValorSugerido) {
        alert("Mais alto");
        contador++;
    } else {
        contador++;
        alert('Parabéns você acertou em ' + contador + ' tentativas');
        reiniciar();
    }
    tentativas.innerText = `${contador}`;
}

function reiniciar(){
    input.value = "";
    ValorSorteado = Math.random() * (100 - 1) + 1;
    contador = 0;
}

function recomecar() {
    reiniciar()
    alert("Você recomeçou o jogo com um novo valor randômico");
}
