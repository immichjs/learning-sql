// Usando notação literal de Object.
const obj1 = {} // Notação Literal.
console.log(obj1)

// Object em JS.
console.log(typeof Object, typeof new Object)
const obj2 = new Object // Instânciou a const 'obj2' para um Object.
console.log(obj2)

// Funções Construtoras.
function Produto(nome, preco, desconto) {
    this.nome = nome // Método público e pode ser alterado fora do scope da function Produto.
    this.getPrecoComDesconto = () => { // Método público pode ser chamado como function a partir de
        // '()' após o nome da function declarada.
        return preco * (1 - desconto) // Faz os calculos para retornar o preço do Object que ainda
        // vai ser instânciado com desconto.
    }
}

const p1 = new Produto('Caneta', 1.90, 0.15)
const p2 = new Produto('Notebook', 2799.90, 0.25)
console.log(p1.getPrecoComDesconto().toFixed(2)) // 'toFixed(2)' diminui o tamanho de numeros após
// ponto flutuante.
console.log(p2.getPrecoComDesconto().toFixed(2))

// Função Factory.
function criarFuncionario(nome, salarioBase, faltas) {
    return { // Retorna um Object.
        nome,
        salarioBase,
        faltas,
        getSalario() { // Função que calcula o salário total do mês e múltiplica o resultado da
            // subtração das faltas ocorridas no mês.
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

console.log(criarFuncionario('Michel', 1006.90, 3))
console.log(criarFuncionario('Nicole', 6000, 1))
console.log(f1.getSalario().toFixed(2), f2.getSalario().toFixed(2))

// Object.create
// Explicação em breve.
const filha = Object.create(null)
filha.nome = 'Pietra'
console.log(filha)

// Uma função famosa que retorna Objeto.
// Explicação em breve.
const fromJSON = JSON.parse('{"info": "Eu sou um JSON"}')
console.log(fromJSON.info)