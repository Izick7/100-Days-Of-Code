function greet(name){
    return "Hello " + name + ", Welcome to Day 3!"

}
// let welcome = greet("Isaac, ")

console.log(greet("Isaac"));


// exercise 1
// Write a function that:

// Receives two numbers
// Returns their sum using return
// Print the result outside the function

function add(a, b) {
    return a + b;

}
let sum = add(5, 20);
console.log(sum);

// Exercise 2 – Subtract Two Numbers

// Write a function that:

// Receives two numbers
// Returns the difference

function subtract(a, b) {
    return a - b;

}
let difference = subtract(70, 30);
console.log(difference);

// Exercise 3 – Find the Largest Number

// Write a function that:

// Receives two numbers
// Returns the larger one

function findLargestNum(num1, num2) {
    if (num1 > num2)
        return num1;
    else
        return num2;


}
let Largest = findLargestNum(1000, 400);
console.log(Largest);

// exercise 4
// Write a function that:

// Receives one number
// Returns true if it's even
// Returns false otherwise

function checkEvenNum(num){
    if(num % 2 === 0)
        return true;
    else{
        return false;
    }
}
console.log(checkEvenNum(10));


// Exercise 5 – Check if a Number is Odd

// Write a function that:

// Receives one number
// Returns true if it's odd
// Returns false otherwise

function checkOddNum(num){
    if(num % 2 ===1)
        return true;
    else{
        return false;
    }
}

console.log(checkOddNum(4.5));