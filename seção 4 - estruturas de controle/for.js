let contador = 0

// while só pode utilizar um variável que foi declarada fora do scope while.
while(contador <= 10) { // Enquanto contador for menor ou igual a 10, execute.
    console.log(`contador: ${contador++}`)
}

for(let i = 0; i <= 10; i++) { // Incrementa e imprime 'i' até que seja 10 e sai do laço for().
    console.log(`i: ${i}`)
}

const notas = [2.5, 4.7, 8.1, 9.8, 10]

for(let i = 0; i < notas.length; i++) { // Incrementa 'i' até que seja < que o tamanho do
// array ou seja 5 elementos, começando a partir do indice 0.
    console.log(`nota: ${notas[i].toFixed(1)}`) // imprime o valor contido dentro do index
    // volta para o for, incrementa i++ e repete a executação alterando a posição do index
    // do array.
}