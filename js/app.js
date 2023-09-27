console.log("Hello—all good here");

/*  defining a function (or "declaring")
    creating the reusable code block(s) to be used
      later on
*/

function sayHello(yourName="world") {
  // code goes here
  console.log(`Hello, ${yourName}!`);
}

sayHello('Dwayne "The Rock" Johnson');


function sayGoodbye(phrase, name) {
  console.log(`${phrase}, ${name}!`);
}
sayGoodbye("See ya", 'Dwayne "The Rock" Johnson');

function add(num1, num2) {
  console.log(num1 + num2);
}