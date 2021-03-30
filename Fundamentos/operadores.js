/* OPERADORES DE ATRIBUIÇÂO */
const a = 3
let b = 7

b += a
console.log(b)

b -= a
console.log(b)

b *= a
console.log(b)

b /= a
console.log(b)

b %= a
console.log(b)

console.log()
console.log('------------------')

/* OPERADORES DE DESESTRUTURAÇÃO */

const pessoa = {
    nome: "Ana",
    idade: 23,
    endereco: {
        rua: "Rua legal",
        numero: 75
    }
}       

const { nome: n, idade: i } = pessoa // definindo novas variaveis a partir da desestruturação
console.log(n)
console.log(i)

const { sobrenome, sexo = 'M' } = pessoa // definindo valor padrão para variavel na desestruturação 
console.log(sobrenome)
console.log(sexo)

const { endereco: { rua: r, numero: num} } = pessoa // desestruturando objeto dentro de objeto 
console.log(r)
console.log(num)

const [, [, x, y]] = [[2, 3], ['a', 7, 9]] // Desestruturando elementos em arrays
console.log(x)
console.log(y)

console.log()
console.log('------------------')

/* OPERADORES RELACIONAIS */

console.log('01)', '1' == 1);
console.log('02)', '1' === 1);
console.log('03)', '3' != 3);
console.log('04)', '3' !== 3);

console.log('05)', 3 < 2);
console.log('06)', 3 > 2);
console.log('07)', 3 <= 2);
console.log('08)', 3 >= 2);

console.log('09)', undefined == null);
console.log('10)', undefined === null);

console.log()
console.log('------------------')


/* OPERADORES LÓGICOS */

function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2;
    const comprarTV50 = trabalho1 && trabalho2;
    // const comprarTV32 = !!(trabalho1 ^ trabalho2); // bitwise XOR
    const comprarTV32 = trabalho1 != trabalho2; // XOR
    const manterSaudavel = !comprarSorvete; // Operador unário

    return { comprarSorvete, comprarTV50, comprarTV32, manterSaudavel }
}

console.log( compras( true, true ) )
console.log( compras( true, false ) )
console.log( compras( false, true ) )
console.log( compras( false, false ) )