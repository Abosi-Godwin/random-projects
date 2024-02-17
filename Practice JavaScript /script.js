/* 

Write a function called `findMissingLetter` that takes in an array of consecutive (increasing) letters as input and returns the missing letter in the array.

### Examples



findMissingLetter(['a', 'b', 'c', 'd', 'f']); // => "e"
findMissingLetter(['O', 'Q', 'R', 'S']); // => "P"
findMissingLetter(['t', 'u', 'v', 'w', 'x', 'z']); // => "y"


### Constraints

- The input array will only contain letters in one case (lower or upper)
- If no letters are in the array, return an empty string''

*/
/*
const scanArr = (correctArr, inCorrectArr) => {
  const letter = correctArr.filter(arr => {
    if (!inCorrectArr.includes(arr)) {
      return arr;
    }
  }).join("");
  return letter;
};

const theLetter = array => {
  const arr = array.map(arr => arr.toLowerCase());
  const alphabetArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  const correct = alphabetArray.slice(alphabetArray.indexOf(arr[0]), alphabetArray.indexOf(arr[arr.length - 1]) + 1);


  const missingLetter = scanArr(correct, arr);

  return missingLetter;

}

const findMissingLetter = array => array ? theLetter(array) : "";

console.log(findMissingLetter(['a', 'b', 'c', 'd', 'f']));

console.log(findMissingLetter(['O', 'Q', 'R', 'S']));

console.log(findMissingLetter(['t', 'u', 'v', 'w', 'x', 'z']));
console.log(findMissingLetter([]));*/



/* 

Write a function called `findMissingNumber` that takes in an array of unique numbers from 1 to n (inclusive), where one number is missing. It should return the missing number.

findMissingNumber([1, 2, 3, 4, 6, 7, 8, 9, 10]); // 5

findMissingNumber([10, 8, 6, 7, 5, 4, 2, 3, 1]); // 9
findMissingNumber([10, 5, 1, 2, 4, 6, 8, 3, 9]); // 7
### Constraints

- If an empty array is passed in, it should return `1`
- If nothing is passed in, it should return `undefined`

*/


/*const findMissingNumber = arr =>{
  return arr;
}


console.log(findMissingNumber([1, 2, 3, 4, 6, 7, 8, 9, 10]))*/




/*
Find the person who has many skills in the users object.

Count logged in users, count users having greater than equal to 50 points from the following object.

const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
}```
Find people who are MERN stack developer from the users object

Set your name in the users object without modifying the original users object

Get all keys or properties of users object

Get all the values of users object

Use the countries object to print a country name, capital, populations and languages*/

/*
const dog = {
  name: "sharkol",
  legs : "four",
  color: "black",
  age: 3,
};


console.log(dog);*/

/*
class Animal{
  constructor(name,age,color,legs){
    this.name = name;
    this.age = age;
    this.color = color;
    this.legs = legs;
  }
get bark(){
    return "woah woah woah";
  }
}

const dog = new Animal("sharkol",3,"brown",4);
console.log(dog);


class Dog extends Animal{
  constructor(name,age,color,legs){
   super(name,age,color,legs);
  }
}

const dog2 = new Dog("sharkil",4,"red",5);
console.log(dog2);

class Cat extends Animal{
  constructor(name,age,color,legs,eyeColor){
    super(name,age,color,legs);
    this.eyeColor = eyeColor;
  }
}

const cat = new Cat("puffer",2,"white",2,"green");

console.log(cat);*/
/*
const removeLowestFunc = numbers => {
  
const theNumbers =  [...numbers];
const lowest = 0;
const real = numbers.map(arr => arr > lowest)
//console.log(real);
return real
}

const numbArr = [1,2,3,4,5];
const removeLowest = removeLowestFunc(numbArr);
console.log(removeLowest);
*/

/*
Input: [1,2,3,4,5], output = [2,3,4,5]
Input: [5,3,2,1,4], output = [5,3,2,4]
Input: [2,2,1,2,1], output = [2,2,2,1]
*/

// Task 
// Explanation 
/* There is a problem with your keyboard: it randomly writes symbols when you are typing a text. You need to clean up the text by removing all symbols.

Task: 
Take a text that includes some random symbols and translate it into a text that has none of them. The resulting text should only include letters and numbers.

Input Format: 
A string with random symbols.

Output Format: 
A string of the text with all the symbols removed.

Sample Input: 
#l$e%ts go @an#d@@ g***et #l#unch$$$

Sample Output: 
lets go and get lunch  */

// Solution:

const sieveLetters = letters => {
  
const alphabetArray = Array.from({ length: 26 }, (_, i) => String.fromCharCode(97 + i));

//console.log(alphabetArray);
  
  return letters.split("").filter(letter => {
    
    const correctAlpha = alphabetArray.find(letter => {
      
    });
    
    console.log(correctAlpha)
   if (correctAlpha) {
     return letter;
   }
  });
}
console.log(sieveLetters("#l$e%ts go @an#d@@ g***et #l#unch$$$"))