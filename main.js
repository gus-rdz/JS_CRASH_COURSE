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

// function angle_Type(angle) {
//   if (angle < 90) {
//     return "Acute angle.";
//   }
//   if (angle === 90) {
//     return "Right angle.";
//   }
//   if (angle < 180) {
//     return "Obtuse angle.";
//   }
//   return "Straight angle.";
// }

// console.log(angle_Type(47));
// console.log(angle_Type(90));
// console.log(angle_Type(145));
// console.log(angle_Type(180));

// const pull_at_Index = (arr, pullArr) => {
//   let removed = [];
//   let pulled = arr
//     .map((v, i) => (pullArr.includes(i) ? removed.push(v) : v))
//     .filter((v, i) => !pullArr.includes(i));
//   arr.length = 0;
//   pulled.forEach((v) => arr.push(v));
//   return removed;
// };
// let arra1 = ["a", "b", "c", "d", "e", "f"];
// console.log(pull_at_Index(arra1, [1, 3]));
// let arra2 = [1, 2, 3, 4, 5, 6, 7];
// console.log(pull_at_Index(arra2, [4]));

// Targets JSON Object
// const dig = (obj, target) =>
//   target in obj
//     ? obj[target]
//     : Object.values(obj).reduce((acc, val) => {
//         if (acc !== undefined) return acc;
//         if (typeof val === 'object') return dig(val, target);
//       }, undefined);

// const data = {
//   level1: {
//     level2: {
//       level3: 'some data'
//     }
//   }
// };

// const dog = {
//     "status": "success",
//     "message": "https://images.dog.ceo/breeds/african/n02116738_1105.jpg"
// }
// console.log(dig(data, 'level3'));
// console.log(dig(data, 'level4'));
// console.log(dig(dog, 'message'));

// const runAsync = fn => {
//   const worker = new Worker(
//     URL.createObjectURL(new Blob([`postMessage((${fn})());`]), {
//       type: 'application/javascript; charset=utf-8'
//     })
//   );
//   return new Promise((res, rej) => {
//     worker.onmessage = ({ data }) => {
//       res(data), worker.terminate();
//     };
//     worker.onerror = err => {
//       rej(err), worker.terminate();
//     };
//   });
// };
// const longRunningFunction = () => {
//   let result = 0;
//   for (let i = 0; i < 1000; i++) {
//     for (let j = 0; j < 700; j++) {
//       for (let k = 0; k < 300; k++) {
//         result = result + i + j + k;
//       }
//     }
//   }
//   return result;
// };
// /*
// */
// runAsync(longRunningFunction).then(console.log); // 209685000000
// runAsync(() => 10 ** 3).then(console.log); // 1000
// let outsideVariable = 50;
// runAsync(() => typeof outsideVariable).then(console.log); // 'undefined'

// Use Array.filter()
// const reject = (pred, array) => array.filter((...args) => !pred(...args));

// console.log(reject(x => x % 2 === 0, [1, 2, 3, 4, 5]));

// console.log(reject(word => word.length > 4, ['Apple', 'Pear', 'Kiwi', 'Banana']));

// Mutate Arrays
// const pullAtValue = (arr, pullArr) => {
//   let removed = [],
//     pushToRemove = arr.forEach((v, i) => (pullArr.includes(v) ? removed.push(v) : v)),
//     mutateTo = arr.filter((v, i) => !pullArr.includes(v));
//   arr.length = 0;
//   mutateTo.forEach(v => arr.push(v));
//   return removed;
// };
// let myArray = ['a', 'b', 'c', 'd'];
// let pulled = pullAtValue(myArray, ['b', 'd']);
// console.log('Original data',myArray);
// console.log('Pulled data',pulled);

// const runAsync = (fn) => {
//   const worker = new Worker(
//     URL.createObjectURL(new Blob([`postMessage((${fn})());`]), {
//       type: "application/javascript; charset=utf-8",
//     })
//   );
//   return new Promise((res, rej) => {
//     worker.onmessage = ({ data }) => {
//       res(data), worker.terminate();
//     };
//     worker.onerror = (err) => {
//       rej(err), worker.terminate();
//     };
//   });
// };
// const longRunningFunction = () => {
//   let result = 0;
//   for (let i = 0; i < 1000; i++) {
//     for (let j = 0; j < 700; j++) {
//       for (let k = 0; k < 300; k++) {
//         result = result + i + j + k;
//       }
//     }
//   }
//   return result;
// };

// runAsync(longRunningFunction).then(console.log); // 209685000000
// runAsync(() => 10 ** 3).then(console.log); // 1000
// let outsideVariable = 50;
// runAsync(() => typeof outsideVariable).then(console.log); // 'undefined'

// // Round specified Numbers
// const round = (n, decimals = 0) =>
//   Number(`${Math.round(`${n}e${decimals}`)}e-${decimals}`);

// console.log(round(1.005, 2));
// console.log(round(1.05, 2));
// console.log(round(1.0005, 2));

// // Reverse char in String
// const reverseString = str => [...str].reverse().join('');

// console.log(reverseString('php'));
// console.log(reverseString('foobar'));

// Creates Object composed of the properties the given func returns falsey for
// const omitBy = (obj, fn) =>
//   Object.keys(obj)
//     .filter((k) => !fn(obj[k], k))
//     .reduce((acc, key) => ((acc[key] = obj[key]), acc), {});

// console.log(omitBy({ a: 1, b: "2", c: 3 }, (x) => typeof x === "number"));

// Filters array's values based on predictable func
// const reject = (pred, array) => array.filter((...args) => !pred(...args));

// console.log(reject(x => x % 2 === 0, [1, 2, 3, 4, 5]));

// console.log(reject(word => word.length > 4, ['Apple', 'Pear', 'Kiwi', 'Banana']))

// const fs = require('fs');
// const readFileLines = filename =>
//   fs
//     .readFileSync(filename)
//     .toString('UTF8')
//     .split('\n');
// /*
// contents of test.txt :
//   line1
//   line2
//   line3
//   ___________________________
// */
// let arr = readFileLines('test.txt');

// console.log(arr); // ['line1', 'line2', 'line3']

// Pluralize Program
// const pluralize = (val, word, plural = word + 's') => {
//   const _pluralize = (num, word, plural = word + 's') =>
//     [1, -1].includes(Number(num)) ? word : plural;
//   if (typeof val === 'object') return (num, word) => _pluralize(num, word, val[word]);
//   return _pluralize(val, word, plural);
// };
// pluralize(0, 'apple'); // 'apples'
// pluralize(1, 'apple'); // 'apple'
// pluralize(2, 'apple'); // 'apples'
// pluralize(2, 'person', 'people'); // 'people'

// const PLURALS = {
//   person: 'people',
//   radius: 'radii'
// };
// const autoPluralize = pluralize(PLURALS);
// console.log(autoPluralize(2, 'person')); // 'people'

// Calculate numbers in the given array that are less than or equal to given value
// const percentile = (arr, num) =>
//   (arr.filter((item) => item <= num).length / arr.length) * 100;
// console.log(percentile([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5)); // 50;
// console.log(percentile([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10)); // 100;
// console.log(percentile([1, 2, 3, 4, 5, 6], 3)); // 50;
// console.log(percentile([1, 2, 3, 4, 5, 6], 4)); // 66.66;

// const partition = (arr, fn) =>
//   arr.reduce(
//     (acc, val, i, arr) => {
//       acc[fn(val, i, arr) ? 0 : 1].push(val);
//       return acc;
//     },
//     [[], []]
//   );
// const users = [{ user: 'barney', age: 36, active: false }, { user: 'fred', age: 40, active: true }];
// partition(users, o => o.active);
// console.log(users);

// const pullBy = (arr, ...args) => {
//   const length = args.length;
//   let fn = length > 1 ? args[length - 1] : undefined;
//   fn = typeof fn == 'function' ? (args.pop(), fn) : undefined;
//   let argState = (Array.isArray(args[0]) ? args[0] : args).map(val => fn(val));
//   let pulled = arr.filter((v, i) => !argState.includes(fn(v)));
//   arr.length = 0;
//   pulled.forEach(v => arr.push(v));
// };

// var myArray = [{ x: 1 }, { x: 2 }, { x: 3 }, { x: 1 }];

// pullBy(myArray, [{ x: 1 }, { x: 3 }], o => o.x);

// console.log(myArray);

// Return 1 if array sorted in ascending order, -1 if descending
// const isSorted = arr => {
//   let direction = -(arr[0] - arr[1]);
//   for (let [i, val] of arr.entries()) {
//     direction = !direction ? -(arr[i - 1] - arr[i]) : direction;
//     if (i === arr.length - 1) return !direction ? 0 : direction;
//     else if ((val - arr[i + 1]) * direction > 0) return 0;
//   }
// };
// console.log(isSorted([0, 1, 2, 2]));
// console.log(isSorted([4, 3, 2]));
// console.log(isSorted([4, 3, 5]));

// Returns true if object looks like a Promise
// const isPromiseLike = obj =>
//   obj !== null &&
//   (typeof obj === 'object' || typeof obj === 'function') &&
//   typeof obj.then === 'function';

// console.log(isPromiseLike({
//   then: function() {
//     return '';
//   }
// }));
// console.log(isPromiseLike(null));
// console.log(isPromiseLike({}));

// Checks whether string is lowercase or not
// const isLowerCase = (str) => str === str.toLowerCase();

// console.log(isLowerCase("abc"));
// console.log(isLowerCase("a3@$"));
// console.log(isLowerCase("Ab4"));

// // Checks whther the specified value is null
// const isNull = (val) => val === null;
// console.log(isNull(null));
// console.log(isNull(123));

// // Checks if given argument is a number
// const isNumber = val => typeof val === 'number';

// console.log(isNumber('1'));
// console.log(isNumber(1));

// Checks whether the provided argument is array-like
// const isArrayLike = val => {
//   try {
//     return [...val], true;
//   } catch (e) {
//     return false;
//   }
// };
// console.log(isArrayLike(document.querySelectorAll('.className'))); // true
// console.log(isArrayLike('abc')); // true
// console.log(isArrayLike(null)); // false

// Check whether the provided value is of the specified type
// const is = (type, val) => ![, null].includes(val) && val.constructor === type;
// console.log(is(Array, [1])); // true
// console.log(is(ArrayBuffer, new ArrayBuffer()));
// console.log(is(Map, new Map()));
// console.log(is(RegExp, /./g));
// console.log(is(Set, new Set()));
// console.log(is(WeakMap, new WeakMap()));
// console.log(is(WeakSet, new WeakSet()));
// console.log(is(String, ""));
// console.log(is(String, new String("")));
// console.log(is(Number, 1));
// console.log(is(Number, new Number(1)));
// console.log(is(Boolean, true));
// console.log(is(Boolean, new Boolean(true)));
