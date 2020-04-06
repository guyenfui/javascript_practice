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

//String Interpolation
let myName = `Huy`;
let myCity = `Tokyo`;
console.log(`My name is ${myName}. My favorite city is ${myCity}.`);

