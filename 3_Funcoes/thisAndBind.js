const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar(); // Uso natura do "this" dentro do escopo do objeto

const fale = pessoa.falar; // Ao atribuir a função falar à constante "fale", estermos mudando o escopo em que o "this" será definido
fale(); // Conflito no uso do "this"

const faleComBind = pessoa.falar.bind(pessoa); // Resolvendo o escopo do "this" indicando implicitamente qual deve ser seu escopo 
faleComBind();

console.log("\n-------------------------------\n")

/* Definindo implicitamente o escopo para o this*/
function Aluno() {
    this.idade = 0;
    const self = this;
    setInterval(function() {
        // this.idade++;
        self.idade++
        // console.log(this.idade); // o this não estará no escopo de "Aluno" a não ser que seja forçado
        console.log(self.idade);
    }/*.bind(this)*/, 1000);
}

new Aluno