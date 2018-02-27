var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",  "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    
var wins = 0;
var losses = 0;
var guesses = 10;
var lettersGuessed = []; 

function cg() {
    var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
}

var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];


document.onkeyup = function(event) {
    var userGuess = event.key;
    if (userGuess === computerGuess) {
    cg();
    lettersGuessed = [];
    wins++;
    guesses = 10;
}

    else if (guesses > 1){
        if ( -1 === lettersGuessed.indexOf(userGuess))
        guesses--;
        lettersGuessed.push(String.fromCharCode(event.keyCode));
    }
    
    else if (guesses === 1){
        losses++;
        guesses = 10;
        lettersGuessed = [];
        cg();
    }

    var html =
        "<h1>The Psychic Game</h1>" +
        "<p>Guess what letter I'm thinking of...</p>" +
        "<p>Wins: " + wins + "</p>" +
        "<p>Losses: " + losses + "</p>" +
        "<p>Guesses Left: " + guesses + "</p>" +
        "<p>Your Guesses so far: " + lettersGuessed + "</p>";
    
    document.getElementById("game").innerHTML = html;
    }