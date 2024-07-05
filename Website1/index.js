

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

/************* CLASS / Constructor ************/

class Player {
    score = 1;

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    study() {
        console.log(`${this.name} is studying`); 
    }

    pause() {
        console.log("You paused the game");
    }
    exit() {
        console.log("You exit the game");
    }
}

const player1 = new Player();
const player2 = new Player();
const student1 = new Player("Vasya", 22);

player1.score += 1;
console.log(player1.score);
player1.pause();
player2.exit();
student1.study();

/************* CLASS / Inheritance / Super-InvokeParentConstructor ************/

class Animal {
    alive = true;
    constructor(speed){
        this.speed = speed;
    }
    eat(){
        console.log(`This ${this.name} is eating`);
    }
    sleep(){
        console.log(`This ${this.name} is sleeping`);
    }
}

class Rabbit extends Animal {
    constructor(speed, age){
        super(speed);
        this.age = age;
    }
    name = "rabbit";
    run (){
        console.log(`This ${this.name} is running`);
    }
}

class Fish extends Animal {
    constructor(speed, weight){   
        super(speed);
        this.weight = weight;
    }
    name = "fish";
    swim (){    
        console.log(`This ${this.name} is swimming`);
    }
}

const rabbit1 = new Rabbit(100,5);
const fish1 = new Fish(70,12);
console.log(rabbit1.alive)
rabbit1.eat();
rabbit1.run();
fish1.sleep();
fish1.swim();

/************* CLASS / Getters / Setters ************/

class Car{
    constructor(power){
        this._gas = 25;
        this._power = power;
    }
    get power(){
        return `${this._power}hp`;
    }
    get gas(){
        return `${this._gas}L (${this._gas / 50 * 100})%`;
    }
    set gas(value){
        if(value>50){
            value = 5
        }
        else if (value<0){
            value = 0;
        }
        this._gas = value;
    }
}

let car1 = new Car(400);
console.log(car1.gas);
console.log(car1.power);

/************* Anonymous Obj ************/

class Card{
    constructor(value, suit){
        this.value = value;
        this.suit = suit;
    }
}

let cardsdeck = [
    new Card("A", "Hearts"),
    new Card("A", "Spades"),
    new Card("A", "Diamonds"),
    new Card("A", "Clubs"),
    new Card("2", "Hearts"),
    new Card("2", "Spades"),
    new Card("2", "Diamonds"),
    new Card("2", "Clubs"),
];

console.log(cardsdeck[3].value + cardsdeck[3].suit);
cardsdeck.forEach(card => console.log(`${card.value} ${card.suit}`));

/************* Error Handling ************/

try{
    // let x = window.prompt("Enter a #:"); uncomment this line when run
    let x = 234;
    x = Number(x);

    if (isNaN(x)) throw "That wasn't a number!";
    if (x =="") throw "That was empty!";

    console.log(`${x} is a number.`);
}
catch(error){
    console.log(error);
}
finally{
    console.log("This always executes.");
}

/************* setInteraval() ************
setTimeout(func, ms) // func after ms
setInteraval(func, ms) // repeat func each ms

/************* Date object ************/

let date1 = new Date()
console.log(date1);
date1 = date1.toLocaleString();
console.log(date1);
date1 = new Date(2023,0,1,2,3,4,5)
date1.setMonth(11);
console.log(date1);

function formatDate(date){
    let day = date.getDate();
    let month = date.getMonth()+1;
    let year = date.getFullYear();
    return `${year}-${month}-${day}`
}
console.log(formatDate(date1));

/************* Clock ************/
document.getElementById("section6").innerHTML = "-----------------SECTION3";

const myLabel = document.getElementById("labelClock");

updateClock();
setInterval(updateClock, 1000);

function updateClock(){
    let date = new Date();
    myLabel.innerHTML = formatTime(date);

    function formatTime(date){
        let h = date.getHours();
        let m = date.getMinutes();
        let s = date.getSeconds();
        let amOrPm = h >= 12 ? "pm" : "am";

        h = (h % 12) || 12;
        h = formatZeroes(h);
        m = formatZeroes(m);
        s = formatZeroes(s);
        return `${h}:${m}:${s} ${amOrPm}`;
    }

    function formatZeroes(time){
        time = time.toString();
        return time.length < 2 ? "0" + time : time;
    }
}

/************* setTimeout / setInterval ************/
const firstMessage = () => console.log("1st message.");
const secondMessage= () => console.log("2nd message.");
setTimeout(firstMessage, 3000);
setTimeout(secondMessage, 1000);

let counterTimer = 0;
const myTimer = setInterval(countUp, 100);
function countUp(){
    counterTimer += 1;
    console.log(counterTimer);
    if (counterTimer >= 10) {
        clearInterval(myTimer);
    }
}

/************* promise ************/

const promise = new Promise((resolve, reject) => {
    let fileLoaded = false;
    if(fileLoaded){
        resolve("File loaded");
    }
    else{
        reject("File NOT loaded");
    }
});

promise.then(value => console.log(value))
    .catch(error => console.log(error));

/************* async=makes a function return a Promise *****************/    

async function loadFile(){
    let fileLoaded = true;
    if(fileLoaded){
        return "File loaded";
    }
    else{
        throw "File NOT loaded";
    }
}

loadFile().then(value => console.log(value))
    .catch(error => console.log(error));

/************* await = makes an async function wait for a Promise *****************/    
async function startProcess() {
    let message3 = await loadFile();
    console.log(message3);
}

startProcess()


