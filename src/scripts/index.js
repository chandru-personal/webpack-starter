import '../styles/index.scss';

console.log('webpack starterkit');

// ============== LANGUAGE FEATURES - START ==================

// Rest Parameters
console.log('> > > Rest Parameters < < <');
function sendCars(...allCarIds) {
    allCarIds.forEach( id =>
        console.log(id)
    );
}
sendCars(1, 2, 3, 4);

// Destructuring Arrays
console.log('> > > Destructuring Arrays < < <');
let carIds = [1, 2, 3, 4];
let [car1, car2, ...theRest] = carIds;
console.log(car1, car2, theRest);

// Destructuring Objects
console.log('> > > Destructuring Objects < < <');
let car = {id: 1, style: 'SUV'};
let {id, style} = car;
console.log(id, style);

// Spread Syntax
console.log('> > > Spread Syntax < < <');
function startCars(car1, car2, car3, car4) {
    console.log(car1, car2, car3, car4);
};
startCars(...carIds);

// typeof()
console.log('> > > typeof() < < <');
console.log('typeof(true)', typeof(true)); //boolean
console.log('typeof(\'chandru\')', typeof('chandru')); //string
console.log('typeof(function() {})', typeof(function() {})); //function
console.log('typeof({})', typeof({})); //object
console.log('typeof(1)', typeof(1)); //number
console.log('typeof(null)', typeof(null)); //is also a object
console.log('typeof(undefined)', typeof(undefined)); //undefined
console.log('typeof(NaN)', typeof(NaN)); //number

// Common Type Conversion
console.log('> > > Common Type copnversion < < <');
console.log( Number.parseInt('120') );
console.log( Number.parseFloat('12.56') );

//  controlling loops
console.log('> > > Controlling Loops < < <');
console.log('break');
for (let i= 0; i < 5; i++) {
    console.log(i);
    if (i === 2) {
        break;
    }
}
console.log('continue');
for (let i= 0; i < 5; i++) {
    if (i === 2 || i === 3) {
        continue;
    }
    console.log(i);
}

// ============== LANGUAGE FEATURES - END ==================
// ============== OPERATORS - START ==================

// Equality Operator
console.log('> > > Equality Operator < < <');
// True
console.log(1 === 1);
console.log(1 == '1'); // double equals convert to common type and compare
console.log(1 == true);
// False
console.log(1 !== 1);
console.log(1 != '1');
console.log(1 === '1');

console.log('> > > Unary Operators < < <');
// var++, var--
let number1 = 100;
console.log(number1++); //100
console.log(number1); //101
// ++var, --Var
let number2 = 200;
console.log(++number2); //201
// +var, -var
let number3 = '300';
console.log(+number3); // 300

// Logical (Boolean) Operators
console.log('> > > Logical(Boolean) Operators < < <');
let userSettings = { name: 'Chandru' };
let defaultSettings = { name: 'Default' };
console.log( userSettings || defaultSettings); //Chandru
console.log( userSettings && defaultSettings); //Default

// Relational Operators <, >, >=, <=
console.log('> > > Relational Operators < < <');

// Conditional Operators
console.log('> > > Conditional Operators < < <');
console.log( (1 > 2) ? 'Yes' : 'No');

// Assignment Operators
// var1 += 20; var1 -= 20; var1 /= 20; var1 *= 20; var1 %= 20
console.log('> > > Assignment Operators < < <');
let year = 2020;
year += 1;
console.log(year);

// ============== OPERATORS - END ==================
// ============== FUNCTIONS AND SCOPE - START ==================

// Function Scope
console.log('> > > Function scope < < <');

/*

function startCar1(carId) {
    let message = 'Starting';
}
startCar1(123);
console.log(message); // will have a ReferenceError due to out of function scope.

*/
// Function Scope example 1
function startCar2(carId) {
    let message = 'Starting..';
    let startFn = function trueKey() {
        console.log(message); // Starting..
    };
    startFn();
}
startCar2(124);
// Function Scope example 2
function startCar3(carId) {
    let message = 'Starting..';
    let startFn = function trueKey() {
        let message = 'Override';
    };
    startFn();
    console.log(message); // Starting..
}
startCar3(125);

// Block Scope
console.log('> > > Block Scope < < <');
// Block Scope Example 1
/*

if (true) {
    let message = 'Equal';
}
console.log(message); // will get ReferenceError because 'let' will maintain block scope.

*/

if (true) {
    var message = 'Equal';
}
console.log(message); // Equal (because 'var' will be hoisted)

// Block Scope Example 2
let message1 = 'Outside';
if (true) {
    let message1 = 'Override';
    console.log(message1); // Override
}
console.log(message1); // Outside

// IIFE's
console.log('> > > IIFE\'s < < <');
let app = (function() {
    let carId = 123;
    console.log(' called IIFE ');
    return {};
})();
console.log(app);

// Closures
console.log('> > > Closures < < <');
let application = (function() {
    let carId = 123;
    let getId = function() {
        return carId;
    };
    return {
        getId: getId
    };
})();
console.log(application.getId());

// The this Keyword
console.log('> > > The this Keyword < < <');
let o = {
    carId: 1230,
    getId: function() {
        console.log(this);
        return this.carId;
    }
};
console.log(o.getId());

// call and apply
console.log('> > > call and apply < < <');
let p = {
    carId: 123,
    getId: function() {
        return this.carId;
    }
};
let newCar = {
    carId: 456
};
console.log(p.getId.call(newCar));

// note: main difference between call and apply is we can pass arguments in apply

let q = {
    carId: 123,
    getId: function(prefix) {
        return prefix + this.carId;
    }
};
console.log(q.getId.apply(newCar, ['ID: '])); // ID: 456


// bind
console.log('> > > bind < < <');
let r = {
    carId: 123,
    getId: function() {
        return this.carId;
    }
};
let newFn = r.getId.bind(newCar);
console.log(newFn()); //456

// Arrow Function
console.log('> > > Arrow Function < < <');
let getId = (prefix, sufix) => {
    return prefix + 123 + sufix;
};
console.log( getId('ID: ', '!') );

// Default Parameters
console.log('> > > Default Parameters < < <');
let trackFlight = function(flightId, country= 'USA') {
    console.log('Tracking flight ' + flightId + ' in ' + country +'.');
};
trackFlight(123);
trackFlight(456, 'India');

// ============== FUNCTIONS AND SCOPE - END ==================
// ============== OBJECTS AND ARRAYS - START ==================

// Constructor Function
console.log('> > > Constructor Function < < <');
function van (id) {
    this.vanId = id;
    this.start = function() {
        console.log('start: ' + this.vanId);
    };
};
let vehicle1 = new van(789);
vehicle1.start();

// Prototypes
console.log('> > > Prototypes < < <');
function bus (id) {
    this.busId = id;
};
bus.prototype.start = function() {
    console.log('start: ' + this.busId);
};
let vehicle2 = new bus(234);
vehicle2.start();

// Expanding Objects Using Prototypes
console.log('> > > Expanding Objects Using Prototypes < < <');
String.prototype.hello = function() {
    return this.toString() + ' hello';
};
console.log('foo'.hello());

// JSON
console.log('> > > JSON < < <');
let jsonIn = 
`
    [
        {"carId": 123},
        {"carId": 124},
        {"carId": 125}
    ]
`;

let allCarIds = JSON.parse(jsonIn);
console.log(allCarIds);
console.log(JSON.stringify(allCarIds));


// Array Iteration

let cars = [
    {id: 123, style: 'sedan'},
    {id: 234, style: 'convertible'},
    {id: 345, style: 'sedan'}
];

cars.forEach((car) => {
    console.log(car);
});

cars.forEach((car, index) => {
    console.log(car, index);
});

let convertibleCars = cars.filter(car =>
    car.style === 'convertible'
);
console.log(convertibleCars);

let idsValid = cars.every(car => car.id > 0);
console.log(idsValid);

let findCar = cars.find(car => car.id > 150);
console.log(findCar);
// ============== OBJECTS AND ARRAYS - END ==================
// ============== CLASSES AND MODULES - START ==================

// Class Basics
console.log('> > > Class Basics < < <');
class Pen1 {

}

let pen1 = new Pen1();
console.log(pen1);

// Constructors and Properties
console.log('> > > Constructors and Properties < < <');
class Pen2 {
    constructor(id) {
        this.id = id;
    }
}
let pen2 = new Pen2(123);
console.log(pen2.id);

// Methods
console.log('> > > Methods < < <');
class Pen3 {
    constructor(id) {
        this.id = id;
    }
    identify() {
        return `Pen Id: ${this.id}`;
    }
}
let pen3 = new Pen3(234);
console.log(pen3.identify());

// Inheritance
console.log('> > > Inheritance < < <');
class Vehicle {
    constructor() {
        this.type = 'car';
    }
    start() {
        return `starting ${this.type}`;
    }
}

class Car extends Vehicle {
    // constructor() {
    //     super();
    // }
    // start() {
    //     return 'This is ' + super.start();
    // }
}

let car5 = new Car();
console.log(car5.start());

// Creating and Importing a module
console.log('> > > Creating and Importing a Moudule < < <');
import { Car6 } from './models/car.js';
let car6 = new Car6(789, 'mustang');
console.log(car6.start());

// ============== CLASSES AND MODULES - END ==================
// ============== Programing the BOM and DOM - START ===========

// BOM - Browser Object Model, DOM - Document Object Model

// The Window Object
console.log('> > > The Window Object < < <');
//PROPERIES - document, location, console, innerHeight, innerWidth, pageXOffset, pageYOffset.
//METHODS - alert(), back(), confirm()
//EVENTS - (not common)
console.log(window);

// Timers
console.log('> > > Timers < < <');

let timeoutId = setTimeout(function() {
    console.log('2 second passed...');
},2000);
//if need to cancel
clearTimeout(timeoutId);

let intervalId = setInterval(function(){
    console.log('called every 1 second');
}, 1000);
//if need to cancel
clearInterval(intervalId);

// The location Object
console.log('> > > The location Object < < <');
//PROPERTIES - href, hostname, port, pathname, search
//METHODS - assign(), reload()
//EVENTS - (not common)
console.log(location.href, location.hostname,location.port, location.pathname, location.search);

// The document Object
console.log('> > > The document Object < < <');
//PROPERTIES - body, forms, links
//METHODS - cerateElement(), createEvent(), getElementById(), getElementsByClassName()
//EVENTS - onload, onclick, onkeypressed
let el1 = document.getElementById('first');
console.log(el1);
let els1 = document.getElementsByClassName('p1');
console.log(els1);
let els2 = document.getElementsByTagName('p');
console.log(els2);
els1[1].textContent = 'New text content..';
els1[1].setAttribute('name', 'nameValue');
el1.classList.add('myClassName');
el1.style.color = 'orange';
// ============== Programing the BOM and DOM - END ===========
// ============== PROMISES AND ERROR HANDLING - START ===========
// Errors Handling Using try and catch
console.log('> > > Errors Handling Using try and catch < < <');
try {
    let car7 = newCar7;
} 
catch(error) {
    console.log('error: ', error);
}
console.log('after try catch');

// finally
console.log('> > > finally < < <');
try {
    let car8 = newCar8;
}
catch(error){
    console.log('catch block will executes when try block has error: ', error);
}
finally {
    console.log('finally block always executes..');
}

// Developer Defined Errors
console.log('> > > Developer Defined Errors < < <');
try {
    // some code here..
    throw new Error('my custom error...');
}
catch(error){
    console.log('catch block will executes when try block has error: ', error);
}
finally {
    console.log('finally block always executes..');
}

// Promise
console.log('> > > Promise < < <');
let promise = new Promise(
    function(resolve, reject) {
        setTimeout(resolve, 100, 'someValue');
    }
);
console.log(promise);
promise.then(
    value => console.log('fulfilled: ', value, promise),
    error => console.log('rejected: ', error, promise)
);

// ============== PROMISES AND ERROR HANDLING - END ===========
// ============== Data Access Using HTTP - START ==============

// HTTP Request Using XHR (XML HTTP Request)
console.log('> > > HTTP Request Using XHR < < <');
let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
        console.log('xhttp Response using XHR', JSON.parse(this.responseText));
    }
};
xhttp.open('GET', 'https://5e9906c75eabe7001681c661.mockapi.io/api/v1/users', true);
xhttp.send();

// HTTP Request Using jQuery
console.log('> > > HTTP Request Using jQuery < < <');

import $ from 'jquery';
let promise1 = $.get('https://5e9906c75eabe7001681c661.mockapi.io/api/v1/users');

promise1.then(
    data => console.log('success using jQuery: ', data),
    error => console.log('error using jQuery: ', error)
);

// HTTP POST Using jQuery
console.log('> > > HTTP POST Using Jquery < < <');
let user = {
    name: "Chandru Parkunan",
    avatar: "128.jpg",
    email: "chandru@mail.com",
    imageUrl: "https://unsplash.it/50?image=1"
};
let promise2 = $.post('https://5e9906c75eabe7001681c661.mockapi.io/api/v1/users', user);
promise2.then(
    data => console.log('POST success: ', data),
    error => console.log('POst Error: ', error)
);
// ============== Data Access Using HTTP - END ==============
