// create Letter constructor
var Letter = function(letter) {
	this.letter = letter;
	this.guessed = false;
}

Letter.prototype.toString = function() {
	if(this.guessed) {
		return this.letter;
	}
	else {
		return "_";
	}
}

var hello = [
	new Letter('h'),
	new Letter('e'),
	new Letter('l'),
	new Letter('l'),
	new Letter('o')
];
var letterH = new Letter('h');

console.log(letterH.toString());

letterH.guessed = true;

console.log(letterH.toString());


// define a string value to store the underlying character for the letter

// boolean value that stores whether that letter has been guessed yet

// function that returns the underlying character if the letter has been guessed, 
// or a placeholder if the letter has not been guessed.

// A function that takes a character as an argument and checks it against the underlying character, 
// updating the stored boolean value to true if it was guessed correctly.


