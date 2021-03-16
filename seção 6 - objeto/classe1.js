class Lancamento {
    constructor(nome = 'Genérico', valor = 0) { // Se transforma em uma função construtora, quando
        // instânciada com new.
        this.nome = nome
         this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = [] // Array vazio que vai receber todos os parâmetros da function,
        // 'addLancamentos'.
    }
    addLancamentos(...lancamentos) {
        lancamentos.forEach(element => this.lancamentos.push(element)) // Concatena todos
        // os parâmetros passado em 'lancamentos', junta todos esses parâmetros em um array,
        // percorre cada elemento do array criado e da um push em cada um dos elemento para o array
        // 'this.lancamentos'.
        console.log(lancamentos) // Array com todos Objetos instânciados e com seus respectivos
        // valores.
    }
    sumario() {
        let valorConsolidado = 0
        this.lancamentos.forEach(element => { // Percorre todos os elementos do array 'lancamentos' e atribui o valor somado, na
            // variável 'valorConsolidado'.
            valorConsolidado += element.valor
        })
        return valorConsolidado // Retorna 'valorConsolidado' já com a soma aplicada.
    }
}

// Instância objetos a partir da class Lancamentos
const salario = new Lancamento('Salario', 45000)
const contaDeLuz = new Lancamento('Luz', -220)
console.log(typeof salario, typeof contaDeLuz)

const contas = new CicloFinanceiro(6, 2018)
contas.addLancamentos(salario, contaDeLuz) // Manda os dois Objetos com os valores para um array.
console.log(contas.sumario()) // Soma todos os valores dentro do array 'lancamentos'.
