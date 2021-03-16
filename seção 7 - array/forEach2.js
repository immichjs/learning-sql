Array.prototype.forEach2 = function(callback) {
    for(let i = 0; i < this.length; i++) { // 0 até o tamanho do array, definido por 'this' e 
        // incrementa o valor de 'i', com i++. Nesse caso this é o array que foi passado antes de
        // chamar o forEach2.
        callback(this[i], i, this) // 1. valorDoElemento, 2. indexDoElemento e 3. arrayCompleto.
        // A função 'callback()' é chamada para cada elemento percorrido dentro do array.
    }
}

Array.prototype.forEach3 = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}

const champions = ['Ahri', 'Neeko', 'Nidalee', 'Syndra']
// forEach2, implementada a partir do prototype de array.
champions.forEach2(function(nome, index) {
    console.log(`${index + 1} - ${nome}`)
})

// forEach padrão.
champions.forEach(function(nome, index) {
    console.log(`${index + 1} - ${nome}`)
})