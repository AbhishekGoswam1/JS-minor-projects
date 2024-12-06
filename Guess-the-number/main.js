//first generate a random number between 1 and 20, and that number should not be 0.
let randomNumber = parseInt(Math.random() * 20 + 1);
// console.log(randomNumber);

const submitButton = document.querySelector("#submit");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startMessage = document.querySelector(".resultPara");

const span = document.createElement('span');


let previousGuesses = []; //store the previous guesses
let numGuesses = 1;      //number of guesses

let playGame = true;

if(playGame){
    submitButton.addEventListener('click', function(e){
        e.preventDefault();
        const userGuess = parseInt(userInput.value);
        validateGuess(userGuess);
    })
}

function validateGuess(userGuess) { //validate the guess
    if (isNaN(userGuess)) {
        alert("Please enter a valid number");
    } else if (userGuess < 1 || userGuess > 20) {
        alert("Please enter a number between 1 and 20");
    } else {
        previousGuesses.push(userGuess); //store the previous guesses in an array
        if (numGuesses >= 5) {
            displayResult(userGuess);
            displayMessage(`Game Over! The number was ${randomNumber}`);
            endGame();
        } else {
            displayResult(userGuess);
            checkGuess(userGuess);
        }
    }
}

function checkGuess(userGuess){
    if(userGuess === randomNumber){
        displayMessage(`Congratulations! You guessed the number in ${numGuesses} guesses!`);
        endGame();
    } else if(userGuess < randomNumber){
        displayMessage("Too low! Try again!");
    } else {
        displayMessage("Too high! Try again!");
    }
}


//function to display the result of the guess
function displayResult(userGuess) {
    userInput.value = "";
    guessSlot.innerHTML += `${userGuess}  `;
    numGuesses++;
    remaining.innerHTML = `${6 - numGuesses}`;
}


//function to display the previous guesses
function displayMessage(message) {
    lowOrHi.innerHTML = `<h5>${message}</h5>`;
}


//function to end the game
function endGame(){
    userInput.value = "";
    userInput.setAttribute('disabled', ''); //disable the input field
    span.classList.add('button');
    span.innerHTML = `<h5 id="newGame">New game</h5>`;
    startMessage.appendChild(span);
    playGame = false;
    newGame();
}


//function to start new game
function newGame(){
   const newGameButton = document.querySelector('#newGame');
   newGameButton.style.cursor = 'pointer';
   newGameButton.style.backgroundColor = '#3947a3';
   newGameButton.style.padding = '0.5rem 1rem';
   newGameButton.style.borderRadius = '5px';

   newGameButton.addEventListener('click', function() {
        randomNumber = parseInt(Math.random() * 20 + 1);
        previousGuesses = [];
        numGuesses = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${6 - numGuesses}`;
        userInput.removeAttribute('disabled');
        startMessage.removeChild(span);
        lowOrHi.innerHTML = '';

        playGame = true;
   })
}