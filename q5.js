// Q5: Weather Activity Planner
// Decide activity based on temperature, rain, and wind speed.

// Step 1: Weather variables
let temperature = 28;       // in °C
let isRaining = false;      // true or false
let windSpeed = 10;         // in km/h

let activityMessage = "";

// Step 2: Apply conditions using logical operators

if (isRaining) {
    activityMessage = "Stay indoors with hot coffee.";
}
else if (temperature > 35) {
    activityMessage = "Go swimming.";
}
else if (temperature < 15 && windSpeed > 20) {
    activityMessage = "Too cold and windy — stay home.";
}
else {
    activityMessage = "Perfect day for a walk.";
}

// Step 3: Display result
console.log("---- Weather Activity Planner ----");
console.log(`Temperature: ${temperature}°C`);
console.log(`Raining: ${isRaining}`);
console.log(`Wind Speed: ${windSpeed} km/h`);
console.log(`Suggestion: ${activityMessage}`);
