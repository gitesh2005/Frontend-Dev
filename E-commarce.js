class Product {        // yaha yek class banaye hai 
    constructor(id, name, price, category) {
      this.id = id
      this.name = name
      this.price = price
      this.category = category
    }

       applyDiscount(percent) {
        this.price = this.price - (this.price * percent / 100)
    }

   getDetails() {
        return `${this.name} | ${this.price} | ${this.category}`
    }
}

const p1 = new Product(1, "Laptop", 55000, "Electronics")
const p2 = new Product(2, "Shoes", 1500, "Fashion")
const p3 = new Product(3, "Mouse", 600, "Electronics")

const productList = [p1, p2, p3]      // list banaye hai 

const expensive = productList.filter(x => x.price > 1000)
console.log(expensive)
