function Carro(velocityMax = 200, delta = 5) {
    // Atributo privado.
    let currentVelocity = 0 // Velocidade atual começa em 0.
    
    // Método público.
    this.acelerar = function() { // 'this'.id em uma função, transforma esse método em público.
        if(currentVelocity + delta <= velocityMax) {
            currentVelocity += delta
        } else {
            currentVelocity = velocityMax
        }
        // Se a velocidade atual(0) + delta(5) for menor ou igual a velocidade máxima(200),
        // incrementa a velocidade atual com o valor de delta sendo assim +5,
        // caso contrário, velocidade atual recebe o valor da velocidade máxima.
    }

    // Método público.
    this.getCurrentVelocity = function() { // Objeto.getCurrentVelocity(), Objeto = instância da
        // função construtora Carro().
        return currentVelocity // Retorna a velocidade atual.
    }
}

const uno = new Carro // Instância a função 'Carro', com a const declarada por 'uno',
// assumindo os valores padrões determinados na função principal(velMax(200), delta(5)).
console.log(uno) // Objeto.

uno.acelerar()
console.log(`Velocidade Atual de Uno: ${uno.getCurrentVelocity()}`)

const ferrari = new Carro(350, 20)

ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(`Velocidade Atual de Ferrari: ${ferrari.getCurrentVelocity()}`)

console.log(typeof Carro) // Função construtora.
console.log(typeof uno) // Objeto instânciado.
console.log(uno)