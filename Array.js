const arr = [1, 3, 5, 2, 4];
const values =[3,2];
const result= arr.filter(item=>!values.includes(item))
console.log(result);