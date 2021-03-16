// Cadeia de Protótipos { prototype chain }.
Object.prototype.atributo0 = '0' // Não recomendado.
const avo = {
    atributo1: 'A'
}
const pai = {
    __proto__: avo, // Referência Object 'avo'.
    atributo2: 'B',
    atributo3: '3'
}
const filho = {
    __proto__: pai, // Referência Object 'pai'.
    atributo3: 'C'
}

console.log(filho.atributo0) // 0. Caso contrário: undefined.
console.log(filho.atributo1) // A.
console.log(filho.atributo2) // B.
console.log(filho.atributo3) // C. Retorna sempre o primeiro atributo encontrado, parecido com o
// scope de function retornando a primeira variável encontrada.
// __proto__ procura sempre no scope de Object mais abrangente.

const carro = {
    currentVelocity: 0,
    maxVelocity: 200,
    acelerarMais(delta) {
        if(this.currentVelocity + delta <= this.maxVelocity) { // Se a velocidade atual + delta,
            // for <= velocidade máxima. Velocidade atual atribui com o valor de delta.
            this.currentVelocity += delta
        } else { // Se ultrapassar a velocidade máxima, velocidade atual atribui o valor de
            // velocidade máxima.
            this.currentVelocity = this.maxVelocity
        }
    },
    status() {
        return `${this.currentVelocity}Km/h de ${this.maxVelocity}Km/h.`
    }
}

const ferrari = {
    modelo: 'F40',
    maxVelocity: 324 // Shadowing, pode sombrear atributos de scope mais abrangente, assim como
    // em function.
}
const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}` // this usado para referênciar o Object atual,
        // super, para referênciar o protótipo.
        // Em vez de procurar a function status() do Object 'volvo', ele procura pela function
        // status(), no Object 'carro', essa é a função de se utilizar 'super'.
    }
}

Object.setPrototypeOf(ferrari, carro) // 'ferrari' tem 'carro' como seu protótipo.
// mesma coisa que colocar um atributo __proto__ dentro de ferrari apontando para o Object: carro.
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())