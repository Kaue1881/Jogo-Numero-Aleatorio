let ValorSorteado = Math.random() * (100 - 1) + 1; // valor para comparação
let input = document.querySelector("#palpite"); // unico input da pagina
let contador = 0; // contador fora da função
let tentativas = document.querySelector("#numeroTentativa"); //campo visual para tentativa
let tentativasPrompt = document.querySelector("#tentativas-prompt");

function PalpiteMais() {
    //vai guardar o palpite sem as casas decimais
    const ValorSorteadoTruncado = Math.trunc(ValorSorteado);
    // vai guardar o valor do palpite do usuário
    let ValorSugerido = input.value.trim();
    //vai aumentar as tentativas

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

function PalpiteMenos() {
    //vai guardar o palpite sem as casas decimais
    const ValorSorteadoTruncado = Math.trunc(ValorSorteado);
    // vai guardar o valor do palpite do usuário
    let ValorSugerido = input.value.trim();
    //vai diminuir as tentativas

    //comparação para descobrir o valor
    if (contador == 0){
        tentativas.innerText = `${contador}`;
        alert("Você usou todas as suas 6 tentativas e não acertou o palpite, tente novamente.");
        reiniciar();
        contador = 6;
    } else {
        if(ValorSugerido == '') {
            alert("Coloque um valor a caixa vazia");
            contador--;
            return;
        } else if(ValorSorteadoTruncado < ValorSugerido){
            alert("Mais baixo");
            contador--;
        } else if(ValorSorteadoTruncado > ValorSugerido) {
            alert("Mais alto");
            contador--;
        } else {
            contador--;
            alert('Parabéns você acertou em ' + contador + ' tentativas');
            reiniciar();
        }
        if (contador == -1){
            alert("Você usou todas as suas 6 tentativas e não acertou o palpite, tente novamente.");
            reiniciar();
            contador = 6;
        }
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

function TrocarModo(){
    let BoolMais = null;
    //validar quando uma função estiver disponivel e outra não
    if(document.querySelector("#palpite-mais").style.display == "inline-block"){
        BoolMais = true;
    } else {
        BoolMais = false;
    }
    //desativa um dos botões quando outro está ativado
    if(BoolMais == true){
        document.querySelector("#palpite-mais").style.display = "none";
        document.querySelector("#palpite-menos").style.display = "inline-block";
        reiniciar();
        // reinicia o contador
        contador = 6;
        tentativasPrompt.innerText = "Tentativas restantes:";
        tentativas.innerText = contador;
    } else {
        document.querySelector("#palpite-mais").style.display = "inline-block";
        document.querySelector("#palpite-menos").style.display = "none";
        reiniciar;
        //reinicia o contador
        contador = 0;
        tentativasPrompt.innerText = "Tentativas:";
        tentativas.innerText = contador;
    }
}