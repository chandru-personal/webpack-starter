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

//controlling loops
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