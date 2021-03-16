// Exemplo de callback dentro do browser.
document.getElementsByTagName('body')[0].onclick = function() {
    console.log('O evento ocorreu!')
}

// Arrow function.
document.getElementsByTagName('body')[0].onclick = () => console.log('Ocorreu um evento.')