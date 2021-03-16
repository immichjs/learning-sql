const funcs = []

for(let i = 0; i <= 10; i++) { // Utilizando let ele guarda na memória o valor anterior
    funcs.push(() => console.log(i))
}

funcs[0]()
funcs[4]()
funcs[8]()
// Não gera nenhum erro e a solução funciona corretamente