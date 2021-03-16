const notas = [2.5, 4.7, 8.1, 9.8, 10]

for(let i in notas) { // for in percorre os index do array e não os elementos.
    console.log(`Indice: ${i} \nNotas: ${notas[i]}`)
}

const pessoa = {
    nome: 'Qiyana',
    idade: 16,
    peso: 48
}

for(let atributo in pessoa) { // Percorre o nome do atributo contido no Object.
    console.log(`${atributo}: ${pessoa[atributo]}`)
}