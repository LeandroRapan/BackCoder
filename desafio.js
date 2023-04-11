class ProductManager{
    constructor(){
        this.products=[];
        
    }
    getProducts(){
        return this.products;
    }
   
    addProduct(title, description, price, thumbnail,  stock){
    const product = {
        title,
        description,
        price,
        thumbnail,
        id: this.#nuevoId() + 1,
        stock
    };
    const productExists = this.products.find(p => p.title === product.title);
    if (productExists) {
        console.log("Este producto ya existe en la lista.");
    } else {
        this.products.push(product);
    }
   }
   
   #nuevoId(){
    let maxId = 0;
    this.products.map((product) => {
        if(product.id > maxId) maxId = product.id;
    });
    return maxId;
}id

getProductsById(id){
return this.products.filter(code => code.id === id)

}

}
productManager = new ProductManager()
console.log(productManager.getProducts())

productManager.addProduct("naranja", "una naranja", 4, "thumbnail",  8)
productManager.addProduct("pera", "lo mismo", 2, "thumbnail",  3)
console.log(productManager.getProducts())

console.log(productManager.getProductsById(2))
productManager.addProduct("manzana", "una manzana", 3, "thumbnail",  4)
