const champions = ['Ahri', 'Neeko', 'Nidalee', 'Syndra']

// forEach, para cada elemento do array ele chama a função callback percorrendo elemento e index.
champions.forEach(function(element, index, array, x) { // Podem ser passados apenas 3 parâmetros por
    // padrão no na function callback do forEach.
    // 1. valorDoElemento, 2. indexDoElemento e 3. arrayCompleto.
    // Qualquer parâmetro passado após os 3 primeiros, seram retornados 'undefined'.
    console.log(`${index + 1} - ${element} \n ${array}`)
    console.log(x) // undefined.
})

champions.forEach(nome => console.log(nome)) // Não necessariamente precisa ser passado todos os
// parâmetros na função callback que for chamada, pode ser apenas um deles, dependendo do que você
// quer fazer.

const exibirChampions = (nome, index) => console.log(`${index + 1} - ${nome}`) // Return implícito.
// Pode armazenar a função em uma variável e depois passar como parâmetro no forEach como callback.
champions.forEach(exibirChampions)