//Challenge 1:
const arr = [1, 2, 3, 4, 5];
arr.push(6);
arr.unshift(0);
arr.reverse();
console.log(arr); // Expected Result: [6, 5, 4, 3, 2, 1, 0]

//Challenge 2:
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];
const arr3 = [...arr1, ...arr2];
arr3.splice(4, 1);
console.log(arr3);// Expected Result: [1,2,3,4,5,6,7,8,9,10]

