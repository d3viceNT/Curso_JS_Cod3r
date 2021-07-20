const escola = "cod3r";
console.log( escola.charAt(1) );
console.log( escola.indexOf('r') );
console.log( escola.substring(1, 4) );
console.log( "Escola: ".concat(escola) );
console.log( escola.replace(3, 'e') );
console.log( 'Ana,Maria,Julia'.split(',') );

/* Template String*/
const nome = "Maria"
console.log(`A ${nome} sabe 
                        que 12 + 8 é ${12 + 8}`); // Com template strings, tudo que estiver em ${} será considerado código JS, assim como os espaços em branco

console.log()
const up = texto => texto.toUpperCase();
console.log(`Ei...${ up('cuidado') }`)