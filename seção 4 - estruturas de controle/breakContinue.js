const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for(let x in nums) {
    if(x == 5) {
        break // Não influencia num bloco tipo 'if'.
        // Procura o for, while, e switch mais próximo.
    }
    console.log(`${x} = ${nums[x]}`) // Indice = Valores
}

for(let y in nums) {
    if(y == 5) {
        continue // Ignora o indice atual, e continua com o laço normalmente.
    }
    console.log(`${y} = ${nums[y]}`)
}

// Não é recomendado utilizar rótulos.
externo: 
for(let a in nums) {
    for(let b in nums) {
        if(a == 2 && b == 3) {
            break externo
        }
        console.log(`Par = ${a}, ${b}`)
    }
}