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

new Aluno