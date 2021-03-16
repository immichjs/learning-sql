// Arrow function tem um 'this' constante, que não se altera dependendo de quem está chamando.
function Pessoa() {
    this.segundos = 0

    setInterval(() => {
        console.log(this.segundos++) // this não variante.
    }, 1000)
}

new Pessoa() // Objeto instânciado a partir de uma função.
console.log(typeof Pessoa) // Função.
console.log(typeof new Pessoa) // Objeto.