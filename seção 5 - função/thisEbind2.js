function Pessoa() {
    this.segundos = 0
    const self = this // Armazenando 'this' dentro de uma const ela nunca varia, independente de 
    // quem está chamando a função.
    
    setInterval(function() {
        self.segundos++
        console.log(self.segundos)
    }/* .bind(this) */, 1000)
}

new Pessoa // Instância uma function.