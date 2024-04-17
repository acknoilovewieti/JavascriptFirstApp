

/************************ */
document.getElementById("section1").innerHTML = "-----------------SECTION1";

let stTelef = "343.548.7281"
let stSomeText = "ksdhfl sjsldfj asldjfls sldkfjsl"
console.log(stTelef.replaceAll('.', '-'));
console.log(stSomeText.slice(0, stSomeText.indexOf(' ')));

let text1 = "Hello"
document.getElementById("p1").innerHTML = text1 + " World!";

let studentName = "Bro";
let age = 45;
let isValide = true;

console.log(studentName, "is", age, "years old.", "Is active student:", isValide);
document.write('ggg<b>b</b>b');

/********************* */
document.getElementById("section2").innerHTML = "-----------------SECTION2";
let counter = 5;

document.getElementById("btMinus").onclick = function(){
    counter -= 1;
    console.log("-")
    document.getElementById("counterLabel").innerHTML = counter;
}
document.getElementById("btReset").onclick = function(){
    counter = 0;
    console.log("0")
    document.getElementById("counterLabel").innerHTML = counter;
}
document.getElementById("btPlus").onclick = function(){
    counter += 1;
    console.log("+")
    document.getElementById("counterLabel").innerHTML = counter;
}

/********************* */
document.getElementById("section3").innerHTML = "-----------------SECTION3";

let roll1;
document.getElementById("btRoll").onclick = function(){
    roll1 = Math.random() * 6;
    console.log(roll1);
    roll1 = Math.floor(roll1) + 1;
    document.getElementById("random1").innerHTML = roll1;
}

/********************* */
document.getElementById("section4").innerHTML = "-----------------SECTION4";

let myScore = 65;
let stResult;

switch(true) {
    case myScore >= 90: stResult = "You did great!"; break;
    case myScore >= 80: stResult = "You did good!"; break;
    case myScore >= 70: stResult = "You did Okey!"; break;
    case myScore >= 60: stResult = "You passed... barely"; break;
    case myScore < 60: stResult = "You FAILED!"; break;
    default: stResult = myScore + " - error: not correct score format."
}
document.getElementById("scoreResult").innerHTML = stResult;


/********************88* */

let recW = 18, recH = 36;

console.log(`Room size width=${recW} height=${recH}.`)

let stNum = '456';
console.log(~~stNum + 1);

/************************* ARRAYS */
console.log("Array arr1[]:");
let arr1 = [4,5,7,3,7,3,0];

for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i])
}

console.log("Array fruits[]:");
let fruits1 = ["banana", "apple", "orange", "mango"];

fruits1.sort().reverse();
for (let fr of fruits1) {
    console.log(fr);
}

let arr2D =[[1,2,3],[4,5,6],[7,8,9]];
arr2D[0][1] = 0;
for (let i=0; i < 3; i++){
    for (let j = 0; j < 3; j++) {
        console.log(arr2D[i][j]);
    }
}

/*************************** ... Remove brackets */
let numbers1 = [1,2,3,4,5];
let numbers2 = [6,7];
let letters1 = "HelloBRO!";
console.log(numbers1);
console.log(...numbers1);
console.log(...letters1);
console.log(Math.max(...numbers1));
console.log(Math.max(numbers1.push(...numbers2)));

function mySum(...numbers){
    let res = 0;
    for (let n of numbers){
        res += n;
    }
    return res;
}
console.log(mySum(10,10));
console.log(mySum(3,4,5));
console.log(mySum(3,4,5,6,7,8,9));

/********************************************** Callback*/
document.getElementById("section5").innerHTML = "------callback func-----------SECTION5";

sum(2,3, displayLabel);

function sum(x, y, callBack) {
    let result = x + y;
    callBack(result);
}
function displayConsole(output){
    console.log(output);
}
function displayLabel(output) {
    document.getElementById("labelCallback").innerHTML = output;
}

/********************************************** forEach*/

let students = ["bob", "jack", "steven"];
students.forEach(capitalize);
students.forEach(print);

function capitalize(element, index, array){
    array[index] = element[0].toUpperCase() + element.substring(1);
}

function print(element) {
    console.log(element);
}


/********************************************** map*/

let numbers = [10,20,30];
let squares = numbers.map(square);
squares.forEach(print);

function square(element){
    return element * element;
}

function print(element) {
    console.log(element);
}

/********************************************** filter*/

let ages = [18,16,21,17,19,90];
let adults = ages.filter(checkAge);
adults.forEach(print);

function checkAge(element){
    return element >= 18;
}

function print(element) {
    console.log(element);
}

/**********************************************/

// function expression
const greeting = function(){
    console.log("Hello Friend")
}
greeting();

// arrow function
const greetingName = (name1) => console.log(`Hello ${name1}`);
greetingName("Valentin");

let grades = [100, 39, 29, 4];
grades.forEach((a) => console.log(a));


/************************************** SHUFFLE CARDS */

let cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]

shuffle(cards);

console.log(cards);

function shuffle(array) {
    let currentIndex = array.length;
    while (currentIndex != 0) {
        let randomIndex = Math.floor(Math.random() * array.length);
        currentIndex -=1;

        let temp = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temp;
    }
    return array;
}


/************************************** NESTED FUNCTION */

let userName = "Bro";
let userInbox = 0;

login();

function login()
{
    displayUserName();      // nested functions
    displayUserInbox();     // can not be executed outside the host function

    function displayUserName() {
        console.log(`Welcome ${userName}.`);
    }

    function displayUserInbox() {
        console.log(`You have ${userInbox} new messages.`);
    }
}

/************************************** MAP = key-value pairs array */

const store = new Map([
    ["t-shirt", 20],
    ["jeans", 30],
    ["socks", 10],
    ["underware", 50]
]);
let shoppingCart = 0;
// shoppingCart += store.get("t-shirt");
// store.set("hat", 15);
// store.delete("hat");
// console.log(store.has("underware"));
// console.log(store.size);
store.forEach((value, key) => console.log(`${key} $${value}`));


/******* OBJECT, THIS ******/

const car = {
    model:"Ford",
    color:"red",
    year:2023,

    drive: function() {
        console.log(`You drive the car ${this.model}`);
    },
    brake: function() {
        console.log("You step on the brake");
    }
}

car.drive();
car.brake();

/************* CLASS ************/

class Player {
    score = 1;

    pause() {
        console.log("You paused the game");
    }
    exit() {
        console.log("You exit the game");
    }
}

const player1 = new Player();
const player1 = new Player();

player1.score += 1;
console.log(player1.score);
player1.pause();
player2.exit();