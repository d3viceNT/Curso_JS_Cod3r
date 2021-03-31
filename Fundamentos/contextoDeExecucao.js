let a = 4
global.b = 4
this.c = 123

console.log(this.a) // Mesmo sendo global, "a" não estará acessível para o "this", porque foi declarado com let
console.log(global.b) 
console.log(this.c)
console.log(module.exports.c)
console.log(this === module.exports)