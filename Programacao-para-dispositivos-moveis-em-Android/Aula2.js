// import {sayHello as chamarFuncaoDigaHello} from './sayHello.js';

// chamarFuncaoDigaHello("Raphael");

// const user = {
//     firstName: 'Edilson',
//     lastName: 'Sampaio',
//     full_name: 'Edilson Macedo Sampaio',
//     age: 22,
//     instagram: '@EdilsonSamp',
//     skills: ['Back-end', 'Front-end', 'Mobile', 'UI/UX'],
//     active: false
// };

// // const firstName = user.firstName;
// // const lastName = user.lastName;

// const {firstName, lastName, full_name: fullName, skills, ...resto} = user;

// console.log(firstName);
// console.log(resto);

// // const primeiraPosicao = skills[0];
// // const segundaPosicao = skills[1];

// const [posicaoUm, posicaoDois, ...restoVetor] = skills;

// console.log(posicaoCinco);
// console.log(restoVetor)

//SPREAD OPERATOR

// user.active = true;

// const updateUser = {
//     firstName: user.firstName,
//     lastName: user.lastName,
//     ...
//     active: true
// }

// const updateUser = {
//     ...user,
//     active: true
// };

// console.log(updateUser);

//TEMPLATE STRING

// const name = "Rodrigo Fontes";

// console.group(`Olá, ${"nada"}`)

// const apiCall = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         resolve({
//             firstName: 'Edilson',
//             lastName: 'Sampaio',
//             full_name: 'Edilson Macedo Sampaio',
//             age: 22,
//             instagram: '@EdilsonSamp',
//             skills: ['Back-end', 'Front-end', 'Mobile', 'UI/UX']
//         })
//     }, 5000)
// });

//CHAMAR PROMISE - THEN e CATCH

// apiCall.then((resposta) => {
//     console.log(resposta);
// }).catch((erro)=>{
//     console.log(erro);
// });

//CHAMAR PROMISE - TRY e CATCH

// async function run() {
//     try{
//     const resultado = await apiCall;
//     console.log(resultado)}
//     catch (error){
//         console.log(error)
//     }
// }

// console.log("preciso dele aqui");

// const tech = "Node.js";
// const arry = ["Edilson", "Navalho"]
// console.log(tech.startsWith('no'));
// console.log(arry.includes("Navalho"))

const cart = [
    {name: 'Livro', price: 10, quantidade: 3},
    {name: 'Lápis', price: 2, quantidade: 1},
    {name: 'Borracha', price: 3, quantidade: 4},
    {name: 'Caneta', price: 3, quantidade: 2},
]

const find = cart.find(product=>product.name === 'Livro');
const findIndex = cart.findIndex(product=>product.name === 'Livro');
const some = cart.some(product=>product.price > 1000 );
const every = cart.every(product=>product.price > 1000 );

const map = cart.map((product)=>{
    return {
        ...product,
        subtotal: product.price * product.quantidade
    };
});

const filter = cart.filter(product=>product.quantidade > 2);

const reduce = cart.reduce((accumulator, product)=>{
    return accumulator + (product.price * product.quantidade);
}, 0)

console.log(`Find: ${find}`);
console.log(`FindIndex: ${findIndex}`);
console.log(`Some: ${some}`);
console.log(`Every: ${every}`);
console.log(`Map: ${map}`);
console.log(`Filter: ${filter}`);
console.log(`Reduce: ${reduce}`);