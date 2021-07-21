// Função com a sintaxe convencional
let dobro = function(a) {
    return 2* a;
}
// função arrow
dobro = (a) => {
    return 2 * a;
}

// Função arrow com returno implicito
dobro = a => 2 * a 

console.log(dobro(4))

console.log("\n--------------------\n");

function Aluno() {
    this.idade = 0;
    // Com arrow function não terá problemas com o contexo de "this"
    setInterval(() => { 
        this.idade++;
        console.log(this.idade); 
    }, 1000);
}

// new Aluno

console.log("\n--------------------\n");

let comparaComThis = function(param) {
    console.log(this === param);
}

comparaComThis(global); // Em funções comuns, this apontará para o objeto global (ou window no browser)

const obj = {}
comparaComThis = comparaComThis.bind(obj) // Mudando o escopo do this arbitrariamente
comparaComThis(global)

let comparaComThisArrow = param => console.log(this === param) // Em funções Arrow, o this não apontará para o objeto global
comparaComThisArrow(global)
comparaComThisArrow(module.exports) // module.exports === this em arrow functions (no node)

comparaComThisArrow = comparaComThisArrow.bind(obj)  // Com Arrow functions, mesmo forçando, o this não mudará sua referência 
comparaComThisArrow(obj)