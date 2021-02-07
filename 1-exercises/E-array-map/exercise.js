// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];
function multipliedBy100(numbers) {
    return numbers * 100;
}
let multipliedNumbers1 = numbers.map(multipliedBy100);
let multipliedNumbers2 = numbers.map(number => number * 100);
console.log(multipliedNumbers1);
console.log(multipliedNumbers2);