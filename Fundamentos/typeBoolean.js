let isActive = true;
console.log(isActive);

isActive = false;
console.log(isActive);

isActive = 1;
console.log(!isActive)

console.log()

// Resolve para verdadeiro
console.log(!!1);
console.log(!!-3);
console.log(!!' '); // Espaço em branco 
console.log(!!'teste');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(1);
console.log(1); 

console.log()

// Resolve para falso
console.log(!!0);
console.log(!!''); //String vazia
console.log(!!' ');
console.log(!!'teste');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
