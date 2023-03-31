// Higher order array methods
// .map()
// .map()
//     returns: A new array the same size as the input array
//     purpose: allows you to take an array of data and create a new array of data from it.
// higher order methods need functions passed into them asa paramater
// .map is basically getting rid of having to use a for loop, does the same thing
// num is equivilent to arr[i] in a for loop, num could be called anyting it just stands for each number in the array
// need return statement inside the brackets to tell it what you want in the new array

// const arr = [1, 2, 3, 4, 5, 6, 7, 8];

// const result = arr.map(function (num) {
//     return num + 10
// });
// es6 version of the same above, does exact same thing
// const result2 = arr.map(num => num + 10)

// console.log(result)
// return of above function
// 0: 11
// 1: 12
// 2: 13
// 3: 14
// 4: 15
// 5: 16
// 6: 17
// 7: 18
// length: 8
// [[Prototype]]: Array(0)

// objects

const users = [{ name: "joe" }, { name: "steve" }, { name: "lisa" }];
// .map used to just return an array of the names from the object
const result = users.map(function (user) {
  return user.name;
});
console.log(result);

// ### **1) Make an array of numbers that are doubles of the first array**

var numbers = [8, 12, 5, 2, 5, 7];
var doubledNumbers = numbers.map((n) => n * 2);
console.log(doubledNumbers);

// ### **2) Take an array of numbers and make them strings**
let arr = [1, 2, 3, 4, 5];
let strArr = arr.map(function (e) {
  return e.toString();
});
console.log(strArr); //["1", "2", "3", "4", "5"]

// ### **3) Capitalize the first letter of each name and make the rest of the characters lowercase**
const boys = ["john", "jacob", "jinglehimer", "schmidt"];

const capitalizedNames = boys.map((boys) => {
  return boys.charAt(0).toUpperCase() + boys.slice(1).toLowerCase();
});

console.log(capitalizedNames);

// Output:
// ["John", "Jacob", "Jingleheimer", "Schmidt"]

// ### **4) Make an array of strings of the names**

let celebs = [
  {
    name: "Angelina Jolie",
    age: 80,
  },
  {
    name: "Eric Jones",
    age: 2,
  },
  {
    name: "Paris Hilton",
    age: 5,
  },
  {
    name: "Kayne West",
    age: 16,
  },
  {
    name: "Bob Ziroll",
    age: 100,
  },
];
const cNames = celebs.map(function (celebs) {
  return celebs.name;
});
console.log(cNames);

// ouput = // ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]

// ### **5) Make an array of strings of the names saying whether or not they can go to The Matrix**

let makeStrings = [
  {
    name: "Angelina Jolie",
    age: 80,
  },
  {
    name: "Eric Jones",
    age: 2,
  },
  {
    name: "Paris Hilton",
    age: 5,
  },
  {
    name: "Kayne West",
    age: 16,
  },
  {
    name: "Bob Ziroll",
    age: 100,
  },
];

const oldEnoughForMatrix = makeStrings.map(person => {
    if (person.age >= 18) {
      return `${person.name} can see the Matrix!`;
    } else {
      return `${person.name} is not old enough to see the Matrix.`;
    }
  });
  
  console.log(oldEnoughForMatrix);



// ["Angelina Jolie can go to The Matrix",
// "Eric Jones is under age!!",
// "Paris Hilton is under age!!",
// "Kayne West is under age!!",
// "Bob Ziroll can go to The Matrix"]

// 6) Make an array of the names in h1s, and the ages in h2s

  let readyToPutInTheDOM =[
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ];

// Map the array to an array of HTML strings
const htmlArray = readyToPutInTheDOM.map(item => `<h1>${item.name}</h1><h2>${item.age}</h2>`);

// Join the HTML strings into a single string
const htmlString = htmlArray.join('');
console.log(htmlString)


 



// ["<h1>Angelina Jolie</h1><h2>80</h2>",
// "<h1>Eric Jones</h1><h2>2</h2>",
// "<h1>Paris Hilton</h1><h2>5</h2>",
// "<h1>Kayne West</h1><h2>16</h2>",
// "<h1>Bob Ziroll</h1><h2>100</h2>"]
