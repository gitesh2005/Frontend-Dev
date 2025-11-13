// Q10: Citizen Eligibility Validator
// Check if a person can vote, drive, and apply for a passport based on age & citizenship.

// Step 1: Input values
let age = 19;           // change for testing
let isCitizen = true;   // true or false

// Step 2: Eligibility logic using nested if-else
if (age >= 18) {
    // Age requirement met
    if (isCitizen) {
        // Citizen + 18+ years
        if (age >= 21) {
            console.log("Eligible for all services."); 
        } else {
            console.log("Eligible to vote only."); 
        }
    } else {
        // Not a citizen but age >= 18
        console.log("Only age criteria met.");
    }
} 
else {
    // Under 18
    console.log("Not eligible yet.");
}
