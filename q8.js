let currentSalary = 35000;     
let incrementRate = 10;    

let projection = [];
for (let year = 1; year <= 5; year++) {

    let incrementAmount = (currentSalary * incrementRate) / 100;
    currentSalary += incrementAmount;

    let roundedSalary = Math.round(currentSalary);

    projection.push({
        Year: `Year ${year}`,
        Salary: `₹${roundedSalary}`
    });
}
console.table(projection);
