/* 
  You are given an array of names.
  Using .find(), we'd like to find the first name which starts with A and is longer than 7 letters.
*/

// write your code here
var names = [
  "Rakesh",
  "Antonio",
  "Alexandra",
  "Andronicus",
  "Annam",
  "Mikey",
  "Anastasia",
  "Karim",
  "Ahmed",
];

// var longNameThatStartsWithA = findLongNameThatStartsWithA(names);
var longNameThatStartsWithA = names.find(findLongNameThatStartsWithA => findLongNameThatStartsWithA[0] === "A" && findLongNameThatStartsWithA.length > 7)
//You are putting names into the longerSevenStartsA function and you are using the .find() method to check if any values in the array meet the conditions stated.

console.log(longNameThatStartsWithA);

/* EXPECTED OUTPUT */
// "Alexandra"
