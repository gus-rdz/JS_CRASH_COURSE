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

// Objects
const person = {
  firstName: "John",
  lastName: "Doe",
  age2: 30,
  hobbies: ["music", "movies", "sports"],
  address: {
    street: "50 main st",
    city: "Boston",
    state: "MA",
  },
};

const todos = [
  {
    id: 1,
    text: "Take out trash",
    isCompleted: true,
  },
  {
    id: 2,
    text: "Meeting with boss",
    isCompleted: true,
  },
  {
    id: 3,
    text: "Dentist appt",
    isCompleted: true,
  },
];

console.log(todos[1].text);
