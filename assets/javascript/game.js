var $ = function (id) {
    return document.getElementById(id);
}

// Answers
var game = ["TUPAC", "DRDRE", "SNOOPDOGG", "EMINEM", "ICECUBE", "NAS", "NATEDOGG"];
var choice = Math.floor(Math.random()*7);
var answer = game[choice];
var myLength = answer.length;
var display = [myLength];
var win = myLength;
var letters = answer.split('');
var attemptsLeft = 10;
var output = "";
var userLetter = "";

function onsubmit(event) {
    return false;
  }

function startGame() {
    for (i = 0; i < answer.length; i++) {
        display[i] = "_ ";
        output = output + display[i];
    }
    document.getElementById("answer").innerHTML = output;
    output = "";
    document.getElementById("guesses-left").innerHTML = attemptsLeft;
};

console.log(game[choice]);

document.onkeyup = function(event) {
    output = "";
    userLetter = event.key;
    console.log(userLetter);
    document.getElementById("letters-used").append(userLetter.toUpperCase());

    for (var c = 0; c < answer.length; c++) {
        console.log(letters[c]);
        if (userLetter.toUpperCase() == letters[c]) {
            display[c] = userLetter.toUpperCase();
            win--;
        }
        output = output + display[c] + " ";

    }
    document.getElementById("answer").innerHTML = output;
    output="";
    attemptsLeft--;
    document.getElementById("guesses-left").innerHTML = attemptsLeft;

    if (win < 1) {
        document.getElementById("outcome").innerHTML = "YOU WIN!!!!!";
        attemptsLeft = 10;
        document.getElementById("letters-used").innerHTML = " ";
    }
    else if (attemptsLeft < 1) {
        document.getElementById("outcome").innerHTML = "YOU LOSE!!!!";
        attemptsLeft = 10;
        document.getElementById("letters-used").innerHTML = " ";
    }
};

onsubmit();
    
