//question 1.  
//In JavaScript, array methods can be categorized into two types: mutating array methods and non-mutating array methods. The primary difference between these two types is that mutating methods modify the original array, while non-mutating methods return a new array without modifying the original.
//Here are five examples of each type:

//Mutating Array Methods:

//push(): adds one or more elements to the end of an array and returns the new length of the array.
//pop(): removes the last element from an array and returns that element.
//shift(): removes the first element from an array and returns that element.
//unshift(): adds one or more elements to the beginning of an array and returns the new length of the array.
//splice(): removes or replaces elements from an array.

//Non-Mutating Array Methods:

//concat(): returns a new array that combines two or more arrays.
//filter(): returns a new array that contains only elements that pass a certain condition.
//map(): returns a new array that is the result of applying a function to each element in the original array.
//lice(): returns a new array that contains a portion of the original array.
//reduce(): returns a single value that is the result of applying a function to each element in the array.


//question 2
let languages = ['C#', 'JavaScript', 'Ruby', 'PHP', 'Python'];

// 1. Add 'Kotlin' to the end of the array
languages.push('Kotlin');

// 2. Add 'Java' after 'Ruby'
languages.splice(languages.indexOf('Ruby') + 1, 0, 'Java');

// 3. Remove the first item in the array
languages.shift();

// 4. Add 'Scala' and 'Swift' to the beginning of the array
languages.unshift('Scala', 'Swift');

// 5. Replace 'PHP' with 'Go' and 'Rust'
languages.splice(languages.indexOf('PHP'), 1, 'Go', 'Rust');

console.log(languages); // ['Scala', 'Swift', 'C#', 'JavaScript', 'Ruby', 'Java', 'Go', 'Rust', 'Python', 'Kotlin']

//question 3
//the value of fruit after calling the function will be ['apple', 'mango', 'orange'].

//question 4
function max(arr) {
    let maxNum = arr[0];
    for(let i = 1; i < arr.length; i++) {
      if(arr[i] > maxNum) {
        maxNum = arr[i];
      }
    }
    return maxNum;
  }
//question 5
function valTimesIndex(arr) {
    return arr.map((num, index) => {
      return num * index;
    });
  }
  