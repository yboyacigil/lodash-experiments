var _ = require('lodash');

var hw = function() {
    console.log("Hello, World!");
};
// allow only "1" call to this function
var hwb = _.before(hw, 2);
hwb();
// will not be executed
hwb();

var add = function(a, b) {
    return a + b;
};
var numArr = [0, 2, -2, 4, -6];
console.log("Applied add function to all elements of", numArr, ": ", _.map(numArr, _.ary(add, 2)));