const Aula = function(nome, videoID) { // Função construtora.
    this.nome = nome // this torna um atributo público e pode ser acessado externamente.
    this.videoID = videoID
}
const aula1 = new Aula('Bem vindo', 123) // Instânciando um novo Object com new.
const aula2 = new Aula('Até breve', 456)

console.log(aula1, aula2)

// Simulando a palavra reservada 'new'.
function novo(f, ...parameters) { // Tudo isso é a mesma coisa que o uso do new.
    const obj = {} // Cria um obj novo.
    obj.__proto__ = f.prototype // Atribui o protótipo de obj ao prototype da função passada.
    f.apply(obj, parameters) // Recebe 'obj' como contexto que f vai receber, e '...parameters,
    // retorna um array com todos os elementos dentro do 'obj'.
    return obj // retorna o obj, com todos os dados passados.
}
const aula3 = novo(Aula, 'Bem vindo', 123)
const aula4 = novo(Aula, 'Até breve', 456)

console.log(aula3, aula4)