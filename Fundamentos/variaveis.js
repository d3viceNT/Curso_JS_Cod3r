/* 
    No Javascript existem basicamente duas formas de criar variáveis
        - Usando var
        - Usando let
    A única diferença entre as duas é o escopo em que essas variáveis existem.  Enquanto as variáveis declaradas 
    com let têm escopo de bloco, as variáveis declaradas com var têm escopo global ou escopo de função
*/

let a = 10;
var b = 30;

console.log(a, b);

// let a = 40; // Se tentar redeclarar uma variavel declarada com ler, será retornado um erro
a = 40;
var b = 5;

console.log(a, b);

/* Variáveis declaradas com var estarão no escopo global, exceto quando declaradas dentro de funções */
{
    {
        {
            var sera = 'Será???';
            console.log(sera);
        }
    }
}
console.log(sera);

function local() {
    var localVar = 'É local';
    console.log( localVar );
}

local();
//console.log( localVar ); // Será retornado um erro devido ao escopo da variável