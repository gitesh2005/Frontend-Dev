let userName = "Gitesh";

let time = new Date().getHours();

let greetingMessage = "";

if (time < 12) {
    greetingMessage = `Good Morning ${userName}!`;
}
else if (time >= 12 && time < 17) {
    greetingMessage = `Good Afternoon ${userName}!`;
}
else {
    greetingMessage = `Good Evening ${userName}!`;
}

console.log(greetingMessage);
