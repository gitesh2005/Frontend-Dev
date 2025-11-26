class Cart{
    constructor(){
        this.items = [];
    }


    add(name , price , quantity) {
        this.items.push({ name, price, quantity});
    }

    total(){
        return this.items.reduce((sum , item) => sum + item.price * item.quantity , 0);
    }


    coupan(code){
        const match = /^(SAVE|DISC)(\D{2})$/.exec(code);
        if(!match) return this.total();

        const percent = Number(match[2]);
        const t = this.total();

        return t - (t * percent / 100);
    }
}


const cart = new Cart();
cart.add("bag" , 800 , 2);
cart.add("shoes" , 1500 , 1);


console.log(cart.total());

console.log(cart.coupan("SAVED20"));