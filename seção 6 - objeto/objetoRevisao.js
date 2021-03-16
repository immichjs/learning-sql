// Coleção dinânimca de pares chave/valor.
const produto = new Object // Instância para um Object.
produto.nome = 'Cadeira' // Cria dinâmicamente um atributo de Object.
produto['Marca do Produto'] = 'Genérica' // Cuidado, porque quando for acessar, terá que ser
// chamado da mesma forma a partir de '[]'.
produto.preco = 220

console.log(produto)
delete produto.preco // Deleta o atributo 'preco' criado dinâmicamente.
delete produto['Marca do Produto']
console.log(produto)

const carro = { // Criação de um Object Literal com vários atributos.
    modelo: 'A4',
    preco: 89990,
    proprietario: { // Atributo com outro Object e outros atributos dentro.
        nome: 'Michel',
        idade: 17,
        endereco: {
            logradouro: 'Rua Doutor Rivaldo Costa Oliveira',
            numero: 236
        }
    },
    condutores: [{ // Um atributo com um array de vários Object.
        nome: 'Nicole',
        idade: 16
    }, {
        nome: 'Eliane',
        idade: null
    }],
    calcularValorDoSeguro(){ // É possível criar function dentro de Object.
        // ...
    }
}

carro.proprietario.endereco.numero = 1000 // Acessar um atributo de Object a partir da notação '.'.
carro['proprietario']['endereco']['logradouro'] = 'Av Gigante' // Utilizar quando o atributo que
// foi definido no Object tenha sido a apartir de '[]'.
console.log(carro)

// delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorDoSeguro
console.log(carro)
console.log(carro.condutores) // Cuidado ao acessar atributos que foram excluídos do Object, pois
// serão retornados como 'undefined'.
console.log(carro.condutores.length) // Gera um erro ao acessar atributos de algo que está
// 'null' ou 'undefined'.