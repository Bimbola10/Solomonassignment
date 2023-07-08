let prompt = require('prompt-sync')({sigint: true})

                                                       // QUESTION 1

let number = prompt('Enter a number: ')

//check if the number is even and range of 2 to 5
if(number % 2 == 0, number >= 2 && number <= 5) {
    console.log("Not Weird");
}

//check if the number is even and range of 6 to 20
else if(number % 2 == 0, number >= 6 && number <= 20) {
    console.log("Weird");
}

//check if the number is even and greater than 20
else if(number % 2 == 0, number > 20) {
    console.log("Not Weird");
}

// if the number is odd
else {
    console.log("Weird");
}



                                                          // QUESTION 2

let num1 = parseFloat(prompt('Input Your First Number: '))

let operator = prompt('Input Arithmetic Sign: ')

let num2 = parseFloat(prompt('Input Your Second Number: '))

// Addition 
if(operator == '+') {
    result = num1 + num2;
}

// Subtraction 
else if(operator == '-') {
    result = num1 - num2;
}

// Division
else if(operator == '/') {
    result = num1 / num2;
}

// Multiplication
else if(operator == '*') {
    result = num1 * num2;
}

// Output
console.log(`${num1} ${operator} ${num2} = ${result}`);



                                                           // QUESTION 3

let budgeted_price = prompt('Enter Your Budget: ')

if(budgeted_price >= 300000 && budgeted_price <= 500000){
    result = budgeted_price * 0.1;
}
else if(budgeted_price > 500000){
    result = budgeted_price * 0.2;
}

console.log(`Your Downpayment is ${result}`);




                                                           // QUESTION 4

let maths = prompt("Question 1: What's is 20 x 2?: ")

let current_affair = prompt("Question 2: What's is the capital of Nigeria?: ")

let english = prompt("Question 3: What's is the past tense of 'Read'?: ")

if(maths == '40'){
    console.log('Question 1: "40" is the correct answer')
}
else{console.log(`Question 1: ${maths} is the wrong answer`)}

if(current_affair == 'abuja'){
    console.log('Question 2: "abuja" is the correct answer')
}
else{console.log(`Question 2: ${current_affair} is the wrong answer`)}

if(english == 'read'){
    console.log('Question 3: "read" is the correct answer')
}
else{console.log(`Question 3: ${english} is the wrong answer`)}





















