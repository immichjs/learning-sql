let isAtivo = false
console.log(isAtivo)
isAtivo = true

console.log(isAtivo)
console.log(!isAtivo)

isAtivo = 1
console.log(!!isAtivo)

console.log('True: ')
console.log('!!3 = ', !!3)
console.log('!!-1', !!-1)
console.log("!!' ' = ", !!' ')
console.log("!!'Teste' = ", !!'Teste')
console.log('!![] = ', !![])
console.log('!!{} = ', !!{})
console.log('!!Infinity = ', !!Infinity)
console.log('!!(isAtivo = true) = ',!!(isAtivo = true))

console.log('False:')
console.log(!!0)
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!'')
console.log(!!(isAtivo = false))

console.log('Retorna o primeiro valor true encontrado:')
console.log("!!('' || 0 || null || ' ') = ", !!('' || 0 || null || 'is true.'))
let nome = ''
console.log(nome || 'Desconhecido')