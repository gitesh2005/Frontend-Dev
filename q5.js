let temperature = 28;      
let isRaining = false;    
let windSpeed = 10;     

let activityMessage = "";

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

console.log("---- Weather Activity Planner ----");
console.log(`Temperature: ${temperature}°C`);
console.log(`Raining: ${isRaining}`);
console.log(`Wind Speed: ${windSpeed} km/h`);
console.log(`Suggestion: ${activityMessage}`);
