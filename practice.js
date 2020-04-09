//Data Types
//On line 1, log the string 'JavaScript' to the console.
console.log('JavaScript');
//On line 2, log the number 2011 to the console.
console.log(2011);
//On line 3, print 'Woohoo! I love to code! #codecademy' to the console.
console.log("Woohoo! I love to code! #codecademy");
//On line 4, print the number 20.49 to the console.
console.log(20.49);

//Arithmetic Operators
//Inside of a console.log(), add 3.5 to your age.
console.log(27+3.5);
//On a new line write another console.log(). Inside the parentheses, take the current year and subtract 1969.
//The answer is how many years it’s been since the 1969 moon landing.
console.log(2020-1969);
//Create another console.log(). Inside the parentheses divide 65 by 240.
console.log(65/240);
//Create one last console.log(). Inside the parentheses, multiply 0.2708 by 100.
console.log(0.2708*100);

//String Concatenation
//Inside a console.log() statement, concatenate the two strings 'Hello' and 'World'.
console.log("Hello" + "World");
//We left off the space last time. Create a second console.log() statement in which you concatenate the strings 'Hello' and 'World', but this time make sure to also include a space (' ') between the two words.
console.log("Hello" + " " + "World");

//Properties
//Use the .length property to log the number of characters in the following string to the console:
console.log("Teaching the world how to code".length);

//Methods
// Use .toUpperCase() to log 'Codecademy' in all uppercase letters
console.log('Codecademy'.toUpperCase());
// Use a string method to log the following string without whitespace at the beginning and end of it.
console.log('    Remove whitespace   '.trim());

//Built-in Objects
//Inside of a console.log(), create a random number with Math.random(), then multiply it by 100.
console.log(Math.random() * 100);
//Now, use Math.floor() to make the output a whole number.
console.log(Math.floor(Math.random() * 100));
//Find a method on the JavaScript Math object that returns the smallest integer greater than or equal to a decimal number.
//Use this method with the number 43.8. Log the answer to the console.
console.log(Math.ceil(43.8));
//Use the JavaScript documentation to find a method on the built-in Number object that checks if a number is an integer.
//put the number 2017 in the parentheses of the method and use console.log() to print the result.
console.log(Number.isInteger(2017));

//Variables
//Create a Variable: var
//Declare a variable named favoriteFood using the var keyword and assign to it the string 'pizza'.
var favoriteFood = "pizza";
//Declare a variable named numOfSlices using the var keyword and assign to it the number 8.
var numOfSlices = 8;
/*Under the numOfSlices variable, use console.log() to print the value saved to favoriteFood.
On the following line, use console.log() to print the value saved to numOfSlices.*/
console.log(favoriteFood);
console.log(numOfSlices);

//Create a Variable: let
//Create a let variable called changeMe and set it equal to the boolean true.
let changeMe = true;
/*On the line after changeMe is declared, set the value of changeMe to be the boolean false.
To check if changeMe was reassigned, log the value saved to changeMe to the console.*/
changeMe = false;
console.log(changeMe);

//Create a Variable: const
const entree = "Enchiladas";
console.log(entree);

//EX 5 Mathematical Assignment Operators
let levelUp = 10;
let powerLevel = 9001;
let multiplyMe = 32;
let quarterMe = 1152;
// Use the mathematical assignments in the space below:
levelUp += 5;
powerLevel -= 100;
multiplyMe *= 11;
quarterMe /= 4;
// These console.log() statements below will help you check the values of the variables.
// You do not need to edit these statements. 
console.log('The value of levelUp:', levelUp); 
console.log('The value of powerLevel:', powerLevel); 
console.log('The value of multiplyMe:', multiplyMe); 
console.log('The value of quarterMe:', quarterMe);

//EX6 The Increment and Decrement Operator
let gainedDollar = 3;
let lostDollar = 50;

gainedDollar++;
lostDollar--;
console.log(gainedDollar);
console.log(lostDollar);

//EX7 String Concatenation with Variables
var favoriteAnimal = "dog";
console.log("My favorite animal: " + favoriteAnimal);

//EX8 String Interpolation
let myName = `Huy`;
let myCity = `Tokyo`;
console.log(`My name is ${myName}. My favorite city is ${myCity}.`);

//Ex9 typeof operator
let newVariable = 'Playing around with typeof.';
console.log(typeof newVariable);
newVariable = 1;
console.log(typeof newVariable);

//EX10 Review Variables
let variable1 = 1;
console.log(typeof variable1);
variable1 = "test";
console.log(variable1);
console.log(typeof variable1);

//CONDITIONAL STATEMENTS
//EX1 The if keyword
let sale = true;
sale = false;
if (sale===true){
  console.log("Time to buy!");
}

//EX2 If...Else Statements
let sale = true;

sale = false;

if(sale) {
  console.log('Time to buy!');
}
//EX3
else {
  console.log("Time to wait for a sale.");
}

//EX4 Comparison Operators
let hungerLevel = 7;
if (hungerLevel > 7){
  console.log("Time to eat!");
}
else {
  console.log("We can eat later!");
}
//EX5 Logical Operators
let mood = 'sleepy';
let tirednessLevel = 6;
if (mood === "sleepy" && tirednessLevel > 8){
  console.log("time to sleep");
}
else {
  console.log("not bed time yet");
}

//EX6 Truthy and Falsy
let wordCount = 1;

if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log('Better get to work!');
}


let favoritePhrase = '';

if (favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.');
}

//EX7 Truthy and Falsy Assignment
let tool = '';

tool = 'marker';

// Use short circuit evaluation to assign writingUtensil variable below:
let writingUtensil = tool || 'pen';

console.log(`The ${writingUtensil} is mightier than the sword.`);

//EX8 Ternary Operator
let isLocked = false;

isLocked ? console.log('You will need a key to open the door.') : console.log('You will not need a key to open the door.');


let isCorrect = true;

isCorrect ? console.log('Correct!'):
  console.log('Incorrect!');


let favoritePhrase = 'Love That!';

favoritePhrase === 'Love That!' ? console.log('I love that!') : console.log("I don't love that!");

//EX9 Else If Statements
let season = 'summer';

if (season === 'spring') {
  console.log('It\'s spring! The trees are budding!');
} else if(season === 'winter') {
  console.log("It\'s winter! Everything is covered in snow.");
} else if(season === "fall") {
  console.log("It\'s fall! Leaves are falling!");
} else if(season === "summer"){
  console.log("It\'s sunny and warm because it\'s summer!");
}

else {
  console.log('Invalid season.');
}

//EX10 The switch keyword
let athleteFinalPosition = 'first place';
switch(athleteFinalPosition){
  case "first place":
    console.log("You get the gold medal!");
    break;
  case "second place":
    console.log("You get the silver medal!");
    break;
  case "third place":
    console.log("You get the bronze medal!");
    break;
  default:
    console.log("No medal awarded.");
    break;
}

//FUNCTIONS
//EX1 Function Declarations
function getReminder(){
  console.log("Water the plants.");
}
function greetInSpanish(){
  console.log("Buenas Tardes.")
}
//EX2 Calling a Function
function sayThanks(){
  console.log("Thank you for your purchase! We appreciate your business.");
}

sayThanks();
sayThanks();
sayThanks();

//EX3 Parameters and Arguments
function sayThanks(name) {
  console.log("Thank you for your purchase "+ name + "! We appreciate your business.");
}

sayThanks("Cole");

//EX4 Default Parameters
function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 = 'eggs'){
  console.log(`Remember to buy ${item1}`);
  console.log(`Remember to buy ${item2}`);
  console.log(`Remember to buy ${item3}`);
}
makeShoppingList();
//EX5 Default Parameters

function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 = 'eggs'){
  console.log(`Remember to buy ${item1}`);
  console.log(`Remember to buy ${item2}`);
  console.log(`Remember to buy ${item3}`);
}
makeShoppingList(); 

//EX6 Return
function monitorCount(rows, columns){
  return rows * columns;
};
const numOfMonitors = monitorCount(5,4);

console.log(numOfMonitors);

//EX7 Helper Functions
function monitorCount(rows, columns) {
  return rows * columns;
}
function costOfMonitors(rows, columns){
  return monitorCount(rows, columns) *200;
}
const totalCost = costOfMonitors(5,4);
console.log(totalCost);

//EX8 Function Expressions

const plantNeedsWater = function(day){
  if (day === 'Wednesday'){
    return true;
  }
  else {
    return false;
  }
};
console.log(plantNeedsWater("Tuesday"));

//EX9 Arrow Functions
const plantNeedsWater = (day) => {
  if (day === 'Wednesday') {
    return true;
  } else {
    return false;
  }
};

//EX10 Concise Body Arrow Functions
const plantNeedsWater = (day) => {
  if (day === 'Wednesday') {
    return true;
  } else {
    return false;
  }
};
// ->
const plantNeedsWater = day => day === 'Wednesday' ? true : false;

//Scope
//EX1 Blocks and Scope
//EX2 Blocks and Scope
const city = "New York City";
function logCitySkyline(){
  let skyscraper = "Empire State Building";
  return 'The stars over the ' + skyscraper + ' in ' + city;
};
console.log(logCitySkyline());

//EX3 Global Scope


