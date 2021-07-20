function soma() {
    let soma = 0;
    for (i in arguments) {
        soma += arguments[i];
    }
    return soma;
}

console.log(soma(4));
console.log(soma(1, 2, 3));
console.log(soma(1.4, 2.9, 3.0));
console.log(soma(1.4, 2.9, "Teste"));