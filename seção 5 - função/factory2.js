function createProduct(name, price){
    return { // É possível criar uma function que retorna um Object com multiplas function.
        name,
        price,
        sale: 0.1
    }
}

console.log(createProduct('Samsung Galaxy J4 Core', 899.90));
console.log(createProduct('Samsung Galaxy S5', 1399.90));