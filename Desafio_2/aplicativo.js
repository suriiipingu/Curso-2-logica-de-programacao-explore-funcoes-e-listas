//DESAFIO 1
function mensagem(){
    console.log('Olá, mundo!');
}

mensagem();

//DESAFIO 2
function nomeMensagem(nome){
    console.log(nome);
}

nomeMensagem('Sandra');

//DESAFIO 3
function dobroNumero(numero){
    console.log(numero * 2);
}

dobroNumero(25);

//DESAFIO 4
function mediaNumeros(num1, num2, num3){
    let soma = num1 + num2 + num3;
    console.log(soma / 3);
}

mediaNumeros(2,5,6);

//DESAFIO 5
function maiorNumero(num1, num2){
    if(num1 > num2){
        console.log(num1);
    }else{
        console.log(num2);
    }
}

maiorNumero(2,9);

// //resolução melhor 
// function encontrarMaior(a, b) {
//     return a > b ? a : b;
//   }

//DESAFIO 6
function multiplicacaoNumero(num){
    console.log(num * num);
}

multiplicacaoNumero(8);