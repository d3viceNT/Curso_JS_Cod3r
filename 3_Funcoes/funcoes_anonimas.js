    const soma = function(x, y) {
        return x + y;
    }

    const imprimeResultado = function(a, b, operacao = soma) {
        console.log(operacao(a, b));
    }

imprimeResultado(3, 4);
imprimeResultado(3, 4, soma);
imprimeResultado(3, 4, function(x, y) { // Passgaem de função como parâmetro
    return x - y;
});

imprimeResultado(3, 4, (x, y) => x * y)

console.log("\n-----------------------\n")

const pessoa = {
    falar: function() {
        console.log("Olá");
    }
}

pessoa.falar();