function aleatorio([min = 0, max = 1000]) {
    if(max < min) {
        [min, max] = [max, min] // Inverte os valores, se o máximo for menor que o mínimo.
    }

    const valor = Math.random() * (max - min) + min
    return Math.floor(valor) // .floor() arredonda pra baixo, .ceil() arredonda pra cima.
}

let retornaNumeroAleatorio = [0, 10]
console.log(aleatorio(retornaNumeroAleatorio)) // Passado por () atribuido a variável acima.

console.log(aleatorio([10, 20]))
console.log(aleatorio([990]))
console.log(aleatorio([, 25]))
console.log(aleatorio([]))

// console.log(aleatorio()), gera um erro.
retornaNumeroAleatorio = [900]
console.log(aleatorio(retornaNumeroAleatorio))