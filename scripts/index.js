var test1 = 10;

var z = true;

var str = "Hello JavaScript!";
var str1 = 'Hello #2';

function addNumbers(one, two) {
    return one + two;
}

/*
this is a very cool function
use it
*/
function showHello() {
    var result = addNumbers(2, 2);
    alert("The result of add is: " + result); // This is an alert
}

showHello();

// Cool example

var a = 10;

var test = function() {
    a = 30;
    var b = 40;
}

test();

var b = 20;

console.log(a, b);

// control flow

var q = 100;
if (q > 5) {
    console.log("q is greater than 5");
}
if (q < 15) {
    console.log("q is less than 15");
}
if (q === 10) {
    console.log("q is equal 10");
} else {
    console.log("q is something else")
}

if (q !== 11) {
    console.log("q is not equal 11");
}

// loops

for (var i = 0; i < 5; i = i + 1) {
    if (i === 2) {
        continue;
    }
    console.log("Iteration number: " + i);
}

while (test1 < 100) {
    test1++;
}
console.log("Increment 100 times: " + test1);