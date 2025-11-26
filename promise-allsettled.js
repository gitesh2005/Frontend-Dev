function loadprofile(){
    return new Promise(r => setTimeout(() => r("profile") ,800));

}

function loadposts(){
    return new Promise(r => setTimeout(() => r("posts") ,500));
}

function loadmessage(){
    return new Promise( r=> setTimeout(() => r("message") , 200));
}


Promise.allSettled([loadprofile() , loadposts() , loadmessage()])
    .then(r => console.log(r));