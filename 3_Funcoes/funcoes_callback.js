const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir);

console.log("\n---------------------\n")

const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 9.0];
/* 
* Extrair de dentro de um array as notas menores que 7
* - SEM CALLBACK
*/
let notasBaixas = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas.push(notas[i]);
    }
}
console.log(notasBaixas);
/* 
* Extrair de dentro de um array as notas menores que 7
* - COM CALLBACK
*/
notasBaixas = notas.filter(function(nota) {
    return nota < 7; // true or false
});

console.log(notasBaixas);

const notasBaixasArrow = notas.filter(nota => nota < 7);
console.log(notasBaixasArrow)

/*
*   Exemplo para ser executado no Browser
*/
document.getElementsByTagName('body')[0].onclick = function (e) {
    console.log('O evento ocorreu.');
}