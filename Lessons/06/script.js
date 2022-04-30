'use strict';
//

// arr.pop();
// arr.push("5");
// arr.shift();
// arr.unshift("1");
// console.log(arr);

// for(let i =0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// arr.forEach(function(item, i, mass){
//     console.log(i + ': ' + item + " (массив: " + mass + ')');
// });

// console.log(arr);

// let mass = [1, 3, 4, 6, 7];

// for(let key in mass) {
//     console.log(key);
// }

// for(let key of mass) {
//     console.log(key);
// }

// let ans = prompt("", ""),
//     arr = [];

//     arr = ans.split(',');
//     console.log(arr);

// let arr = ['asd', 'das', 'kolo', 'nutro'],
//     i = arr.join(', ');

// console.log(i);

// let arr = ['asd', 'uas', 'kolo', 'autro'],
//     i = arr.sort();

// console.log(arr);

// let arr = [1, 15, 4],
//     i = arr.sort(compareNum);

// function compareNum(a,b){
//     return a-b;
// }
// console.log(arr);

let soldier = {
    health: 400,
    armor: 100
};

let john = {
    health: 100
};

john.__proto__ = soldier;

console.log(john);
console.log(john.armor);





















