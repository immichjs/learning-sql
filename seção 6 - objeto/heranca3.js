const pai = {
    nome: 'Michel',
    hairColor: 'Preto'
}

const filha = Object.create(pai) // Já referência para o Object passado como parâmetro.
// filha tem como protótipo o Object 'pai'.
filha.nome = 'Pietra'
console.log(filha.hairColor) // Acessando a cor do cabelo a partir da herança.

const filho = Object.create(pai, { // Define algumas propriedades para esse Object.
    nome: { 
        value: 'Henry',
        enumerable: true, // Caso 'enumerable' fosse alterado para false, quando chamasse pelo
        // atributo 'filho', nada seria mostrado, pois contém um valor mas não 'visível'.
        writable: false
    }
})

console.log(filho.nome)
filho.nome = 'Pietro'
console.log(`${filho.nome} tem cabelo ${filho.hairColor}`)

console.log(Object.keys(filha)) // Retorna apenas o nome dos atributos do Object.
console.log(Object.keys(filho))

for(let key in filho) {
    // hasOwnProperty significa 'O atributo desse Object pertence ao mesmo'.
    filho.hasOwnProperty(key) ? console.log(key) : console.log(`Por herança: ${key}`) 
    // Se hasOwnProperty retornar 'true', mostra os atributos, se não mostra os atributos por
    // herança.
}