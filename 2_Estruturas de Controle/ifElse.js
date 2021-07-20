/* Estrutura IF */

function soBoaNoticia(nota) {
    if (nota > 7) {
        console.log(`Aprovado com: ${nota}`);
    }
}

soBoaNoticia(7.1);
soBoaNoticia(7);

function seForVerdaeEuFalo(valor) {
    if (valor) {
        console.log(`É verdade... ${valor}`);
    }
}

seForVerdaeEuFalo()
seForVerdaeEuFalo(null)
seForVerdaeEuFalo(undefined)
seForVerdaeEuFalo(NaN)
seForVerdaeEuFalo('')
seForVerdaeEuFalo(0)
seForVerdaeEuFalo(-1)
seForVerdaeEuFalo(" ")
seForVerdaeEuFalo([])
seForVerdaeEuFalo([1, 2])
seForVerdaeEuFalo({})

console.log("")
console.log("--------------------")
console.log("")

/* Estrutura IF-ELSE */

function soBoaNoticia2(nota) {
    if (nota > 6 && nota < 7) {
        console.log(`Recuperação com: ${nota}`);
    } else if (nota >= 7) {
        console.log(`Aprovado com: ${nota}`);
    } else {
        console.log(`Reprovado com: ${nota}`);
    }
}

soBoaNoticia2(7.2);
soBoaNoticia2(2);
soBoaNoticia2(6.8);
soBoaNoticia2("Epa!!!"); // Devido a tipagem fraca, não resultará em um erro

console.log("")
console.log("--------------------")
console.log("")

// Adivionando a função "entre" para todos os elementos "Number"
Number.prototype.entre = function(inicio, fim) {
    return this >= inicio && this <= fim;
}

const imprimeResultado = function(nota) {
    if (nota.entre(9, 10)) {
        console.log("Quadro de honra");
    } else if (nota.entre(7, 8.99)){
        console.log("Aprovado");
    } else if(nota.entre(4, 6.99)) {
        console.log("Recuperação");
    } else if (nota.entre(0, 3.99)){
        console.log("Reprovado");
    } else {
        console.log("Nota inválida.");
    }
}

imprimeResultado(8);
imprimeResultado(9.4);
imprimeResultado(2.4);
imprimeResultado(15);


console.log("")
console.log("--------------------")
console.log("")

Number.prototype.entre = function(inicio, fim) {
    return this >= inicio && this <= fim;
}

const imprimeResultadoComProto = function(nota) {
    if (nota.entre(9, 10)) {
        console.log("Quadro de honra");
    } else if (nota.entre(7, 8.99)) {
        console.log("Aprovado");
    } else if (nota.entre(4, 6.99)) {
        console.log("Recuperação");
    } else if (nota.entre(0, 3.99)) {
        console.log("Reprovado");
    } else {
        console.log("Nota inválida");
    }
}

imprimeResultadoComProto(3);
imprimeResultadoComProto(6);
imprimeResultadoComProto(7.5);
imprimeResultadoComProto(9.7);
imprimeResultadoComProto(12);

