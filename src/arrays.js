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

