// Contexto Léxico tem conciência de onde foi declarada.
    let valor = 'Global'
    function myFunction() {
        console.log(valor) // Busca pela variável 'valor' mais próxima definida,
        // se não for encontrada procura fora do escopo atual
    }   
    function exec() {
        const valor = 'Local'
        myFunction() // Mas se chamada dentro de uma outra função, ela vai executar
        // a função onde foi definida e não da onde o escopo da outra função está.
    }
    exec()