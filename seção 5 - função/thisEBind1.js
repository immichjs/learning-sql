const pessoa = {
    boasVindas: 'Olá ',
    falar(nome = 'Nenhum nome foi definido.') {
        console.log(this.boasVindas, nome)
    }
}
pessoa.falar()
pessoa.falar('Michel')

const falar1 = pessoa.falar
falar1() // Resulta em um conflito entre paradigmas, Funcional e OO.

const falarDePessoa = pessoa.falar.bind(pessoa) 
// bind (Objeto a ser referenciado).

falarDePessoa('Nicole') // Parâmetro definido para função: falar() dentro Objeto (pessoa).