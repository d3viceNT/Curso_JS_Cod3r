/**
* * 01)​ Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, 
* * subtração, multiplicação e divisão desses valores.
*/  

const operacoesMatematicas  = (num1, num2) => {
    console.log(`
        Soma: ${num1 + num2}
        Subtração: ${num1 - num2}
        Multiplicação: ${num1 * num2}
        Divisão: ${num1 / num2}
    `);
}

// operacoesMatematicas(8, 2);

/**
* * 02)​ Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:  
* * Equilátero: Os três lados são iguais. Isósceles:  Dois lados iguais. Escaleno: Todos os lados são diferentes.  
* * Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação 
* * quanto ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um triângulo).
 */

const tipoDoTriangulo = (lado1, lado2, lado3) => {
    if ((lado1 === lado2) && (lado2 == lado3)) {
        console.log("Equilátero")
    } else if ((lado1 === lado2) || (lado2 == lado3) || (lado1 == lado3)) {
        console.log('Isósceles')
    } else {
        console.log('Escaleno')
    }
}

// tipoDoTriangulo(1, 2, 3);
// tipoDoTriangulo(1, 2, 2);
// tipoDoTriangulo(1, 1, 1);

/** 
* * 03)​ Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.  
*/

const exponenciacao = (base, expoente) => base ** expoente

// console.log(exponenciacao(2, 8));

/** 
* * 04) ​Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o 
* * resultado e o resto da divisão destes dois valores.
*/

const divisao = (a, b) => {
    console.log(`
        Divisao: ${(a / b).toFixed(2)}
        Resto: ${a % b}
    `)
}

// divisao(10, 7);

/**
 * * 05) ​Lidar com números em JavaScript pode dar muita dor de cabeça. Você já viu o que acontece quando faz o 
 * * seguinte comando no console: console.log(0.1 + 0.2); O resultado será: 0.30000000000000004. Outra coisa 
 * * importante de observar, é o fato que o ponto é utilizado no lugar da vírgula e vice versa. Com isso, vamos fazer 
 * * um exercício simples para mostrar dinheiro sempre da forma correta. Desenvolva uma função JavaScript para 
 * * que ela receba um valor como 0.30000000000000004 e retorne R$0,30 (observe a vírgula e o ponto). 
 */

const convertValue = val => {
    let newVal = String(val.toFixed(2)).replace('.', ',');
    console.log(`R$ ${newVal}`)
}

// convertValue(0.30000000000000004);

/**
 * * 06)​ Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. 
 * * A primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda 
 * * retornará o valor da aplicação sob o regime de juros compostos.
 * TESTE
 */