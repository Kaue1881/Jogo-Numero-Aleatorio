let ValorSorteado = Math.random() * (100 - 1) + 1; // valor para comparação
let contador = 0; // contador fora da função
let tentativas = document.querySelector("#numeroTentativa"); //campo visual para tentativa
let tentativasPrompt = document.querySelector("#tentativas-prompt");// texto de numero de tentativas
let contadorVitorias = 0; // contador para vitorias
let contagem = document.querySelector("#numeroVitorias");//campo tag <p> do html para contagem
let modoJogo = true; // true = modo normal.  |  false = modo de jogo tentativas restantes.
const input = document.querySelector("#palpite"); // unico input da pagina
const palpitebtn = document.querySelector(".palpite-btn");

document.addEventListener('keydown', function(e){
    if(e.key === 'Enter'){
        palpitebtn.click();
    }
})

document.addEventListener('keydown', function(e){
    if(e.code === 'Space'){
        input.focus();
    }
})



function PalpiteMais() {
    //vai guardar o palpite sem as casas decimais
    const ValorSorteadoTruncado = Math.trunc(ValorSorteado);
    // vai guardar o valor do palpite do usuário
    let ValorSugerido = input.value.trim();
    //vai aumentar as tentativas

    //comparação para descobrir o valor
    if(ValorSugerido == '') {
        alert("Coloque um valor a caixa vazia");
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
        contadorVitorias++;
        reiniciar();
    }
    tentativas.innerText = `${contador}`;
    contagem.innerText = `${contadorVitorias}`;
}

function PalpiteMenos() {
    //vai guardar o palpite sem as casas decimais
    const ValorSorteadoTruncado = Math.trunc(ValorSorteado);
    // vai guardar o valor do palpite do usuário
    let ValorSugerido = input.value.trim();
    //vai diminuir as tentativas
    
    //comparação para descobrir o valor
    if(ValorSugerido == '') {
        alert("Coloque um valor a caixa vazia");
        return;
    } else if(ValorSorteadoTruncado < ValorSugerido){
        alert("Mais baixo");
        contador--;
    } else if(ValorSorteadoTruncado > ValorSugerido) {
        alert("Mais alto");
        contador--;
    } else {
        contador--;
        alert('Parabéns você acertou em ' + (7 - contador) + ' tentativas');
        contadorVitorias++;
        reiniciarMenos();
    }
    if (contador == 0){
        alert("Você usou todas as suas 7 tentativas e não acertou o palpite, tente novamente.");
        contadorVitorias = 0;
        reiniciarMenos();
    }
    tentativas.innerText = `${contador}`;
    contagem.innerText = `${contadorVitorias}`;
}


function reiniciar(){
    // sobrescreve os elementos
    input.value = "";
    ValorSorteado = Math.random() * (100 - 1) + 1;
    contador = 0;
    tentativas.innerText = 0; 
}

function reiniciarMenos(){
    // sobrescreve os elementos
    input.value = "";
    ValorSorteado = Math.random() * (100 - 1) + 1;
    contador = 7;
    tentativas.innerText = 7; 
}

function recomecar(){
    
    if(modoJogo == true){
        reiniciar();
        return;
    } else {
        reiniciarMenos();
        return;
    }
}

function TrocarModo(){
    //desativa um dos botões quando outro está ativado
    if(modoJogo == true){
        //quando modo de jogo normal faça:
        document.querySelector("#palpite-mais").style.display = "none";
        document.querySelector("#palpite-menos").style.display = "inline-block";
        reiniciar();
        // reinicia o contador
        contador = 7;
        tentativasPrompt.innerText = "Tentativas restantes:";
        tentativas.innerText = contador;
        modoJogo = false;
    } else {
        //quando modo de jogo tentativas restantes faça:
        document.querySelector("#palpite-mais").style.display = "inline-block";
        document.querySelector("#palpite-menos").style.display = "none";
        reiniciar;
        //reinicia o contador
        contador = 0;
        tentativasPrompt.innerText = "Tentativas:";
        tentativas.innerText = contador;
        modoJogo = true;
    }
}

//contador de sequencia de vitorias