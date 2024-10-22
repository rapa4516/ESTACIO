// Arrow function (NEW)
const exibirSoma = (a, b) => {
    let c = a + b;
    alert('A soma será ${c}');
}

// Traditional format (OLD)
function exibirSoma2(a,b){
    let c = a + b;
    alert('A soma será '+ c);
}

// Syntax (NEW)
class Pessoa{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    view = () => alert('$(this.name) :: $(this.age)');
}

// Syntax (OLD)

function Pessoa2(name, age){
    this.name = name;
    this.age = age;

    this.view = () => alert('${this.name} :: ${this.age}'); 
}

// JSON - DEFINIÇÃO OBJETO

const p = {
    name: "Ana",
    age: 25,
    view(){
        alert('${this.name} :: ${this.age}');
    }
}