const curso = 'Web'

console.log(curso)
console.log(curso.charAt(2)) // Pega o caractere de acordo com o indice definido
// apartir do 0.
console.log(curso.charAt(3)) // Gera uma string vazia caso o indice definido 
// não seja existente em caracteres.
console.log(curso.charCodeAt(0)) // Pega o codigo do caractere em valor 'unicode'.
console.log(curso.indexOf('e')) // Retorna a posição de indice de acordo com o 
// valor definido em string('').
console.log(curso.substring(1)) // Seleciona apartir do indice definido em diante.
console.log(curso.substring(0, 2)) // Pega os caracteres definidos dentre as posições
// de indice exemplo "comece no indice 0, e pegue 2 caractere".

console.log("Curso de ".concat(curso).concat(" Moderno!")) // Formas de concatenar.
console.log('Curso de ' + curso + ' Moderno!')
console.log(`Curso de ${curso} Moderno!`)

console.log(curso.replace('W', 'S')) // Renomeia de acordo com o caractere definido e
// alterado em seguida.
console.log(curso.replace('Web', 'Web Moderno'))
console.log(curso.replace(curso, 'Web Moderno2'))
console.log('Ahri,Nidalee,Neeko'.split(',')) // Transforma em array, o conteúdo em ''