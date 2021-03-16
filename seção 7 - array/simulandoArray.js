// Não é recomendado simular um array com Object, pois o array tem muitas funções dentro dele que,
// podem falicitar a utilização.
// Exemplo apenas para estudo.
const quaseArray = {
    0: 'Rafael',
    1: 'Ana',
    2: 'Bia'
}
console.log(quaseArray)
Object.defineProperty(quaseArray, 'toString', {
    value: function() {
        return Object.values(this)
    },
    enumerable: false
})

console.log(quaseArray[0])

const arrayNormal = ['Rafael', 'Ana', 'Bia']
console.log(quaseArray.toString(), arrayNormal)