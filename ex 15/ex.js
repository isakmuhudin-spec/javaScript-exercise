
const people = [
    {
        name: "Alice", Age: "25", city:"Wonderland"
    },
    {
        name: "Bob", Age: "30", city:"Builderland"
    },
    {
        name:"Charlie" , Age: "35", city:"Chocolate-Factory"
    }
]

console.log("Property and value")

 for (const student of people){
    for (const key in student){
        console.log(key + " " + student[key])
 }

    console.log("--------")

 }
