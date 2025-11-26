const menu ={
    burger:120,
    pizza :433,
    fires : 90,
    cola :43
}

function calculatebill(orderitems){
    const prices = orderitems.map(items => {
        if(!(items in menu)) throw new Error('Invalid item : ' + items)
            return menu[items]
    })
    return prices.reduce((sum , p) => sum + o, 0)
}

try {
  const bill1 = calculatebill(['burger', 'fires', 'cola'])
  console.log('Total:', bill1)
  const bill2 = calculatebill(['pizza', 'salad'])
  console.log('Total:', bill2)
} catch (err) {
  console.log('Order error:', err.message)
}