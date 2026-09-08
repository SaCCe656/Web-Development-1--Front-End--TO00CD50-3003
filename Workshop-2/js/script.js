// STEP 1: Print text to the browser console is string ""
console.log("Hello World!"); alert("Hello World!");
// STEP 2: Variables
const name = "Samu"; let age = 22; const favouriteAnimal = "Frog";
// Store text values in variables

// Print the variables to the console
console.log(name);
console.log(age);

console.log("Hello my name is " + name + "i am " + age + "years old and my favourite animal is " + favouriteAnimal);
// STEP 3: User interaction

// Display a pop-up message
prompt("What is your name?");
// Ask the user for their name
username =prompt("What is your name?");
// Print the user's answer
console.log(username);
// Create a greeting using the user's answer
console.log("Hello " + username + "Welcome to my website");
// Ask the user for their favorite animal
guestanimal =prompt("What is your favourite animal");
// Create a sentence using both answers
console.log("So your name is" + username + "And youre favourite animal is " + guestanimal +"?");
// ⭐⭐ BONUS Ask the user for their favorite animal.If their favorite animal is "Blue Elephant", print: Great choice! That's my favorite animal too!
// ⭐⭐ BONUS Otherwise, print: Nice! Your favorite animal is [animal]. Can you figure out how to do this using if / else?