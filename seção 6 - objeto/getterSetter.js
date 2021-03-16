const sequencia = {
    _valor: 1, // Convenção para mostrar que esse atributo ou valor, é apenas pra ser 
    // acessado internamente como se fosse um atributo privado, mas nada impede de acessar
    // externamente.
    get valor() {
        return this._valor++ // Retorna '_valor' incrementado.
    },
    set valor(valor) { // Pode se usar pra fazer uma validação.
        if(valor > this._valor) { // Só vai atribuir o parâmetro 'valor' se for > '_valor'.
            this._valor = valor // Atribui o parâmetro 'valor' pra '_valor'.
        }
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 10 // Atribui um parâmetro a partir de '=' se utilizar 'set'.
console.log(sequencia.valor)
sequencia.valor = 9
console.log(sequencia.valor)

