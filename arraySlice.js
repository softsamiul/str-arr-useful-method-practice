const numbers = [1, 3, 5, 7, 9, 11, 17, 60];

const slicedNum = numbers.slice(3, 5);
// console.log(slicedNum);

// splice is used to remove an element or elemets from an array

// const arrSpliced = numbers.splice(3, 3);
// add using splice
const addElements = numbers.splice(3, 0, 99, 111, 121, 199);
console.log(numbers);