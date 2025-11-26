function product(name, price){
  this.name = name
  this.price = price
}

product.prototype.applyDiscount = function(percent){
  const discount = (this.price * percent) / 100
  return +  (this.price - discount).toFixed(2)
}

const p1 = new product('Shirt', 799)
const p2 = new product('Shoes', 2499)
const p3 = new product('Watch', 1499)

console.log(p1.name, 'new price', p1.applyDiscount(10))
console.log(p2.name, 'new price', p2.applyDiscount(25))
console.log(p3.name, 'new price', p3.applyDiscount(5))
