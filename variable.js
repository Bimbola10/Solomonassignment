let prompt = require('prompt-sync')({sigint: true})


// Question 1

let first_name = prompt('Enter Your First Name: ');

let last_name = prompt('Enter Your Last Name: ');

let age = Number(prompt('Enter Your Age: '));

let current_year = Number(prompt('Enter Your Current Year: '));

let earthly_appearance = current_year - age;

console.log(`${first_name} ${last_name} You are ${age} years old and you came to Earth in the year ${earthly_appearance}`);



// Question 2

let full_name = prompt('Enter Your Full Name: ');

let age = Number(prompt('Enter Your Age: '));

let department_name = prompt('Enter Your Department Name: ');

let score = 34.72;

console.log(`Welcome ${full_name}, You are in ${department_name} department, you are ${age} years old and your score is ${score}`);



// Question 3

let weight = Number(prompt('Enter Your Weight In Pounds: '));

let kilogram = weight * 0.45;

console.log(`Your Weight in Kilogram is: ${kilogram} Kilogram`);
