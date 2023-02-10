const numbers = [1, 5, 4];
const newArray = [];

for (let i = 0; i < numbers.length; i++) {
  newArray.push(Math.pow(numbers[i], 2));
}

console.log(newArray);
