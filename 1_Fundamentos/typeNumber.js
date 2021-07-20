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

console.log( );
console.log( typeof media );
console.log( typeof Number );
console.log( );

// Algumas estranhezas
console.log( 7 / 0); // retornará Infinity
console.log( "10" / 2); // Realizará a operação de divisão
console.log( "10" + 2); // Nesse caso, ocorrerá a concatenação e não a adição dos valores
console.log( "multiplica" * 2); // Retornará NaN (not a number)
console.log( 0.1 + 0.7); // Retornará 0.7999999999999999, por causa da especificação da linguagem