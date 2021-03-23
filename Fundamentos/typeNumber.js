/*
*  Tipos numéricos: Number
*/
const peso1 = 10.0;
const peso2 = Number('5.3');

console.log( peso1 + peso2 );
console.log( Number.isInteger(peso1) );
console.log( Number.isInteger(peso2) );

const nota1 = 6.767;
const nota2 = 8.147;
const total = nota1 * peso1 + nota2 * peso2;
const media = total / (peso1 + peso2);        
console.log( media );
console.log( media.toFixed(2) ); // Define o número de casas decimais