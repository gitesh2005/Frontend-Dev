function applyOperation(numbers, operation) {

    const result = [];

    for (let n of numbers) {

        result.push(operation(n));
    }

    return result;
}

const arr = [1, 2, 3, 4];

const doubled = applyOperation(arr, n => n * 2);

const squared = applyOperation(arr, n => n * n);

console.log("Doubled:", doubled);

console.log("Squared:", squared);
