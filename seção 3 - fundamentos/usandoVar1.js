{
    {
        var sera = 'Será?' // É uma variável global independente do scope.
        console.log(sera)
    }
}

console.log(sera)

function testeDeScope() {
    var local = 123 // Porém quando é declara dentro de uma function, ela só pode ser
    // utilizada dentro desse scope
    console.log(local)
}

testeDeScope()

console.log('local') // Uma variável 'var' chamada fora da function de onde pertece gera um Erro.
