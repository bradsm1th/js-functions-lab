console.log("JS Objects, reporting for duty…");

const bigFoot = {
  name: 'Big Foot, MD',
  diet: 'veggiesaurus',
  isReal: true,
  height: 250, // cm
  woodlandFriends: [
    {
      name: 'bunny',
      age: 4
    },
    {
      name: 'deer',
      age: 44
    },
    {
      name: 'squirrel',
      age: 444
    }],

  // methods
  eat() {
    return "I'm hungry";
  },
  run() {
    return "Can we stop running yet?";
  },
  hide(location) {
    return `I'm outta here…I'm in the ${location}`;
  },
}

console.log(bigFoot.hide('Costco'));
console.log(bigFoot.hide('shadows'));

console.log(`The bunny's age is ${bigFoot.woodlandFriends[0].age}`);
console.log(`The squirrel's age is ${bigFoot.woodlandFriends[2].age}`);

// bigFoot.color = 'ochre';
// console.log(bigFoot.color);

// bigFoot.diet = "intermittent fasting";
// console.log(bigFoot.diet);

// print out deer from woodland friends
// console.log(bigFoot.woodlandFriends[1]);

// for each woodland friend, use "Say Hello" to greet it

function sayHello(name) {
  return `Hello, ${name}!`;
}

bigFoot.woodlandFriends.forEach(friend => {
  console.log(sayHello(friend));
});