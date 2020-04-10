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
