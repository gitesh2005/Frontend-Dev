// Q6: Progressive Discount System
// Applies dynamic discount based on total purchase amount.

// Step 1: Input total purchase amount (you can replace with prompt)
let totalAmount = 9875;  // example input

let discountRate = 0;

// Step 2: Apply discount tiers
if (totalAmount >= 10000) {
    discountRate = 0.25;     // 25%
}
else if (totalAmount >= 5000) {
    discountRate = 0.15;     // 15%
}
else if (totalAmount >= 2000) {
    discountRate = 0.05;     // 5%
}
else {
    discountRate = 0;        // No discount
}

// Step 3: Calculate discount & final amount
let discountAmount = totalAmount * discountRate;
let finalAmount = totalAmount - discountAmount;

// Step 4: Round values using Math.round()
let roundedTotal = Math.round(totalAmount);
let roundedDiscountAmount = Math.round(discountAmount);
let roundedFinalAmount = Math.round(finalAmount);

// Step 5: Display the results
console.log("---- Progressive Discount System ----");
console.log(`Original Total: ₹${roundedTotal}`);
console.log(`Discount Percentage: ${discountRate * 100}%`);
console.log(`Final Price After Discount: ₹${roundedFinalAmount}`);
