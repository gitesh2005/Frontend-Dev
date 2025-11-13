// Q7: Smart Guessing Game (Number Range)

// Step 1: Generate a secret number between 1–50
let secretNumber = Math.floor(Math.random() * 50) + 1;

// Step 2: Test guess value (you can change this or take input)
let userGuess = 22;

// Step 3: Game logic with nested conditions
console.log(`Secret Number: ${secretNumber}`);
console.log(`Your Guess: ${userGuess}`);

if (userGuess === secretNumber) {
    console.log("Correct guess!");
}
else {
    // If not correct, check closeness
    if (userGuess >= secretNumber - 3 && userGuess <= secretNumber + 3) {
        console.log("Very close!");
    }
    else {
        // Too high or too low
        if (userGuess > secretNumber) {
            console.log("Too high");
        } else {
            console.log("Too low");
        }
    }
}
