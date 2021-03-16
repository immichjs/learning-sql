// Solução do curso
function compras(trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTV50 = trabalho1 && trabalho2
    // const comprarTV32 = !!(trabalho1 ^ trabalho2) // bitwise xor
    const comprarTV32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete
    return { 
        comprarSorvete,
        comprarTV50,
        comprarTV32,
        manterSaudavel
    }
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))

function verificaPossibilidadeDeCompra(trabalho1, trabalho2) {
    if(trabalho1 && trabalho2) {
        return 'Comprar sorvete e comprar TV50'
    } else if(trabalho1 || trabalho2) {
        return 'Comprar sorvete e comprar TV32'
    } else {
        return 'Manter-se saudável'
    }
}

console.log(verificaPossibilidadeDeCompra(true, true))
console.log(verificaPossibilidadeDeCompra(true, false))
console.log(verificaPossibilidadeDeCompra(false, true))
console.log(verificaPossibilidadeDeCompra(false, false))
