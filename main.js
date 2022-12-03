// / ATTENTION: THIS IS CODE FROM THE YOUTUBE CRASH COURSE. IT IS NOT MEANT TO RUN, IT IS JUST FOR LEARNING PURPOSES / /
//   // LOGGING OUTPUT
//   alert("Hello World"); // Do not use for debugging. Stops script and only strings
// console.log("Hello World");
// console.error("This is an error");
// console.warn("This is a warning");

// // VARIABLES - var, let, const
// let age = 30;

// // let can be re-assigned, const can not
// age = 31;

// // DATA TYPES - String, Number, Boolean, null, undefined
// // const name = "Brad";
// // const age3 = 37;
// // const rating = 3.5;
// // const isCool = true;
// // const x = null;
// // const y = undefined;
// // let z; // undefined

// // Check type
// console.log(typeof z);

// // STRINGS

// // Concatenation
// console.log("My name is " + name + " and I am " + age);
// // Template literal (better)
// console.log(`My name is ${name} and I am ${age}`);

// // String methods & properties
// const s = "Hello World";
// let val;
// // Get length
// val = s.length;
// // Change case
// val = s.toUpperCase();
// val = s.toLowerCase();
// // Get sub string
// val = s.substring(0, 5);
// // Split into array
// val = s.split("");

// // ARRAYS - Store multiple values in a variable
// const numbers = [1, 2, 3, 4, 5];
// const fruits = ["apples", "oranges", "pears", "grapes"];
// console.log(numbers, fruit);

// // Get one value - Arrays start at 0
// console.log(fruits[1]);

// // Add value
// fruits[4] = "blueberries";

// // Add value using push()
// fruits.push("strawberries");

// // Add to beginning
// fruits.unshift("mangos");

// // Remove last value
// fruits.pop();

// // // Check if array
// console.log(Array.isArray(fruits));

// // // Get index
// console.log(fruits.indexOf("oranges"));

// // OBJECT LITERALS
// const person = {
//   firstName: "John",
//   age: 30,
//   hobbies: ["music", "movies", "sports"],
//   address: {
//     street: "50 Main st",
//     city: "Boston",
//     state: "MA",
//   },
// };

// // Get single value
// console.log(person.name);

// // Get array value
// console.log(person.hobbies[1]);

// // Get embedded object
// console.log(person.address.city);

// // Add property
// person.email = "jdoe@gmail.com";

// // Array of objects
// const todos = [
//   {
//     id: 1,
//     text: "Take out trash",
//     isComplete: false,
//   },
//   {
//     id: 2,
//     text: "Dinner with wife",
//     isComplete: false,
//   },
//   {
//     id: 3,
//     text: "Meeting with boss",
//     isComplete: true,
//   },
// ];

// // Get specific object value
// console.log(todos[1].text);

// // Format as JSON
// console.log(JSON.stringify(todos));

// // LOOPS

// // For
// for (let i = 0; i <= 10; i++) {
//   console.log(`For Loop Number: ${i}`);
// }

// // While
// let i = 0;
// while (i <= 10) {
//   console.log(`While Loop Number: ${i}`);
//   i++;
// }

// // Loop Through Arrays
// // For Loop
// for (let i = 0; i < todos.length; i++) {
//   console.log(` Todo ${i + 1}: ${todos[i].text}`);
// }

// // For...of Loop
// for (let todo of todos) {
//   console.log(todo.text);
// }

// // HIGH ORDER ARRAY METHODS (show prototype)

// // forEach() - Loops through array
// todos.forEach(function (todo, i, myTodos) {
//   console.log(`${i + 1}: ${todo.text}`);
//   console.log(myTodos);
// });

// // map() - Loop through and create new array
// const todoTextArray = todos.map(function (todo) {
//   return todo.text;
// });

// console.log(todoTextArray);

// // filter() - Returns array based on condition
// const todo1 = todos.filter(function (todo) {
//   // Return only todos where id is 1
//   return todo.id === 1;
// });

// // CONDITIONALS

// // Simple If/Else Statement
// const x = 30;

// if (x === 10) {
//   console.log("x is 10");
// } else if (x > 10) {
//   console.log("x is greater than 10");
// } else {
//   console.log("x is less than 10");
// }

// // Switch
// color = "blue";

// switch (color) {
//   case "red":
//     console.log("color is red");
//   case "blue":
//     console.log("color is blue");
//   default:
//     console.log("color is not red or blue");
// }

// // Ternary operator / Shorthand if
// const z = color === "red" ? 10 : 20;

// // FUNCTIONS
// function greet(greeting = "Hello", name) {
//   if (!name) {
//     // console.log(greeting);
//     return greeting;
//   } else {
//     // console.log(`${greeting} ${name}`);
//     return `${greeting} ${name}`;
//   }
// }

// function myFunc(theObject) {
//   theObject.make = 'Toyota';
// }

// const mycar = {
//   make: 'Honda',
//   model: 'Accord',
//   year: 1998,
// };

// // x gets the value "Honda"
// const x = mycar.make;

// // the make property is changed by the function
// myFunc(mycar);
// // y gets the value "Toyota"
// const y = mycar.make;

// // ARROW FUNCTIONS
// const greet = (greeting = "Hello", name = "There") => `${greeting} ${name}`;
// console.log(greet("Hi"));

// // OOP

// // Constructor Function
// function Person(firstName, lastName, dob) {
//   // Set object properties
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.dob = new Date(dob); // Set to actual date object using Date constructor
//   // this.getBirthYear = function(){
//   //   return this.dob.getFullYear();
//   // }
//   // this.getFullName = function() {
//   //   return `${this.firstName} ${this.lastName}`
//   // }
// }

// // Get Birth Year
// Person.prototype.getBirthYear = function () {
//   return this.dob.getFullYear();
// };

// // Get Full Name
// Person.prototype.getFullName = function () {
//   return `${this.firstName} ${this.lastName}`;
// };

// // Instantiate an object from the class
// // const person1 = new Person("John", "Doe", "7-8-80");
// const person2 = new Person("Steve", "Smith", "8-2-90");

// console.log(person2);

// // console.log(person1.getBirthYear());
// // console.log(person1.getFullName());

// // Built in constructors
// const name = new String("Kevin");
// console.log(typeof name); // Shows 'Object'
// const num = new Number(5);
// console.log(typeof num); // Shows 'Object'

// // ES6 CLASSES
// class Person {
//   constructor(firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);
//   }

//   // Get Birth Year
//   getBirthYear() {
//     return this.dob.getFullYear();
//   }

//   // Get Full Name
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }
// }

// const person1 = new Person("John", "Doe", "7-8-80");
// console.log(person1.getBirthYear());

// // ELEMENT SELECTORS

// // Single Element Selectors
// console.log(document.getElementById("my-form"));
// console.log(document.querySelector(".container"));
// // Multiple Element Selectors
// console.log(document.querySelectorAll(".item"));
// console.log(document.getElementsByTagName("li"));
// console.log(document.getElementsByClassName("item"));

// const items = document.querySelectorAll(".item");
// items.forEach((item) => console.log(item));

// // MANIPULATING THE DOM
// const ul = document.querySelector(".items");
// // ul.remove();
// // ul.lastElementChild.remove();
// ul.firstElementChild.textContent = "Hello";
// ul.children[1].innerText = "Brad";
// ul.lastElementChild.innerHTML = "<h1>Hello</h1>";

// const btn = document.querySelector(".btn");
// // btn.style.background = 'red';

// // EVENTS

// // Mouse Event
// btn.addEventListener("click", (e) => {
//   e.preventDefault();
//   console.log(e.target.className);
//   document.getElementById("my-form").style.background = "#ccc";
//   document.querySelector("body").classList.add("bg-dark");
//   ul.lastElementChild.innerHTML = "<h1>Changed</h1>";
// });

// // Keyboard Event
// const nameInput = document.querySelector("#name");
// nameInput.addEventListener("input", (e) => {
//   document.querySelector(".container").append(nameInput.value);
// });

// // Create an object:
// const person = {
//   firstName: "John",
//   lastName : "Doe",
//   id     :  5566
// };

// // Display some data from the object:
// document.getElementById("demo").innerHTML =
// person["firstName"] + " " + person["lastName"];

// // USER FORM SCRIPT

// // Put DOM elements into variables
// const myForm = document.querySelector("#my-form");
// // const nameInput = document.querySelector("#name");
// const emailInput = document.querySelector("#email");
// const msg = document.querySelector(".msg");
// const userList = document.querySelector("#users");

// // Listen for form submit
// myForm.addEventListener("submit", onSubmit);

// function onSubmit(e) {
//   e.preventDefault();

//   if (nameInput.value === "" || emailInput.value === "") {
//     // alert('Please enter all fields');
//     msg.classList.add("error");
//     msg.innerHTML = "Please enter all fields";

//     // Remove error after 3 seconds
//     setTimeout(() => msg.remove(), 3000);
//   } else {
//     // Create new list item with user
//     const li = document.createElement("li");

//     // Add text node with input values
//     li.appendChild(
//       document.createTextNode(`${nameInput.value}: ${emailInput.value}`)
//     );

//     // Add HTML
//     // li.innerHTML = `<strong>${nameInput.value}</strong>e: ${emailInput.value}`;

//     // Append to ul
//     userList.appendChild(li);

//     // Clear fields
//     nameInput.value = "";
//     emailInput.value = "";
//   }
// }

// Time of Day Practice
// var today = new Date();
//   var day = today.getDay();
//   var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
//   console.log("Today is : " + daylist[day] + ".");
//   var hour = today.getHours();
//   var minute = today.getMinutes();
//   var second = today.getSeconds();
//   var prepand = (hour >= 12)? " PM ":" AM ";
//   hour = (hour >= 12)? hour - 12: hour;
//   if (hour===0 && prepand===' PM ')
//   {
//   if (minute===0 && second===0)
//   {
//   hour=12;
//   prepand=' Noon';
//   }
//   else
//   {
//   hour=12;
//   prepand=' PM';
//   }
//   }
//   if (hour===0 && prepand===' AM ')
//   {
//   if (minute===0 && second===0)
//   {
//   hour=12;
//   prepand=' Midnight';
//   }
//   else
//   {
//   hour=12;
//   prepand=' AM';
//   }
//   }
// console.log("Current Time : "+hour + prepand + " : " + minute + " : " + second);

// var today = new Date();
// var dd = today.getDate();

// var mm = today.getMonth()+1;
// var yyyy = today.getFullYear();
// if(dd<10)
// {
//     dd='0'+dd;
// }

// if(mm<10)
// {
//     mm='0'+mm;
// }
// today = mm+'-'+dd+'-'+yyyy;
// console.log(today);
// today = mm+'/'+dd+'/'+yyyy;
// console.log(today);
// today = dd+'-'+mm+'-'+yyyy;
// console.log(today);
// today = dd+'/'+mm+'/'+yyyy;
// console.log(today);

// console.log("--------------------");
// for (var year = 2014; year <= 2050; year++) {
//   var d = new Date(year, 0, 1);
//   if (d.getDay() === 0) console.log("1st January is being a Sunday  " + year);
// }
// console.log("--------------------");

// function leapyear(year)
// {
// return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
// }
// console.log(leapyear(2016));
// console.log(leapyear(2000));
// console.log(leapyear(1700));
// console.log(leapyear(1800));
// console.log(leapyear(100));

// Recursion
// function factorial(x) {
//   if (x === 0) {
//     return 1;
//   }
//   return x * factorial(x - 1);
// }
// console.log(factorial(5));

// var gcd = function (a, b) {
//   if (!b) {
//     return a;
//   }

//   return gcd(b, a % b);
// };
// console.log(gcd(2154, 458));

// var range = function(start_num, end_num)
// {
//   if (end_num - start_num === 2)
//   {
//     return [start_num + 1];
//   }
//   else
//   {
//     var list = range(start_num, end_num - 1);
//     list.push(end_num - 1);
//     return list;
//   }
// };

// console.log(range(2,9));

// var array_sum = function (my_array) {
//   if (my_array.length === 1) {
//     return my_array[0];
//   } else {
//     return my_array.pop() + array_sum(my_array);
//   }
// };

// console.log(array_sum([1, 2, 3, 4, 5, 6]));

// var exponent = function(a, n)
// {
//    if (n === 0)
//    {
//     return 1;
//     }
//   else
//   {
//     return a * exponent(a, n-1);
//   }
// };

// console.log(exponent(4, 2));

// Multiply Program
// function multiplyBy() {
//   num1 = document.getElementById("firstNumber").value;
//   num2 = document.getElementById("secondNumber").value;
//   document.getElementById("result").innerHTML = num1 * num2;
// }

// function divideBy() {
//   num1 = document.getElementById("firstNumber").value;
//   num2 = document.getElementById("secondNumber").value;
//   document.getElementById("result").innerHTML = num1 / num2;
// }

// Temperature C to F
// function cToF(celsius)
// {
//   var cTemp = celsius;
//   var cToFahr = cTemp * 9 / 5 + 32;
//   var message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
//     console.log(message);
// }

// function fToC(fahrenheit)
// {
//   var fTemp = fahrenheit;
//   var fToCel = (fTemp - 32) * 5 / 9;
//   var message = fTemp+'\xB0F is ' + fToCel + '\xB0C.';
//     console.log(message);
// }
// cToF(60);
// fToC(45);

// Number Functions
// function same_last_digit(p, q, r) {
//   return p % 10 === q % 10 || p % 10 === r % 10 || q % 10 === r % 10;
// }

// console.log(same_last_digit(22, 32, 42));
// console.log(same_last_digit(102, 302, 2));
// console.log(same_last_digit(20, 22, 45));

// function three_numbers(x, y, z) {
//   if (x == y && y == z) {
//     return 30;
//   }

//   if (x == y || y == z || z == x) {
//     return 40;
//   }

//   return 20;
// }
// console.log(three_numbers(8, 8, 8));
// console.log(three_numbers(8, 8, 18));
// console.log(three_numbers(8, 7, 18));
