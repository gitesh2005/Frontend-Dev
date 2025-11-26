let f=document.querySelector("form")

let nm=document.getElementById("name")
let em=document.getElementById("email")
let ph=document.getElementById("phone")
let pw=document.getElementById("pass")

function show(x,ok){
    if(ok){
        x.style.border="2px solid green"
        x.nextElementSibling.innerText=""
    }else{
        x.style.border="2px solid red"
        x.nextElementSibling.innerText="invalid"
    }
}

f.addEventListener("submit",function(e){
    e.preventDefault()

    let a=/^[a-zA-Z ]+$/.test(nm.value)
    let b=/^[\w.-]+@[\w.-]+\.[a-z]+$/i.test(em.value)
    let c=/^[0-9]{10}$/.test(ph.value)
    let d=/^(?=.*[A-Z])(?=.*\d)(?=.*[@#%]).{6,}$/.test(pw.value)

    show(nm,a)
    show(em,b)
    show(ph,c)
    show(pw,d)
})
