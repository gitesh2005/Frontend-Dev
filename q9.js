// Q9: Random Math Quiz Generator
// Generates a random math question and evaluates the correct answer.

// Step 1: Generate two random numbers between 1–20
let num1 = Math.floor(Math.random() * 20) + 1;
let num2 = Math.floor(Math.random() * 20) + 1;

// Step 2: Operators array
let operators = ['+', '-', '*', '/'];

// Step 3: Pick a random operator
let randomOperator = operators[Math.floor(Math.random() * operators.length)];

let correctAnswer;

// Step 4: Calculate answer using switch
switch (randomOperator) {
    case '+':
        correctAnswer = num1 + num2;
        break;

    case '-':
        correctAnswer = num1 - num2;
        break;

    case '*':
        correctAnswer = num1 * num2;
        break;

    case '/':
        // division → rounded to 2 decimals
        correctAnswer = (num1 / num2).toFixed(2);
        break;

    default:
        console.log("Invalid Operator");
}

// Step 5: Display question + answer
console.log("---- Random Math Quiz ----");
console.log(`Question: ${num1} ${randomOperator} ${num2}`);
console.log(`Correct Answer: ${correctAnswer}`);
