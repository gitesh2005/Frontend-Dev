const products = [
  { id: 1, name: 'T-shirt', category: 'Apparel', price: 499, stock: 25 },

  { id: 2, name: 'Laptop', category: 'Electronics', price: 45000, stock: 5 },

  { id: 3, name: 'Mouse', category: 'Electronics', price: 799, stock: 0 },

  { id: 4, name: 'Notebook', category: 'Stationery', price: 45, stock: 120 },

  { id: 5, name: 'Jeans', category: 'Apparel', price: 1499, stock: 8 }
]

function getLowStockProducts(list, threshold = 10){
    
  return list.filter(p => p.stock <= threshold)
}

function sortProductsByPrice(list, ascending = true){
  return [...list].sort((a, b) => ascending ? a.price - b.price : b.price - a.price)
}

function calculateTotalInventoryValue(list) {
  return list.reduce((sum, p) => sum + p.price * p.stock, 0)
}

function groupByCategory(list){

  return list.reduce((acc, p) => {

    if (!acc[p.category]) acc[p.category] = []

    acc[p.category].push(p)
    return acc
  }, {})
}

console.log('Low stock:', getLowStockProducts(products))
console.log('Sorted ascending:', sortProductsByPrice(products))
console.log('Total inventory value:', calculateTotalInventoryValue(products))
console.log('Grouped by category:', groupByCategory(products))
