
const imprimeResultado = (nota) => {
    switch (Math.floor(nota)) {
        case 10:
        case 9:
            console.log("Quadro de honra");
            break;
        case 8:
        case 7:
            console.log("Aprovado");
            break;
        case 6: case 5: case 4:
            console.log("Recuperação");
            break;
        case 0: case 1: case 2: case 3:
            console.log("Reprovado");
            break;
        default:
            console.log("Nota inválida");
            break;
    }
}

console.log("\n--------------------\n")

imprimeResultado(3);
imprimeResultado(6);
imprimeResultado(7.5);
imprimeResultado(9.7);
imprimeResultado(12);

console.log("\n--------------------\n")