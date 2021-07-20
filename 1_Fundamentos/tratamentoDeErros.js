
function tratarErroELancar(error) {
    // throw new Error("Estamos com problemas...")
    throw {
        nome: error.name,
        msg: error.message,
        date: new Date
    }
}

function nomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + "!!!")
    } catch (error) {
        tratarErroELancar(error)
    } finally {
        console.log("Volte sempre")
    }
}

const obj = { nome: "marco" }
// const obj = { name: "pedro" } // testando a chamada de finally
nomeGritado( obj )