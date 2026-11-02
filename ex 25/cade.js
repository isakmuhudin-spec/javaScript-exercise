
// const numbers = [1, 2, 3];

const newNumbers = [...numbers, 4, 5, 6]

console.log(newNumbers)


function multiply (...numbers) {
 return numbers.reduce((total, num) => total + num , 2)
}

 console.log (multiply(5 * 7))
  console.log (multiply(5 * 5))
   console.log (multiply(99 * 7))
    console.log (multiply(3 * 9))
     console.log (multiply(7 * 7))
      console.log (multiply(4 * 7))