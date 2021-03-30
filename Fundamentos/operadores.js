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