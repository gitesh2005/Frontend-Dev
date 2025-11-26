console.log("start");

setTimeout(() => {
    console.log("timeout task");
}, 0);

Promise.resolve().then(() => {
    console.log("promise microtask");
});

console.log("sync log");
console.log("end");