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
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};
const greeterHey = greet('Hey');
greeterHey('Edem');
greeterHey('Kobla');

greet('Hello')('Edem ');

// Challenge
const greetArrow = greeting => name => console.log(`${greeting} ${name}`);

greetArrow('Hi')('Edem');
