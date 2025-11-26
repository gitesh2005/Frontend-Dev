function getBugs(){
    return new Promise((resolve , reject) => {
        setTimeout(() =>{
            const failed = Math.random() < 0.3;
            if(failed) reject("Api failed");
            else resolve(["UI glitch" , "api timeout" , "login failure"]);
        } , 1000);
    });
}


getBugs()
    .then(bugs => console.table(bugs))
    .catch(err => console.log("error : " , err));