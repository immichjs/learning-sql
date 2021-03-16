// function factory, é uma função que retorna um Object.
// factory tem objetivo de fabricar uma instância de um Object. 
function createPerson() { // Cria uma funçãoque retorna um Object contendo atributos.
    return {
        name: 'Michel',
        age: 17
    }
}
console.log(createPerson())