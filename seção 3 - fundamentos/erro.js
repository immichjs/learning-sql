function tratarErroELancar() {
    // throw new Error('...').
    // throw 10.
    // throw true.
    // throw ''.
    throw { // Força um erro.
        nome: erro.name,
        msg: erro.message,
        date: new Date()
    }
}

const obj = { nome: 'Qiyana' }

function imprimirNomeCapslock(parameter) {
    try {
        console.log(`Eu sou a ${parameter.neimi.toUpperCase()}!!`)
    } catch(error) { // Captura e cria um identificador para tratar o erro.
        console.log('Ocorreu um erro.')
    } finally { // executa independente se o try ter erro ou não.
        console.log(`Eu sou a ${parameter.nome.toUpperCase()}!!`)
    }
}

imprimirNomeCapslock(obj)