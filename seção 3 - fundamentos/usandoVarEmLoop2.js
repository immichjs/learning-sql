const funcs = []

for(var i = 0; i <= 10; i++) { // Utilizar var ele sempre substitui o valor anterior. 
    funcs.push(() => console.log('i:', i))
}

funcs[0]()
funcs[4]()
funcs[8]()
// Resulta em um bug por usar variável definida com var.