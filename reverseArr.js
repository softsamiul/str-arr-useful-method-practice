// sort an array using sort() method

const numbers = [1, 7, 2, 8, 4, 9, 3];
// const sortedNum = numbers.sort();
// console.log(sortedNum);

const friends = ['Hadil', 'kabil', 'xham', 'badboy', 'caty'];
// const sortedFriends = friends.sort();
// console.log(sortedFriends);

const sorteReverseFriends = friends.sort().reverse();
// console.log(sorteReverseFriends);

const bigNum = [12, 10, , 111, 99, 23, 56, 44];
const sortedBigNum = bigNum.sort(function(a, b) {
    return a - b;
});
console.log(sortedBigNum);