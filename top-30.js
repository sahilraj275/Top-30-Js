//! 1. == vs ===
// both are equality operator use to check the value and data types in js.
// 1.== -> this only check the value of variable in js.

// let a = 0;
// let b = "0";

// console.log(a == b); // its give us true but they are not same it does not check data types in js.

// 2. === -> this equality operator checks both value and data types of a variable.
// let a = 0;
// let b = "0";

// console.log(a === b); // false because it checks both data types and value

//! 2. let var and cost
// these all are use to declare a variable in javascript
//* 1. var => variable declared with var is accessible anywhere in the code it declares the variable in global scope. varible declared with var hoisted and also initialized with undefined in js.

// console.log(a); //undefined
// var a = 90;

// {
//   console.log(a);
// }

//* 2. let => it is introduced in es6, variable declared using let are block scope we can only access the variable within that scope only we cant access the variable ouside of it. we can also reassign a let variable.
//* variable declared with let and const is also hoisted but they are initialised without any value they will give you reference error can't access before initialization.

// console.log(a);
// let a = 89;

// {
//   let a = "samsung";
//   console.log(a);
// }
// console.log(a);

//* 3. const => it is also introduced in es6, variable declared using const are also block scope meaning we cant access outside of that scope. we can't reassign a const variable with some other variable.
//* variable declared with let and const is also hoisted but they are initialised without any value they will give you reference error can't access before initialization.

// {
//   const a = 455;
//      a = 998;
//   console.log();
// }

// ! 3. Implicit type coercion in js

//* In JavaScript, implicit type coercion happens when javascript automatically converts values from one data type to another.

//1.String Coercion -> When using the '+' operator with a string and another type, JavaScript converts the other type to a string.

// let a = "8";
// let b = 7;

// console.log(a + b); // 87

// 2.Number Coercion -> When using arithmetic operators other than + (e.g., -, *, /), JavaScript tries to convert values to numbers.

// let a = "8";
// let b = 7;
// console.log(a - b); // 1

//* Explicit coercion ->
// In JavaScript, explicit type coercion (also known as type casting) is when you deliberately convert a value from one type to another using specific methods or operators. Unlike implicit coercion, where JavaScript converts types automatically, explicit coercion is done by the developer to ensure values are in the desired format.

// let num = 89;
// let b = String(num);

// console.log(typeof b);

// let s = "sahil";
// let num = +s;
// let num = Number(s);
// console.log(typeof num);

// pracital exapmle

// let a = "88";
// console.log(+a + 5); //93

// let s = 888;

// console.log(String(s) + "hello");

//! 4. Difference between undefined and not defined
// undefined => When a variable is declared but not assigned any value, it is "undefined."

// var a;
// console.log(a); // Output: undefined

// not defined => When you try to access a variable that has not been declared at all,
// JavaScript throws a ReferenceError saying the variable is "not defined."

// console.log(chacha); // ReferenceError: chacha is not defined

//! 5. What is hoisting and are let variables hoisted?
// Hoisting is a behaviour in javascript where we can access variable before even initializing it. it's answer lies why it behaves like that in execution context phase 1 memory allocation. it behaves differently with keywords.
//  let variable are also hoisted but they are not initialize with any value.

// * var -> variable declared with var are hoisted and initialized with undefined. this means you can access the value without getting any error.
// console.log(a);
// var a = "sahil";

//* Let and const -> variable declared using let and const are also hoited but they are not initialized with any value. when we try to access value of it we get a reference error -> can't access before initialization. This error throws because when we declare a variable using let and var it will be in temporal dead zone until it initialized with any value.

// console.log(a); // temporal dead zone area for a
// let a = 90; // tdz ends here when it is initialized with a value
// console.log(a);

//! 6. Template Literal
// console.log(`My name is sahil
//   i am doing coding
//   what about you`);
// 1. First use of template literal is it is use for multiline string in js.
// 2. It is also use to access variable value inside a string.

// let age = 26;
// console.log(`My name is Sahil and i am ${age} years old.`);
// console.log("My name is Sahil and i am ${age} years old.");// this won't work

// ! spread and rest operator
// * spread operator ->>>>>>
// the spread operator spreads the elements pf an array or object into individual elements. spread operator allows us to unpack data into new array,objects or function arguments.

//* key uses ---->
// 1. cloning an array or object - creates a copy of an array or object without referencing to the original array or object. because when we have 2 array and when we simple copy arr1 to arr2 when we change or modify anything in arr2 it will also make changes in the arr1 ,its because when we are cloning like this it keeps reference of same memory location when we changes anything its point to the same memory location, so to prevent this we use spread operator. its happens because array and object are reference data type.

// var arr1 = [2, 3, 5, 6];
// var arr2 = arr1;

// arr1.pop();
// console.log(arr1);

// to Avoid this issue we use spread operator -
// var arr1 = [2, 3, 5, 6];
// var arr2 = [...arr1];

// arr2.pop();
// console.log(arr1);
// console.log(arr2);

// 2. merging arrays or objects:
// var arr1 = [2, 3, 5];
// var arr2 = ["sahil", "rahil"];

// var arr4 = arr1 + arr2;
// console.log(typeof arr4);

// var arr3 = [...arr1, ...arr2];
// console.log(typeof arr3);
// console.log(arr3);

// 3. string to array conversion---> converts a string into individiual character.

// let str = "sahil";

// console.log(...str);

//* 2.Rest operator ---->>>
//  1.the rest operator collects multiple elements into a single array or object.
// 2.it is used in function parameters. rest operator simply packs the remaining data into a single variable.

//1. Destruncturing assignment->> rest operator packs the remaining elements into a single variable.
// const [a, b, ...c] = [1, 2, 3, 4, 5, 6];
// console.log(a);
// console.log(b);
// console.log(c);

// 2. function parameter - > allows function to accept indefinite number of argumnets.
// function sum(...numbers) {
//   return numbers.reduce((a, b) => a + b);
// }
// console.log(sum(1, 2, 3, 45, 6));

//! 8. Map filter and reduce
//* a. map - > map is a array method it is used to iterate and transform an array performing some operations on each element of the array. map always return a new aaray after performing some operation.map takes a callback function to perform some operation.

// var arr = [3, 4, 5];

// let newarr = arr.map((a) => a * 2);
// console.log(typeof newarr);

//* b. filter ->> filter is a array method as the name suggest it filter an array on certain given condition.filter return a variable.

// var arr = [3, 4, 5];
// let filterArr = arr.filter((x) => {
//   if (x % 2 != 0) {
//     return x;
//   }
// });
// console.log(typeof filterArr);

//* c.Reduce --> reduce is an array method it is used to perform some operation on each element in the array and return a single value out of it.

// var arr = [3, 4, 5];

// let reducedArray = arr.reduce((acc, cur) => acc * cur);
// console.log(reducedArray);

//! 9. EventLoop
// "The Event Loop in JavaScript is a mechanism that ensures asynchronous operations are handled correctly. It constantly monitors the call stack and the callback queue. When the call stack is empty, the Event Loop picks tasks from the callback queue and pushes them into the call stack for execution, one by one.";
// "The Event Loop acts as a gatekeeper between the call stack and the callback queue, ensuring asynchronous callbacks are executed after the synchronous code has finished.";

// JavaScript handles asynchronous operations using features like Web APIs (in browsers) or Node.js APIs. For example, when an asynchronous function like setTimeout is called, the browser manages the timer in the Web API environment. Once the timer completes, its callback moves to the callback queue, waiting for the Event Loop to push it into the call stack when the stack is empty."

// let's understand with an example-->
// console.log("starts");
// setTimeout(() => {
//   console.log("Hello from setTimeout");
// }, 2000);
// console.log("Ends");

// let's understand what happens here how this is handled in js with help of eventloop
// as soon as this code runs the first line it encounter console.log then it will go to the console webapi and print 'start' in the console on the second line it encounters setTimeout which is an asynchronous code then it will go to the webApi setTimeout api and attach a timer to it and then it move forward to the next line there it will encounter console statement it goes to the console api again it will print 'ends' meanwhile when timer is over callback function move to the callback queue and waits there to complete all the synchronous codes and now event loop comes into the picture it will check the call stack if it is empty it will check the callback queue if there are some codes to be executed it push these codes in the main stack (callstack) as soon as it goes in the callstack it will be executed and prints 'Hello from setTimeout'.

// !10. Closures
// * function along with it's lexical scope bundle together forms a closure.
//  an inner function has access to its outer function's lexical environment and it's variable is called closure.

// The inner function has access to:
// Its own variables.
// The variables of the outer function.
// Global variables.

//*1. Basic Closure Example:
// function abc() {
//   var a = 999;
//   return function xyz() {
//     console.log(a);
//   };
// }
// let res = abc();
// res();

//*2.  Encapsulation with Closures: Closures can be used to create private variables that are not accessible from the outside.

// function makeCounter() {
//   var count = 0;
//   return function () {
//     count++;
//     return count;
//   };
// }
// const counter1 = makeCounter();
// console.log(counter1()); // 1
// console.log(counter1.count); // 1
// console.log(count);// not defined

//* 3. Preserving Data in Asynchronous Operations: Closures allow variables to persist across asynchronous operations like setTimeout.

// function greetMe(name) {
//   setTimeout(
//     () => {
//       console.log(`Hello ${name} `);
//     },

//     3000
//   );
// }
// greetMe("sahil");

//! 11. lexical environment-
// A lexical environment in JavaScript is a structure to hold the variables, functions, and their respective values, and the reference to its parent environment. These are created each time a function or a block is executed.

// function outerFunction() {
//   let outerVariable = "I'm from outerFunction";

//   function innerFunction() {
//     console.log(outerVariable);
//   }

//   innerFunction(); //the main difference here we are directly invoking the innerfunction here in closure we return the inner function here.
// }

// outerFunction();

// Scope Chain:
// A lexical environment maintains a chain of references to its parent environments, forming a scope chain.
// This allows inner functions to access variables declared in their outer functions or global scope.

// var val1 = 90;
// function outerScopeChain() {
//   let val2 = 990;
//   function innerCcopeChain() {
//     let innerVal = 890;
//     console.log(val1);
//     console.log(val2);
//     console.log(innerVal);
//   }
//   innerCcopeChain();
// }

// outerScopeChain();

//! 12. first class function
// when we  treat a function as a variable or passit to other function as an arguments we call it first class function.

// A first-class function in JavaScript is one that can be:
// Treated as a value.
// Assigned to a variable.
// Passed as an argument to other functions.
// Returned from another function.
// Stored in data structures like arrays and objects

//* 1. function as variable-
// const greet = function () {
//   console.log("Hello, world!");
// };
// greet(); // Output: Hello, world!

//* 2. function as arguments-

// function helloThere(callback) {
//   callback();
// }

// function sayhi() {
//   console.log("callback executed.");
// }

// helloThere(sayhi);

//! 13.iife(immediately invoked function expression)-
// this is a type of a function which is immediately invoked as soon as it is defined.
// an iife creates a local scope for its own variables. variables declared within iffe  are not accessible from the outside scope which helps in preventing naming conflicts and its also make it private.
// iiife is comonly used in scenarios where you need to isolate some code initialize variable or control variable scope without affecting the global scope.

// (function () {
//   var a = 900;
//   console.log(a);
// })();

// console.log(a);

//! 14.Higher order function -
// when a function takes a function as an argument or returns another function out of it is called higher order function.
// eg- foreach,map,filter,reduce

// function as an argument
// const arr = [3, 4, 5];
// let newArr = arr.map((x) => x * 2);
// console.log(newArr);

// function as return value
// function greet(message) {
//   return function (name) {
//     return `${message}, ${name}!`;
//   };
// }

// const sayHello = greet("Hello");
// console.log(sayHello("John")); // Output: Hello, John!

//! 15. Callback function
// when a function passed as an argument to another function which is then invoked inside the outer function to complete some kind of action.
// core idea- a function  that is called back at a later time usually after a specific task or event has been completed.

// purpose of callbacks:
// To handle asynchronous operations, such as fetching data from an API, reading files, or waiting for user interaction.

//* basic example of callback-

// function greet(name, callback) {
//   console.log(`Hello ${name}`);
//   callback();
// }
// function bye() {
//   console.log(`Good Bye`);
// }

// greet(`Sahil`, bye);

//* handling asynchronous operation

// function fetchData(url, callback) {
//   fetch(url)
//     .then((raw) => raw.json())
//     .then((data) => callback(data))
//     .catch((error) => callback(error));
// }

// function handleResponse(data, error) {
//   if (error) {
//     console.log("Error occurred:", error);
//   } else {
//     console.log("Data is fetched");
//     console.log(data.results[0]); // Access `results` array correctly
//   }
// }
// fetchData("https://randomuser.me/api/", handleResponse);

//! 16. function expression
// A Function Expression is a way to define a function in JavaScript where the function is assigned to a variable, rather than being declared with the function keyword as in a Function Declaration.

// const sum = (a, b) => {
//   return a + b;
// };

// let res = sum(4, 5);
// console.log(res);

//! 17. Different ways to handle asynchronous operation-
// callback,promise,async await

//* 1.callback
// when a function passed as an argument to another function which is then invoked inside the outer function to complete some kind of action.

// function fetchData(url, callback) {
//   fetch(url)
//     .then((raw) => raw.json())
//     .then((data) => callback(data))
//     .catch((error) => callback(error));
// }

// function handleResponse(data, error) {
//   if (error) {
//     console.log("Error occurred:", error);
//   } else {
//     console.log("Data is fetched");
//     console.log(data.results[0]); // Access `results` array correctly
//   }
// }
// fetchData("https://randomuser.me/api/", handleResponse);

// Advantages:
// Simple and easy to implement.
// Suitable for short asynchronous operations.
// Disadvantages:
// Callback Hell (also known as Pyramid of Doom): When callbacks are nested inside each other, it becomes difficult to read and manage the code.
// Error handling is cumbersome and can be inconsistent.

//* 2. Promise
// Promise - promise is a object, it is use to perform asynchronous operation in js it gives us more cleaner and efficient code than callback because callback leads to callback hell. promise takes some code that can be completed in near future. it has three states pending,fulfilled and rejected.

// Pending: The initial state when the operation has not yet been completed.
// Fulfilled: The state when the operation has successfully completed, and the promise is resolved with a result.
// Rejected: The state when the operation has failed, and the promise is rejected with an error.

// Advantages:
// Avoids callback hell by chaining .then() and .catch().
// Promises can be chained, and multiple asynchronous tasks can be handled more cleanly.
// Disadvantages:
// Still requires chaining, which can lead to some complexity for handling multiple asynchronous operations.
// Syntax might feel verbose compared to async/await.

// * Basic example of promise
// var p = new Promise((resolve, reject) => {
//   var num = Math.floor(Math.random() * 20);

//   if (num > 5) {
//     resolve();
//   } else {
//     reject();
//   }
// });

// p.then(() => {
//   console.log("Number is greater than 5");
// }).catch(() => {
//   console.log("Number is less than 5");
// });

//* handling asynchronous operation

// var getData = new Promise((resolve, reject) => {
//   fetch("https://randomuser.me/api/")
//     .then((raw) => raw.json())
//     .then((data) => resolve(data))
//     .catch((error) => reject(error));
// });

// getData
//   .then((data) => {
//     console.log(`Data is Fethced`);
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(`Error here`);
//     console.log(error);
//   });

// * 3. Async Await
// we handle asynchronous operation using async await we put async keyword before the function keyword to make this function an asynchronous task and we use await keyword before fetching the data because sometimes in getting the data from the server it can take time to get the data fetched so it will wait till the data getting fetched.

// example fetching data using async await

// async function getData() {
//   try {
//     let data = await fetch(`https://randomuser.me/api/`);
//     let result = await data.json();
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// }

// getData();

// Advantages:
// Readable Code: Async/await makes the code look synchronous, which is easier to read and maintain.
// Error Handling: It uses try/catch blocks for handling errors, making error handling more intuitive and clean.
// Sequential Execution: Multiple asynchronous operations can be executed sequentially, as if they were synchronous.
// Disadvantages:
// await can only be used inside async functions.
// Cannot parallelize tasks easily like promises with .all().

//! 18.explain what is this keyword and this behavior
// this keyword is use to control the behaviour of function invocation in execution context. this behaviour varies in different sceneario where it is called.

//* 1. global context -In the global execution context (outside of any function), this refers to the global object.

// console.log(this); //in global space it will refer to window object

//* 2. inside a function- When a function is called in the global context, this also refers to the global object.

// function greet() {
//   console.log(this); //refers to window
// }
// greet();

// "use strict";
// function strictGreet() {
//   console.log(this); // undefined in strict mode
// }
// strictGreet();

//* 3 inside a method- When a function is a method of an object, this refers to the object that owns the method.

// const person = {
//   name: "sahil",
//   age: 23,
//   method: function () {
//     console.log(this.name);
//     console.log(this.age);
//   },
// };

// person.method();

//* 4. event handling--
// In event handlers:
// Using a regular function, this refers to the element that received the event.
// Using an arrow function, this refers to the surrounding lexical scope.

// document.getElementById("btn").addEventListener("click", function () {
//   console.log(this); // Refers to the button element
// });

// document.getElementById("btn").addEventListener("click", () => {
//   console.log(this); // Refers to the global object or the surrounding context
// });

//* 5. arrow function- Arrow functions do not have their own this. They inherit this from the surrounding (lexical) scope.

// const arrowFunc = () => {
//     console.log(this); // Refers to the surrounding context (e.g., Window in global scope)
// };

// arrowFunc();

// const obj = {
//     method: () => {
//         console.log(this); // Refers to the surrounding scope, not `obj`
//     },
// };

// obj.method(); // this is the global object (or undefined in strict mode)

//* 6.Constructor Functions and Classes
// When a function is used as a constructor (with new), this refers to the new instance created by the function.

// function Person(name) {
//   this.name = name;
// }

// const sahil = new Person("Sahil");
// console.log(sahil.name); // "Sahil"

//! 19. truthy and falsy values

// truthy and falsy values are important because they are used in control flow statements, logical operators, and default value handling.
// falsy value ->> a falsy value is a value that is considered false when evaluated in a boolean context.
//  1.false 2.0 3.''4.null 5.undefined 6.nan 7.bigint these all are falsy values in javascript

// let value = NaN;
// if (value) {
//   console.log("truthy");
// } else {
//   console.log("falsy");
// }

// truthy value ---> All are truthy value excluding all the falsy value. {},(),all non zero,non empty string

// let value = "hello";

// if (value) {
//   console.log("truthy");
// } else {
//   console.log("falsy");
// }

//! 20.difference between regular function and arrow function

// regular function --->>> regular function we decalred using function keyword.

// greetMe();
// function greetMe() {
//   console.log("hello");
// }

// arrow function --->> arrow function comes with es6 version it gives us concise way to write a function using arrow it is not mandotary to use function keyword to declare a varible in arrow function.

const sayHello = () => {
  console.log("hello me");
};
// sayHello(); //output - hello me

// the main difference comes in hoisting between these two when we declare varibale using function keyword it is hoisted and we can access the value, but when we try to access a arraw function before initializing it we can't access it will throw reference error can't access before initializing because javascript treats arrow function as an variable like 'let and const' so they are hoisted but can't be initialize with any value. that's the major difference between these two.

//* the same apply with function statement (function declaration) and function expression

// function declaration (function statement)-->
// a function  declaration or function statement both are same thing in javascript. function must be declared with function keyword.

// function sum(a, b) {
//   return a + b;
// }

// let res = sum(3, 4);
// console.log(res);

// function expression ---> when we store a function in a variable we call it function expression.

// helloDear();
// var helloDear = function () {
//   console.log("say hello");
// };

// helloDear();

// sayBye();
var sayBye = () => {
  console.log("Bye dear");
};

// sayBye()

// the main difference comes in hoisting between these two when we declare varibale using function keyword it is hoisted and we can access the value, but when we try to access a function expression before initializing it we can't access it will throw error function is not defined because javascript treats  function expression as an variable like 'let and const' so they are hoisted but can't be initialize with any value. that's the major difference between these two.

//! 21.  Currying in javascript

// currying is a process in which we can transform a function with multiple arguments into a sequenece of nesting functions. it returns a new function that expects the next argument and so on.
// in other words, when a function instead of taking all arguments at the same time, takes the first one and return a new function that takes second argument argumetns and returns a new function and so on until all arguments have been fulfilled.

// why it is important-
// 1. currying helps avoid passing same variable again and again.
// 2.it helps to create higher order function.

// function sum(a) {
//   return (b) => {
//     return (c) => {
//       return a + b + c;
//     };
//   };
// }

// console.log(sum(1)(2)(3));
// const sum1 = sum(1);
// const sum2 = sum(2);
// const sum3 = sum(3);

//* Visualizing the Process
// Here’s a visual flow:

// Call sum(1)
// Returns:

// (b) => {
//     return (c) => {
//         return 1 + b + c;
//     };
// }
// Call the returned function with 2:
// Returns:

// (c) => {
//     return 1 + 2 + c;
// }
// Call the next returned function with 3:
// Returns:

// 1 + 2 + 3 => 6

//! 22. Shadowing in javascript
// Shadowing occurs when a variable in a local scope (like inside a function or block) has the same name as a variable in an outer scope. The inner variable "shadows" or overrides the outer variable within its own scope, making the outer variable inaccessible in that scope.

//* with var
// var a = 34;
// function func() {
//   var a = 90;
//   console.log(a);
// }
// func();
// console.log(a);

//* with let
// let b = 78;
// function getFunc() {
//   let b = 88;
//   console.log(b);
// }
// getFunc();
// console.log(b);

//! 23. call apply and bind

// call apply and bind  is used in js to set the 'this' keyword behaviour inside the function when we want to set specified value of this inside function we use call apply and bind.

//! call- call is used to set specified value if this inside function because by default this value in function is window object.

// function nameHello(name) {
//   name = this.name;
//   console.log(name);
// }

// const obj = {
//   name: "sahil",
// };

// nameHello.call(obj);

//! apply = apply is similar to call but it takes one more parameter that is an array it takes an array.

// function abc(v1, v2, v3) {
//   const name = this.name;
//   console.log(name, v1, v2, v3);
// }

// const obj = {
//   name: "sahil",
// };

// abc.apply(obj, [2, 3, 4]);

//! bind -> In JavaScript, bind() is a method used to create a new function with a specific value of this, which can be used when calling that function later. It allows you to "bind" the context (this) of a function to a specific object, without immediately executing the function.

// function greet(greet) {
//   console.log(greet + " " + this.name);
// }

// const person = {
//   name: "sahil",
// };

// let res = greet.bind(person);

// res("hello");

//! 24. event propagation bubbling and capturing-

// Event propagation is the mechanism that defines how events travel through the DOM hierarchy. It consists of three phases:

//* Capturing Phase (Event Capture): The event travels from the root of the DOM down to the target element.
// Target Phase: The event reaches the target element.
// Bubbling Phase: The event propagates from the target element back up to the root of the DOM.

// bubbling - in bubbling phase the event propagte through child to its parent. suppose we a div inside div we have nested list item when we attach events on them the events propagtes through child items to thier parent.
//  Event bubbling can be stopped using event.stopPropagation() along with boolean true.

// <div id="div">
//       <div id="category">
//         <li id="shirt">Shirt</li>
//         <button id="btn">Hello</button>
//       </div>

// </div>

// take this example

// document.getElementById("div").addEventListener("click", () => {
//   console.log("Parents div got clicked");
// });
// document.getElementById("category").addEventListener("click", () => {
//   console.log("category div got clicked");
// });

// document.getElementById("shirt").addEventListener("click", () => {
//   console.log("shirt div got clicked");
// });
// document.getElementById("btn").addEventListener("click", () => {
//   console.log("button got clicked");
// });

// above example the events pass through child to parents by default the addeventlistener is in bubbling phasee.
// When you click on the button (<button id="btn">), the event is triggered on the btn element first. Then it bubbles up through its parent elements (shirt, category, and div).

// The output for clicking the button will be:
// Button clicked
// Category div clicked
// Parent div clicked

//* b. Target phese-
//  The target phase is the second phase of event propagation in JavaScript, where the event reaches the element that triggered it, known as the target element.

{
  /* <div id="parent">
  <button id="btn">Click Me</button>
</div>

<script>
  // Capturing listener on parent
  document.getElementById("parent").addEventListener(
    "click",
    () => {
      console.log("Parent (Capturing)");
    },
    true
  );

  // Target listener
  document.getElementById("btn").addEventListener("click", () => {
    console.log("Button Clicked (Target Phase)");
  });

  // Bubbling listener on parent
  document.getElementById("parent").addEventListener("click", () => {
    console.log("Parent (Bubbling)");
  });
</script> */
}

//* c. event capturing- in this phase the event propagets through parents to its child but to apply this event capturing we have to pass a boolean (true) along with addeventlistener.

// <div id="div">
//       <div id="category">
//         <li id="shirt">Shirt</li>
//         <button id="btn">Hello</button>
//       </div>

// </div>

// take this example

// document.getElementById("div").addEventListener(
//   "click",
//   () => {
//     console.log("Parents div got clicked");
//   },
//   true
// );
// document.getElementById("category").addEventListener(
//   "click",
//   () => {
//     console.log("category div got clicked");
//   },
//   true
// );

// document.getElementById("shirt").addEventListener(
//   "click",
//   () => {
//     console.log("shirt div got clicked");
//   },
//   true
// );
// document.getElementById("btn").addEventListener(
//   "click",
//   () => {
//     console.log("button got clicked");
//   },
//   true
// );

// When you click the button (<button id="btn">), the event travels from the root (i.e., div) down to the btn element. The output will be:

// Parent div got clicked
// Category div got clicked
// Shirt got clicked
// Button got clicked

//! 25. Event Delegation -->

//Event delegation is a pattern in JavaScript where you attach a single event listener to a parent element to handle events for its child elements. Instead of adding separate event listeners to each child element, the parent listens for events, leveraging the concept of event propagation (specifically the bubbling phase).

// Why Use Event Delegation?
// Performance Optimization:
// Adding a single event listener to the parent element instead of multiple listeners for each child reduces memory usage and enhances performance.

// Dynamic Elements:
// Event delegation allows handling of dynamically created child elements that were not present in the DOM at the time of event listener attachment.

// Simpler Code Management:
// Writing a single event listener on the parent simplifies event handling logic.

{
  /* <div id="parent">
  <button id="child1">Child 1</button>
  <button id="child2">Child 2</button>
  <button id="child3">Child 3</button>
</div>; */
}

// document.getElementById("parent").addEventListener("click", () => {
//   console.log("parent got clicked", Event);
// });

// let a = 90;
// // console.log(typeof a);
// let b = typeof a;

// console.log(typeof a);
// console.log(typeof b);

// In the code, let a = 90; declares a as a number, so typeof a evaluates to "number", which is a string. Assigning let b = typeof a; means b holds the string "number". The first console.log(typeof a); outputs "number" because a is a number. The second console.log(typeof b); outputs "string" because b contains the string "number", and the typeof operator always returns the type of a value as a string. Thus, the final output is number and string.

// let a = 90;
// let b= String(a)

// console.log(typeof a);
// console.log(typeof b);

// ! *. Implicit type coercion in js

//* In JavaScript, implicit type coercion happens when javascript automatically converts values from one data type to another.

//1.String Coercion -> When using the '+' operator with a string and another type, JavaScript converts the other type to a string.

// let a = "8";
// let b = 7;

// console.log(a + b); // 87

// 2.Number Coercion -> When using arithmetic operators other than + (e.g., -, *, /), JavaScript tries to convert values to numbers.

// let a = "8";
// let b = 7;
// console.log(a - b); // 1

//* Explicit coercion ->
// In JavaScript, explicit type coercion (also known as type casting) is when you deliberately convert a value from one type to another using specific methods or operators. Unlike implicit coercion, where JavaScript converts types automatically, explicit coercion is done by the developer to ensure values are in the desired format.

// let num = 89;
// let b = String(num);

// console.log(typeof b);

// let s = "sahil";
// // let num = +s;
// // let num = Number(s);
// console.log(typeof num);

// pracital exapmle

// let a = "88";
// console.log(+a + 5);

// let s = 888;

// console.log(String(s) + "hello");

// console.log("12" - 2);

// console.log(typeof NaN); //number

// console.log(NaN == NaN); //false because it can be anything it is not fixed.

// // console.log(3 > 2 > 1); // when we compare 3>2 it's result is true now the expression will be like (true > 1) and the value of true is 1 when we convert true to number (1 > 1) now it will return false because 1 is equal to 1 not greater

// // console.log(1 < 2 < 3);

// const arr = [0, 1, 2, 3, 4, 5];

// let res = arr
//   .filter((x) => {
//     return x < 3;
//   })
//   .map((x) => x * 2)
//   .reduce((x, y) => x + y);

// console.log(res);
