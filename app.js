'use strict';

// my variables
var userPoints = 0;
var alertPrefixString = '';

// the intro alert asking the user to play my game
var introAlert = alert('Hi! Welcome to my guessing game. Press \'ok\' to start.');
var howToAlert = alert('To play the game please answer with Yes/No, and you\'ll receive points as you get them right.');
console.log('The user started to play the game.');

// the 1st prompt asks the user if they know where i was born
var born = prompt('Was i born in Romania? (Y/N)');
if (born.toLowerCase() === 'y' || born.toLowerCase() === 'yes') {
  userPoints += 1;
  alertPrefixString = 'Correct! ';
  console.log('The user answered question 1 correctly');
} else {
  alertPrefixString = 'Bummer! ';
  console.log('The user answered question 1 incorrectly');
}
var bornAlert = alert(alertPrefixString + 'I was born in Romania. You now have ' + userPoints + ' points.');

// the 2nd question asks the user if i like coffee
var coffee = prompt('Do i enjoy coffee? (Y/N)').toLowerCase(); // i wanted to add the toLowerCase() function at the end of the prompt to show another way of doing the same thing
if (coffee === 'n' || coffee === 'no') {
  userPoints += 1;
  alertPrefixString = 'Correct! ';
  console.log('The user answered question 2 correctly');
} else {
  alertPrefixString = 'Bummer! ';
  console.log('The user answered question 2 incorrectly');
}
var coffeeAlert = alert(alertPrefixString + 'Although i live in Seattle i\'m not a huge coffee drinker. But i do enjoy a nice blended drink. \r\nYou now have ' + userPoints + ' points.');

// the 3rd question asks the user if i drive a red car
var carColor = prompt('Do I drive a red car? (Y/N)');
if (carColor.toLowerCase() === 'yes' || carColor.toLowerCase() === 'y') {
  userPoints += 1;
  alertPrefixString = 'Correct! ';
  console.log('The user answered question 3 correctly');
} else {
  alertPrefixString = 'Bummer! ';
  console.log('The user answered question 3 incorrectly');
}
var carColorAlert = alert(alertPrefixString + 'I love my red car :) \r\nYou now have ' + userPoints + ' points.');

// the 4th question asks the user if i went to school in Pennsylvania
var school = prompt('Did I go to school in Pennsylvania? (Y/N)');
if (school.toLowerCase() === 'yes' || school.toLowerCase() === 'y') {
  userPoints += 1;
  alertPrefixString = 'Correct! ';
  console.log('The user answered question 4 correctly');
} else {
  alertPrefixString = 'Bummer! ';
  console.log('The user answered question 4 incorrectly');
}
var schoolAlert = alert(alertPrefixString + 'I grew up in Pennsylvania, i did almost all of my schooling there including my college degree. \r\nYou now have ' + userPoints + ' points.');

// the 5th question asks the user if i'm an iOS developer
var isiOSDev = prompt('Ok, last question. I mentioned on our first day of class that i am an iOS developer. Is that true? (Y/N)');
if (isiOSDev.toLowerCase() === 'yes' || isiOSDev.toLowerCase() === 'y') {
  userPoints += 1;
  alertPrefixString = 'Correct! ';
  console.log('The user answered question 5 correctly');
} else {
  alertPrefixString = 'Bummer! ';
  console.log('The user answered question 5 incorrectly');
}
var iOSDevAlert = alert(alertPrefixString + 'I have a B.S. degree and self-taught myself Objective-C and Swift development after gradating. \r\nYou now have ' + userPoints + ' points.');

// final alert
if (userPoints == 5) {
  var finalAlert = alert('Congratulations! You got all of the answers right!');
} else {
  var finalAlert = alert('Great Try! You didn\'t get all the answers right, so let\'s try to get them right next time :)');
}
