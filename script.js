// document.getElementById("count-el").innerText = 5;

// let firstBatch = 5;
// let secondBatch = 7;

// // initialize the count as 0
// let count = 0;

// let count = firstBatch + secondBatch;

// console.log(count);

// // camelCase
// // pass in arguments
// let countEl = document.getElementById("count-el");

// console.log(countEl)

// // listen for clicks on the increment button
// function increment() {
//     // console.log("Clicked")
//     count = count + 1;
//     countEl.innerText = count;

//     console.log(count);
// }
// // increment the count variable when the button is clicked (log it out)

// // change the count-el in the HTML to reflect the new count


// // Practice excercise (how old would I be if I'm a dog)
// let myAge = 30;
// let humanDogRatio = 7;

// let myDogAge = myAge / humanDogRatio;

// console.log(myDogAge);



// let bonusPoints = 50;
// console.log(bonusPoints);

// bonusPoints = bonusPoints + 50;
// console.log(bonusPoints);

// bonusPoints = bonusPoints - 75;
// console.log(bonusPoints);

// bonusPoints = bonusPoints + 45;
// console.log(bonusPoints);


// function increment() {
//     console.log("The button was clicked")
// }


// function countdown() {
//     console.log(5);
//     console.log(4);
//     console.log(3);
//     console.log(2);
//     console.log(1);
// }

// // Setting up the race

// countdown();

// // GO! 
// // Players are running the race
// // Race is finished!

// // Get ready for new race

// countdown();



// function showNumber() {
//     console.log(42);
// }

// showNumber();


// let lap1 = 34;
// let lap2 = 33;
// let lap3 = 36;

// function totalLapTime() {
//     let total = lap1 + lap2 + lap3;
//     console.log(total);
// }

// // this below is not possible
// console.log(total);

// totalLapTime();


// let lapsCompleted = 0;

// // console.log(lapsCompleted);

// function totalLaps() {
//     lapsCompleted = lapsCompleted + 1;
// }

// totalLaps();
// totalLaps();
// totalLaps();

// console.log(lapsCompleted);


// let count = 0;
// let countEl = document.getElementById("count-el");

// function increment() {
//     count = count + 1;
//     countEl.innerText = count;
// }

// // let saveBtn = document.getElementById("save-btn");

// function save() {
//     console.log(count);
// }


// let username = "per";

// let message = "You have three new notifications";

// // Concatenate
// // console.log(message + ", " + username + "!");

// let messageToUser = message + ", " + username + "!";

// console.log(messageToUser);


// let name = 42;
// let greeting = "Hi, my name is ";
// let myGreeting = greeting + name;

// // console.log(myGreeting);

// let points = 4;
// let bonusPoints = "10";

// let totalPoints = points + bonusPoints;

// console.log(totalPoints);


// console.log(4 + 5) // 9
// console.log("2" + "4") // "24"
// console.log("5" + 1) // "51"
// console.log(100 + "100") // "100100"


// let welcomeEl = document.getElementById("welcome-el");

// let name = "Robin";
// let greeting = "Welcome back ";

// welcomeEl.innerText = greeting + name;

// let wavingHand = " 👋";

// // welcomeEl.innerText = welcomeEl.innerText + wavingHand;
// welcomeEl.innerText += wavingHand;



let count = 0;
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

function increment() {
    count += 1;
    countEl.textContent = count;
}

// let saveBtn = document.getElementById("save-btn");

function save() {
    showCount = count + " - " 
    // console.log(showCount);
    saveEl.textContent += showCount;
    count = 0;
    countEl.textContent = 0;
}

// https://devdoc.net/web/developer.mozilla.org/en-US/docs/DOM/element.textContent.html
// use textContent in stead of innerText

// let firstName = "Robin";
// let lastName = "van Kempen";

// let fullName = firstName + " " + lastName;

// console.log(fullName);

// let name = "Linda";
// let greeting = "Hi there";

// function greetLinda() {
//     console.log(greeting + ", " + name + "!");
// }

// greetLinda();

// let myPoints = 3;

// function add3Points() {
//     myPoints += 3;
// }

// function remove1Popint() {
//     myPoints -= 1;
// }

// add3Points();
// add3Points();
// add3Points();
// remove1Popint()
// remove1Popint()
// console.log(myPoints);


// console.log("2" + 2); // "22"
// console.log(11 + 7); // 18
// console.log(6 + "5"); // "65"
// console.log("My points: " + 5 + 9); // "My points: 59"
// console.log(2 + 2); // 4
// console.log("11" + "14"); // "1114"


// let errorMessage = document.getElementById("error");

// function purchase() {
//     errorMessage.textContent = "Something went wrong, please try again"; 
// }

let num1 = 8;
let num2 = 2;
document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;
let sumEl = document.getElementById("sum-el"); 

function add() {
    result = num1 + num2;
    sumEl.textContent = "Sum: " + result;
}

function subtract() {
    result = num1 - num2;
    sumEl.textContent = "Sum: " + result;
}

function divide() {
    result = num1 / num2;
    sumEl.textContent = "Sum: " + result;
}

function multiply() {
    result = num1 * num2;
    sumEl.textContent = "Sum: " + result;
}