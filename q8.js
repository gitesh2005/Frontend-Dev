// Q8: Employee Salary Projection
// Calculate 5-year salary projection with increments.

// Step 1: Declare current salary and increment rate
let currentSalary = 35000;       // monthly salary (example)
let incrementRate = 10;          // 10% per year

// Step 2: Create an array to store yearly projection data
let projection = [];

// Step 3: Use for loop to compute 5-year salary projection
for (let year = 1; year <= 5; year++) {

    // Calculate increment amount
    let incrementAmount = (currentSalary * incrementRate) / 100;

    // Update salary using assignment operator (salary = salary + increment)
    currentSalary += incrementAmount;

    // Round salary using Math.round()
    let roundedSalary = Math.round(currentSalary);

    // Push data (year + salary) into projection array
    projection.push({
        Year: `Year ${year}`,
        Salary: `₹${roundedSalary}`
    });
}

// Step 4: Print projection in console table
console.table(projection);
