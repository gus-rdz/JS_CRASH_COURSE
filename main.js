/ ATTENTION: THIS IS CODE FROM THE YOUTUBE CRASH COURSE. IT IS NOT MEANT TO RUN, IT IS JUST FOR LEARNING PURPOSES / /
  // LOGGING OUTPUT
  alert("Hello World"); // Do not use for debugging. Stops script and only strings
console.log("Hello World");
console.error("This is an error");
console.warn("This is a warning");

// VARIABLES - var, let, const
let age = 30;

// let can be re-assigned, const can not
age = 31;

// DATA TYPES - String, Number, Boolean, null, undefined
const name = "Brad";
const age3 = 37;
const rating = 3.5;
const isCool = true;
const x = null;
const y = undefined;
let z; // undefined

// Check type
console.log(typeof z);

// STRINGS

// Concatenation
console.log("My name is " + name + " and I am " + age);
// Template literal (better)
console.log(`My name is ${name} and I am ${age}`);

// String methods & properties
const s = "Hello World";
let val;
// Get length
val = s.length;
// Change case
val = s.toUpperCase();
val = s.toLowerCase();
// Get sub string
val = s.substring(0, 5);
// Split into array
val = s.split("");

// ARRAYS - Store multiple values in a variable
const numbers = [1, 2, 3, 4, 5];
const fruits = ["apples", "oranges", "pears", "grapes"];
console.log(numbers, fruit);

// Get one value - Arrays start at 0
console.log(fruits[1]);

// Add value
fruits[4] = "blueberries";

// Add value using push()
fruits.push("strawberries");

// Add to beginning
fruits.unshift("mangos");

// Remove last value
fruits.pop();

// // Check if array
console.log(Array.isArray(fruits));

// // Get index
console.log(fruits.indexOf("oranges"));

// OBJECT LITERALS
const person = {
  firstName: "John",
  age: 30,
  hobbies: ["music", "movies", "sports"],
  address: {
    street: "50 Main st",
    city: "Boston",
    state: "MA",
  },
};

// Get single value
console.log(person.name);

// Get array value
console.log(person.hobbies[1]);

// Get embedded object
console.log(person.address.city);

// Add property
person.email = "jdoe@gmail.com";

// Array of objects
const todos = [
  {
    id: 1,
    text: "Take out trash",
    isComplete: false,
  },
  {
    id: 2,
    text: "Dinner with wife",
    isComplete: false,
  },
  {
    id: 3,
    text: "Meeting with boss",
    isComplete: true,
  },
];

// Get specific object value
console.log(todos[1].text);

// Format as JSON
console.log(JSON.stringify(todos));
