Array.prototype.reduce3 = function(callback, valorInicial) {
    const indexInicial = valorInicial ? 0 : 1
    let acumulador = valorInicial || this[0]
    for(let i = indexInicial; i < this.length; i++) {
        acumulador = callback(acumulador, this[i], i, this)
    }
    return acumulador
}   

console.log([1, 2, 3, 4, 5, 6].reduce3(function(acumulador, atual) {
    return acumulador + atual
}, 21))

// REVISAR E COMPRENDER O CÓDIGO E EXPICAR.