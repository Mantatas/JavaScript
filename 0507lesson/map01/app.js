const array1 = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233];

const map1 = array1.map((x) => x * 0.5);
const min1 = Math.min(...array1);
const max1 = Math.max(...array1);

console.log(map1)
console.log(`min sk: ${min1}`)
console.log(`max sk: ${max1}`)