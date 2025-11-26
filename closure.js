function makemultiplier(multiplier){
    return function (num){
        return num * multiplier;
    };
}

const triple = makemultiplier(3);
console.log(triple(5));