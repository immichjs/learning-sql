// Par nome / valor.
const saudacao = "Opa!"

function exec() {
    const saudacao = "E ai."
    return saudacao
}

// Object são grupos aninhados de pares nome / valor.
const client = {
    nome: 'Qiyana',
    idade: 0,
    peso: 52,
    endereco: {
        rua: 'Doutor Rivaldo Costa Oliveira',
        numero: 236
    }
}

console.log(saudacao)
console.log(exec())
console.log(client)
console.log(client.endereco)