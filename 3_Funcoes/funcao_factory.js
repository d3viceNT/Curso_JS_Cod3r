// Function factory
function criarPessoa() {
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa());

console.log("\n----------------\n")

function criarProduto(nome, preco) {
    return {
        nome, 
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Notebook', 2199.60));
console.log(criarProduto('iPad', 1899.40));

console.log("\n----------------\n")

/*
* Class Vs. Factory Vs. Constructors
*/

// Classe
class Pessoa {
    constructor(nome) {
        this.nome = nome
    }
    falar() {
        console.log(`Meu nome é ${this.nome}`);
    }
}

const p1 = new Pessoa('João');
p1.falar();

// Function Factory
const pessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}
const p2 = pessoa('Maria');
p2.falar();

// Função Construtora
function PessoaContruct(nome) {
        this.nome = nome
  
    this.falar = function() {
        console.log(`Meu nome é ${this.nome}`);
    }
}

const p3 = new PessoaContruct('Pedro');
p3.falar();