"use_strict";

let test1 = 10;

const z = true;

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

var test = () => {
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
console.log(arr.sort(function (a, b) {
    return a - b;
}));

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

arr.forEach((element, index) => {
    console.log("element " + element + " is at index: " + index);
});

var dic = {
    key1: "hello",
    key2: "World",
    key3: "!"
}

console.log(dic["key2"]);

for (k in dic) {
    console.log(dic[k]);
}

// Object

function Cat(name, color) {
    this.name = name;
    this.color = color;
    this.run = function () {
        console.log(this.name + " runs!");
    };
    return this;
}

let murzik = new Cat("Murzik", "white");
let snizhok = new Cat("Snizhok", "black");
murzik = new Cat("Barsik", 'red');
murzik.run();
snizhok.run();

// ----------
// Actions

jsbtn.onclick = function () {
    // step 1
    var xhr = new XMLHttpRequest();

    // step 2
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            hello.innerHTML = JSON.parse(xhr.responseText).value;
        }
    }

    xhr.open('GET', 'https://api.chucknorris.io/jokes/random');

    // step 3
    xhr.send();
};

helloCont.addEventListener("click", (e) => {
    // fetch API
    fetch('https://api.chucknorris.io/jokes/random')
        .then((response) => response.json())
        .then((json) => {
            hello.innerHTML = json.value;
        })
        .catch((err) => {
            console.log(err);
        });
    // end of fetch API
    e.stopPropagation();
}, true);
hello.addEventListener("click", (e) => {
    console.log("hello clicked");
    console.log(e);
}, true);

// hello.addEventListener('click', showHello, false);
// hello.removeEventListener('click', showHello);

// AJAX

btnsend.addEventListener('click', function () {
    fetch('https://formspree.io/YOUR_EMAIL@HERE', {
        method: 'POST',
        body: JSON.stringify(
            {
                email: feedback.email.value,
                message: feedback.message.value
            }
        ),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(function (response) {
        console.log(response.status);
    });
})


// WEATHER
const prefix = 'https://cors-anywhere.herokuapp.com/'
const city = 'kiev';
fetch(`${prefix}https://www.metaweather.com/api/location/search/?query=${city}`)
    .then(function (response) {
        return response.json();
    })
    .then(function (json) {
        return fetch(`${prefix}https://www.metaweather.com/api/location/${json[0].woeid}/`);
    })
    .then(function (response) {
        return response.json();
    })
    .then(function (json) {
        document.querySelector('#weather img').src = 'https://www.metaweather.com/static/img/weather/png/64/' + json.consolidated_weather[0].weather_state_abbr + '.png';
        document.querySelector('#weather b').innerHTML = json.consolidated_weather[0].the_temp;
    });


// function Person(age) {
//     this.age = age;
//     setInterval(() => { 
//         this.age++;
//         console.log(this.age);
//     }, 1000);
// }
// var p = new Person(25);
const name = "Vasya";
const someString = `<p>Hello, ${name}</p>
<p>Goodbye</p>`;
hello.innerHTML = someString;

const obj = {first: 'John', last: 'Smith', pobatkovi: "Andriovich"};
// var first = obj['first'];
// var last = obj['last'];
let {first, last} = obj;
console.log(first);

const {first: l} = obj;
console.log(l);


let h = 1;
let g = 3;
[h, g] = [g, h];
console.log(h);
console.log(g);

function f() {
    return [5, 6];
}

let n,m;
[n, m] = f();
console.log(n);
console.log(m);

let {pobatkovi = "Petrovich"} = obj;
console.log(pobatkovi);

class Dog {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }

    run() {
        console.log(this.name + " runs!");
    }
}

class GuardDog extends Dog {
    constructor(name, color, runSpeed) {
        super(name, color);
        this.runSpeed = runSpeed;
    }

    guard() {
        console.log(`I will run at ${this.runSpeed} km/s and bite you!`);
    }
}

const dog = new Dog("Rex", "black");
dog.run();

const gDog = new GuardDog("Jack", 'white', 30);
gDog.run();
gDog.guard();

const prom = new Promise((resolve, reject) => {
    setTimeout(() => {
        const number = Math.random() * 100;
        if (number > 99) {
            reject("big number");
        } else {
            resolve(number);
        }
    }, 3000);
});

async function myCoolAsync() {
    return prom;
}

prom.then((res) => {
    return res * 2;
}).then((otherRes) => {
    console.log(otherRes);
}).catch(err => {
    alert('i fixed the error: ' + err);
    return err;
}).finally(text => {
    console.log(text);
});

const myTestFun = async () => {
    const z = await myCoolAsync();
    alert(z * 2);
};

(async function main() {
    myTestFun();
})();


async function megaFetch() {
    const res = await fetch('https://google.com/');
}