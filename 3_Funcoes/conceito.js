// Função em JS é First-Class Object (Citizens)
// High-Order Function (HOF)

// Função em forma literal
function  fun1() { }

// Função armazenada em uma variável
const fun2 = function () { }

// Função armazenada em um array
const array = [function (a, b) { return a + b }, fun1, fun2]
console.log(array[0](7, 3))

// Função armazenada em um objeto
const obj = {}
obj.falar = function () { return 'Olá!' }
console.log(obj.falar())

// Função como parâmetro de outra função
function run (func) {
  func()
}
run( function() { console.log('Executando...') } )

// Uma função pode retornar/conter outra função
function soma (a, b) {
    return function(c) {
        console.log(a + b + c)
    }
}

soma(2, 3)(4)