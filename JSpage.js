console.log(`Hello`); // backticks = `` = used bc it helps with variables later on
console.log(`World !!!`);

window.alert(`This is an alert!!`);
window.alert(`I like gluten!`);
// comment
/* 
    Multi-line comment
    wow
*/
document.getElementById("myH1").textContent = `EYY JS!`;
document.getElementById("myP").textContent = `I like TS!`;

// variable = container that stores a value.

// declaration = let x;
// assignment x = 100;

let x;
x = 600
console.log(x);

//variables:
let age = 25;
let price = 10.99;
let firstName = "Ambi";
let fullName = "Heinzida Ambi"
let online = true;

//console:
console.log(`You are ${age} years old`);
console.log(`The price is £${price}`);
console.log(`bro is online: ${online}`);

//typeof:
console.log(typeof firstName);
console.log(typeof price);
console.log(typeof age);
console.log(typeof online);

//using JS vars for p contents

document.getElementById("p1").textContent = "My full name: " + fullName;
document.getElementById("p2").textContent = `You are ${age} year old probaly...`

//arithmetic operators: + - * / ...
let students = 29;
students += 1;
students -= 1;
students *= 2;

students %= 30;
let unpairedStudents = students; // 2; nope it produced comment. use Math.floor(a / b) or Math.trunc(a / b)
unpairedStudents = Math.floor(unpairedStudents/2);
let squareStudents = students;
squareStudents **= 2;
document.getElementById("p3").textContent = `Students calculated: ${students}.`

//increment, decrement:
students++;
students--;

/*  operator precedence:
        1. parenthesis
        2. exponents
        3. mult and division and modulo
        4. addition
        SO IT IS JUST BIDMAS...
*/

//Get user input. 
let username;
username = window.prompt("What's ya username?"); //easiest, not professional.
console.log(`Username entered: ${username}`);

document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myText").value;
    console.log(`username submitted: ${username}`);
    document.getElementById("myH1").textContent = `Hallo ${username}`;   
}

// type conversion = change the datatype of a value to another (strings, numbers, booleans)
let num = window.prompt("give num!");
num = Number(num) // converts string or bool to number
num+=1;
console.log(num, typeof num);