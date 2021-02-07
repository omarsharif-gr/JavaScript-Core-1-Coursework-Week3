Imagine you have an array of names:

```js
var names = ["Daniel", "James", "Irina", "Mozafar", "Ashleigh"];
```

How would you find the first name that's longer than 6 characters?

You can write a predicate function that checks if a string is longer than 6 characters:

```js
function isLongName(name) {
  return name.length > 6;
}

var longName = names.find(indexOf(isLongName[0])===0;

console.log(longName); // logs Mozafar
```
