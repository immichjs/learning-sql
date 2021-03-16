class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
        console.log(`Avo: ${this.sobrenome}`)
    }
}

class Pai extends Avo { // extends é a forma de dizer que uma class terá uma outra função como
    // protótipo. Nesse caso, class 'Pai', tem como protótipo a class 'Avo'.
    constructor(sobrenome, profissao = 'Profissao') {
        super(sobrenome) // Forma de chamar a super classe, nesse caso, o constructor de de 'Avo'. 
        this.profissao = profissao // Vai atribuir o parâmetro profissao como atributo para o 
        // Object que for instânciado, também terá o atributo sobrenome que vem da class 'Avo'.
        console.log(`Pai: ${this.sobrenome}`)
    }
}

class Filho extends Pai { // Tem como protótipo da class 'Pai'.
    constructor() {
        super('Silva') // 'Silva' é passado para o constructor de 'Pai', e o super contido dentro
        // desse constructor passa esse parâmetro para a super class ou seja 'Avo'.
    }
}

class SegundoFilho extends Pai {
    constructor(sobrenome, profissao) {
        super(sobrenome, profissao) // Para poder chamar os parâmetros dentro do super, precisam
        // estar dentro do constructor dessa class.
    }
}

const filho = new Filho
console.log(filho)

const segundoFilho = new SegundoFilho('França', 'Programador')
console.log(segundoFilho)