const champions = [
    { nome: 'Ahri', nota: 7.3, bolsista: false },
    { nome: 'Nidalee', nota: 9.2, bolsista: true },
    { nome: 'Neeko', nota: 9.8, bolsista: false },
    { nome: 'Qiyana', nota: 8.7, bolsista: true }
]

const callback = function(element) { // Callback que retorna apenas os atributos 'notas' do array
    // 'champions'.
    return element.nota
}

console.log(champions.map(callback)) // Aplicando o map() com a callback criada anteriormente.
// retornando: [ 7.3, 9.2, 9.8, 8.7 ], um novo array com todos apenas os atributos 'notas'.
const resultado = champions.map(callback).reduce(function(acumulador, atual) { // reduce(), pode
    // receber 5 parâmetros: 1. acumulador, 2. valorAtual, 3. indexDoElemento, 4. arrayCompleto. 
    // O 5° parâmetro é opcional. 5. valorInicial.
    console.log(acumulador, atual) // Mostra o passo a passo do que está rolando no reduce().
    return acumulador + atual // Retorna a soma do valor anterior + o atual.
}, 0) // valor inicial passado após o callback.

console.log(resultado) // Resultado da soma de todos    os elementos 'nota' do novo array.