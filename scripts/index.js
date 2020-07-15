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
    console.log("The result of add is: " + result); // This is a log
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

// Arrays

var arr = [];

arr[0] = 5;
arr[1] = 8;
arr[2] = 16;
// var arr = [5, 8, 16];
var tmp = arr[2];
console.log("array element #3: " + tmp);
console.log("array length is: " + arr.length);
arr.push(20);
console.log(arr);
console.log(arr.pop());
console.log(arr);
// -----
arr.unshift(20);
console.log(arr);
console.log(arr.shift());
console.log(arr);
// ----
console.log(arr.join());
console.log(arr.join("^"));
var myString = "I Love JavaScript";
console.log(myString.split(""));
console.log(myString.split("").sort());
console.log(arr.sort(function(a, b) {
    return a - b;
}));

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);  
}

arr.forEach(function(element, index) {
    console.log("element " + element + " is at index: " + index);
});

var dic = {
    key1: "hello",
    key2: "World",
    key3: "!"
}

console.log(dic["key2"]);

for(k in dic) {
    console.log(dic[k]);
}

// Object

function Cat(name, color) {
    this.name = name;
    this.color = color;
    this.run = function() {
        console.log(this.name + " runs!");
    };
    return this;
}

var murzik = new Cat("Murzik", "white");
var snizhok = new Cat("Snizhok", "black");
murzik.run();
snizhok.run();

// ----------
// Actions

jsbtn.onclick = showHello;

helloCont.addEventListener("click", function(e) {
    console.log("hello container clicked");
    e.stopPropagation();
}, true);
hello.addEventListener("click", function(e) {
    console.log("hello clicked");
    console.log(e);
}, true);

// hello.addEventListener('click', showHello, false);
// hello.removeEventListener('click', showHello);