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
let maxOfThree = function (num1, num2, num3) {
  let max = num1;
  if (num2 >= num1) {
    max = num2;
  }
  if (num3 >= num1) {
    max = num3;
  }

  return max;
}
console.log(maxOfThree(12, 13, 13.1));


/* =======================
/* 3.
/* =====================*/
function isCharAVowel(char) {
  return ['a', 'e', 'i', 'o', 'u'].includes(char.toLowerCase());
}
console.log(isCharAVowel('A'));


/* =======================
/* 4.
/* =====================*/
const someNums = [1, 2, 3, 4, 5, 6, 7];
let sumArray = function (array) {
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
let numArgs = function (...args) {
  return args.length
}
console.log(numArgs([], {}, "", 0, 1));


/* =======================
/* 7.
/* =====================*/
// one way
function reverseString(aString) {
  return Array.from(aString).reverse().join("");
}

// alt. a harder/manual way
// function reverseString(aString) {
//   let newString = [];
//   let arrayOfString = Array.from(aString);
//   for (let char of arrayOfString) {
//     newString.unshift(char);
//   }
//   return newString.join("");
// }

console.log(reverseString("hi I'm brad!"));


/* =======================
/* 8.
/* =====================*/
let longestStringInArray = function(array) {
  let longestString = array[0];
  for (let each of array) {
    if (each.length > longestString.length) {
      longestLength = each.length;
      longestString = array[array.indexOf(each)];
    }
  }
  return `The longest string in the array is '${longestString}'. It's ${longestLength} characters long.`
}
console.log(longestStringInArray(['a', 'abc', 'pickle weasel']));


/* =======================
/* 9.
/* =====================*/
function stringsLongerThan(array, stringLength) {
  let result = array.filter((element) => element.length > stringLength);
  return result;
}

let testArray = ['say', 'hello', 'in', 'the', 'morning'];
console.log(stringsLongerThan(testArray, 3));