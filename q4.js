let marks = [
    87,
    88,
    98,
    45,
    36
]

let total = 0;
let detained = false;
for(let i = 0 ; i < marks.length ; i++){
    if(marks[i] < 35){
        detained  = true;
        break;
    }
}

for(let i = 0 ; i < marks.length ; i++){
    total += marks[i];
}

let average = total / marks.length;

let percentage = (total/500)*100;

let result = "";



if(detained){
    result = "Detained (Failed in one or more subjects)";
}
else if(percentage > 85){
    result = "Promoted with Distinction";
}
else if(  50 <= percentage  && percentage <= 84){
    result = "Promoted";
}
else{
    result = "Detained";
}


console.log("--- Academic performance Report");
console.log(`Marks: ${marks}`);
console.log(`Total: ${total}`);
console.log(`Average: ${average.toFixed(2)}`);
console.log(`Percentage: ${percentage.toFixed(2)}%`);
console.log(`Final Result: ${result}`);
