let texto = document.querySelector('h1');
texto.innerHTML = 'Hora do Desafio';

function mensagem(){
    console.log('o botão foi clicado');
}

function alerta(){
    alert('Eu amo JS');
}

function cidade(){
    let nomeCidade = prompt('Digite o nome da sua cidade');
    alert(`Estive em ${nomeCidade} e lembrei de você.`);
}

function soma(){
    let numero1 = parseInt(prompt('Digite o primeiro número inteiro'));
    let numero2 = parseInt (prompt('Digite o segundo número inteiro'));

    let soma = numero1 + numero2;

    alert(`O resultado da soma é ${soma}`)

}