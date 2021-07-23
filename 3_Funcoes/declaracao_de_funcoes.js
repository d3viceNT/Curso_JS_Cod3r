console.log(soma(3, 9)); // Function Declarations são carregadas pelo interpretador antes do restante do código
// console.log(subtracao(3, 9)); // Erro: a função subtracao ainda não foi carregada

// function declaration
function soma(x, y) {
    return x + y;
}

const subtracao = function(x, y) {
    return x - y;
}

const multiplicacao = function multiplicacao(x, y) {
    return x * y;
}