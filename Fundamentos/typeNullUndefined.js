const a = {
    name: "João"
}

// Atribuição por referência
const b = a

console.log(a)
console.log(b)

b.name = "Maria"

console.log(a)
console.log(b)

console.log()
console.log("----------------------")


// Atribuição por valor
let c = 3
let d = c
d++

console.log(c)
console.log(d)

console.log()
console.log("----------------------")

/* null e undefined */
let indefinido // não inicializada
console.log(indefinido)

let nulo = null
console.log(nulo)