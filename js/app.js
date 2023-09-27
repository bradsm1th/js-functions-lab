// console.log("Hello—all good here");

/*  defining a function (or "declaring")
    creating the reusable code block(s) to be used
      later on
*/


function sayHello(yourName = "world") {
  // code goes here
  console.log(`Hello, ${yourName}!`);
}

// sayHello('Dwayne "The Rock" Johnson');


function sayGoodbye(phrase, name) {
  console.log(`${phrase}, ${name}!`);
}
// sayGoodbye("See ya", 'Dwayne "The Rock" Johnson');


function add(num1, num2) {
  console.log(num1 + num2);
}


/* =======================
/* 1.
/* =====================*/
// function maxOfTwoNumbers(num1, num2) {
//   if (num1 >= num2) {
//     return num1;
//   } else { 
//     return num2;
//   }
// }

// alt. version w/ ternary
function maxOfTwoNumbers(num1, num2) {
  return (num1 >= num2) ? num1 : num2;
}
console.log(maxOfTwoNumbers(135, 15));


/* =======================
/* 2.
/* =====================*/
let maxOfThree = function(num1, num2, num3) {
  let max = num1;
  if (num2 >= num1) {
    max = num2;
  }
  if (num3 >= num1) {
    max = num3;
  }
  
  return max;
}
console.log(maxOfThree(12,13,13.1));


/* =======================
/* 3.
/* =====================*/
function isCharAVowel(char) {
  return ['a','e','i','o','u'].includes(char.toLowerCase());
}
console.log(isCharAVowel('A'));


/* =======================
/* 4.
/* =====================*/
const someNums = [1,2,3,4,5,6,7];
let sumArray = function(array) {
  let total = 0;
  array.forEach(num => {
    total += num;
  })
  return total;
}
console.log(sumArray(someNums));

// alt with Array.reduce (starting at 0)
// let reducedSum = someNums.reduce((currentElement, runningTotal) =>
//   runningTotal += currentElement, 0
//   )
// console.log(reducedSum);


/* =======================
/* 5.
/* =====================*/
// use same someNums as in #4
function multiplyArray(array) {
  let total = 1;
  array.forEach(num => total *= num);
  return total;
}
console.log(multiplyArray(someNums)); // 7! === 5040

// alt with Array.reduce (starting at 1)
// let multipliedNums = someNums.reduce((currentVal, currentTotal) => 
//   currentTotal *= currentVal, 1
// );
// console.log(multipliedNums);


/* =======================
/* 6.
/* =====================*/
let numArgs = function(...args) {
  return args.length
}
console.log(numArgs([], {}, "", 0, 1));


/* =======================
/* 7.
/* =====================*/


/* =======================
/* 8.
/* =====================*/


/* =======================
/* 9.
/* =====================*/