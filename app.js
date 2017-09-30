'use strict';

// string to sumamry order
var finalOrderString = '';

// logic for all the prompts/alerts
var coffee = prompt('Hi, welcome to Ovi\'s Covfefe Shop.\r\nWhat kind of coffee would you like?');
console.log('The user wants a ' + coffee);

var cupSize = prompt('What size cup would you like?');
var cupSizeString = 'So you want a ';
console.log('The user wants a ' + cupSize + ' ' + coffee + '.');

// first Yes/No prompt, asking the user if they want to biggie-size their order
var getBiggerCupSize = prompt('Would you like to get an extra-large cup for just an extra 49 cents? (Y/N)');
if (getBiggerCupSize.toLowerCase() === 'y' || getBiggerCupSize.toLowerCase() === 'yes') {
  console.log('The user did elect to get a bigger size cup of coffee.');
  cupSizeString = 'So you want an ';
  cupSize = 'extra-large';
} else {
  console.log('The user did not want a bigger size of coffee.');
}

// second Yes/No prompt, asking the user if they want an extra shot of espresso
var addEspresso = prompt('Would you like an extra shot of espresso? (Y/N)');
if (addEspresso.toLowerCase() === 'y' || addEspresso.toLowerCase() === 'yes') {
  console.log('The user does want an extra show of espresso');
  finalOrderString = ' with an extra shot of espresso';
} else {
  console.log('The user does NOT want an extra show of espresso. womp womp');
}

// third Yes/No prompt, asking the user if they want suger
var addSugar = prompt('Would you like sugar? (Y/N)');
if (addSugar.toLowerCase() === 'y' || addSugar.toLowerCase() === 'yes') {
  console.log('The user wants some sugar');
  finalOrderString = finalOrderString + ' with some sugar';
} else {
  console.log('The user does not want some sugar');
}

// fourth Yes/No prompt, asking the user if they want to add ghost chili peppers to their coffee :)
var ghostPepper = prompt('Would you like to add a dash of Ghost Pepper to your coffee? (Y/N)');
if (ghostPepper.toLowerCase() === 'y' || ghostPepper.toLowerCase() === 'yes') {
  console.log('The user wants some ghost pepper in their drink!');
  finalOrderString = finalOrderString + ' with some ghost pepper spice';
} else {
  console.log('Phew, the user was smart not get the hottttt ghost pepper spice in their drink.');
}

// fifth Yes/No prompt, asking the user if they would like a pastry
var getPastry = prompt('Would you like a pastry or cookie? (Y/N)');
if (getPastry.toLowerCase() === 'y' || getPastry.toLowerCase() === 'yes') {
  console.log('The user wants a pastry/cookie as well.');
  finalOrderString = finalOrderString + ' and with a pastry';
} else {
  console.log('The user has elected to just get the coffee.');
}

// final alert prompt
var finalOrderAlert = alert(cupSizeString + cupSize + ' ' + coffee + finalOrderString + '.');
