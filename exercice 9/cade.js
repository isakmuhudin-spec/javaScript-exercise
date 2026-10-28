
let car = {
    make: "google",
    model: "google-Ai",
    year: "2023",
    start:  function(){
        console.log("The car has started " + this.model)
    }
}

 console.log (car.start())

console.log(car)

console.log(car.make)
console.log(car.model)
console.log(car.year)