function Car(brand , model){
    this.brand = brand;
    this.model = model;
}

Car.prototype.getDetails = function (){
    console.log(this.brand + " - " + this.model);

};

const c1 = new Car("lambo" , "urus");
const c2 = new Car("tata" , "nexon");

c2.getDetails();
c1.getDetails();