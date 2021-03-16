console.log(Math.ceil(6.9))
const obj = {}
obj.nome = 'Primeiro Nome' // Cria dinâmicamente um atributo apartir do ponto.
// obj['nome'] = 'Primeiro Nome' - Não recomendado.
console.log(obj.nome) // Usa-se para acessar um atributo de Object ou funçoes públicas.

function Obj(nome) {
    this.nome = nome // Torna um atributo de uma função pública.
    this.exec = function() {
        console.log('Exec...')
    }
}

const obj2 = new Obj('Qiyana') // Instância uma função.
const obj3 = new Obj('Nidalee')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()