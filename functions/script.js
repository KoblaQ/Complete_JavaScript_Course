'use strict';

/*
//////////
// DEFAULT PARAMETERS
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES5 OLD SCHOOL VIBES
  //   numPassengers = numPassengers || 1;
  //   price = price || 199;
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);

// Skipping a parameter can be done with the undefined keyword.
createBooking('LH123', undefined, 1000);
*/

/*
///////////
// How passing arguments works: Value vs reference
const flight = 'LH234';
const edem = {
  name: 'Edem Quashigah',
  passport: 2341414342,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 2341414342) {
    alert('Checked In');
  } else {
    alert('Wrong passport');
  }
};

// checkIn(flight, edem);
// console.log(flight);
// console.log(edem);

// Is the same as doing...
// const flightNum = flight;
// const passenger = edem;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000000000);
};

newPassport(edem);
checkIn(flight, edem);
*/

/*
/////////////////////
// Functions Accepting CallBack functions

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-Order Functions
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);

transformer('JavaScript is the best!', oneWord);

// JS uses callback all the time
const high5 = function () {
  console.log('✋');
};

document.body.addEventListener('click', high5);

['Edem', 'Martha', 'Adam'].forEach(high5);
*/

/*
/////////////////
// FUNCTIONS RETURNING FUNCTIONS.

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};
const greeterHey = greet('Hey');
greeterHey('Edem');
greeterHey('Kobla');

greet('Hello')('Edem ');

// Challenge (replicate the above function in an arrow function format)
const greetArrow = greeting => name => console.log(`${greeting} ${name}`);

greetArrow('Hi')('Edem');
*/

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book: function() {},
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Edem Quashigah');
lufthansa.book(656, 'Kobla Q');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// DOES NOT WORK
// book(23, 'Sarah Williams');

// CALL METHOD
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 'Mary Cooper');
console.log(swiss);

// Apply Method (Does the same as call except it uses an array instead) - It's old fashioned tho.
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

// New way of doing it
book.call(swiss, ...flightData);
