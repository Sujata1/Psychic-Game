// Create and Initialize variables
var letterChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var userWin = 0;
var userLost = 0;
var guessCounter = 9;
var userGuessList = [];
var computerGuess = letterChoices[Math.floor(Math.random() * letterChoices.length)];

// this function gets computer guess
var computerGuessLetter = function () {
    this.computerGuess = letterChoices[Math.floor(Math.random() * letterChoices.length)];
    console.log("in computerguessletter :" + computerGuess);
};

// this function displays user guess list
var displayGuesse = function () {
    document.querySelector("#user_guesses").textContent = userGuessList;
};

// this function displays number of guesses remaining
var displayCouters = function () {
    document.querySelector("#guesses_left").textContent = guessCounter;
};

// this function resets varaibles beore starting new game
var resetVars = function () {
    guessCounter = 9;
    userGuessList = [];
    computerGuess = "";
    computerGuessLetter();
    displayGuesse();
    displayCouters();
};

// start Game //
computerGuessLetter();
displayCouters();

// This function is run whenever the user presses a key.
document.onkeyup = function (event) {
    guessCounter -= 1;
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    userGuessList.push(userGuess);
    displayGuesse();
    displayCouters();


    //Check userGuess and computerGuess, If user wins, then restart game
    //else if uguessCounter === 0 then user lost
    if (guessCounter < 9 && guessCounter > 0) {

        if (userGuess === computerGuess) {
            userWin += 1;
            document.querySelector("#user_win").textContent = userWin;
            resetVars();
        }
    }

    if (guessCounter === 0) {
        userLost += 1;
        document.querySelector("#user_loss").textContent = userLost;
        resetVars();
    }

};