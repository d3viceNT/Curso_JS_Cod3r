
/* Destructuring com objetos */
function rand( {min = 0, max = 1000} ) {
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

const obj = { max: 25, min: 10}
console.log(rand(obj))
console.log(rand({ min: 995 }))

console.log()
console.log("-------------------")
/* Destructuring com arrays */
function randArray( [max = 0, min = 500] ){
    if (min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

console.log(randArray( [90, 10] ))
console.log(randArray( [450] ))
console.log(randArray( [] ))