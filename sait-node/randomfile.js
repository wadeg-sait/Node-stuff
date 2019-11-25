// instantiate-import select-random-file
const randomFile = require('select-random-file');
// instantiate-import random-greetings
var rg = require('random-greetings');

// set this to empty, found it would keep the same file for subsequent runs
// setting it to empty fixed that
file ="";

// use current directory
const dir = '.'

// find the random file and print it to the console
randomFile(dir, (err, file) => {
    console.log(`The random file is: ${file}.`);
});

// Return random greeting
console.log("random greeting: " + rg.greet());