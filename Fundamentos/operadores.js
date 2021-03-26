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

/* OPERADORES DE ATRIBUIÇÂO */

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