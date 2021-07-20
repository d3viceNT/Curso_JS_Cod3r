function soma(x, y, z){
    x = x || 1;
    y = y || 1;
    z = z || 1;
    return x + y + z;
}

console.log(soma()); // 3
console.log(soma(1, 4, 5)); // 10 
console.log(soma(5)); // 7
console.log(soma(0, 0, 0)); // Erro (zero resolve para falso)

console.log("\n-------------------------\n");

function soma2(x, y, z){
    x = x !== undefined ? x : 1; // uso de operador ternário para verificar se o parâmetro foi passado
    y = 1 in arguments ? y : 1; 
    z = isNaN(z) ? 1 : z; // Verifica se o parâmetro é número e aplica o operador ternário

    return x + y + z;
}

console.log(soma2()); // 3
console.log(soma2(5)); // 7
console.log(soma2(0, 0, 0)); // 0

console.log("\n-------------------------\n");

// A partir do ES5
function soma3(x =1, y =1, z =1){
    return x + y + z;
}
console.log(soma3()); // 3
console.log(soma3(5)); // 7
console.log(soma3(0, 0, 0)); // 0
