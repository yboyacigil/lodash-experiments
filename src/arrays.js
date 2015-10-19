'use strict';
var _ = require('lodash');

// Arrays
var arr = [1, 2, 3];
console.log("Created a new array: ", arr);
console.log("Head of array: ", _.head(arr));
console.log("Tail of array: ", _.tail(arr));

// Sum of array using head and tail
var sumHeadTail = function(arr, acc=0) {
    if (arr.length == 0) {
        return acc;
    }
    return sumHeadTail(_.tail(arr), acc + _.head(arr));
};
console.log("Sum of array using head-tail is: ", sumHeadTail(arr));

// Sum of array using reduce
var sumReduce = (arr) => _.reduce(arr, (a, b) => a +b);
console.log("Sum of array using reduce is: ", sumReduce(arr));

// Intersection
var arr1 = [1, 2, 3];
var arr2 = [2, 3, 4];
console.log("Intersection of arr1: ", arr1, ", arr2: ", arr2, " is: ", _.intersection(arr1, arr2));

// dropWhile
var users = [
    {name: 'Yusuf', age: 39},
    {name: 'Yavuz', age: 10},
    {name: 'Fatma', age: 36}
];
var droppedUsersWhileAgeIsOver30 = _.dropWhile(users, function(user) {return user.age > 30});
console.log("Dropping users over age 30 from: ", users, " and the result is: ", droppedUsersWhileAgeIsOver30);
