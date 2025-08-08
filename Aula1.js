// exemplo 1
if(true){
    var a = 10;
    // let a = 10;
}

console.log(a);
// exemplo 2
var nomeCarro = 'onix';
// let nomeCarro = 'onix';
var i = 0;

if(i === 0){
    var nomeCarro = 'fiesta';
    // let nomeCarro = 'fiesta';
    console.log(nomeCarro)
}
// let nomeCarro = 'onix';
console.log(nomeCarro)

// exmplo 3

function soma(a, b){
    return a+b;
}

soma(1,7);

function normalFunction(){}
const minhaArrowFunction = () => {};

// exemplo 4

function argumentos(){
    console.log(arguments)
}

argumentos(1,2,3,4,5,6);

// exemplo 5

function boasVindas (mensagem = 'Bem vindo padrao'){
    console.log(mensagem)
}
boasVindas('Bem vindo escrito');
boasVindas();

// exemplo 6

const user = {
    nomePessoa: ['Pedro', 'Samuel'],
    idadePessoa: 14,
    ultimoNomePessoa: 'Edilson'
}

const {nomePessoa, ultimoNomePessoa, idadePessoa} = user;
const [uno, dos] = nomePessoa;

console.log(uno, dos);