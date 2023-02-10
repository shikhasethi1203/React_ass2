const numbers = [1, 3, 5, 2, 4];
const newArray = [];

for (var i = 0; i < numbers.length; i++) {
  newArray.push(Math.pow(numbers[i], 2));
}

console.log(newArray);
