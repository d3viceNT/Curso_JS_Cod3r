/*
* Contexto Léxico
*/
const valor = 'Global'

function contexto() {
    console.log(valor);
}

function exec() {
    const valor = 'Local';
    contexto(); // Usará o contexto onde a função foi escrita
}

exec()

console.log("\n----------------------\n");

/*
* Closure
*/
const x = 'Global'

function fora() {
    const x = 'Local'
    function dentro() {
        return x;
    }
    return dentro;
}

const minhaFuncao = fora()
console.log(minhaFuncao())