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

// Gets a list of elements that exist in both arrays
// const intersection = (a, b) => {
//   const s = new Set(b);
//   return a.filter(x => s.has(x));
// };
// console.log(intersection([1, 2, 3], [4, 3, 2]));

// Creates a n-dimensional array with given value
// const initializeNDArray = (val, ...args) =>
//   args.length === 0
//     ? val
//     : Array.from({ length: args[0] }).map(() => initializeNDArray(val, ...args.slice(1)));

// console.log(initializeNDArray(1, 3));
// console.log(initializeNDArray(5, 2, 2, 2));

// Checks if the given number falls within the given range
// const inRange = (n, start, end = null) => {
//   if (end && start > end) end = [start, (start = end)][0];
//   return end == null ? n >= 0 && n < start : n >= start && n < end;
// };
// console.log(inRange(3, 2, 5));
// console.log(inRange(3, 4));
// console.log(inRange(2, 3, 5));
// console.log(inRange(3, 2));

// Gets the number of times a function executed per second
// const hz = (fn, iterations = 100) => {
//   const before = performance.now();
//   for (let i = 0; i < iterations; i++) fn();
//   return (1000 * iterations) / (performance.now() - before);
// };
// // 10,000 element array
// const numbers = Array(10000)
//   .fill()
//   .map((_, i) => i);

// // Test functions with the same goal: sum up the elements in the array
// const sumReduce = () => numbers.reduce((acc, n) => acc + n, 0);
// const sumForLoop = () => {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   return sum;
// };

// // sumForLoop` is nearly 10 times faster
// console.log(Math.round(hz(sumReduce)));
// console.log(Math.round(hz(sumForLoop)));

// Takes a function as an argument, then makes the first argument the last.
// const flip = fn => (first, ...rest) => fn(...rest, first);
// let a = { name: 'John Smith' };
// let b = {};
// const mergeFrom = flip(Object.assign);
// let mergePerson = mergeFrom.bind(null, a);
// mergePerson(b); // == b
// b = {};
// console.log(Object.assign(b, a)); // == b

// Flatten an object with the paths for keys.
// const flattenObject = (obj, prefix = '') =>
//   Object.keys(obj).reduce((acc, k) => {
//     const pre = prefix.length ? prefix + '.' : '';
//     if (typeof obj[k] === 'object') Object.assign(acc, flattenObject(obj[k], pre + k));
//     else acc[pre + k] = obj[k];
//     return acc;
//   }, {});
// console.log(flattenObject({ a: { b: { c: 1 } }, d: 1 }));

// Calculate the greatest common divisor between two or more numbers/arrays
// const gcd = (...arr) => {
//   const _gcd = (x, y) => (!y ? x : gcd(y, x % y));
//   return [...arr].reduce((a, b) => _gcd(a, b));
// };
// console.log(gcd(8, 36));
// console.log(gcd(...[12, 8, 32]));

// Get all indices of val in an array. If val never occurs, returns [].
// const indexOfAll = (arr, val) =>
//   arr.reduce((acc, el, i) => (el === val ? [...acc, i] : acc), []);

// console.log(indexOfAll([1, 2, 3, 1, 2, 3], 1));
// console.log(indexOfAll([1, 2, 3], 4));

//Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
// function uppercase(str)
// {
//   var array1 = str.split(' ');
//   var newarray1 = [];

//   for(var x = 0; x < array1.length; x++){
//       newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
//   }
//   return newarray1.join(' ');
// }
// console.log(uppercase("the quick brown fox"));

// Perform a binary search
// function binary_Search(items, value) {
//   var firstIndex = 0,
//     lastIndex = items.length - 1,
//     middleIndex = Math.floor((lastIndex + firstIndex) / 2);

//   while (items[middleIndex] != value && firstIndex < lastIndex) {
//     if (value < items[middleIndex]) {
//       lastIndex = middleIndex - 1;
//     } else if (value > items[middleIndex]) {
//       firstIndex = middleIndex + 1;
//     }
//     middleIndex = Math.floor((lastIndex + firstIndex) / 2);
//   }

//   return items[middleIndex] != value ? -1 : middleIndex;
// }
// var items = [1, 2, 3, 4, 5, 7, 8, 9];
// console.log(binary_Search(items, 1));
// console.log(binary_Search(items, 5));

// Get all the indexes where NaN is found of a given array of numbers and NaN
// function test(arr_nums){
//   return arr_nums.map(function(el, i){
//       if(isNaN(el))
//         return i;
//       return false;
//   }).filter(function(el){
//       return el;
//   });
// }
// arr_nums = [2, NaN, 8, 16, 32]
// console.log("Original array: "+arr_nums)
// result = test(arr_nums)
// console.log("Find all indexes of NaN of the said array: "+result);
// arr_nums = [2, 4, NaN, 16, 32, NaN]
// console.log("Original array: "+arr_nums)
// result = test(arr_nums)
// console.log("Find all indexes of NaN of the said array: "+result);
// arr_nums = [2, 4, 16, 32]
// console.log("Original array: "+arr_nums)
// result = test(arr_nums)
// console.log("Find all indexes of NaN of the said array: "+result);

// Sort a list of elements using Quick sort.
// function quick_Sort(origArray) {
// 	if (origArray.length <= 1) {
// 		return origArray;
// 	} else {

// 		var left = [];
// 		var right = [];
// 		var newArray = [];
// 		var pivot = origArray.pop();
// 		var length = origArray.length;

// 		for (var i = 0; i < length; i++) {
// 			if (origArray[i] <= pivot) {
// 				left.push(origArray[i]);
// 			} else {
// 				right.push(origArray[i]);
// 			}
// 		}

// 		return newArray.concat(quick_Sort(left), pivot, quick_Sort(right));
// 	}
// }

// var myArray = [3, 0, 2, 5, -1, 4, 1 ];

// console.log("Original array: " + myArray);
// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);

// list the properties of a JavaScript object
// function _keys(obj) {
//   if (!isObject(obj)) return [];
//   if (Object.keys) return Object.keys(obj);
//   var keys = [];
//   for (var key in obj) if (_.has(obj, key)) keys.push(key);
//   return keys;
// }
// function isObject(obj) {
//   var type = typeof obj;
//   return type === "function" || (type === "object" && !!obj);
// }
// console.log(_keys({ red: "#FF0000", green: "#00FF00", white: "#FFFFFF" }));

// Moves one element of an array to another
// function move(arr, old_index, new_index) {
//   while (old_index < 0) {
//       old_index += arr.length;
//   }
//   while (new_index < 0) {
//       new_index += arr.length;
//   }
//   if (new_index >= arr.length) {
//       var k = new_index - arr.length;
//       while ((k--) + 1) {
//           arr.push(undefined);
//       }
//   }
//    arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
//  return arr;
// }

// console.log(move([10, 20, 30, 40, 50], 0, 2));

// console.log(move([10, 20, 30, 40, 50], -1, -2));

// Check a given number is odd or even using bit manipulation
// const check_even_odd = (n) => {
//   if (typeof n != "number") {
//     return "Parameter value must be number!";
//   }
//   if ((n ^ 1) == n + 1)
//     //even
//     return n + " is an even number.";
//   //odd
//   else return n + " is an odd number.";
// };
// console.log(check_even_odd(1));
// console.log(check_even_odd(4));
// console.log(check_even_odd(9));
// console.log(check_even_odd("15"));

// Turn off the kth bit in a given number. Return the new number
// const turn_Off_Kth_Bit = (n, k) => {
//   if (typeof n != "number") {
//     return "It must be number!";
//   }
//   return n & ~(1 << (k - 1));
// };
// n = 30;
// k = 3;
// console.log(n + " in binary is " + n.toString(2));
// console.log("Turning k'th bit off," + " k = " + k);
// result_n = turn_Off_Kth_Bit(n, k);
// console.log(result_n + " in binary is " + result_n.toString(2));
// n = 100;
// k = 6;
// console.log(n + " in binary is " + n.toString(2));
// console.log("Turning k'th bit off," + " k = " + k);
// result_n = turn_Off_Kth_Bit(n, k);
// console.log(result_n + " in binary is " + result_n.toString(2));

// DOM Manipulation Practice - Add Rows to Table
// function insert_Row()
// {
// var x=document.getElementById('sampleTable').insertRow(0);
// var y = x.insertCell(0);
// var z = x.insertCell(1);
// y.innerHTML="New Cell1";
// z.innerHTML="New Cell2";
// }

// Search a given integer in an array of sorted integers using Binary Search Algorithm and recursion
// const binary_Search = (arr, searchValue, low = 0, high = arr.length - 1) => {
//   // base case
//   if (high < low || arr.length === 0) return -1;
//   const mid = low + Math.floor((high - low) / 2);
//   // If the element is present at the middle
//   if (arr[mid] === searchValue) {
//     return mid;
//   }
//   // If element is smaller than mid, then
//   // it can only be present in left subarray
//   if (arr[mid] > searchValue) {
//     return binary_Search(arr, searchValue, low, mid - 1);
//   }
//   // Else the element can only be present in right subarray
//   return binary_Search(arr, searchValue, mid + 1, high);
// };
// const myArray = [1, 2, 3, 5, 6, 7, 10, 11, 14, 15, 17, 19, 20, 22, 23];
// console.log(binary_Search(myArray, 6));
// console.log(binary_Search(myArray, 16));

// swap two bits (from the right side, rightmost position is 0) in the binary representation of an integer at the given positions
// const swap_bits = (n, pos1, pos2) => {
//   if (typeof n != "number") {
//     return "It must be number!";
//   }
//   if ((((n & (1 << pos1)) >> pos1) ^ ((n & (1 << pos2)) >> pos2)) == 1) {
//     n ^= 1 << pos1;
//     n ^= 1 << pos2;
//   }
//   return n;
// };
// console.log(swap_bits(245, 1, 4));
// console.log(swap_bits(137, 6, 7));
// console.log(swap_bits("16"));

// Check whether a given value is IP value or not
// function is_IP(str) {
//   regexp =
//     /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$|^(([a-zA-Z]|[a-zA-Z][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z]|[A-Za-z][A-Za-z0-9\-]*[A-Za-z0-9])$|^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/;

//   if (regexp.test(str)) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(is_IP("198.156.23.5"));

// console.log(is_IP("172.16.0.1"));

// Find the first index of a given element in an array using the ternary search algorithm
// const ternary_Search = (arr, target, left, right) => {
// 	if (right >= left) {
// 		let mid1 = Math.floor(left + (right - left) /3);
// 		let mid2 = Math.floor(right - (right - left) /3);

// 		if (arr[mid1] == target) {
// 			return mid1;
// 		}
// 		else if (arr[mid2] == target) {
// 			return mid2;
// 		}

// 		if (target < arr[mid1]) {
// 			return ternary_Search(arr, target, left, mid1 - 1);
// 		}
// 		else if (target > arr[mid2]) {
// 			return ternary_Search(arr, target, mid2 + 1, right);
// 		}
// 		else {
// 			return ternary_Search(arr, target, mid1 + 1, mid2 - 1);
// 		}
// 	}
// 	return -1;
// }

// console.log(ternary_Search([1, 2, 3, 4, 5, 6, 7, 8, 9], 3, 0, 5))
// console.log(ternary_Search([1, 2, 3, 4, 5, 6, 7, 8, 9], 9, 0, 8))
// console.log(ternary_Search([1, 2, 3, 4, 5, 6, 7, 8, 9], 0, 0, 8))
// console.log(ternary_Search([1, 2, 3, 4, 5, 6, 7, 8, 9], 4, 6, 8))

// Shell's Method
// function shellSort(arr) {
//   var increment = arr.length / 2;
//   while (increment > 0) {
//       for (i = increment; i < arr.length; i++) {
//           var j = i;
//           var temp = arr[i];

//           while (j >= increment && arr[j-increment] > temp) {
//               arr[j] = arr[j-increment];
//               j = j - increment;
//           }

//           arr[j] = temp;
//       }

//       if (increment == 2) {
//           increment = 1;
//       } else {
//           increment = parseInt(increment*5 / 11);
//       }
//   }
// return arr;
// }

// console.log(shellSort([3, 0, 2, 5, -1, 4, 1]));

// Date for last of month
// var lastday = function(y,m){
//   return  new Date(y, m +1, 0).getDate();
//   }
//   console.log(lastday(2014,0));
//   console.log(lastday(2014,1));
//   console.log(lastday(2014,11));

// Convert an object into a list of '[key, value]' pairs.
// function key_value_pairs(obj)
//    {
//     var keys = _keys(obj);
//     var length = keys.length;
//     var pairs = Array(length);
//     for (var i = 0; i < length; i++)
//     {
//       pairs[i] = [keys[i], obj[keys[i]]];
//     }
//     return pairs;
//   }

// function _keys(obj)
//   {
//     if (!isObject(obj)) return [];
//     if (Object.keys) return Object.keys(obj);
//     var keys = [];
//     for (var key in obj) if (_.has(obj, key)) keys.push(key);
//     return keys;
//   }
// function isObject(obj)
//  {
//     var type = typeof obj;
//     return type === 'function' || type === 'object' && !!obj;
//   }
// console.log(key_value_pairs({red: "#FF0000", green: "#00FF00", white: "#FFFFFF"}));
