let nome = 'Qiyana'
const concat = 'Hi ' + nome
nome = 'Nidalee'
const template = `Hi \n${nome}` // Também suporta quebras de linha.
console.log(concat, template)

// Expressões
console.log(`1 + 1 = ${1 + 1}`)
const uppercase = parameter => parameter.toUpperCase() // Arrow function.
console.log(`Hey ${uppercase('Cuidado')}`)