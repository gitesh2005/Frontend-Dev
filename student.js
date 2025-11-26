class student{
    constructor(name , marks){
        this.name = name
        this.marks = marks
    }

    calculateAverage(){
        if(!this.marks.length) return 0
        const total = this.marks.reduce((s , m) => s + m, 0)
        return total / this.marks.length
    }

    getgrade(){
        const avg = this.calculateAverage()
        if(avg >= 85) return 'A'
        if(avg >= 70) return 'B'
        if(avg >= 50) return 'C'
        return 'F'
    }
}

const s1 = new student('gitu' , [87 , 77 , 88])
const s2 = new student('rahul' , [78,47,79])
const s3 = new student('pawan' , [76,58,79])

console.log(s1.name, s1.calculateAverage(), s1.getgrade())
console.log(s2.name, s2.calculateAverage(), s2.getgrade())
console.log(s3.name, s3.calculateAverage(), s3.getgrade())