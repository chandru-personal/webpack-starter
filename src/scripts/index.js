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

// Relarional Operators <, >, >=, <=
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
