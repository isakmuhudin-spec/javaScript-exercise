
function operate(a, b, callback) {
    return callback(a, b);
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a,b){
    return a * b
}

function devide(a,b){
    return a / b
}



console.log("Addition:", operate(5, 3, add));        // Output: 8
console.log("Subtraction:", operate(5, 3, subtract)); // Output: 2
console.log("multiply", operate(12, 5, multiply) )
console.log("devide" , operate(123, 45 , devide))

