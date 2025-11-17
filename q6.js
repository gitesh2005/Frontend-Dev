let totalAmount = 9875; 

let discountRate = 0;

if (totalAmount >= 10000) {
    discountRate = 0.25;   
}
else if (totalAmount >= 5000) {
    discountRate = 0.15; 
}
else if (totalAmount >= 2000) {
    discountRate = 0.05; 
}
else {
    discountRate = 0; 
}

let discountAmount = totalAmount * discountRate;
let finalAmount = totalAmount - discountAmount;

let roundedTotal = Math.round(totalAmount);
let roundedDiscountAmount = Math.round(discountAmount);
let roundedFinalAmount = Math.round(finalAmount);

console.log("---- Progressive Discount System ----");
console.log(`Original Total: ₹${roundedTotal}`);
console.log(`Discount Percentage: ${discountRate * 100}%`);
console.log(`Final Price After Discount: ₹${roundedFinalAmount}`);
