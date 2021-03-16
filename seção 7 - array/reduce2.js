const champions = [
    { nome: 'Ahri', nota: 7.3, bolsista: false },
    { nome: 'Nidalee', nota: 9.2, bolsista: true },
    { nome: 'Neeko', nota: 9.8, bolsista: false },
    { nome: 'Qiyana', nota: 8.7, bolsista: true }
]

const championsMap = element => element.bolsista

// Desafio 1: Todos são bolsistas?

const todosBolsistas = (resultado, bolsista) => resultado || bolsista

console.log(champions.map(championsMap))
console.log(champions.map(championsMap).reduce(todosBolsistas)) // Verifica se tem algum bolsista,
// comparando com o parâmetro anterior e o atual utilizando &&, se todos forem true, retorna 'true'.

// Desafio 2: Algum bolsista?
const algumBolsista = function(resultado, bolsista) {
    return resultado || bolsista
}
console.log(champions.map(championsMap).reduce(algumBolsista)) // Verifica se tem algum bolsista,
// comparando com o parâmetro anterior e o atual utilizando ||, retorna 'true' no primeiro 
// elemento com o valor 'true' que ele encontrar.