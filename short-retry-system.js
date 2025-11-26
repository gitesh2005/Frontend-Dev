function submitorder(){
    return new Promise((res , rej) => {
        Math.random() >0.5 ? res() : rej();
    });
}

async function process(){
    for(let i = 1  ; i <= 3 ; i++){
        try{
            await submitorder();
            console.log("success on try", i);
            return;
        } 
        catch{
            console.log("fails" , i);
        }
    }

    console.log("order failed");
}

process();