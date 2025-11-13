let expenses = [
    2000,
    3000,
    2330,
    3232,
    4444
]

let total = 0;

for(let i = 0 ; i < expenses.length ; i++){
    total += expenses[i];
}

let average = total / expenses.length;

let taxvalue = 0.10;

let finalAmount = total;

finalAmount += finalAmount * taxvalue;

console.log("Monthly Expenses Report");
console.log(`Total Expenses : ${total.toFixed(2)}`);
console.log(`Average per category: ${average.toFixed(2)}`);
console.log(`Final Amount after 10% tax: ${finalAmount.toFixed(2)}`);