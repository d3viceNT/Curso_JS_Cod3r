let count = 1;
while (count <= 10) {
    console.log(`contador = ${count}`);
    count++;
}

console.log("\n--------------------\n")

for (let i = 1; i <= 10; i++) {
    console.log(`contador no for = ${i}`);
}

console.log("\n--------------------\n")

let vetor = [1, 3.4, 5, 6, 8.7];
for (let i = 0; i < vetor.length; i++) {
    console.log(`Valor: ${vetor[i]}`);
    
}

console.log("\n--------------------\n")

// For...In

let notas = [9, 3.4, 5, 6, 8.7];
for (let i in notas) {
    console.log("indice " + i + ": " + notas[i] )
}

console.log("\n--------------------\n")

const pessoa = {
    nome: 'ana',
    sobrenome: 'silva',
    idade: 27,
    altura: 1.5,
}

for (let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`);
}
